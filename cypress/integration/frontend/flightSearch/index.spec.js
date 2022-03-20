import { And, Given, Then, When } from "cypress-cucumber-preprocessor/steps"


Given('I vist the website {string}',(url)=>{
    // cy.session(url=>{
    //     cy.visit(url)
    // })
    cy.visit('https://www.skyscanner.ae/')
})

Given('I click somthing',()=>{
    cy.log('test')
})

Then('I can see search input form as',(type)=>{
    
    cy.log(type.hashes()[0].input_fields)
    //from
    cy.get('.SingleDestControls_origin-wrapper__YzBkN > .LocationSelector_LocationSelector__NTU4M > .BpkLabel_bpk-label__MDg2Y')
    .should('contain.text',type.hashes()[0].input_fields)

    cy.get('.SingleDestControls_destination-wrapper__NDQyN > .LocationSelector_LocationSelector__NTU4M > .BpkLabel_bpk-label__MDg2Y')
    .should('contain.text',type.hashes()[1].input_fields)

    cy.get('.DateRangeSelector_DateRangeSelector__NmIxN > :nth-child(1) > .BpkLabel_bpk-label__MDg2Y')
    .should('contain.text',type.hashes()[2].input_fields)

    cy.get('.DateRangeSelector_DateRangeSelector__NmIxN > :nth-child(2) > .BpkLabel_bpk-label__MDg2Y')
    .should('contain.text',type.hashes()[3].input_fields)

    cy.get('.CabinClassTravellersSelector_form-item__YjE2M > .BpkLabel_bpk-label__MDg2Y')
    .should('contain.text',type.hashes()[4].input_fields)

})

//! From input filed validation
Given('I focus on From section i can see default location as value',()=>{
    cy.get('#fsc-origin-search').should('have.value','Dubai (Any)')
})
Then('I clear the input field and type {string}',(text)=>{
    cy.get('#fsc-origin-search').clear();
    cy.get('#fsc-origin-search').type(text);
})
Then('I can see Suggestion list appear below from section input',()=>{
    cy.get('#react-autowhatever-fsc-origin-search').should('be.visible')
})
 And('I can verify that list contains {string} in Suggestion',(text)=>{
    cy.get('#react-autowhatever-fsc-origin-search--item-0 > .BpkAutosuggest_bpk-autosuggest__suggestion__OGI4N')
    .then(el=>{
        expect(el[0].textContent).to.eql(text)
    })
 })
 When('I Click the first list from Suggestion',()=>{
    cy.get('#react-autowhatever-fsc-origin-search--item-0 > .BpkAutosuggest_bpk-autosuggest__suggestion__OGI4N')
    .click().wait(1000)
 })
 Then('I can see suggestion list disappear',()=>{
    cy.get('#react-autowhatever-fsc-origin-search').should('not.be.visible')
    cy.scrollTo('top')
 })
 And('input filed value is {string}',(text)=>{
    cy.get('#fsc-origin-search').should('have.value',text)
 })

 //!! ===========end==========

 //** To input field validation */
 Given('I focus in To section I can see input filed is empty with placeholder text {string}',(text)=>{
    cy.get('#fsc-destination-search').should('have.attr','placeholder',text).and('not.have.value')
 })
 When('I click this section',()=>{
    cy.get('#fsc-destination-search').click()
 })
 Then('I can see empty suggestion list appear below to section input',()=>{
    cy.get('#react-autowhatever-fsc-destination-search').should('be.visible')
 })

 And('I can see the title is {string}',(text)=>{
    cy.get('.BpkAutosuggest_bpk-autosuggest__suggestion-value__ZDMxM > span')
    .should('contain.text',text)
   
 })

 And('I can see the description as {string}',(text)=>{
    cy.get('.BpkAutosuggest_bpk-autosuggest__suggestion-sub-heading__Nzk4Y > span')
    .should('contain.text',text)

 })
 Then('I click this section to see that input value is {string}',(text)=>{
    cy.get('.BpkAutosuggest_bpk-autosuggest__suggestion-sub-heading__Nzk4Y > span').click()
    cy.get('#fsc-destination-search').should('have.value',text)
 })

 Then('I clear the input fild and type {string}',(text)=>{
    cy.get('#fsc-destination-search').clear().type(text).wait(2000)
 })
 And('I can see suggestion list with {string} as first element',(text)=>{
    cy.get('#react-autowhatever-fsc-destination-search').should('be.visible')
    cy.get('#react-autowhatever-fsc-destination-search--item-0 > .BpkAutosuggest_bpk-autosuggest__suggestion__OGI4N')
    .should('contain.text',text)
 })
 When('I select the first element',(text)=>{
    cy.get('#react-autowhatever-fsc-destination-search--item-0 > .BpkAutosuggest_bpk-autosuggest__suggestion__OGI4N')
    .click().wait(1000)
 })
 Then('Suggession list disappear and input filed value is {string}',(text)=>{
    cy.get('#react-autowhatever-fsc-destination-search').should('not.be.visible')
    cy.get('#fsc-destination-search')
    .should('have.value',text)
    cy.scrollTo('top')
 })


 //**     ========================end=========== */

 //** search functionality start */
 When('I click the Search Flight Button',()=>{
       cy.scrollTo('top').wait(2000)
      cy.get('.BpkButtonBase_bpk-button__NTM4Y').click().wait(4000)
       
       
 })
 Then('The url redirect to search page and validate the data',()=>{
     cy.url()
     .should('contain','/transport/flights')
     cy.clearCookies() 
     cy.reload()
     cy.wait(2000)
     cy.get('.App_container__OGNkZ').then(el=>{
         expect(el[0].textContent).to.equal('Dubai (Any) - Kathmandu (KTM)1 adultEconomy')
     })
 })