const buildContent = (content, parent) => {
  if(typeof content === 'string') {
    let element = document.createTextNode(content)
    parent.appendChild(element)
  } else if(content instanceof Array) {
    content.forEach(i => buildContent(i, parent))
  } else if(content instanceof Object) {
    let element = buildDom(content)
    parent.appendChild(element)
  }
}

const setAttributes = (attrs, el) => Object.entries(attrs)
  .forEach(([name, value]) => { if(value) el.setAttribute(name, value) })

const setEventHandlers = (handlers, component, el) => Object.entries(handlers)
  .forEach(([event, handler]) => {
    el.addEventListener(event, e => {
      const next = component ? component.in.default.send : () => {}

      if(typeof handler === 'function')
        handler(e, next)
      else
        next(handler)
    })
  })

const buildDom = data => {
  let { tag = 'div', attrs = {}, on = {}, content = [], component } = data
  let el = document.createElement(tag)

  setAttributes(attrs, el)
  setEventHandlers(on, component, el)
  buildContent(content, el)

  return el
}

export default buildDom
