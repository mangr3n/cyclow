import State from './State'
import Events from './Events'
import View from './View'
import BlockComponents from './BlockComponents'
import {Component, Mapper, Demuxer, Chain, Hub, Filter} from 'graflow'
import {flatMap} from './utils'

const Memory = () => {
  let memory
  return Component({
    inputs: ['set', 'get'],
    components: {
      set: Component(v => memory = v),
      get: Mapper(v => [v, memory])
    },
    connections: [
      ['in.set', 'set'],
      ['in.get', 'get'],
      ['get', 'out']
    ]
  })
}

const toObject = kvs => kvs.reduce((obj, [k, v]) => {
  obj[k] = v
  return obj
}, {})

const Block = options => {
  const eventInputs = options.inputs || []
  const inputs = eventInputs.concat('init')

  const eventOutputs = options.outputs || []
  const outputs = eventOutputs.concat('vdom')

  const {state: postState, ...handlers} = options.on || {}

  const event = Mapper(msg => [].concat(msg))

  const eventState = Component({
    inputs: ['state', 'event'],
    components: {state: Memory()},
    connections: [
      ['in.state', 'state.set'],
      ['in.event', 'state.get'],
      ['state', 'out']
    ]
  })

  const state = State({post: postState})
  const events = Events(handlers)
  const view = View(options.view, event)
  const mapInputs = inputs.map(i => [`map${i}`, Mapper(v => [i, v])])

  const comps = BlockComponents(options.components || {})

  const outputDemuxer = Demuxer(...eventOutputs)

  const components = {state, events, view, comps,
    outputDemuxer, eventState, event, ...toObject(mapInputs)
  }

  const inputConnections = flatMap(inputs.map(input => [
    [`in.${input}`, `map${input}`],
    [`map${input}`, 'event']
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
      ['event', 'eventState.event'],
      ['comps.events', 'eventState.event'],
      ['state.state', 'eventState.state'],
      ['eventState', 'events'],
      ['comps.vdom', 'view.vdom'],
      ['state.state', 'view.state'],
      ['state.outputs', 'outputDemuxer'],
      ['state.components', 'comps'],
      ['view', 'out.vdom']
    ])

  return Component({inputs, outputs, components, connections})
}

export default Block
