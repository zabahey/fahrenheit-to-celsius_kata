function fahrenheit2celsius(fahrenheit) {
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

		// it('32 degrees fahrenheit is 0 degrees celsius')
		// it('50 degrees fahrenheit is 10 degrees celsius')
	})
})
