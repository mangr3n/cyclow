import { Block } from '../../dist/cyclow'
import { Ticker } from 'graflow'
import { h } from 'snabbdom';

const Counter = () => Block({
  blocks: {ticker: Ticker(1000)},
  on: {
    'in.init': () => 'ticker',
    ticker: () => date => new Date()
  },
  view: date => h('span',date.toLocaleTimeString())
})

export default Counter
