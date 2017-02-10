import {Component, Chain, Mapper, Accumulator, Hub, Filter} from 'graflow'

const setComponent = (vdom, component) => {
  if(Array.isArray(vdom)) {
    vdom.map(e => setComponent(e, component))
  } else {
    if(typeof vdom === 'object' && !vdom.component) vdom.component = component
    if(vdom.content) setComponent(vdom.content, component)
  }
  return vdom
}

const View = (view, component) => Component({
  inputs: ['vdom', 'state'],
  components: {
    vdomAccumulator: Accumulator(),
    hub: Hub('vdom', 'state'),
    globalAccumulator: Accumulator(),
    view: Mapper(({state = {}, vdom = {}}) => view(state, vdom)),
    filter: Filter(v => v !== undefined),
    post: Mapper(vdom => setComponent(vdom, component))
  },
  connections: [
    ['in.vdom', 'vdomAccumulator'],
    ['vdomAccumulator', 'hub.vdom'],
    ['in.state', 'hub.state'],
    ['hub', 'globalAccumulator'],
    ['globalAccumulator', 'view'],
    ['view', 'filter'], ['filter', 'post'],
    ['post', 'out']
  ]
})

export default View
