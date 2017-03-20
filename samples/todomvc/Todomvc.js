import {Block} from '../../dist/cyclow'

import {initial, add, toggle, toggleAll, destroy,
  edit, update, cancelEditing, clearCompleted, filter} from './model'

import view from './views/main'

const on = {
  'in.init': () => state =>
    JSON.parse(localStorage.getItem('todomvc')) || initial(),
  'dom.add': add,
  'dom.toggle': toggle,
  'dom.toggleAll': toggleAll,
  'dom.destroy': destroy,
  'dom.edit': edit,
  'dom.update': ({id, text}) => update(id, text),
  'dom.cancelEditing': cancelEditing,
  'dom.clearCompleted': clearCompleted,
  'dom.filter': filter,
  state: state => { localStorage.setItem('todomvc', JSON.stringify(state)) }
}

const Todomvc = () => Block({on, view})

export default Todomvc
