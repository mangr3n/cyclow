import {Block} from '../../dist/cyclow'
import { h } from 'snabbdom';

const viewConfirm = () => [
  h('button',{ on: { click: 'confirm' }},'Confirm'),
  h('button',{ on: { click: 'cancel' }}, 'Cancel')
];
const viewDefault = mode => h('button',{
  attrs: {disabled: mode === 'disabled'},
  on: { click : 'maybe' },
}, 'Submit');


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
  // view: ({mode}) => ({tag: 'span',
  //   content: (mode === 'confirm' ? viewConfirm() : viewDefault(mode))
  // })
  view: ({mode}) => h('span',
    (mode === 'confirm' ? viewConfirm() : viewDefault(mode))
  )
})

export default Confirm
