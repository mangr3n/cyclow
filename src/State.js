import {Chain, Mapper, Filter} from 'graflow'
import {toMessage, Message, isMessage} from './Message'
import {isString, isObject} from './utils'

const messageConverter = arg => {
  if(isString(arg)) return Message(arg)
  if(isObject(arg)) {
    return Object.entries(arg).map(([name, value]) => Message(name, value))
  }
}

const StateComponent = initial => {
  let state = initial

  return Mapper(transformate => {
    state = transformate(state)
    return state
  })
}

const Outputs = handler => Mapper(state =>
  toMessage({
    'events.state': state,
    'view.state': state,
    ...handler(state)
  }, messageConverter)
)

const State = (handler = () => ({}), initial = {}) => Chain(
  Filter(v => isMessage(v) && v.blocks.includes('state')),
  Mapper(m => m.values.default),
  StateComponent(initial),
  Outputs(handler)
)

export default State
