import {h} from 'snabbdom';

const headerView = state => h(
  'header.header',
  [
    h('h1','todos'),
    h('input.new-todo',{
      attrs: {placeholder: 'What needs to be done?'},
      on: { keydown: (e,next) => {
        if (e.keyCode === 13) {
          next({add: e.target.value});
          e.target.value = '';
        }
      }}
    })
  ]
);

export default headerView
