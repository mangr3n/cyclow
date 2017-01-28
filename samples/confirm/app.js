import { app } from '../../dist/cyclow'
import confirm from './confirm'

const myapp = (id, initialState) => app(confirm(), id, initialState)

export default myapp
