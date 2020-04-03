const generateUuid = require('../../src/utils/generateRandomId')

describe('Generate a uuid string', () => {
    it('should generate an uuid string', () => {
        const id = generateUuid()
        expect(id).toHaveLength(8)
    })
})
