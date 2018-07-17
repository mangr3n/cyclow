import BusBlock from './BusBlock'
import Bus from './Bus'
import Inputs from './Inputs'
import Outputs from './Outputs'
import State from './State'
import Events from './Events'
import View from './View'
import Dom from './Dom'
import CustomBlocks from './CustomBlocks'
import {
  Identity
} from 'graflow'

/**
 * 
 * @param {*} options 
 * @param on: an array of message handlers
 */
const Block = options => {
  const {
    on = {}, blocks = {}, view: stateToView = () => {}
  } = options
  const {
    state: stateHandler,
    bus: busHandler,
    ...eventHandlers
  } = on

  const bus = Bus(busHandler)

  return BusBlock({
    ...CustomBlocks(blocks),
    inputs: Inputs(),
    events: Events(eventHandlers),
    state: State(stateHandler),
    dom: Dom(),
    view: View(stateToView, bus),
    outputs: Outputs(),
    bus
  })
}

export default Block
