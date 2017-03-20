import {isNotDone} from '../model'

const activeCount = items => items.filter(isNotDone).length
const itemsLabel = n => n === 1 ? `1 item left` : `${n} items left`

const filterButton = (name, filter, currentFilter) => ({
  tag: 'li', content: {
    tag: 'a',
    attrs: {href: '#', class: {selected: filter === currentFilter}},
    on: {click: {filter}},
    content: name
  }
})

const clearCompletedButton = () => ({
  tag: 'button.clear-completed',
  on: {click: 'clearCompleted'},
  content: 'Clear completed'
})

const hasDone = items => items.some(item => item.done)

const footerView = ({items, filter}) => ({
  tag: 'footer.footer',
  content: [
    {tag: 'span.todo-count', content: itemsLabel(activeCount(items))},
    {tag: 'ul.filters', content:[
      filterButton('All', '', filter),
      filterButton('Active', 'active', filter),
      filterButton('Completed', 'completed', filter),
    ]},
    hasDone(items) ? clearCompletedButton() : ''
  ]
})

export default footerView
