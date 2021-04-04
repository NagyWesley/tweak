const multipart = require('aws-lambda-multipart-parser')

module.exports.parse = (event) => {
    // true all text files are present in text for after parsing,  false all text files are regular files with Buffer
    const spotText = true
    const { File } = multipart.parse(event, spotText)
    return File
}
