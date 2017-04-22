import {Block} from '../../dist/cyclow'

const Svg = () => Block({
  on: {
    'in.init': () => state => ({on: true}),
    'dom.switch': () => state => ({on: !state.on})
  },
  view: ({on}) => ({
    tag: 'svg',
    attrs: {width: 100, height: 100},
    content: {
      tag: 'circle',
      on: {click: 'switch'},
      attrs: {
        cx: 50,
        cy: 50,
        r: 40,
        stroke: 'orange',
        'stroke-width': 5,
        fill: on ? 'yellow' : 'black'
      }
    }
  })
})

export default Svg
