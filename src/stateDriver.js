import component from 'graflow'

const stateDriver = (initialState={}) => {
  let state = initialState

  return component({
    components: {
      transform: component((v, next) => {
        state = v(state)
        next(state)
      })
    }
    , connections: [
      ['in.transformation', 'transform']
      , ['transform', 'out.state']
    ]
    , inputs: ['transformation']
    , outputs: ['state']
  })
}

export default stateDriver
