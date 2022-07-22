import { URLSearchParams } from 'node:url'

export default function bodyParse(chunks) {
    const data = Buffer.concat(chunks)
    const stringData = data.toString()
    const parsedData = new URLSearchParams(stringData)
    const dataObj = {}
    for (var pair of parsedData.entries()) {
        dataObj[pair[0]] = pair[1]
    }
    console.log("dataObj: ", dataObj)
    return dataObj
}