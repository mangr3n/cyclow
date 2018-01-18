import {
  Message,
  isMessage,
  isMessageForBlock,
  toMessage,
  getHandler
} from './Message'
import {
  isFunction,
  isString,
  isObject,
  isDefined,
  flatten
} from './utils'
import {
  Chain,
  Component,
  SortedDemuxer,
  Mapper,
  Filter,
  Memorizer,
  ArraySerializer,
  Logger
} from 'graflow'

const EventState = () => Component({
  inputs: ['state', 'event'],
  components: {
    memory: Memorizer(),
    serializer: ArraySerializer(),
    demuxer: SortedDemuxer('state', 'event')
  },
  connections: [
    ['in', 'demuxer'],
    ['demuxer.state', 'memory.memory'],
    ['demuxer.event', 'serializer'],
    ['in.event', 'serializer'],
    ['serializer', 'memory.value'],
    ['in.state', 'memory.memory'],
    ['memory', 'out']
  ]
})

// Too Smart?  Not obvious interpretation of the event handlers
const messageConverter = arg => {
  if (isString(arg)) return Message(arg)
  if (isFunction(arg)) return Message('state', arg)
  if (isObject(arg)) {
    return Object.entries(arg).map(([name, value]) => Message(name, value))
  }
  return Message('state', () => arg)
}

const EventHandler = handlers => Chain(
  Mapper(({
    value: [comp, port, value],
    memory
  }) => [
    getHandler(handlers, comp, port),
    value,
    memory
  ]),
  Filter(([handler]) => isDefined(handler)),
  Mapper(([handler, value, state]) => handler(value, state)),
  Filter(isDefined),
  ArraySerializer()
)

const isMessageForEventsBlock = v => {
  return isMessage(v) && v.blocks.includes('events')
};
const valuesFromMessage = m => m.values;

const Events = handlers => Chain(
  Filter(isMessageForBlock('events')),
  Mapper(valuesFromMessage),
  EventState(), // Add in States with Events
  EventHandler(handlers),
  Mapper(v => toMessage(v, messageConverter))
)

export default Events
