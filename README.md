# cyclow

[![npm version](https://badge.fury.io/js/cyclow.svg)](https://badge.fury.io/js/cyclow)

**cyclow**  is a reactive frontend framework for JavaScript. It's inspired by another frameworks like [Cycle.js](https://cycle.js.org/) and [TSERS](https://github.com/tsers-js/core). It uses [graflow] as stream library.

## Example
This a simple counter example:
```js
  import { Block, run } from 'cyclow'

  const Counter = () => Block({
    on: {
      init:  () => state => 0,
      click: () => state => state + 1
    },
    view: state => ({
      tag: 'button',
      on: {click: ['click']},
      content: `Count: ${state}`
    })
  })

  run(Counter)
```

Try it [online](http://www.webpackbin.com/VyUXX6cwM)!

## More samples
You can build and open samples in a browser:
```
  git clone https://github.com/pmros/cyclow
  cd cyclow
  npm install
  npm run samples
```

## How it works?
Block is a graflow component factory that creates a component with a structure like this:

![cyclow diagram](https://rawgit.com/pmros/cyclow/master/diagrams/block.svg)

As you can see this component is composed by:
- Inputs:
  - `init`: Block component receives this input when application starts. Usually init value is the initial component state.
- Outputs:
  - `vdom`: Block component outputs a [Virtual DOM Element](#virtual-dom-element) every time component state updates.
- Components:
  - `events`: Every [event message](#event-message) passes through the event component and it will be converted in a *state transformation*, that is a function that takes a state and returns a new state.
  - `state`: This component takes a *state transformation* and apply it to the current state. So it mutates the state and returns the new state.
  - `view`: This component takes a state and returns a [Virtual DOM Element](#virtual-dom-element).

A block component do nothing by itself. It needs a `init` input (usually fired by `DOMContentLoaded` document event) and a [renderer](#renderer) that transforms `vdom` output in a real DOM Element and updates the HTML document. Luckily, [run](#run) function does extactly that.

## <a name="virtual-dom-element"></a>Virtual DOM Element
cyclow represents DOM elements as Virtual DOM Elements, that is a simple Javascript object with the following (optional) properties:
- **tag**: HTML tag (default is `div`)
- **attrs**: Attributes (like `id`, `class` or `style`).
- **on**: Events handlers (like `click`). It can be just an [event message](#event-messages) or a function that receive the DOM event and a function to send an event message.
- **content**: Content can be just text, a [Virtual DOM Element](#virtual-dom-element) or an array of Virtual DOM Elements.

This is a virtual DOM element example:
```js
  {
    tag: 'input',
    attrs: { id: 'myInput' },
    on: { keyup: (e, next) => next(['text', e.target.value]) }
  }
```

## <a name="event-messages"></a> Events messages
Event messages are arrays with two items:
- **name**
- **payload** (optional)

## <a name="renderer"></a> Renderer
A renderer is just a component factory. It creates a component that takes a [Virtual DOM Element](#virtual-dom-element) as a input and it converts into a Real DOM Element and it updates the HTML document.

A renderer is a function that it takes `target`, that the DOM element id where you want to instert into the Viirtual DOM Element. By default `target` is `body` document.

### SimpleRenderer
Currently, cyclow only provides you a renderer, called `SimpleRenderer`. Every time it receives [Virtual DOM Element](#virtual-dom-element), it removes the prevously generated DOM and generates and instert it again.

That is not very efficient, but it's simple and it works well with little samples. `SimpleRenderer` is inspired by [real-dom](https://github.com/danculley/real-dom). A more efficient approach would be using a diff/patching algorithm like [virtual-dom](https://github.com/Matt-Esch/virtual-dom) or [snabbdom](https://github.com/snabbdom/snabbdom) do. It's in the [TODO](#TODO) list.

## API

### <a name="run"></a>```run(MainComponent, options={})```
Arguments:
- `MainComponent`: A component factory.
- `options`:
  - `target` (`document.body` by default)
  - `renderer` (`SimpleRenderer` by default)
  - `init` (`{}` by default)

### <a name="Block"></a>```Block(options)```
Arguments:
- `options`:
  - `inputs`
  - `outputs`
  - `components`
  - `on`
  - `view`

Returns: A [graflow] component

## <a name="TODO"></a> TODO
- [ ] A cool logo
- [ ] JavaScript Standard Style
- [ ] More documentation
- [ ] More samples
- [ ] Virtual DOM diff and patching
- [ ] Functional tests

[graflow]: https://github.com/pmros/graflow
