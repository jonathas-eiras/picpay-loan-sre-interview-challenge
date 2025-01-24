Cypress.Commands.add('login', () => {

    cy.visit('/')
    cy.get('[id="mat-input-0"]').should('be.visible').type(Cypress.env('cpf'), { log: false })
    cy.intercept('POST', 'https://api.picpay.com/loan-nc-auth-lp/auth', (req) => {
        req.reply((res) => {
            return res
        })

    }).as('getStatus')

    cy.get('.bg-primary-500').should('be.visible').click()

    cy.wait('@getStatus').then((intercept) => {
        const statusCode = intercept.response.statusCode

        if (statusCode == 201) {
            cy.get('div.w-full > .font-normal').should('be.visible').contains("Insira o código de 5 dígitos enviado para")
            cy.url().should('be.equal', 'https://meus-emprestimos.picpay.com/')

        } else if (statusCode == 400) {
            cy.get('.w-44').should('be.visible')

        } else {
            cy.log(`Undefinied status: ${statusCode}`)
        }

    })

})

Cypress.Commands.add('createAccount', () => {
    cy.helpCenter()

    cy.origin('https://picpay.com', () => {
        
        cy.get('.sc-1g2sdvi-14').should('be.visible').click()
        cy.get('.lbOQXy').should('be.visible').click()
        cy.get('[id="CPF"]').should('be.visible').type(Cypress.env('cpf'))
        cy.get('[id="Nome"]').should('be.visible').type('João Silva')
        cy.get('[id="E-mail"]').should('be.visible').type('hifox13212@kurbieh.com')
        cy.get('[id="Celular"]').should('be.visible').type('83988301084')
        cy.get('.eGfPtb').should('be.visible').type('19081999')
        cy.get('[id="terms"]').should('be.visible').click()
        cy.get('.fzZklc').should('be.visible').click()


        cy.get('[id="qrCodeContainerFormLeads"]').should('be.visible')

        cy.visit('https://picpay.onelink.me/HPHx?af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&c=organic_web&af_channel=channel_web&deep_link_value=feed&af_sub3=%2Fcanais-de-atendimento&af_sub4=web&af_dp=picpay%3A%2F%2F&af_web_dp=https%3A%2F%2Fpicpay.com%2Fbaixar-o-app-picpay&is_retargeting=true&af_ss_ui=true&af_ss_gtm_ui=true&af_ss_qr=true')
        cy.get('.sc-1s3qae2-0').contains('Sucesso')


    })
})

Cypress.Commands.add('helpCenter', () => {
    cy.get('.text-primary-700').click()
    cy.iframeCookies()

})

Cypress.Commands.add('iframeCookies', () => {
    cy.origin('https://picpay.com', () => {
        cy.get('#rely-iframe-1', { timeout: 10000 })
            .should('exist')
            .then(() => {
                cy.get('body')
                    .find('#onetrust-accept-btn-handler')
                    .should('be.visible')
                    .click()

            });
        cy.get('.ot-floating-button__open').should('be.visible')
    })

});
