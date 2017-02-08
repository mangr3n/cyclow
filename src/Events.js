import {Chain, Mapper, Demuxer, Serializer} from 'graflow'

const toCanonicalItem = msg => {
  let m = msg
  if (typeof msg === 'function') {
    m = ['state', msg]
  } else if (typeof msg === 'string') {
    m = [msg]
  }

  const [name, payload = {}] = m
  const [componentName, signal = 'default'] = name.split('.', 2)

  if(componentName === 'state') {
    return {state: payload}
  } else if(componentName === 'out') {
    return {outputs: {[signal]: payload}}
  } else {
    return {components: {[componentName]: {[signal]: payload}}}
  }
}

const toCanonicalMessage = msg => [].concat(msg).map(toCanonicalItem)

const Events = events => Chain(
  Mapper(([[e, payload], state]) => {
    return toCanonicalMessage(events[e](payload, state))
  }),
  Serializer(),
  Demuxer('state', 'components', 'outputs')
)


export default Events
