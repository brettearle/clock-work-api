import { parse } from 'node:url'
import characterRouter from './routes/characterRouter.js'

const characterRoutes = characterRouter

const allRoutes = {
    ...characterRoutes,
    //404 routes
    default: (req,res) => {
        res.writeHead(404, { 'content-type': 'application/json' }) //write head comes before other things
        res.write('404 not found!')
        res.end()
    }
}

function handler(req, res){
    const {
        url,
        method
    } = req

    const {
        pathname
    } = parse(url, true)

    const key =  `${pathname}:${method.toLowerCase()}`
    const chosen = allRoutes[key] || allRoutes.default
    return Promise.resolve(chosen(req, res)).catch(handleError(res))  
}

function handleError(response) {
    return error => {
        console.log('error has occured', error.stack)
        response.writeHead(500, { 'content-type': 'application/json' })
        response.write(JSON.stringify({
            error: 'internet server error'
        }))

        return response.end()
    }
}

export default handler