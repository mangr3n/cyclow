import {
  Block
} from '../../dist/cyclow';

import { h } from 'snabbdom';

const outTest = (v) => ({
  'out.signals': {
    'count': v
  }
});
const set = (v, _) => v;

// const Label = (label) => ({
//   tag: 'span',
//   hook: {
//     update: (oldVNode, newVNode) => console.log(`Label(hook:update)`,{oldVNode,newVNode})
//   },
//   content: label
// });

const Label = (label) => h(
  'span',
  { hook: { 
    update: (oldVNode, newVNode) => console.log(`Label(hook:update): ${label}`,{oldVNode,newVNode})
  }},
  label
);

const Button = (label,signal) => h(
  'button',
  { on: { click: signal }},
  label
);

// const Button = (label, signal) => ({
//   tag: 'button',
//   on: { click: signal},
//   content: label
// });

const Counter = (label) => Block({
  inputs: ['init', 'reset', 'set'],
  outputs: ['count'],
  on: {
    'in.init': () => state => 0,
    'in.reset': () => state => 0,
    'in.set': set,
    'dom.inc': () => state => state + 1,
    'dom.dec': () => state => state - 1,
    bus: msg => {
      console.log('Message: ', msg.blocks, msg.values, msg);
      return msg;
    },
    'state': state => outTest(state)

  },

  view: state => ({
    hook: {
      update: (oldVN,newVN) => console.log('Root/update',{oldVN,newVN})
    },
    content: [
      Label(`Count: ${state}`),
      Button('+','inc'),
      Button('-','dec')
    ]
  })
});


export default Counter
