import {Mapper, Chain} from 'graflow'
import Message from './Message'

const Inputs = () => Chain(
  Mapper(v => Object.entries(v).map(([name, value]) =>
    Message('events', 'event', [['in', name, value]]))
  )
)

export default Inputs
