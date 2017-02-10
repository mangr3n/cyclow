import Component from 'graflow'
import {flatMap} from './utils'

import snabbdom from 'snabbdom'
import eventlisteners from 'snabbdom/modules/eventlisteners'
import props from 'snabbdom/modules/props'
import h from 'snabbdom/h'

const getHandlers = (handlers, component) => Object.entries(handlers)
  .reduce((acc, [event, handler]) => {
    const next = component ? component.in.default.send : () => {}
    acc[event] = e => typeof handler === 'function'
      ? handler(e, next)
      : next(handler)
    return acc
}, {})

const toSnabbdom = vdom => {
  if(typeof vdom === 'string') return vdom
  if(Array.isArray(vdom)) {
    return flatMap(vdom).map(toSnabbdom)
  }

  const {tag = 'div', attrs = {}, on = {}, content = [], component} = vdom
  const handlers = getHandlers(on, component)

  return h(tag, {props: attrs, on: handlers}, toSnabbdom(content))
}

const SnabbdomRenderer = (targetId) => {
  const patch = snabbdom.init([eventlisteners, props])

  const target = targetId ? document.getElementById(targetId) : document.body
  let lastVdom = target

  return Component(vdom => {
    const snabbdomVdom = toSnabbdom(vdom)
    patch(lastVdom, snabbdomVdom)
    lastVdom = snabbdomVdom
  })
}

export default SnabbdomRenderer
