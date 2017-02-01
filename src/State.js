import Component from 'graflow'

const State = (initialState={}) => {
  let state = initialState

  return Component({
    components: {
      transform: Component((v, next) => {
        state = v(state)
        next(state)
      })
    },
    connections: [
      ['in.transformation', 'transform'],
      ['transform', 'out.state']
    ],
    inputs: ['transformation'],
    outputs: ['state']
  })
}

export default State
