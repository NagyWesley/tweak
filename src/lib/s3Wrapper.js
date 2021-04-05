const Bucket = process.env.S3_BUCKET_NAME

const AWS = require('aws-sdk')
var s3 = new AWS.S3()

module.exports.upload = (Key, Body) => {
    return new Promise((resolve, reject) => {
        var params = { Bucket, Key, Body }
        s3.upload(params, function (err, data) {
            if (err) {
                console.error(err.message)
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}

module.exports.getObject = (params) => {
    return s3.getObject(params).promise()
}
