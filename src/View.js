import {Component, Chain, Mapper} from 'graflow'

const setComponent = (vdom, component) => {
  if(!vdom.component) vdom.component = component
  if(Array.isArray(vdom.content)) {
    vdom.content.map(e => setComponent(e, component))
  }
  return vdom
}

const View = (view, component) => Chain(
  Mapper(view),
  Mapper(vdom => setComponent(vdom, component))
)

export default View
