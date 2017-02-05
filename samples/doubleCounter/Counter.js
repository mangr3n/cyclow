import { Block } from '../../dist/cyclow'

const Counter = () => Block({
  events: {
    init: () => state => 0,
    click: () => state => state + 1
  },
  view: state => ({tag: 'button',
    on: {click: ['click']},
    content: `Count: ${state}`
  }),
  out: {count: state => state}
})

export default Counter
