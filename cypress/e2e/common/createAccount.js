import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import homaPage from "../../pages/homePage.po"
import createAccount from "../../pages/createAccount.po"
import accountPage from "../../pages/accountPage.po"
import signoutPage from "../../pages/signoutPage.po"

Given("Open Magento Webpage", () => {

    cy.visit("/")

    
})

When("Click on create Account link", () => {

    cy.contains(homaPage.createAccountLink()).click()
})

And("Enter Firstname and Lastname", () => {

    cy.get(createAccount.firstName()).type("Fareedha")
    cy.get(createAccount.lastName()).type("M")
})

And("Enter Email and Password and retype password", () => {
    const r = (Math.random()+1).toString(36).substring(7)
    const emailaddress = "fareedha"+r+"@gmail.com"
    const pass = "Fareedha@630"

    cy.writeFile("cypress/fixtures/credentials.json", { "Email": emailaddress, "password": pass })

    cy.get(createAccount.EmailAddress()).type(emailaddress)
    cy.get(createAccount.password()).type(pass)
    cy.get(createAccount.confirmPassword()).type(pass)

})
Then("click on Submit button", () => {

    cy.xpath(createAccount.submitButton()).click()
})
And("Assert login success page", () => {
    cy.url().should('eq', accountPage.assertAccountPage())
})
And("signout from the page", () => {
    cy.get("button[type='button']").eq(0).click()
    cy.contains("Sign Out").click({ force: true })
})
And("Assert singout sucussful", () => {
    cy.url().should('eq', signoutPage.signoutAssert())

})