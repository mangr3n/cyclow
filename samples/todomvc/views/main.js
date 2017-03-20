import headerView from './header'
import listView from './list'
import footerView from './footer'

const view = state => ({content: [
  {
    tag: 'section.todoapp',
    content: [
      headerView(state),
      listView(state),
      footerView(state)
    ]
  },
  {
    tag: 'footer.info',
    content: [
      {tag: 'p', content: 'Double-click to edit a todo'},
      {tag: 'p', content: 'cyclow by pmros'},
      {tag: 'p', content: 'Created by pmros'}
    ]
  },
]})

export default view
