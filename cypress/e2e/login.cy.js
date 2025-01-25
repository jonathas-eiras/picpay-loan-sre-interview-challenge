describe('Login', () => {
    it('Successfully or Error login', () => {
    
        cy.login()

    })
    
    it('Invalid CPF', () => {
    
        cy.loginInvalidCpf()

    })
})