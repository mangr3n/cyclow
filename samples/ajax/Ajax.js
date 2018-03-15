import {Block} from '../../dist/cyclow'
import GiphyService from './GiphyService'
import { h } from 'snabbdom';

const Ajax = () => Block({
  blocks: {service: GiphyService()},
  on: {
    'in.init': () => 'service',
    'dom.click': () => 'service',
    service: response => state => response
  },
  // view: state => ({content: [
  //   {tag: 'h1', content: 'Cyclow: a framework made for you'},
  //   {tag: 'img.main', attrs: {src: state}},
  //   state === ''
  //     ? 'Loading...'
  //     : {tag: 'button', on: {click: 'click'}, content: 'More'}
  // ]})
  view: state => ({ content: [
    h('h1','Cyclow: a framework made for you'),
    h('img.main', { attrs: {src: state } }),
    state === ''
      ? 'Loading...'
      : h('button',{ on: {click:'click'}},'More')
  ]})
})

export default Ajax
