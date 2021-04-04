const { parse } = require('../../src/lib/parser')
describe('Test Parser', () => {
    it('should fail for bad input', () => {
        expect(parse).toThrowError('Invalid event type')
    })
})
