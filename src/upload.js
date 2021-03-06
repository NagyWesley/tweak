const { upload } = require('./lib/s3Wrapper')
const { parse } = require('./lib/parser')

module.exports.handler = async (event) => {
    try {
        const File = parse(event)
        const data = await upload(File.filename, File.content)
        return {
            statusCode: 200,
            body: JSON.stringify(data)
        }
    } catch (error) {
        console.error(error)
        return new Error(error)
    }
}
