const { cyan } = require("colorette")

describe('Test that my site is working', () => {
    it('Visits the localhost', () => {
        cy.visit('http://localhost:3000')
    })
})
