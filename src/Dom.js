import {Message, isMessage} from './Message'
import {Component, Filter, Mapper, Memorizer, Chain,
  SortedDemuxer, ArraySerializer} from 'graflow'
import {mapObject} from './utils'

const DomComponent = () => Component({
  inputs: ['event', 'node', 'action'],
  components: {
    demuxer: SortedDemuxer('node', 'action', 'event'),
    memory: Memorizer(),
    action: Component(({value: action, memory: node}, next) => action(node))
  },
  connections: [
    ['in', 'demuxer'],
    ['demuxer.event', 'out'],
    ['demuxer.node', 'memory.memory'],
    ['demuxer.action', 'memory.value'],
    ['in.event', 'out'],
    ['in.node', 'memory.memory'],
    ['in.action', 'memory.value'],
    ['memory', 'action']
  ]
})

const Dom = () => Chain(
  Filter(v => isMessage(v) && v.blocks.includes('dom')),
  Mapper(m => m.values),
  DomComponent(),
  Mapper(v => Message('events', 'event', v))
)

export default Dom
