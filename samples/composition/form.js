import {Block} from '../../dist/cyclow'
import Field from './field'

const Form = () => Block({
  blocks: {field: Field()},
  on: {
    'in.init': () => [
      {'field.init': 'Enter name'},
      state => ({current: 'Steve'})
    ],
    'field.submission': submission => state => ({current: submission})
  },
  view: ({current}, {field}) => ({content: [
    field,
    {tag: 'p', content: `Submitted value: ${current}`}
  ]})
})

export default Form
