import Dom from './Dom'
import State from './State'
import Events from './Events'
import View from './View'
import BlockComponents from './BlockComponents'
import { Component, Mapper, Chain, Demuxer } from 'graflow'

const toObject = kvs => kvs.reduce((obj, [k, v]) => {
  obj[k] = v
  return obj
}, {})

const OutputFilter = filters => Component({
  outputs: Object.keys(filters),
  components: Object.entries(filters).reduce((acc, [name, filter]) => {
    acc[name] = Mapper(filter)
    return acc
  },{}),
  connections: Object.keys(filters).map(v => ['in', v])
})

const flatMap = v => [].concat.apply([], v)

const Block = options => {
  const eventInputs = Object.keys(options.events || {})
      .map(k => k.split('.', 2))
      .filter(([prefix, signal]) => prefix === 'in')
      .map(([prefix, signal]) => signal)
  const inputs = eventInputs.concat('init')

  const eventOutputs = Object.keys(options.out || {})
  const outputs = eventOutputs.concat('vdom')

  const state   = State()
  const dom     = Dom()
  const events  = Events(options.events)
  const view    = View(options.view, events)
  const mapInputs = inputs.map(i => [`map${i}`, Mapper(v => [i, v])])

  const comps = BlockComponents(options.components || {})

  const outputFilter = Chain(
    Mapper(state => Object.entries(options.out || {})
      .reduce((acc, [name, map]) => {
        acc[name] = map(state)
        return acc
      }, {})
    ),
    Demuxer(...eventOutputs)
  )

  const components = {state, dom, events, view, comps, outputFilter,
    ...toObject(mapInputs)}

  const inputConnections = flatMap(inputs.map(input => [
    [`in.${input}`, `map${input}`], [`map${input}`, 'events']
  ]))

  const outputConnections = eventOutputs.map(output =>
    [`outputFilter.${output}`, `out.${output}`]
  )

  const connections = inputConnections
    .concat(outputConnections)
    .concat([
      ['events.state', 'state'],
      ['events.components', 'comps'],
      ['comps.events', 'events'],
      ['comps.vdom', 'view.vdom'],
      ['state', 'view.state'],
      ['state', 'outputFilter'],
      ['view', 'out.vdom']
    ])

  return Component({inputs, outputs, components, connections})
}

export default Block
