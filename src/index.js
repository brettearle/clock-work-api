import http from 'node:http'
import handler from './handler.js'

const PORT = process.env.PORT || 8000

const server = http.createServer(handler).listen(PORT, () => {
    console.log(`server running on ${PORT}`)
})

export {
    server
}