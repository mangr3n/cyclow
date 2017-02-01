import SimpleRenderer from './SimpleRenderer'
import Component from 'graflow'

const run = (MainComponent, opts={}) => {
  document.addEventListener("DOMContentLoaded", () => {
    const init = opts.init || {}
    const Renderer = opts.renderer || SimpleRenderer

    const comp = Component({
      outputs: [],
      components: {
        main: MainComponent(),
        renderer: Renderer(opts.target)
      },
      connections: [
        ['in', 'main.init'],
        ['main.dom', 'renderer']
      ]
    })

    comp.in.default.send(init)
  })
}

export default run
