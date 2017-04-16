<p align="center">
  <img alt="logo" src="https://rawgit.com/pmros/cyclow/master/cyclow.svg">
</p>

<p align="center">
<a href="https://badge.fury.io/js/cyclow" class="rich-diff-level-one"><img alt="npm version" src="https://badge.fury.io/js/cyclow.svg" style="max-width:100%;"></a>
<a href="https://gitter.im/cyclow/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge"><img alt="Join the chat at https://gitter.im/cyclow/Lobby" src="https://badges.gitter.im/cyclow/Lobby.svg"></a>
</p>

**cyclow**  is a reactive frontend framework for JavaScript. It's inspired by another frameworks like [Cycle.js] and [TSERS]. It uses [graflow] as stream library.

## Example

This a simple counter example:
```js
  import { Block, run } from 'cyclow'

  const Counter = () => Block({
    on: {
      'in.init':  () => state => 0,
      'dom.click': () => state => state + 1
    },
    view: state => ({
      tag: 'button',
      on: {click: 'click'},
      content: `Count: ${state}`
    })
  })

  run(Counter)
```

Try it [online](https://www.webpackbin.com/bins/-KfjSQySgAHAD0jGjjs3)!

## More samples
You can build and open [samples](samples) in a browser:
```
  git clone https://github.com/pmros/cyclow
  cd cyclow
  npm install
  npm run samples
```

Samples include a [TodoMVC](http://todomvc.com) [sample](samples/todomvc).

You can find even more samples at [JS Comp] and compare them with another implementations using frameworks like React, Angular or Cycle.

## Why cyclow?
There are many JavaScript frameworks so... why another one? Well I really like [Cycle.js]. It's a nice reactive framework. [TSERS] is like [Cycle.js] and it adds a simple state manager and another features. But both are too [pure](https://en.wikipedia.org/wiki/Pure_function) (in the functional programmming sense) for me.

With **cyclow** instead of thinking in a big global model and pure functions, you have to think in components with inputs, outputs and their own state (something like an electronic circuit). I think cyclow is more intuitive and easier while it's still reactive and quite declarative. You can compare cyclow and [Cycle.js] samples at [JS Comp].

**cyclow** goal is to help you to create applications that are:
- Declarative
- Easy to code
- Easy to read
- Scalable

## How it works
A cyclow app consits of a block. A block is composed of other blocks. A block is [graflow] component, it receives messages and send messages async.

Every block contains this **default blocks**:
- `in`
- `events`
- `state`
- `view`
- `dom`
- `out`

In adition, you can add your own blocks or **custom blocks** with `blocks` [Block](#Block) option.

Every block inside a block is connected through a `bus` block, sending and receiving messages. Bus connect blocks forming a cycle.

**Messages** has three parts:
- Block
- Signal
- Value

You can handle messages with `on` [Block](#Block) option.

Finally, you can transform state into a [Virtual DOM Element](#virtual-dom-element) with `view` [Block](#Block) option. Virtual DOM Element will be converted into a real DOM by the [renderer](#renderer).

## How To

### How to set the initial state?
At the beginning, every block receives an `init` signal from `in` block. So you can handle this message to set a initial state.

From the counter example:
```js
  on: {
    'in.init': () => state => 0
  }
```

In this case, the handler takes no params `()` and returns a **state transformation** `state => 0`. It's a function that takes the current state and returns the next state.


### How to handle DOM events?
First, you have to catch the DOM event in `view` [Block](#Block) option. From counter exaple:
```js
  view: state => ({
    tag: 'button',
    on: {click: 'click'},
    content: `Count: ${state}`
  })
```

Then, you can handle DOM event as a normal block message (from `dom` block):
```js
  on: {
    'dom.click': () => state => state + 1
  }
```

If you need DOM event information, see [Inputbox sample](samples/inputbox):
```js
on: {
  ...
  'dom.text': newText => text => newText,
},
view: text => ({content: [
  {tag: 'input',
    attrs: {id: 'myInput', value: text},
    on: {keyup: (e, next) => next({text: e.target.value})}
  }
  ...
]})
```

### How to compose blocks?
See [Composition sample](samples/composition):
```js
  blocks: {field: Field()},
  on: {
    'in.init': () => [{'field.init': 'Enter name'}, state => ({current: 'Steve'})],
    'field.submission': submission => state => ({current: submission})
  }
```

### How to focus a DOM element?
See [Inputbox sample](samples/inputbox):
```js
  on: {
    'dom.focus': () => ({'dom.action': node => node.firstElementChild.focus()})
  }
```

### How to use LocalStorage to save the state?
See [TodoMVC sample](samples/todomvc):
```js
  on: {
    'in.init': () => state => JSON.parse(localStorage.getItem('todomvc')) || initial(),
    state: state => { localStorage.setItem('todomvc', JSON.stringify(state)) }
  }
```

### How to debug a cyclow app?
You can log every message through `bus` block:
```js
  on: {
    bus: msg => {
      console.log('Message', msg)
      return msg
    }
  }
```

You can track state changes too:
```js
  on: {
    state: state => console.log('State', state)
  }
```

## <a name="virtual-dom-element"></a>Virtual DOM Element
cyclow represents DOM elements as Virtual DOM Elements, that is a simple Javascript object with the following (optional) properties:
- `tag`: HTML tag (default is `div`)
- `attrs`: Attributes (like `id`, `class` or `style`).
- `on`: Events handlers (like `click`). It can be just an [event message](#event-messages) or a function that receive the DOM event and a function to send an event message.
- `content`: Content can be just text, a [Virtual DOM Element](#virtual-dom-element) or an array of Virtual DOM Elements.

This is a virtual DOM element example:
```js
  {
    tag: 'input',
    attrs: { id: 'myInput' },
    on: { keyup: (e, next) => next({text: e.target.value}) }
  }
```

## <a name="renderer"></a> Renderer
A renderer is just a component factory. It creates a component that takes a [Virtual DOM Element](#virtual-dom-element) as a input and it converts into a Real DOM Element and it updates the HTML document. **cyclow** uses [snabbdom](https://github.com/snabbdom/snabbdom) as default renderer.

A renderer is a function that it takes `target`, that the DOM element id where you want to insert into the Virtual DOM Element. If you don't specify `target`, cyclow will append the app at the end of body.

## API

### <a name="run"></a>```run(MainComponent, options={})```
Arguments:
- `MainComponent`: A component factory.
- `options`:
  - `target` (`document.body` by default)
  - `renderer` (`SnabbdomRenderer` by default)
  - `init` (`{}` by default)

### <a name="Block"></a>```Block(options)```
Arguments:
- `options`:
  - `blocks`
  - `on`
  - `view`

Returns: A [graflow] component

## <a name="TODO"></a> TODO
- [x] Virtual DOM diff and patching
- [x] A way to focus a DOM element
- [x] A [TodoMVC](http://todomvc.com) sample
- [x] A cool logo
- [ ] JavaScript Standard Style
- [ ] More documentation
- [ ] More samples
- [ ] Functional tests

[graflow]: https://github.com/pmros/graflow
[Cycle.js]: https://cycle.js.org
[TSERS]: https://github.com/tsers-js/core
[JS Comp]: http://jscomp.netlify.com/
