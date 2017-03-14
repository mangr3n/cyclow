import {Block} from '../../dist/cyclow'

const viewConfirm = () => [
  {tag: 'button', content: 'Confirm', on: {click: 'confirm'}},
  {tag: 'button', content: 'Cancel', on: {click: 'cancel'}}
]

const viewDefault = mode => ({
  tag: 'button',
  content: 'Submit',
  attrs: {disabled: mode === 'disabled'},
  on: {click: 'maybe'}
})

const Confirm = () => Block({
  inputs: ['disabled'],
  outputs: ['confirmation'],
  on: {
    'in.init': () => state => ({mode: 'disabled'}),
    'in.disabled': (disabled, {mode} = {}) => {
      if (disabled) {
        return state => ({mode: 'disabled'})
      } else if (mode === 'disabled') {
        return state => ({mode: 'waiting'})
      }
    },
    'dom.maybe': () => state => ({mode: 'confirm'}),
    'dom.cancel': () => state => ({mode: 'waiting'}),
    'dom.confirm': () => [state => ({mode: 'waiting'}), 'out.confirmation']
  },
  view: ({mode}) => ({tag: 'span',
    content: (mode === 'confirm' ? viewConfirm() : viewDefault(mode))
  })
})

export default Confirm
