import { Block } from '../../dist/cyclow'
import { Ticker } from 'graflow'

const Counter = () => Block({
  components: {ticker: Ticker(1000)},
  on: {
    init: () => 'ticker',
    ticker: () => date => new Date()
  },
  view: date => ({content: date.toLocaleTimeString()})
})

export default Counter
