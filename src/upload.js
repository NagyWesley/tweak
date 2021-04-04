const { v4: uuidv4 } = require('uuid')
const { upload } = require('./lib/s3Adapter')
const { parse } = require('./lib/parser')

module.exports.handler = async (event) => {
    try {
        const Key = uuidv4()
        const File = parse(event)
        const data = await upload(Key, File.content)
        return {
            statusCode: 200,
            body: JSON.stringify(data)
        }
    } catch (error) {
        console.log(error)
        return new Error(error)
    }
}
