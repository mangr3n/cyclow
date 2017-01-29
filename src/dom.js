import { component, demux } from 'graflow'
import build from './buildDom'

const dom = () => component({
  components: {
    build: component((v, next) => {
      const nextEvent = e => next({event: e})
      const el = build(v, nextEvent)
      next({element: el})
    })
    , demux: demux(['event', 'element'])
  }
  , connections: [
    ['in.default', 'build']
    , ['build', 'demux']
    , ['demux.element', 'out.element']
    , ['demux.event', 'out.event']
  ]
  , outputs: ['element', 'event']
})

export default dom
