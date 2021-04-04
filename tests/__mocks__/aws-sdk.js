module.exports.S3 = class {
    upload(params) {
        return Promise((resolve, reject) => {
            console.log('sss')
            resolve({
                ETag: '"deb030e80eba9c4579a2a5edf9ea0cbe"',
                Location:
                    'https://tweak-test-nagy.s3.amazonaws.com/a88d67b5-e485-4f92-b8ce-51372f8b7810',
                key: 'a88d67b5-e485-4f92-b8ce-51372f8b7810',
                Key: 'a88d67b5-e485-4f92-b8ce-51372f8b7810',
                Bucket: 'tweak-test-nagy'
            })
        })
    }
}
