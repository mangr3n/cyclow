import { app as appFactory } from '../../dist/cyclow'
import switchFactory from './switch'

const switcherAppFactory = (id, initialState) => {
  return appFactory(switchFactory(), id, initialState)
}

module.exports = switcherAppFactory
