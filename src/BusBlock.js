import {Component} from 'graflow'

const BusBlock = blocks => {
  const blockNames = Object.keys(blocks)

  const connectionsToBus = blockNames
    .filter(x => !(['outputs', 'bus'].includes(x)))
    .map(name => [name, 'bus'])

  const connectionsFromBus = blockNames
    .filter(x => !(['inputs', 'bus'].includes(x)))
    .map(name => ['bus', name])

  const connections = [
    ...connectionsToBus,
    ...connectionsFromBus,
    ['in', 'inputs'],
    ['outputs', 'out']
  ]

  return Component({connections, components: blocks})
}

export default BusBlock
