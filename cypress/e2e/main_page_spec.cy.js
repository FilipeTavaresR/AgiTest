import { MAIN_PAGE_ELEMENTS as mpe } from "../support/elements/main_page_elements"

const searchKey = 'teste'

describe('Agiblog Tests', () => {

  beforeEach(() => {
    cy.visit('/')
  })

  it('Search button should work', () => {
    cy.get(mpe.buttonSearch).should('be.visible')
    cy.get(mpe.buttonSearch).click()
    cy.get(mpe.formDesktopSearch).should('be.visible')
    cy.get(mpe.inputDesktopSearch).type(searchKey)
    cy.get(mpe.buttonSearchSubmit).click()
    cy.url().should('be.equal', 'https://blogdoagi.com.br/?s='+ searchKey)
    cy.contains('Resultados da busca por: '+ searchKey).should('be.visible')
  })

  it('Search button should keep text in search field', () => {
    cy.get(mpe.buttonSearch).should('be.visible')
    cy.get(mpe.buttonSearch).click()
    cy.get(mpe.formDesktopSearch).should('be.visible')
    cy.get(mpe.inputDesktopSearch).type(searchKey)
    cy.get(mpe.buttonSearchSubmit).click()
    cy.url().should('be.equal', 'https://blogdoagi.com.br/?s='+ searchKey)
    cy.reload()
    cy.get(mpe.buttonSearch).click()
    cy.get(mpe.formDesktopSearch).should('be.visible')
    cy.get(mpe.inputDesktopSearch).should('have.value', searchKey)
  })
})