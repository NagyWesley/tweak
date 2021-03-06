const multipart = require('aws-lambda-multipart-parser')

module.exports.parse = (event) => {
    // true all text files are present in text for after parsing,  false all text files are regular files with Buffer
    const spotText = true
    const { File } = multipart.parse(event, spotText)
    if (!['image/jpeg', 'image/png'].includes(File.contentType)) {
        throw new TypeError('Invalid event type')
    }
    return File
}
