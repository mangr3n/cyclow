import { domDriver, stateDriver } from '../../dist/cyclow'
import { component, map, debug } from 'graflow'

const switcher = () => {
  const state     = stateDriver()
  const mapState  = map(state => ({
        attrs: { id: 'content', class: state ? 'on' : 'off' }
        , on: { click: {} }
        , content: state ? 'On' : 'Off'
    })
  )

  const dom     = domDriver()
  const events  = map(e => state => !state)

  const mapInit = map(initial => state => initial)

  return component({
    components: { state, events, dom, mapState, mapInit }
    , connections: [
      ['in.init', 'mapInit'], ['mapInit', 'state']
      , ['in.switch', 'events']
      , ['events', 'state']
      , ['state', 'mapState'], ['mapState', 'dom']
      , ['dom.event', 'events']
      , ['dom.element', 'out.dom']
    ]
    , inputs:  ['init', 'switch']
    , outputs: ['dom']
  })
}

export default switcher
