export class LoginPage{
    
    verifyLoginModelOpen(){
       cy.get('#login-modal > div')
        .should('be.visible')
    }

    verifyLoginModelClose(){
        cy.get('#login-modal > div')
        .should('not.be.visible')
    }

    clickLoginModuleCrossIconPopUpClose(){
        cy.get('[data-testid="modal-close-button"]')
        .should('be.visible')
        .click()
    }

    getContinueWithEmailButton(){
        cy.get('[data-testid="login-email-button"]')
        .should('be.visible')
        .and('contain.text',"Continue with email")
        .wait(2000)
    }

    clickContinueWithEmailButton(){
        cy.get('[data-testid="login-email-button"]')
        .should('be.visible')
        .click()
        .wait(2000)
    }

    getGoogleButton(){
        cy.get('[data-testid="login-google-button"]')
        .should('be.visible')
        .and('contain.text',"Google")
        .wait(1000)
    }

    clickGoogleButton(){
        cy.get('[data-testid="login-google-button"]')
        .should('be.visible')
        .click()
        .wait(2000)
    }

    getFacebookButton(){
        cy.get('[data-testid="login-facebook-button"]')
        .should('be.visible')
        .and('contain.text',"Facebook")
        .wait(1000)
    }

    clickFackebookButton(){
        cy.get('[data-testid="login-facebook-button"]')
        .should('be.visible')
        .click()
        .wait(2000)
    }

    getAppleButton(){
        cy.get('[data-testid="login-apple-button"]')
        .should('be.visible')
        .and('contain.text',"Apple")
    }

    clickAppleButton(){
        cy.get('[data-testid="login-apple-button"]')
        .should('be.visible')
        .click()
        .wait(1000)
    }

    //**===========contiune with email section */

    verify_Continue_With_Email_Section_CloseIcon(){
        cy.get('[data-testid="modal-close-button"]')
        .should('be.visible')
        .wait(1000)
    }

    click_Continue_With_Email_Section_CloseIcon(){
     cy.get('[data-testid="modal-close-button"]')
     .should('be.visible')
     .click()
     .wait(2000)
    }

    verify_Continue_With_Email_Section_backIcon(){
        cy.get(".BpkIcon_bpk-icon--rtl-support__OGQ1M")
        .should('be.visible')
    }

    click_Continue_With_Email_Section_backIcon(){
     cy.get(".BpkIcon_bpk-icon--rtl-support__OGQ1M")
     .should('be.visible')
     .click()
     .wait(2000)
    }

    verify_Continue_with_email_section_title(){
        cy.get('[data-testid="account-detection-text"]')
        .should('be.visible')
        .and('contain.text',"What's your email address?")
    }

    typein_Continue_with_email_section_EmailInputField(email){
      cy.get('#email')
      .should('be.visible')
      .type(email)
      .wait(2000)
    }
    
    verify_Continue_with_email_section_next_button_IsDisabled(){
        cy.get('[data-testid="account-detection-button"]')
        .should('be.disabled')
        .wait(1000)
    }
 
    verify_Continue_with_email_section_next_button_IsEnabled(){
        cy.get('[data-testid="account-detection-button"]')
        .should('not.be.disabled')
        .wait(1000)
    }


    click_Continue_with_email_section_next_button(){
        cy.get('[data-testid="account-detection-button"]')
        .click()
        .wait(2000)
    }
}