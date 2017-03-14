import {Chain, Mapper, ArraySerializer, Filter} from 'graflow'
import {isMessage} from './Message'

const Bus = busHandler  => Chain(
  ArraySerializer(),
  Filter(isMessage),
  Mapper(busHandler || (m => m))
)

export default Bus
