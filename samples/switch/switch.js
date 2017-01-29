import { app, dom, state } from '../../dist/cyclow'
import { component, map } from 'graflow'

const switcher = () => component({
  inputs:  ['init']
  , outputs: ['dom']
  , components: {
    state: state()
    , dom: dom()
    , events: map(e => state => !state)
    , init: map(initial => state => initial)
    , view: map(state => ({
      attrs: { id: 'content', class: state ? 'on' : 'off' }
      , on: { click: {} }
      , content: state ? 'On' : 'Off'
    }))
  }
  , connections: [
    ['in.init', 'init'], ['init', 'state']
    , ['events', 'state']
    , ['state', 'view'], ['view', 'dom']
    , ['dom.event', 'events'], ['dom.element', 'out.dom']
  ]
})

export default switcher
