import { Block } from '../../dist/cyclow'

const Counter = () => Block({
  outputs: ['count'],
  on: {
    init: () => state => 0,
    click: () => state => state + 1,
    state: state => [['out.count', state]]
  },
  view: state => ({tag: 'button',
    on: {click: 'click'},
    content: `Count: ${state}`
  })
})

export default Counter
