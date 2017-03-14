import {Mapper, Chain, Filter} from 'graflow'
import {Message, isMessage} from './Message'

const Outputs = () => Chain(
  Filter(v => isMessage(v) && v.blocks.includes('out')),
  Mapper(m => m.values)
)

export default Outputs
