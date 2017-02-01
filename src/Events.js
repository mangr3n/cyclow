import { Component, Mapper, Guard, Demuxer} from 'graflow'

const Events = (events, outputs) => {
  const outs = outputs.concat('state')
  return Component({
    outputs: outs,
    components: {
      events: Mapper(([e, payload]) => events[e](payload)),
      guard:  Guard({
        function: v => typeof v === 'function',
        object:   v => typeof v === 'object'
      }),
      demux: Demuxer(...outs)
    },
    connections: [
      ['in', 'events'],
      ['events', 'guard'],
      ['guard.function', 'out.state'],
      ['guard.object', 'demux']
    ].concat(outputs.map(output => [`demux.${output}`, `out.${output}`]))
  })
}

export default Events
