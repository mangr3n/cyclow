# cyclow

[![npm version](https://badge.fury.io/js/cyclow.svg)](https://badge.fury.io/js/cyclow)

**cyclow**  is a reactive frontend framework for JavaScript. It's inspired in another frameworks like [Cycle.js](https://cycle.js.org/) and [TSERS](https://github.com/tsers-js/core). It uses [graflow](https://github.com/pmros/graflow) as stream library.

A cyclow app is composed by a main [graflow](https://github.com/pmros/graflow) component that can contain another graflow components inside.

The main component usually looks like this:

![cyclow diagram](https://rawgit.com/pmros/cyclow/master/diagrams/cyclow.svg)

The main parts are:
- **Inputs**
  - **init**: The component receives this input when app starts. It's useful to set the initial state of the component in order to get ready to work.
  - Other inputs: Usually your component need to receive signals from another components or events out there.
- **Outputs**
  - **dom**: A [virtual DOM element](#virtual-dom-element) that will be rendered into the HTML document.
  - Other outputs: Usually your component need to send signals to another components or listeners out there.
- **Components**
  - **state**: It receives a state transformation as input and outputs a new state. Inspired by [TSERS](https://github.com/tsers-js/core) state driver. You can create a state component easily with [stateDriver](#state), that is a state component factory.
  - **dom**: It converts state into a [virtual DOM element](#virtual-dom-element). Also it outputs DOM events of that DOM element. You can create a dom component easily with [domDriver](#state), that is a dom component factory.
  - **events**: It's an events hub, that is it receive all events (from DOM or from component inputs) and it converts in a state tranformation or component output.

Inputs and outputs are the public part or interface of the component.

Components (and connections) are private, that is they are inside the black box. They are the implementation of the component.

Note that state, dom and events are interconnected in a cycle.

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

But how to deal with virtual DOM elements? Well, you need [app](#app) function. It listens for virtual DOM elements from your main component and it convert to a real DOM element and render it in HTML document.

Actual implementation removes everything in the HTML document and it create the real DOM element again and it inserts into document. This a a simple but inefficient way to update DOM. A more efficient way would be use a virtual dom diff/patch like [virtual-dom](https://github.com/Matt-Esch/virtual-dom) or [snabbdom](https://github.com/snabbdom/snabbdom). I'll try to integrate that later in cyclow but for now, little samples works very well. Actual update way is inspired by [real-dom](https://github.com/danculley/real-dom).

## Samples
The best way to learn about **cyclow** is check the samples. You can build and open them in a browser this way:
```
  git clone https://github.com/pmros/cyclow
  cd cyclow
  npm run samples
```

### switch
This is the most simple sample. switch is a component that turn on if you click it. If you click it again, it will turn off.

You can use this sample as a startup for your own cyclow app.

### submission
This is a sample about component composition. It's based on [Composition in CycleJS, Choo, React and Angular2](http://blog.krawaller.se/posts/composition-in-cyclejs-choo-react-and-angular2/). It's a simple but very good way to explore how components work each others in several frameworks.

*submission* is a component that contains another component called *confirm*.

## API

### <a name="app"></a>```app(component, id, initialState)```

### <a name="dom"></a>```domDriver()```

### <a name="state"></a>```stateDriver()```

## TODO
- [ ] More documentation
- [ ] More samples
- [ ] Virtual DOM diff and patching
- [ ] Functional tests
