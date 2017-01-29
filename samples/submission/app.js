import { app as appFactory } from '../../dist/cyclow'
import submission from './submission'

const submissionAppFactory = (id, initialState) => {
  return appFactory(submission(), id, initialState)
}

module.exports = submissionAppFactory
