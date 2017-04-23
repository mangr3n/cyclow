const h = (tagName, properties = {}, children = []) => ({
  ...properties,
  tag: tagName,
  content: children
})

export default h
