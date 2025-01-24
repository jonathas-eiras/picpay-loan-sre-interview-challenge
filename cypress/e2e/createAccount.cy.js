describe('Create Account and Login', () => {
    it('Succeffully Account and Login', () => {

        cy.createAccount()
        cy.origin('https://picpay.com', () => {
            cy.visit('https://picpay.onelink.me/HPHx?af_js_web=true&af_ss_ver=2_9_0&pid=organic_web&c=organic_web&af_channel=channel_web&deep_link_value=feed&af_sub3=%2Fcanais-de-atendimento&af_sub4=web&af_dp=picpay%3A%2F%2F&af_web_dp=https%3A%2F%2Fpicpay.com%2Fbaixar-o-app-picpay&is_retargeting=true&af_ss_ui=true&af_ss_gtm_ui=true&af_ss_qr=true')
            cy.get('.sc-1s3qae2-0').contains('Sucesso')
        })

        cy.login()

    })
})