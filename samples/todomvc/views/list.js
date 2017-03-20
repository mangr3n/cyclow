import itemView from './item'
import {isDone, isNotDone, allDone} from '../model'

const filter = (filterName, items) => ({
  '': items => items,
  active: items => items.filter(isNotDone),
  completed: items => items.filter(isDone)
})[filterName](items)

const itemsViews = (items, filterName, editing) => filter(filterName, items)
  .map(i => itemView(i, i.id === editing))

const listView = ({items, editing, filter}) => ({
  tag: 'section.main',
  content: [
    {tag: 'input.toggle-all',
      attrs: {type: 'checkbox', checked: allDone(items)},
      on: {change: 'toggleAll'}},
    {tag: 'label', content: 'Mark all as complete',
      attrs: {for: 'toggle-all', style: 'display: none;'}},
    {tag: 'ul.todo-list', content: itemsViews(items, filter, editing)}
  ]
})

export default listView
