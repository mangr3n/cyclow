import Component from "graflow";
import {
  isString,
  isArray,
  isObject,
  isDefined,
  isFunction,
  flatten,
  mapObject
} from "./utils";
import Message from "./Message";

import snabbdom from "snabbdom";
import eventlisteners from "snabbdom/modules/eventlisteners";
import props from "snabbdom/modules/props";
import attributes from "snabbdom/modules/attributes";
import klass from "snabbdom/modules/class";
import style from "snabbdom/modules/style";
import h from "snabbdom/h";
import { isUndefined } from "util";

const Event = arg => {
  if (isString(arg)) return [["dom", arg, {}]];
  if (isObject(arg)) {
    return Object.entries(arg).map(([name, value]) => ["dom", name, value]);
  }
  return [["dom", "default", arg]];
};

const getHandlers = (handlers, component) =>
  mapObject(handlers, (event, handler) => {
    const next = component
      ? v => component.send(Message("dom", "event", Event(v)))
      : () => {};

    const newHandler = e =>
      isFunction(handler) ? handler(e, next) : next(handler);

    return [event, newHandler];
  });

const isSnabbdomVNode = (vdom) => {
  const keys = Object.keys(vdom);
  if (keys.includes('sel')) return true;
  return false;
}

const toSnabbdom = (vdom, svg = false, component = null) => {
  // console.log('toSnabbdom: ',{vdom});
  if (isString(vdom)) return vdom;
  if (isArray(vdom)) {
    return flatten(vdom)
      .filter(isDefined)
      .map(v => toSnabbdom(v, svg, component));
  }

  if ( component == null ) component = vdom.component;
  if (isSnabbdomVNode(vdom)) {
    if ( isUndefined(vdom.data) ) vdom.data = {};
    if ( vdom.root ) {
      if (isUndefined(vdom.data.hook)) vdom.data.hook = {};
      const existingUpdate = vdom.data.hook.update;
      vdom.data.hook.update = (oldVN,newVN) => {
        component.send(Message('dom','node',newVN.elm))
        if (isFunction(existingUpdate)) existingUpdate(oldVN,newVN)
      }
    }
    if (!isUndefined(vdom.data.on)) {
      vdom.data.on = getHandlers(vdom.data.on,component);
    }
    if (!isUndefined(vdom.children) && !isString(vdom.children)) {
        vdom.children = toSnabbdom(vdom.children,svg,component);
    }
    return vdom;
  } 

  const {
    tag = "div",
    attrs = {},
    on = {},
    content = [],
    props = {},
    style = {},
    hook = {}
  } = vdom;

  const { class: klass, ...rest } = attrs;

  const handlers = getHandlers(on, component);

  if (vdom.root) {
    const oldUpdate = hook.update
    hook.update = (oldVNode, newVNode) => {
      component.send(Message("dom", "node", newVNode.elm));
      if (oldUpdate) oldUpdate(oldVNode,newVNode)
    };
  }

  const newSvg = svg || tag === "svg";

  return h(
    tag,
    {
      attrs: rest,
      style,
      props,
      class: klass,
      on: handlers,
      hook
    },
    toSnabbdom(content, newSvg)
  );
};

const updateProps = (oldVnode, vnode) => {
  if (vnode.elm.tagName === "INPUT" && isDefined(vnode.data) && isDefined(vnode.data.props) && isDefined(vnode.data.props.value)) {
    vnode.elm.value = vnode.data.props.value;
  }
};

const liveProps = { create: updateProps, update: updateProps };

const patch = snabbdom.init([
  eventlisteners,
  props,
  attributes,
  klass,
  style,
  liveProps
]);

const toTarget = targetId => {
  return targetId
    ? document.getElementById(targetId)
    : document.body.appendChild(document.createElement("div"));
};

const SnabbdomRenderer = targetId => {
  let lastVdom = toTarget(targetId);

  return Component(vdom => {
    const snabbdomVdom = toSnabbdom(vdom);
    patch(lastVdom, snabbdomVdom);
    lastVdom = snabbdomVdom;
  });
};

export default SnabbdomRenderer;
