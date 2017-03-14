import Component from 'graflow'
import {flatten, isString, isArray, isObject, isDefined} from './utils'
import {Message, toMessage} from './Message'

import snabbdom from 'snabbdom'
import eventlisteners from 'snabbdom/modules/eventlisteners'
import props from 'snabbdom/modules/props'
import h from 'snabbdom/h'

const messageConverter = arg => {
  if(isString(arg)) return [['dom', arg, {}]]
  if(isObject(arg)) {
    return Object.entries(arg).map(([name, value]) => ['dom', name, value])
  }
  return [['dom', 'default', arg]]
}

const getHandlers = (handlers, component) => Object.entries(handlers)
  .reduce((acc, [event, handler]) => {
    const send = component.send

    const next = component
      ? v => send(Message('dom', 'event', toMessage(v, messageConverter)))
      : () => {}

    acc[event] = e => typeof handler === 'function'
      ? handler(e, next)
      : next(handler)

    return acc
  }, {})

const toSnabbdom = vdom => {
  if (isString(vdom)) return vdom
  if (isArray(vdom)) return flatten(vdom).filter(isDefined).map(toSnabbdom)

  const {tag = 'div', attrs = {}, on = {}, content = [], component} = vdom
  const handlers = getHandlers(on, component)

  const send = component.send

  const hook = vdom.root
    ? {hook: {create: (_, vnode) => {send(Message('dom', 'node', vnode.elm))}}}
    : {}

  return h(tag,
    {props: attrs, on: handlers, ...hook},
    toSnabbdom(content))
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
