import { Component, Demuxer } from 'graflow'
import build from './buildDom'

const Dom = () => Component({
  components: {
    build: Component((v, next) => {
      const nextEvent = e => next({event: e})
      const el = build(v, nextEvent)
      next({element: el})
    })
    , demux: Demuxer('event', 'element')
  }
  , connections: [
    ['in.default', 'build']
    , ['build', 'demux']
    , ['demux.element', 'out.element']
    , ['demux.event', 'out.event']
  ]
  , outputs: ['element', 'event']
})

export default Dom
