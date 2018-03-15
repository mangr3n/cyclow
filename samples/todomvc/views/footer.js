import {isNotDone} from '../model'
import { h } from 'snabbdom';

const activeCount = items => items.filter(isNotDone).length
const itemsLabel = n => n === 1 ? `1 item left` : `${n} items left`

const filterButton = (name, filter, currentFilter) => h('li',[
  h('a',{
    attrs: { href : '#'},
    class: { selected: filter === currentFilter },
    on: { click: { filter } },
  }, name)
]);

const clearCompletedButton = () => h('button.clear-completed', {
  on: { click: 'clearCompleted'}
}, 'Clear completed');
// const clearCompletedButton = () => ({
//   tag: 'button.clear-completed',
//   on: {click: 'clearCompleted'},
//   content: 'Clear completed'
// })

const hasDone = items => items.some(item => item.done)

const footerView = ({ items, filter }) => h('footer.footer', [
  h('span.todo-count', itemsLabel(activeCount(items))),
  h('ul.filters',[
    filterButton('All', '', filter),
    filterButton('Active', 'active', filter),
    filterButton('Completed', 'completed', filter)
  ]),
  hasDone(items) ? clearCompletedButton() : ''
]);
// const footerView = ({items, filter}) => ({
//   tag: 'footer.footer',
//   content: [
//     {tag: 'span.todo-count', content: itemsLabel(activeCount(items))},
//     {tag: 'ul.filters', content:[
//       filterButton('All', '', filter),
//       filterButton('Active', 'active', filter),
//       filterButton('Completed', 'completed', filter),
//     ]},
//     hasDone(items) ? clearCompletedButton() : ''
//   ]
// })

export default footerView
