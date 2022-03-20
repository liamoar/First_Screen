export class LandingPage{
    
    verifyLoginButton(){
        cy.get('.LoginButton_DesktopLoginButton__MWM1M > .BpkButtonBase_bpk-button__YTg2Y')
        .should('be.visible').and('contain.text',"Log in")
    }

    verifyUserLoggednIcon(){
        cy.get('#login-button-nav-item')
        .should('be.visible')
    }

    clickLoginButton(){
        cy.get('.LoginButton_DesktopLoginButton__MWM1M > .BpkButtonBase_bpk-button__YTg2Y').click().wait(2000)
    }

    //**==========Navbar section====== */

    getAllNavbarItes(){

    }

    getFlightTabSection(){

    }

    getHotelsTabSection(){

    }


    //** Banner sections */

   getBannerSectionTitle(){

   }

   //**searc module */
    
   getAllSearchHeaders(){

   }

   getRoundTrip(){

   }

   getOneway(){

   }

   getMultiCity(){

   }

   //**form fields */
   getFromTitle(){
    cy.get('#fsc-origin-search').clear().type()
   }

   typeInFromSection(){

   }

   getFromSectionSuggestionLists(){

   }

   selectFromSectionSuggestionFirstItem(){

   }

   typeInToSection(){

   }

   selectInDepartSection(){

   }

   selectInRetrunSection(){

   }

   selectInCabinClassTravelerSection(){

   }

   fromSectionAddNearByAirportsCheckbox(){

   }

   fromSectionNonStopFlightOnlyCheckbox(){

   }
   toSectionAddNearByAirportsCheckbox(){

   }

   clickSearchFlightsButton(){
       
   }

}