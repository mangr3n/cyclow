import { Block } from '../../dist/cyclow'

const Counter = () => Block({
  on: {
    init: () => state => 0,
    click: () => state => state + 1
  },
  view: state => ({
    tag: 'button',
    on: {click: ['click']},
    content: `Count: ${state}`
  })
})

export default Counter
