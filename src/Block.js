import Dom from './Dom'
import State from './State'
import Events from './Events'
import View from './View'
import BlockComponents from './BlockComponents'
import {Component, Mapper, Demuxer, Chain} from 'graflow'

const toObject = kvs => kvs.reduce((obj, [k, v]) => {
  obj[k] = v
  return obj
}, {})

const flatMap = v => [].concat.apply([], v)

const Block = options => {
  const eventInputs = options.inputs || []
  const inputs = eventInputs.concat('init')

  const eventOutputs = options.outputs || []
  const outputs = eventOutputs.concat('vdom')

  const {state: postState, ...handlers} = options.on || {}

  const state = State({post: postState})
  const dom = Dom()
  const events = Events(handlers)
  const view = View(options.view, events)
  const mapInputs = inputs.map(i => [`map${i}`, Mapper(v => [i, v])])

  const comps = BlockComponents(options.components || {})

  const outputDemuxer = Demuxer(...eventOutputs)

  const components = {state, dom, events, view, comps, outputDemuxer,
    ...toObject(mapInputs)}

  const inputConnections = flatMap(inputs.map(input => [
    [`in.${input}`, `map${input}`], [`map${input}`, 'events']
  ]))

  const outputConnections = eventOutputs.map(output =>
    [`outputDemuxer.${output}`, `out.${output}`]
  )

  const connections = inputConnections
    .concat(outputConnections)
    .concat([
      ['events.state', 'state'],
      ['events.components', 'comps'],
      ['events.outputs', 'outputDemuxer'],
      ['comps.events', 'events'],
      ['comps.vdom', 'view.vdom'],
      ['state.state', 'view.state'],
      ['state.outputs', 'outputDemuxer'],
      ['state.components', 'comps'],
      ['view', 'out.vdom']
    ])

  return Component({inputs, outputs, components, connections})
}

export default Block
