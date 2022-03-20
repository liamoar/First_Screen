import { And, Given, Then, When } from "cypress-cucumber-preprocessor/steps"
import { LandingPage } from "../../../page/landingPage"
import { LoginPage } from "../../../page/LoginPage"
import * as loginPageObj from '../../../pageObject/LoginPageObj'
const landingP = new LandingPage
const loginP = new LoginPage

Given("I visit the website {string}",(url)=>{
    cy.visit(url)
})

Then("Navbar should contain Login button in the right side",()=>{
    landingP.verifyLoginButton()
})


Then("I click the Login button",()=>{
  landingP.clickLoginButton()
})

And("I validate the pop-up visibility in the middle of screen",()=>{
    loginP.verifyLoginModelOpen()
})


//
And('I verify the login option consists of',()=>{
   loginPageObj.verifyLoginOptions()
})

//
When("I hover and click cross icon to close the popup",()=>{
    loginPageObj.closeLoginModelPopUp()
})
Then("pop up should be closed",()=>{
    landingP.verifyLoginButton()
    //loginP.verifyLoginModelClose()
})

//
And("I click Continue with Email button",()=>{
    loginP.clickContinueWithEmailButton()
})

Then('I verify that the continue with email page consist of',()=>{
   loginPageObj.verify_Continue_With_Email_ModelContent()
})

//login
And('I type {string} in email input section',(email)=>{
   loginP.typein_Continue_with_email_section_EmailInputField(email)
})

And('I verify the next button is enabled',()=>{
    loginP.verify_Continue_with_email_section_next_button_IsEnabled()
})

And('I click Next Button',()=>{
    loginP.click_Continue_with_email_section_next_button()
})

Then('Navbar login button is changed to user icon',()=>{
   landingP.verifyUserLoggednIcon()
})