import SnabbdomRenderer from './SnabbdomRenderer'
import {
  Component,
  Demuxer
} from 'graflow'


export const runComponent = (MainComponent, opts = {}) => {
  const init = opts.init || {};
  const Renderer = opts.renderer || SnabbdomRenderer;

  const comp = Component({
    components: {
      main: MainComponent(),
      renderer: Renderer(opts.target),
      demuxer: Demuxer('vdom', 'signals')
    },
    connections: [
      ['in','main'],
      ['main','demuxer'],
      ['demuxer.vdom','renderer'],
      ['demuxer.signals','out']
    ]
  });
  comp.send({init});
  return comp;
};

export const run = (MainComponent, opts = {}) => {
    window.addEventListener('DOMContentLoaded',() => {
      return runComponent(MainComponent,opts);
    });
};

export default run;
