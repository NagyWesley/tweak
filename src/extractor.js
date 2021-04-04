module.exports.handler = async (event) => {
    try {
        console.log({ event })
        return {
            statusCode: 200,
            body: JSON.stringify(data)
        }
    } catch (error) {
        console.error(error)
        return new Error(error)
    }
}
