import {
  getCharacters,
  makeCharacter,
  getCharacterById,
  updateCharacterById,
  deleteCharacter
} from '../services/characterService.js'
import bodyParse from '../utils/bodyParse.js'
import defaultHeader from '../utils/defaultHeader.js'

const routes = {
  '/characters:get': async function (req, res) {
    const response = await getCharacters()
    res.writeHead(200, defaultHeader)
    res.write(JSON.stringify({ results: response }))
    return res.end()
  },
  '/characters:post': async function (req, res) {
    const bodyObj = await bodyParse(req)
    const data = JSON.parse(bodyObj)
    console.log('JSON: ', data)
    const character = await makeCharacter(data)
    res.writeHead(201, defaultHeader)
    res.write(JSON.stringify(character))
    return res.end()
  },
  '/characters/getone/byid:get': async function (req, res) {
    const url = req.url.split('?')
    const query = url[1]
    const params = new URLSearchParams(query)
    const id = params.get('id')
    const response = await getCharacterById(id)
    res.writeHead(200, defaultHeader)
    res.write(JSON.stringify(response))
    return res.end()
  },
  '/characters/updateone/byid:get': async function (req, res) {
    const url = req.url.split('?')
    const query = url[1]
    const params = new URLSearchParams(query)
    const id = params.get('id')
    const bodyObj = await bodyParse(req)
    const data = JSON.parse(bodyObj)
    const response = await updateCharacterById(id, data)
    res.writeHead(201, defaultHeader)
    res.write(JSON.stringify(response))
    return res.end()
  },
  '/characters/deleteone:delete': async function (req, res) {
    const url = req.url.split('?')
    const query = url[1]
    const params = new URLSearchParams(query)
    const id = params.get('id')
    const response = deleteCharacter(id)
    res.writeHead(201, defaultHeader)
    res.write(JSON.stringify(response))
    return res.end()
  }
}

export default routes
