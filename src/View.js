import {Component, Chain, Mapper, Accumulator, Hub} from 'graflow'

const setComponent = (vdom, component) => {
  if(typeof vdom === 'object' && !vdom.component) vdom.component = component
  if(Array.isArray(vdom.content)) {
    vdom.content.map(e => setComponent(e, component))
  }
  return vdom
}

const View = (view, component) => Component({
  inputs: ['vdom', 'state'],
  components: {
    vdomAccumulator: Accumulator(),
    hub: Hub('vdom', 'state'),
    globalAccumulator: Accumulator(),
    view: Mapper(({state, vdom}) => view(state, vdom)),
    post: Mapper(vdom => setComponent(vdom, component))
  },
  connections: [
    ['in.vdom', 'vdomAccumulator'],
    ['vdomAccumulator', 'hub.vdom'],
    ['in.state', 'hub.state'],
    ['hub', 'globalAccumulator'],
    ['globalAccumulator', 'view'],
    ['view', 'post'],
    ['post', 'out']
  ]
})

export default View
