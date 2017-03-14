import SnabbdomRenderer from './SnabbdomRenderer'
import {Component} from 'graflow'

const run = (MainComponent, opts={}) => {
  document.addEventListener('DOMContentLoaded', () => {
    const init = opts.init || {}
    const Renderer = opts.renderer || SnabbdomRenderer

    const comp = Component({
      components: {
        main: MainComponent(),
        renderer: Renderer(opts.target),
        outMapper: Component((v, next) => { if (v.vdom) next(v.vdom) })
      },
      connections: [
        ['in', 'main'],
        ['main', 'outMapper'],
        ['outMapper', 'renderer']
      ]
    })

    comp.send({init})
  })
}

export default run
