import { When, Then,And} from "cypress-cucumber-preprocessor/steps"
import signin from "../../pages/signIntoAccount.po"


When("Click on signin link", () => {
    cy.contains(signin.singninLink()).click()
})
Then("Enter Email Address", () => {

    cy.readFile("cypress/fixtures/credentials.json").then(data => {
       
        cy.get(signin.EnterEmail()).type(data.Email)
    })

})
And("Enter Password", () => {

    cy.readFile("cypress/fixtures/credentials.json").then(data => {
        cy.xpath(signin.EnterPassword()).type(data.password)
    })
    
})
And("click on Sign In Button", () => {
    cy.get(signin.clickOnSignInButton()).click()
})
And("assert sign in or not", () => {
    cy.url(signin.assertsignin()).should("contains","magento.softwaretestingboard.com")
})

