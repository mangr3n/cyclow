import { app } from '../../dist/cyclow'
import submission from './submission'

const myapp = (id, initialState) => app(submission(), id, initialState)

export default myapp
