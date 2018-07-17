import SnabbdomRenderer from './SnabbdomRenderer'
import {
  Component,
  Demuxer
} from 'graflow'


export const runComponent = (MainComponent, opts = {}) => {
  const init = opts.init || {};
  const Renderer = opts.renderer || SnabbdomRenderer;
  const debug = opts.debug || false;

  const main = MainComponent();

  const comp = Component({
    debug: debug ? ['main', 'renderer', 'in', 'out', 'demuxer'] : [],
    name: main.name + "Wrapper",
    components: {
      main,
      renderer: Renderer(opts.target),
      demuxer: Demuxer('vdom', 'signals')
    },
    connections: [
      ['in', 'main'],
      ['main', 'demuxer'],
      ['demuxer.vdom', 'renderer'],
      ['demuxer.signals', 'out']
    ]
  });
  comp.send({
    init
  });
  return comp;
};

export const run = (MainComponent, opts = {}) => {
  window.addEventListener('DOMContentLoaded', () => {
    return runComponent(MainComponent, opts);
  });
};

export default run;
