const multipart = require('aws-lambda-multipart-parser')

module.exports.parse = (event) => {
    // should have proper check here
    if (typeof event !== 'object') {
        throw new TypeError('Invalid event type')
    }
    // true all text files are present in text for after parsing,  false all text files are regular files with Buffer
    const spotText = true
    const { File } = multipart.parse(event, spotText)
    return File
}
