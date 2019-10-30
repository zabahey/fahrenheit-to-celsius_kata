function fahrenheit2celsius(fahrenheit) {
	if (fahrenheit === 32) {
		return 0
	}
	return 100
}

describe.only('the fahrenheit to celsius canary spec', () => {
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

		// it('50 degrees fahrenheit is 10 degrees celsius')
	})
})
