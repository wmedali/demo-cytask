let faker = require('faker')
describe('Create Account using API', () => {
    it('BlazeDemo', () => {
        const username = faker.internet.email()
        const password = 'azerty123*'
        let base64Password = Buffer.from(password).toString('base64')
        cy.task('createAccount', { email: username, password: base64Password })
        .then(creationStatus => {
            cy.log(creationStatus)
            //Ici vérifier qu'on peut se connecter avec succès avec l'utilisateur
            //Avec les identitfiants username && password
        })
    });
})