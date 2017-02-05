import buildDom from './buildDom'
import Component from 'graflow'

const cacheProps = e => ({
  id: e.id
  , selectionStart:e.selectionStart
  , selectionEnd:e.selectionEnd
  , selectionDirection:e.selectionDirection
  , scrollTop:e.scrollTop
  , scrollLeft:e.scrollLeft
})

const SimpleRenderer = (targetId) => {
  const target = targetId ? document.getElementById(targetId) : document.body

  return Component(vdom => {
    const dom = buildDom(vdom)

    const focusedId = (document.activeElement || {id:''}).id
    const identifiedElements =
      [...document.querySelectorAll('[id]')].map(cacheProps)

    target.innerHTML = ''
    target.appendChild(dom)

    identifiedElements.forEach(element => {
      const newElement = document.getElementById(element.id)
      if (newElement) {
        if(element.id === focusedId) newElement.focus()
        Object.assign(newElement, element)
      }
    })
  })
}

export default SimpleRenderer
