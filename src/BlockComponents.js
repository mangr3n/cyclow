import {Component, Chain, Mapper, Demuxer, Serializer, Hub} from 'graflow'

const flatMap = v => [].concat.apply([], v)

const ComponentWrapper = (comp, name) => {
  const compInputs = Object.keys(comp.inputs)
  const compOutputs = Object.keys(comp.outputs)

  const components = {
    main: comp,
    demuxer: Demuxer(...compInputs),
    muxer: Hub(...compOutputs)
  }

  const connections = [['in', 'demuxer'], ['muxer', 'out']]
    .concat(compInputs.map(input => [`demuxer.${input}`, `main.${input}`]))
    .concat(compOutputs.map(output => [`main.${output}`, `muxer.${output}`]))

  let result = Component({components, connections})
  if (name) result = Chain(result, Mapper(v => ({[name]: v})))

  return result
}

const Post = () => Chain(
  Component((v, next) => {
    const [compName, msg] = Object.entries(v)[0]
    const [signal, value] = Object.entries(msg)[0]

    if(signal === 'vdom') {
      next({vdom: {[compName]: value}})
    } else {
      const name = signal === 'default' ? compName : `${compName}.${signal}`
      next({events: [name, value]})
    }
  }),
  Demuxer('events', 'vdom')
)

const BlockComponents = comps => {
  if(Object.keys(comps ).length === 0) return Demuxer('events', 'vdom')

  const compsNames = Object.keys(comps)
  const wrappedComps = Object.entries(comps).reduce((acc, [name, c]) => {
      acc[name] = ComponentWrapper(c, name)
      return acc
    }, {})

  const components = {
    demuxer: Demuxer(...compsNames),
    ...wrappedComps,
    post: Post()
  }

  const connections = [
      ['in', 'demuxer'],
      ['post.vdom', 'out.vdom'],
      ['post.events', 'out.events']
    ].concat(flatMap(compsNames.map(n => [[`demuxer.${n}`, n], [n, 'post']])))

  const outputs = ['events', 'vdom']

  return Component({components, connections, outputs})
}

export default BlockComponents
