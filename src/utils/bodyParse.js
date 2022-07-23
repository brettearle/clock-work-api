export default async function bodyParse(req) {
    let body = ""
        await req.on('data', (chunk) => {
            body = body + chunk.toString()
        })
    return body
}