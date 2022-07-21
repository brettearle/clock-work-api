import { getCharacters, makeCharacter } from '../services/characterService.js'


const routes = {
    '/characters:get': async function (req, res) {
        const response = await getCharacters()
        res.write(JSON.stringify({ results: response }))
        return res.end()
    },
    '/characters:post': async function (req, res){
        const character = await makeCharacter({firstName:Johns})
        console.log(character)
    }
}

export default routes