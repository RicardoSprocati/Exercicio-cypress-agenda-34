/// <reference types="cypress" />

describe('end  2 end', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('adicionar, editar  e remover', () => {
        cy.get('input[type="text"]').type('ricardo')
        cy.get('input[type="email"]').type('ricardo@hotmail')
        cy.get('input[type="tel"]').type('48 999999')
        cy.get('.adicionar').click()

        cy.screenshot('1inserido')

        cy.contains('.contato', 'ricardo').within(() => {
            cy.get('.edit').click()
        })
        cy.get('input[type="text"]').clear().type('Ricardo sprocati')
        cy.get('.alterar').click()

        cy.contains('.contato', 'Ricardo sprocati').within(() => {
            cy.get('.delete').click()
        })

        cy.screenshot('2editado')

        cy.screenshot('3removido')
    })
})