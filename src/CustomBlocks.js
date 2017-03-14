import {isUndefined, mapObject, isObject} from './utils'
import {Chain, Mapper, ArraySerializer, Identity, Filter} from 'graflow'
import {Message, isMessage} from './Message'

const CustomMessage = (name, value) => {
  if(isObject(value) && Object.keys(value).length > 0) {
    return Object.entries(value).map(([k, v]) => k === 'vdom'
      ? Message('view', 'vdom', {[name]: v})
      : Message('events', 'event', [[name, k, v]])
    )
  }
  return Message('events', 'event', [[name, 'default', value]])
}

const NamedBlock = (name, block) => Chain(
  Filter(isMessage),
  Filter(({blocks}) => isUndefined(blocks) || blocks.includes(name)),
  Mapper(v => v.values.default ? v.values.default : v.values),
  block,
  ArraySerializer(),
  Mapper(m => CustomMessage(name, m)),
  ArraySerializer()
)

const CustomBlocks = arg => mapObject(arg, (name, block) => [
  name, NamedBlock(name, block)
])

export default CustomBlocks
