const flatten = v => [].concat(...v)

const mapObject = (obj, map) => Object.entries(obj)
  .reduce((acc, [key, value]) => {
    const v = map(key, value)
    if(isDefined(v)) {
      const [newKey, newValue] = v
      acc[newKey] = newValue
    }
    return acc
  }, {})

const toArray = arg => [].concat(arg)

const isArray = Array.isArray

const isFunction = arg => typeof arg === 'function'

const isString = arg => typeof arg === 'string'

const isObject = arg => typeof arg === 'object'

const isUndefined = arg => arg === undefined

const isDefined = arg => arg !== undefined

const unique = arg => [...new Set(arg)]

export {flatten, mapObject, unique, toArray,
  isArray, isFunction, isString, isObject, isUndefined, isDefined}
