/// <reference types="Cypress" />

/**
 * @abstract:See overview of progress
 *
 * @criteria
  When viewing the dashboard as a logged in user:
  - The app gets my language and words progress from the server
  - I'm shown my language
  - I'm shown the words to learn for the language
  - I'm shown my guess count for correct and incorrect for each word
  - I'm given a button/link to start learning
  - I'm shown the total score for guessing words
*/
describe(`User story: User's dashboard`, function() {
  beforeEach(() => {
    cy.server()
      .route({
        method: 'GET',
        url: '/api/language',
        status: 200,
        response: 'fixture:language',
      })
      .as('languageRequest')
  })

  beforeEach(() => {
    cy.login().visit('/')
  })

  it('has h2 with title, total score, subtitle and link', () => {
    cy.fixture('language.json').then(({ language }) => {
      cy.get('main section').within($section => {
        cy.get('h2')
          .should('contain', language.name)

        cy.root()
          .should(
            'contain',
            `Your overall score: ${language.total_score}`,
          )

        cy.get('button').should(($buttons) => {
          expect($buttons, '2 items').to.have.length(2)
          expect($buttons.eq(0), 'first button').to.contain('Study Mode')
          expect($buttons.eq(1), 'second button').to.contain('Quiz Mode')
        })
      })
    })
  })

  it.only(`shows a DIV and scores for each item`, () => {
    cy.wait('@languageRequest')
    cy.fixture('language.json').then(({words}) => {
      cy.get('main li').within($main => {
        cy.get('h3')
          .should('have.text', words[0].original)
        cy.root()
          .should(
            'contain',
            `${words[0].correct_count}`
          )

        cy.root()
          .should(
            'contain',
            `${words[0].incorrect_count}`
          )
      })
    })
  })
})
