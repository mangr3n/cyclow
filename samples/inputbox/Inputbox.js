import { Block } from '../../dist/cyclow'
import { h } from 'snabbdom';

const Inputbox = () => Block({
  on: {
    'in.init': () => text => '',
    'dom.text': newText => text => newText,
    'dom.focus': () => ({'dom.action': (node) => node.firstElementChild.focus()})
  },
  view: text => ({content: [
    h('input',{ 
      attrs: { id: 'myInput', value: text},
      on: { keyup: (e,next) => next({text:e.target.value}) }
    }),
    h('button',{ on: { click: 'focus' } }, 'Focus'),
    h('h1',text)
  ]})
})

export default Inputbox
