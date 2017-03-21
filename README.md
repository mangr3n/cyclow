# cyclow

[![npm version](https://badge.fury.io/js/cyclow.svg)](https://badge.fury.io/js/cyclow)

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

A renderer is a function that it takes `target`, that the DOM element id where you want to instert into the Virtual DOM Element. By default `target` is `body` document.

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
- [ ] A cool logo
- [ ] JavaScript Standard Style
- [ ] More documentation
- [ ] More samples
- [ ] Functional tests

[graflow]: https://github.com/pmros/graflow
[Cycle.js]: https://cycle.js.org
[TSERS]: https://github.com/tsers-js/core
[JS Comp]: http://jscomp.netlify.com/
