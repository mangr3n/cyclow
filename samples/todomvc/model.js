const initial = () => ({
  items: [],
  filter: '',
  editing: null,
  counter: 0
})

const isDone = todo => todo.done

const isNotDone = todo => !todo.done

const allDone = items => items.every(isDone)

const add = text => state => ({...state,
  counter: state.counter + 1,
  items: [...state.items,
    {id: state.counter, name: text, done: false}
  ]
})

const toggle = id => state => ({...state,
  items: state.items.map(i => i.id === id ? {...i, done: !i.done} : i)
})

const toggleAll = id => state => ({...state,
  items: (all => state.items.map(i => ({...i, done: !all})))
    (allDone(state.items))
})

const destroy = id => state => ({...state,
  items: state.items.filter(i => i.id !== id)
})

const edit = id => state => ({...state, editing: id})

const update = (id, text) => state => ({...state,
  editing: null,
  items: state.items.map(i => i.id === id ? {...i, name: text} : i)
})

const cancelEditing = () => state => ({...state, editing: null})

const clearCompleted = () => state => ({...state,
  items: state.items.filter(isNotDone)
})

const filter = filter => state => ({...state, filter})

export {initial, add, toggle, toggleAll, destroy,
  edit, update, cancelEditing, clearCompleted, filter,
  isDone, isNotDone, allDone}
