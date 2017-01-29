# cyclow

[![npm version](https://badge.fury.io/js/cyclow.svg)](https://badge.fury.io/js/cyclow)

**cyclow**  is a reactive frontend framework for JavaScript. It's inspired in another frameworks like [Cycle.js](https://cycle.js.org/) and [TSERS](https://github.com/tsers-js/core). It uses [graflow](https://github.com/pmros/graflow) as stream library.


## Getting Started
The best way to learn cyclow is by example. So let's start with a simple sample called [switch](http://www.webpackbin.com/N1spFkvDz). If you click it, it will turn on; if you click it again again, it will turn off. You can try it [live](http://www.webpackbin.com/N1spFkvDz)! This is the code:

```js
import { app, dom, state } from 'cyclow'
import { component, map } from 'graflow'

const switcher = component({
  inputs:  ['init']
  , outputs: ['dom']
  , components: {
    state: state()
    , dom: dom()
    , events: map(e => state => !state)
    , init: map(initial => state => initial)
    , view: map(state => ({
      attrs: { id: 'content', class: state ? 'on' : 'off' }
      , on: { click: {} }
      , content: state ? 'On' : 'Off'
    }))
  }
  , connections: [
    ['in.init', 'init'], ['init', 'state']
    , ['events', 'state']
    , ['state', 'view'], ['view', 'dom']
    , ['dom.event', 'events'], ['dom.element', 'out.dom']
  ]
})

const switcherApp = app(switcher, 'main', false)
document.addEventListener("DOMContentLoaded", () => { switcherApp.start() })
```

A cyclow app is composed by a main [graflow](https://github.com/pmros/graflow) component that can contain another graflow components inside.

![cyclow diagram](https://rawgit.com/pmros/cyclow/master/diagrams/switch.svg)

The main parts are:
- **Inputs**
  - **init**: The component receives this input when app starts with the initial state.
- **Outputs**
  - **dom**: A DOM element.
- **Components**
  - **init**: It converts the initial state into a state tranformation for state component. You can use init component to set default initial state or some startup.
  - **state**: It receives a state transformation as input and outputs a new state. Inspired by [TSERS](https://github.com/tsers-js/core) state driver. You can create a state component easily with [state](#state), that is a state component factory.
  - **view**: It transforms the state into a [virtual DOM element](#virtual-dom-element).
  - **dom**: It converts a [virtual DOM element](#virtual-dom-element) into a real DOM element. Also it outputs DOM events of that DOM element. You can create a dom component easily with [dom](#dom), that is a dom component factory.
  - **events**: It's an events hub, that is it receive all events (from DOM or from component inputs) and it converts in a state tranformation or component output.


Inputs and outputs are the public part or interface of the component. A component can have more inputs and outputs in order to communicate with other components out there.

Components (and connections) are private, that is they are inside the black box. They are the implementation of the component.

Note that state, dom and events are interconnected in a cycle.

cyclow doesn't force you to use a specific structure but switch component structure is very flexible and scalable. You can play with it and add or remove components and connections, as you need it.

## <a name="virtual-dom-element"></a>Virtual DOM element
**cyclow** represents DOM elements like virtual DOM elements, that is a simple Javascript object with the following (optional) properties:
- **tag**: HTML tag (default is *div*)
- **attrs**: Attributes (like *id*, *class* or *style*).
- **on**: Events handlers (like *click*). It can be just a value or a function that receive the DOM event and a function to send a message.
- **content**: Content can be just text, an array of virtual DOM elements or a real DOM element.

A virtual DOM element:
```js
  {
    tag: 'input',
    attrs: { id: 'myInput' },
    on: { keyup: (e, next) => next(['text', e.target.value]) }
  }
```

But how to deal with virtual DOM elements? Well, you need [app](#app) function. It listens for DOM elements from your main component and render it in the HTML document.

Actual implementation removes everything in the HTML document and it inserts the DOM element from your component into the document. This a a simple but inefficient way to update DOM. A more efficient way would be to use a virtual dom diff/patch like [virtual-dom](https://github.com/Matt-Esch/virtual-dom) or [snabbdom](https://github.com/snabbdom/snabbdom). I'll try to integrate that later in cyclow but for now, little samples works very well. Actual update way is inspired by [real-dom](https://github.com/danculley/real-dom).

## Samples
The best way to learn about **cyclow** is check the samples. You can build and open them in a browser this way:
```
  git clone https://github.com/pmros/cyclow
  cd cyclow
  npm run samples
```

### switch
The previous sample.

### submission
This is a sample about component composition. It's based on [Composition in CycleJS, Choo, React and Angular2](http://blog.krawaller.se/posts/composition-in-cyclejs-choo-react-and-angular2/). It's a simple but very good way to explore how components work each others in several frameworks.

*submission* is a component that contains another component called *confirm*.

## API

### <a name="app"></a>```app(component, id, initialState)```

### <a name="dom"></a>```dom()```

### <a name="state"></a>```state()```

## TODO
- [ ] More documentation
- [ ] More samples
- [ ] Virtual DOM diff and patching
- [ ] Functional tests
