import {Block} from '../../dist/cyclow'
import Confirm from './confirm'

const Field = () => Block({
  outputs: ['submission'],
  blocks: {confirm: Confirm()},
  on: {
    'in.init': instruction => [
      state => ({instruction, input: ''}),
      'confirm.init'
    ],
    'dom.text': newText => state => ({...state, input: newText}),
    'confirm.confirmation': (_, {input}) => [
      {'out.submission': input},
      state => ({...state, input: ''})
    ],
    state: ({input}) => ({'confirm.disabled': !input})
  },
  view: ({instruction, input}, {confirm}) => ({content: [
    `${instruction}:`,
    {
      tag: 'input',
      attrs: {id: 'field', value: input},
      on: {keyup: (e, next) => next({text: e.target.value})}
    },
    confirm
  ]})
})

export default Field
