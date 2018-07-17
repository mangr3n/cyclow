import {
  runComponent
} from '../../dist/cyclow'
import Counter from './Counter'

window.addEventListener('DOMContentLoaded', () => {
  window.component = runComponent(Counter, {
    onload: true,
    debug: true
  });
});
