describe('Gerenciamento de Perfis no Github', () => {

    beforeEach(() => {
        cy.login()
        cy.goTo('Tabela', 'Perfis do GitHub')
    });
    it('Deve poder cadastrar um perfil do GitHub', () => {
        cy.get('#name').type('Felipe')
        cy.get('#username').type('FelipeSantos')
        cy.get('#profile').type('QA')

        cy.contains('button', 'Adicionar Perfil').click()

        cy.get('#name').type('Felipe')
        cy.get('#username').type('Felps')
        cy.get('#profile').type('QA')

        cy.contains('button', 'Adicionar Perfil').click()

        cy.contains('table tbody tr', 'Felps')
            .should('be.visible')
            .as('trProfile')

        cy.get('@trProfile')
            .contains('td', 'Felipe')
            .should('be.visible')

        cy.get('@trProfile')
            .should('be.visible')
            .contains('td', 'QA')
            .should('be.visible')
    });

    it('Deve poder remover um perfil do github', () => {

        const profile = {
            name: 'Felipe Santos',
            username: 'Felps',
            desc: 'QA'
        }

        cy.get('#name').type(profile.name)
        cy.get('#username').type(profile.username)
        cy.get('#profile').type(profile.desc)

        cy.contains('button', 'Adicionar Perfil').click()

        cy.contains('table tbody tr', profile.username)
            .should('be.visible')
            .as('trProfile')

        cy.get('@trProfile').find('button[title="Remover perfil"]').click()

        cy.contains('table tbody', profile.username)
            .should('not.exist')
    })

    it('Deve validar o link do github', () => {

        const profile = {
            name: 'Felipe Santos',
            username: 'FelipeSantos',
            desc: 'QA'
        }

        cy.get('#name').type(profile.name)
        cy.get('#username').type(profile.username)
        cy.get('#profile').type(profile.desc)

        cy.contains('button', 'Adicionar Perfil').click()

        cy.contains('table tbody tr', profile.username)
            .should('be.visible')
            .as('trProfile')

        cy.get('@trProfile').find('a')
            .should('have.attr', 'href', 'https://github.com/' + profile.username)
            .and('have.attr', 'target', '_blank')
    })
});