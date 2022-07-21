import { getCharacters } from '../services/characterService.js'


const routes = {
    '/characters:get': async function (req, res) {
        const response = await getCharacters()
        res.write(JSON.stringify({ results: response }))
        return res.end()
    }
}

export default routes