import {Block, run} from 'cyclow'

const Counter = () => Block({
  on: {
    'in.init':  () => counter => 0,
    'dom.increment': () => counter => counter + 1,
    'dom.decrement': () => counter => counter - 1
  },
  view: counter => ({tag:'div#app', content: [
    {tag: 'div.counter', content: `${counter}`},
    {tag: 'div.buttons', content: [
      {tag: 'button', on: {click: 'decrement'}, content: '-'},
      {tag: 'button', on: {click: 'increment'}, content: '+'}
    ]}
  ]})
})

run(Counter, {target: 'app'})
