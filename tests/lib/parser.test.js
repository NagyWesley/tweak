const { parse } = require('../../src/lib/parser')
describe('Test Parser', () => {
    it('should fail for bad input', () => {
        expect(() => {
            parse({
                File: {
                    content: 'Mocked Content',
                    filename: 'Mocked filename',
                    contentType: 'file/pdf'
                }
            })
        }).toThrowError('Invalid event type')
    })
})
