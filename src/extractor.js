const { getObject } = require('./lib/s3Wrapper')
var gm = require('gm').subClass({ imageMagick: true })

module.exports.handler = async (event) => {
    try {
        const { Records } = event

        const Bucket = process.env.S3_BUCKET_NAME
        const Key = decodeURIComponent(
            Records[0].s3.object.key.replace(/\+/g, ' ')
        )

        const params = {
            Bucket,
            Key
        }
        var origimage = await getObject(params)

        return gm(origimage.Body, Key).identify(function (err, data) {
            console.log(err)
            // to write data here
            console.log(data)
        })
    } catch (error) {
        console.error(error)
        return new Error(error)
    }
}
