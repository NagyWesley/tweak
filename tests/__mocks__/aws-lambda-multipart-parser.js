module.exports.parse = (mockedFile) => {
    if (mockedFile.File && Object.keys(mockedFile.File).length !== 0)
        return mockedFile
    return {
        File: {
            content: 'Mocked Content',
            filename: 'Mocked filename',
            contentType: 'image/jpeg'
        }
    }
}
