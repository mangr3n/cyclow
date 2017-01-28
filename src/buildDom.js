const buildContent = (content, parent, next) => {
  if(typeof content === 'string') {
    let element = document.createTextNode(content)
    parent.appendChild(element)
  } else if(content instanceof HTMLElement) {
    parent.appendChild(content)
  } else if(content instanceof Array) {
    content.forEach(i => buildContent(i, parent, next))
  } else if(content instanceof Object) {
    let element = buildDom(content, next)
    parent.appendChild(element)
  }
}

const setAttributes = (attrs, el) => Object.entries(attrs)
  .forEach(([name, value]) => { if(value) el.setAttribute(name, value) })

const setEventHandlers = (handlers, el, next) => Object.entries(handlers)
  .forEach(([event, handler]) => {
    el.addEventListener(event, e => {
      if(typeof handler === 'function')
        handler(e, next)
      else
        next(handler)
    })
  })

const buildDom = (data, next) => {
  let { tag = 'div', attrs = {}, on = {}, content = [] } = data
  let el = document.createElement(tag)

  setAttributes(attrs, el)
  setEventHandlers(on, el, next)
  buildContent(content, el, next)

  return el
}

export default buildDom
