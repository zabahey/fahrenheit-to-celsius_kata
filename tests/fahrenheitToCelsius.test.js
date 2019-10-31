function fahrenheit2celsius(fahrenheit) {
	return (fahrenheit - 32) * (5 / 9)
}

describe('the fahrenheit to celsius canary spec', () => {
	it('shows the infrastructure works', () => {
		expect(true).toBe(true)
	})

	describe('fahrenheit to celsius converter behaves as follows', () => {
		it('212 degrees fahrenheit is 100 degrees celsius', () => {
			expect(fahrenheit2celsius(212)).toBe(100)
		})

		it('32 degrees fahrenheit is 0 degrees celsius', () => {
			expect(fahrenheit2celsius(32)).toBe(0)
		})

		it('50 degrees fahrenheit is 10 degrees celsius', () => {
			expect(fahrenheit2celsius(50)).toBe(10)
		})

		it('-22 degrees fahrenheit is -30 degrees celsius', () => {
			expect(fahrenheit2celsius(-22)).toBe(-30)
		})
	})
})
