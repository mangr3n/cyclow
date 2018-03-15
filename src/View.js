import {Message, isMessage} from './Message'
import {Component, Chain, Mapper,
  Accumulator, Hub, Filter, Demuxer, SortedDemuxer} from 'graflow'
import {isDefined} from './utils'

const setComponent = (vdom, component) => {
  if(Array.isArray(vdom)) {
    vdom.filter(isDefined).map(e => setComponent(e, component))
  } else {
    if(typeof vdom === 'object' && !vdom.component) vdom.component = component
    if(vdom.content) setComponent(vdom.content, component)
  }
  return vdom
}

const setRoot = vdom => ({...vdom, root: true})

const ViewComponent = (view, component) => Component({
  name: 'ViewComponent',
  inputs: ['vdom', 'state'],
  components: {
    demuxer: SortedDemuxer('vdom', 'state'),
    vdomAccumulator: Accumulator(),
    hub: Hub('vdom', 'state'),
    globalAccumulator: Accumulator(),
    view: Mapper(({state = {}, vdom = {}}) => view(state, vdom)),
    filter: Filter(isDefined),
    post: Mapper(vdom => setRoot(setComponent(vdom, component)))
  },
  connections: [
    ['in', 'demuxer'],
    ['demuxer.vdom', 'vdomAccumulator'],
    ['demuxer.state', 'hub.state'],
    ['in.vdom', 'vdomAccumulator'],
    ['vdomAccumulator', 'hub.vdom'],
    ['in.state', 'hub.state'],
    ['hub', 'globalAccumulator'],
    ['globalAccumulator', 'view'],
    ['view', 'filter'],
    ['filter', 'post'],
    ['post', 'out']
  ],
  // debug: ['in','out']
})

const View = (view, component) => Chain(
  Filter(v => isMessage(v) && v.blocks.includes('view')),
  Mapper(m => m.values),
  ViewComponent(view, component),
  Mapper(v => Message('out', 'vdom', v))
)

export default View
