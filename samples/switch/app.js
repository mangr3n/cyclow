import { app } from '../../dist/cyclow'
import switcher from './switch'

const myapp = (id, initialState) => app(switcher(), id, initialState)

export default myapp
