import { getCharacters, makeCharacter } from '../services/characterService.js'
import bodyParse from '../utils/bodyParse.js'

const routes = {
    '/characters:get': async function (req, res) {
        const response = await getCharacters()
        res.write(JSON.stringify({ results: response }))
        return res.end()
    },
    '/characters:post': async function (req, res){
        const chunks = []
        await req.on('data', (chunk) => {
            chunks.push(chunk)
        })
        const bodyObj = bodyParse(chunks)
        const character = await makeCharacter(bodyObj)
        res.writeHead(201, { 'content-type': 'application/json' })
        res.write(JSON.stringify(character))
        return res.end()
    }
}

export default routes