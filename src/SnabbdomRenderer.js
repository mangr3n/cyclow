import Component from 'graflow'
import {isString, isArray, isObject, isDefined, isFunction,
  flatten, mapObject} from './utils'
import Message from './Message'

import snabbdom from 'snabbdom'
import eventlisteners from 'snabbdom/modules/eventlisteners'
import props from 'snabbdom/modules/props'
import klass from 'snabbdom/modules/class'
import h from 'snabbdom/h'

const Event = arg => {
  if(isString(arg)) return [['dom', arg, {}]]
  if(isObject(arg)) {
    return Object.entries(arg).map(([name, value]) => ['dom', name, value])
  }
  return [['dom', 'default', arg]]
}

const getHandlers = (handlers, component) => mapObject(handlers,
  (event, handler) => {
    const next = component
      ? v => component.send(Message('dom', 'event', Event(v)))
      : () => {}

    const newHandler = e => isFunction(handler)
      ? handler(e, next)
      : next(handler)

    return [event, newHandler]
  })

const toSnabbdom = vdom => {
  if (isString(vdom)) return vdom
  if (isArray(vdom)) return flatten(vdom).filter(isDefined).map(toSnabbdom)

  const {tag = 'div', attrs = {}, on = {}, content = [], component} = vdom

  const {class: klass, ...props} = attrs

  const handlers = getHandlers(on, component)

  const hook = vdom.root
    ? {hook: {update:
        (_, vnode) => { component.send(Message('dom', 'node', vnode.elm)) }
      }}
    : {}

  return h(tag,
    {props, class: klass, on: handlers, ...hook},
    toSnabbdom(content))
}

const updateProps = (oldVnode, vnode) => {
  if (vnode.elm.tagName === 'INPUT' && vnode.data.props.value) {
    vnode.elm.value = vnode.data.props.value
  }
}

const liveProps = {create: updateProps, update: updateProps}

const SnabbdomRenderer = (targetId) => {
  const patch = snabbdom.init([eventlisteners, props, klass, liveProps])

  const target = targetId
    ? document.getElementById(targetId)
    : document.body.appendChild(document.createElement('div'))

  let lastVdom = target

  return Component(vdom => {
    const snabbdomVdom = toSnabbdom(vdom)
    patch(lastVdom, snabbdomVdom)
    lastVdom = snabbdomVdom
  })
}

export default SnabbdomRenderer
