const cacheProps = e => ({
  id: e.id
  , selectionStart:e.selectionStart
  , selectionEnd:e.selectionEnd
  , selectionDirection:e.selectionDirection
  , scrollTop:e.scrollTop
  , scrollLeft:e.scrollLeft
})

const app = (component, id, initialState={}) => {
  component.out.dom.on(e => {
    const focusedId = (document.activeElement || {id:''}).id
    const identifiedElements =
      Array.prototype.map.call(document.querySelectorAll('[id]'), cacheProps)

    const el = document.getElementById(id)
    el.innerHTML = ''
    el.appendChild(e)

    identifiedElements.forEach(element => {
      const newElement = document.getElementById(element.id)
      if (newElement) {
        if(element.id === focusedId) newElement.focus()
        Object.assign(newElement, element)
      }
    })
  })

  return {
    start() { component.in.init.send(initialState) }
  }
}

export default app
