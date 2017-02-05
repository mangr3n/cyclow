import { Block } from '../../dist/cyclow'
import Counter from './Counter'

const DoubleCounter = () => Block({
  components: {counter: Counter()},
  events: {
    init: () => 'counter.init',
    'counter.count': count => double => count * 2
  },
  view: (double, vdom) => ({content: [
    vdom.counter,
    {content: `Double: ${double}`}
  ]})
})

export default DoubleCounter
