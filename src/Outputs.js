import {Mapper, Chain, Filter,Logger} from 'graflow'
import {Message, isMessageForBlock} from './Message'


const toValues = m => m.values;

const Outputs = () => Chain(
  // Logger({prefix:'Outputs/Outputs/Chain/input'}),
  Filter(isMessageForBlock('out')),
  // Logger({prefix:'Outputs/Outputs/Chain/isMessageForOutputs'}),
  Mapper(toValues)
  // , Logger({prefix:'Outputs/Outputs/Chain/output'})
)

export default Outputs
