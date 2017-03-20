import {isDone} from '../model'

const itemView = (todo, editing) => ({
  tag: 'li',
  attrs: {class: {completed: isDone(todo), editing}},
  content: [
    {tag: 'div.view', content: [
      {tag: 'input.toggle',
        attrs: {type: 'checkbox', checked: todo.done},
        on: {change: {toggle: todo.id}}},
      {tag: 'label', content: todo.name,
        on: {dblclick: (e, next) => {
          next({edit: todo.id})
          e.target.parentElement.parentElement.lastElementChild.focus()
        }
      }},
      {tag: 'button.destroy', on: {click: {destroy: todo.id}}}
    ]},
    {tag: 'input.edit', attrs: {type: 'text', value: todo.name},
      on: {
        keydown: (e, next) => {
          if (e.key === 'Enter') {
            next({update: {id: todo.id, text: e.target.value}})
          } else if (e.key === 'Escape') {
            next('cancelEditing')
          }
        },
        blur: (e, next) => next({update: {id: todo.id, text: e.target.value}})
      }
    }
  ]
})

export default itemView
