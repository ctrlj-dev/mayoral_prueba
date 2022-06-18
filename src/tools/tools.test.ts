import * as tools  from './tools'

const calculateDiscount = (price: number, discount: number): number => price - (price * discount / 100);


describe('dummy spec', () => {
    test('should pass spec', () => {
        // Arrange
        const price = 2;
        const discount = 80;
        // Act
        const result = tools.calculateDiscount(price, discount)
        // Assert
        expect(result).toEqual(5)
    })
})