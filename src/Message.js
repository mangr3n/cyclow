import {toArray, isArray, isObject, isDefined} from './utils'

const messageSymbol = Symbol('Message')

const nameToblockSignal = name => {
  const [block, signal = 'default'] = name.split('.', 2)
  return [block, signal]
}

const Message = (...args) => {
  if(isObject(args[0])) return createMessage(args[0])

  let block, signal, value = {}

  if(args.length === 1) {
    [block, signal] = nameToblockSignal(args[0])
  } else if(args.length === 2) {
    [block, signal] = nameToblockSignal(args[0])
    value = args[1]
  } else if(args.length === 3) {
    [block, signal, value] = args
  }

  return createMessage({blocks: block, values: {[signal]: value}})
}

const createMessage = ({blocks, values = {default: {}}}) => ({
  blocks: isDefined(blocks) ? toArray(blocks) : undefined,
  values: isObject(values) ? values : {default: values},
  [messageSymbol]: true
})

const isMessage = arg => arg[messageSymbol]
const isMessageForBlock = (blockName) => (m) => isMessage(m) && m.blocks.includes(blockName);

const toMessage = (arg, converter) => {
  if(isMessage(arg)) return arg
  if(isArray(arg)) return arg.map(toMessage)
  return [].concat(converter(arg))
}

const getHandler = (handlers, block, signal) => {
  // const {blocks, values} = message
  // const block = blocks[0]
  // const signal = Object.entries(values)[0][0]
  const name = `${block}.${signal}`
  if(handlers[name]) return handlers[name]
  if(signal === 'default' && handlers[block]) return handlers[block]
}

export {Message as default, Message, isMessage,isMessageForBlock, toMessage, getHandler}
