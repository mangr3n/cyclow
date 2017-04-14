import {Component} from 'graflow'

const endpoint = 'http://api.giphy.com/v1/gifs/random'
const apiKey = 'dc6zaTOxFJmzC'
const keyword = 'great'

const GiphyService = () => Component((v, next) => {
  next('')
  fetch(`${endpoint}?api_key=${apiKey}&tag=${keyword}`)
    .then(response => response.json())
    .then(json => next(json.data.fixed_height_downsampled_url))
})

export default GiphyService
