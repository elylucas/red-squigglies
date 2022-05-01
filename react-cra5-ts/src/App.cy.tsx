import App from './App'
// import { mount } from 'cypress/react'

describe('App.cy.tsx', () => {
  it('playground', () => {
    cy.mount(<App />)
  })
})