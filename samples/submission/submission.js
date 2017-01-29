import confirmFactory from './confirm'
import { dom as domFactory, state as stateFactory } from '../../dist/cyclow'
import { component, map, mux, accumulate, chain, demux } from 'graflow'

const submission = () => {
  const defaultState = { field: '', submission: '' }

  const confirm = confirmFactory()

  const view = chain(
    mux(['state', 'confirm'])
    , accumulate()
    , map(({state, confirm}) => ({
      content: [
        { tag: 'input'
          , attrs: { id: 'submission', value: state.field }
          , on: { keyup: (e, next) => next(['setField', e.target.value]) }
        }
        , confirm
        , { tag: 'p', content: `Submitted value: ${state.submission}` }
      ]
    }))
  )

  const events = chain(
    map(([type, payload]) => {
      switch(type) {
        case 'setField':
          return {
            state: state => ({ ...state, field: payload })
            , disabled: !payload
          }
        case 'confirm':
          return {
            state: state => ({ ...state, field: '', submission: state.field })
            , disabled: true
          }
      }
    })
    , demux(['state', 'disabled'])
  )

  const init = chain(
    map(initial => {
      return { state: state => ({ ...defaultState, ...initial}), confirm: {} }
    })
    , demux(['state', 'confirm'])
  )

  const mapSubmit  = map(e => ['submit'])
  const mapConfirm = map(e => ['confirm'])

  const state = stateFactory()
  const dom = domFactory()

  return component({
    components: { state, events, dom, view, init, confirm
      , mapSubmit, mapConfirm }
    , connections: [
      ['in.init', 'init']
      , ['init.state', 'state']
      , ['init.confirm', 'confirm.init']
      , ['in.submit', 'mapSubmit']
      , ['mapSubmit', 'events']
      , ['events.state', 'state']
      , ['events.disabled', 'out.disabled']
      , ['out.disabled', 'confirm.disabled']
      , ['state', 'view.state']
      , ['confirm.dom', 'view.confirm']
      , ['view', 'dom']
      , ['confirm.confirm', 'mapConfirm']
      , ['mapConfirm', 'events']
      , ['dom.event', 'events']
      , ['dom.element', 'out.dom']
    ]
    , inputs:  ['init', 'submit']
    , outputs: ['dom', 'disabled']
  })
}

export default submission
