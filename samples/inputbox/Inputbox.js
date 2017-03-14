import { Block } from '../../dist/cyclow'

const Inputbox = () => Block({
  on: {
    'in.init': () => text => '',
    'dom.text': newText => text => newText,
    'dom.focus': () => ({'dom.action': node => node.firstElementChild.focus()})
  },
  view: text => ({content: [
    {tag: 'input',
      attrs: {id: 'myInput', value: text},
      on: {keyup: (e, next) => next({text: e.target.value})}
    },
    {tag: 'button', content: 'Focus', on: {click: 'focus'}},
    {tag: 'h1', content: text}
  ]})
})

export default Inputbox
