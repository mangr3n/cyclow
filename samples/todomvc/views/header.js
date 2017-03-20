const headerView = state => ({
  tag: 'header.header',
  content: [
    {tag: 'h1', content: 'todos'},
    {
      tag: 'input.new-todo',
      attrs: {placeholder: 'What needs to be done?'},
      on: {keydown: (e, next) => {
        if (e.keyCode === 13) {
          next({add: e.target.value})
          e.target.value = ''
        }
      }}
    }
  ]
})

export default headerView
