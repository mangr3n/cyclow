import { dom as domFactory, state as stateFactory } from '../../dist/cyclow'
import { component, map, chain, demux } from 'graflow'

const confirm = () => {
  const defaultState = { mode: 'waiting', disabled: true }

  const viewWaiting = state => ({
    tag: 'button'
    , content: 'Submit'
    , attrs: { disabled: state.disabled }
    , on: { click: ['submit'] }
  })

  const viewConfirm = state => [
    {tag: 'button', content: 'Cancel', on: {click: ['cancel']}}
    , {tag: 'button', content: 'Confirm', on: {click: ['confirm']}}
  ]

  const view = map(state => ({
    content: state.mode === 'confirm'
      ? viewConfirm(state)
      : viewWaiting(state)
  }))

  const mapDisabled = map(v => ['disabled', v])

  const state = stateFactory()
  const dom = domFactory()

  const events = chain(
    map(([type, payload]) => {
      switch(type) {
        case 'cancel':    return { state: s => ({ ...s, mode: 'waiting' }) }
        case 'submit':    return { state: s => ({ ...s, mode: 'confirm' }) }
        case 'disabled':  return { state: s => ({ ...s, disabled: payload }) }
        case 'confirm':   return {
          state: s => ({ ...s, mode: 'waiting' })
          , confirm: true
        }
      }
    })
    , demux(['state', 'confirm'])
  )

  const init = map( initial => state => ({ ...defaultState, ...initial }) )

  return component({
    components: { state, events, dom, view, init, mapDisabled }
    , connections: [
      ['in.init', 'init']
      , ['init', 'state']
      , ['in.disabled', 'mapDisabled']
      , ['mapDisabled', 'events']
      , ['events.state', 'state']
      , ['events.confirm', 'out.confirm']
      , ['state', 'view']
      , ['view', 'dom']
      , ['dom.event', 'events']
      , ['dom.element', 'out.dom']
    ]
    , inputs:  ['init', 'disabled']
    , outputs: ['dom', 'confirm']
  })
}

export default confirm
