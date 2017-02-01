import Dom from './Dom'
import State from './State'
import Events from './Events'
import View from './View'
import { Component, Mapper } from 'graflow'

const toObject = kvs => kvs.reduce((obj, [k, v]) => {
  obj[k] = v
  return obj
}, {})
const flatMap = v => [].concat.apply([], v)

const Block = options => {
  const eventInputs = options.inputs  || []
  const inputs = eventInputs.concat('init')

  const eventOutputs = options.outputs || []
  const outputs = eventOutputs.concat('dom')

  const state   = State()
  const dom     = Dom()
  const events  = Events(options.events, eventOutputs)
  const view    = View(options.view, events)
  const mapInputs = inputs.map(i => [`map${i}`, Mapper(v => [i, v])])

  const components = {state, dom, events, view, ...toObject(mapInputs)}

  const inputConnections = flatMap(inputs.map(input => [
    [`in.${input}`, `map${input}`], [`map${input}`, 'events']
  ]))

  const outputConnections = eventOutputs.map(output =>
    [`events.${output}`, `out.${output}`]
  )

  const connections = inputConnections
    .concat(outputConnections)
    .concat([
      ['events.state', 'state'],
      ['state', 'view'],
      ['view', 'out.dom']
    ])

  return Component({inputs, outputs, components, connections})
}

export default Block
