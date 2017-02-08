import { Block } from '../../dist/cyclow'

const Inputbox = () => Block({
  on: {
    init: () => text => '',
    text: newText => text => newText
  },
  view: text => ({content: [
    {tag: 'input',
      attrs: {id: 'myInput', value: text},
      on: {keyup: (e, next) => next(['text', e.target.value])}
    },
    {tag: 'h1', content: text}
  ]})
})

export default Inputbox
