import {Component, Chain, Demuxer, Serializer} from 'graflow'

const toCanonicalItem = msg => {
  const m = typeof msg === 'string' ? [msg] : msg

  const [name, payload = {}] = m
  const [componentName, signal = 'default'] = name.split('.', 2)

  if(componentName === 'out') {
    return {outputs: {[signal]: payload}}
  } else {
    return {components: {[componentName]: {[signal]: payload}}}
  }
}

const toCanonicalMessage = msg => [].concat(msg).map(toCanonicalItem)

const State = (options = {}) => {
  const post = options.post
  let state = options.initial || {}

  return Component({
    inputs: ['transformation'],
    outputs: ['state', 'outputs', 'components'],
    components: {
      transform: Component((v, next) => {
        state = v(state)
        next(state)
      }),
      post: Chain(
        Component((state, next) => {
          if(post) next(toCanonicalMessage(post(state)))
        }),
        Serializer(),
        Demuxer('outputs', 'components')
      )
    },
    connections: [
      ['in.transformation', 'transform'],
      ['transform', 'post'],
      ['transform', 'out.state'],
      ['post.outputs', 'out.outputs'],
      ['post.components', 'out.components']
    ]
  })
}

export default State
