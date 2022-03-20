describe('To Test the Round Trip Search Functionality', () => {
    let date_r = {}

    before(() => {
        cy.visit('https://www.skyscanner.ae/')
    });

    it.skip('visit', () => {
      
      cy.log('test')
      cy.get('#fsc-origin-search').click()
      /* ==== Generated with Cypress Studio ==== */
      cy.get('#fsc-origin-search').clear();
      cy.get('#fsc-origin-search').type('ktm');
    //   cy.get('.BpkAutosuggest_bpk-autosuggest__suggestion-value__ZDMxM > :nth-child(2) > strong').click();
    //   cy.get('#fsc-destination-search').clear();
    //   cy.get('#fsc-destination-search').type('dubai');
    //   cy.get('#react-autowhatever-fsc-destination-search--item-0 > .BpkAutosuggest_bpk-autosuggest__suggestion__OGI4N > .BpkAutosuggest_bpk-autosuggest__suggestion-content__OTQxN > .BpkAutosuggest_bpk-autosuggest__suggestion-inner__NzNjY > div > .BpkAutosuggest_bpk-autosuggest__suggestion-value__ZDMxM > :nth-child(2)').click();
    //   cy.get('#depart-fsc-datepicker-button > .DateInput_DateInput--text__MzMyY').click();
    //   cy.get(':nth-child(2) > .BpkHorizontalNavItem_bpk-horizontal-nav__link__MGM4N').click();
    //   cy.get(':nth-child(1) > .BpkHorizontalNavItem_bpk-horizontal-nav__link__MGM4N').click();
    //   cy.get(':nth-child(4) > :nth-child(4) > .BpkCalendarDate_bpk-calendar-date__MTdlO > span').click();
    //   cy.get('#return-fsc-datepicker-button > .DateInput_DateInput--text__MzMyY').click();
    //   cy.get(':nth-child(5) > :nth-child(3) > .BpkCalendarDate_bpk-calendar-date__MTdlO > span').click();
    //   cy.get('.CabinClassTravellersSelector_CabinClassTravellersSelector__triggertext__ZTM1N').click();
    //   cy.get('.BpkLink_bpk-link__MzIwM').click();
      /* ==== End Cypress Studio ==== */
    });

    it('To Test input field ""From"" section', () => {
        //clear the input filed
        cy.get('#fsc-origin-search').clear();
        //type dubai
        cy.get('#fsc-origin-search').type('dubai');
       
        //suggestion list should be seen
        cy.get('#react-autowhatever-fsc-origin-search').should('be.visible')
        //suggestion first list consist for dubai text and click that
        cy.get('#react-autowhatever-fsc-origin-search--item-0 > .BpkAutosuggest_bpk-autosuggest__suggestion__OGI4N')
        .then(el=>{
            
            expect(el[0].textContent).to.eql('Dubai (Any)United Arab Emirates')
        }).click().wait(2000)
        //suggestion should be closed and not visible
        cy.get('#react-autowhatever-fsc-origin-search').should('not.be.visible')
        cy.scrollTo('top')
    });


    it('To Test input field ""To"" section', () => {
        cy.log('here')
      
        //Check for placeholder and value is empty
        cy.get('#fsc-destination-search').should('have.attr','placeholder','Country, city or airport').and('not.have.value')
        //click 
        cy.get('#fsc-destination-search').click()
        //popup should be visible
        cy.get('#react-autowhatever-fsc-destination-search').should('be.visible')
        //pop title
        cy.get('.BpkAutosuggest_bpk-autosuggest__suggestion-value__ZDMxM > span')
        .then(el=>{
            
            expect(el[0].textContent).to.eql("Can't decide where?")
        })
        //cy.scrollTo('top')
        cy.get('.BpkAutosuggest_bpk-autosuggest__suggestion-sub-heading__Nzk4Y > span')
        .then(el=>{
            
            expect(el[0].textContent).to.eql("Click here to search Everywhere")
        }).click()
        cy.get('#fsc-destination-search').should('have.value','Everywhere')
       

        //clear the input
        cy.get('#fsc-destination-search').clear().type('ktm').wait(2000)
        cy.get('#react-autowhatever-fsc-destination-search--item-0 > .BpkAutosuggest_bpk-autosuggest__suggestion__OGI4N')
        .then(el=>{
            expect(el[0].textContent).to.eql('Kathmandu (KTM)Nepal')
        }).click().wait(2000)
        cy.get('#react-autowhatever-fsc-destination-search').should('not.be.visible')
        cy.scrollTo('top')
    });

    it.skip('To test date field "depart" section', () => {
        cy.get('#depart-fsc-datepicker-button').click()
        //popover should be visible
        cy.get('#depart-fsc-datepicker-popover').should('be.visible')
        //should have specific date section
        cy.get('#depart-fsc-datepicker-popover nav > div > div:nth-child(1) > button').should('be.visible')
        cy.get('#depart-fsc-datepicker-popover nav > div > div:nth-child(1) > button')
        .then(el=>{
            expect(el[0].textContent.trim()).to.equal("Specific date")
        })
        //should have whole month
        cy.get('#depart-fsc-datepicker-popover nav > div > div:nth-child(2) > button')
        .then(el=>{
            expect(el[0].textContent.trim()).to.eql("Whole month")
        }).click()
        //whole month text
        cy.get('#depart-fsc-datepicker-popover > div > div > div.FlightDatepicker_fsc-datepicker__monthselector-container__ZWE4Y > div > label')
        .then(el=>{
            expect(el[0].textContent.trim()).to.equal("Compare across a whole month:")
        })
        .wait(2000)
        //click specific date
        cy.get('#depart-fsc-datepicker-popover nav > div > div:nth-child(1) > button').click().wait(2000)
        //month dropdown should have current month as default
        cy.get('.BpkCalendarNav_bpk-calendar-nav__YjZkN select').select(0)
        .should('have.value','2022-03')
        // const day = new Date().getUTCDate()
        // const month = new Date().getUTCMonth()
        // const year = new Date().getFullYear()
        // cy.log(day,month,year)
        //cy.log(day)
        cy.get('#depart-fsc-datepicker-button').then(el=>{
            const departD = el[0].textContent
            date_r =  JSON.stringify({departD: departD})
        })
    });

    it.skip('To test date field "return" section', () => {
        cy.get('#return-fsc-datepicker-button').click()
        cy.get('#return-fsc-datepicker-popover').should('be.visible')
        cy.get('#return-fsc-datepicker-popover nav > div > div:nth-child(1) > button').should('be.visible')
        cy.get('#return-fsc-datepicker-popover nav > div > div:nth-child(1) > button')
        .then(el=>{
            expect(el[0].textContent.trim()).to.equal("Specific date")
        })
        //should have whole month
        cy.get('#return-fsc-datepicker-popover nav > div > div:nth-child(2) > button')
        .then(el=>{
            expect(el[0].textContent.trim()).to.eql("Whole month")
        }).click()
        //whole month text
        cy.get('#return-fsc-datepicker-popover > div > div > div.FlightDatepicker_fsc-datepicker__monthselector-container__ZWE4Y > div > label')
        .then(el=>{
            expect(el[0].textContent.trim()).to.equal("Compare across a whole month:")
        })
        .wait(2000)
        //click specific date
        cy.get('#return-fsc-datepicker-popover nav > div > div:nth-child(1) > button').click().wait(2000)
        //month dropdown should have current month as default
        cy.get('.BpkCalendarNav_bpk-calendar-nav__YjZkN select').select(0)
        .should('have.value','2022-03')
        //saving value
        cy.get('#return-fsc-datepicker-button').then(el=>{
            const returnD = el[0].textContent
           date_r = JSON.stringify({rtnD: returnD})
        })

       //cancel
        cy.get('.BpkPopover_bpk-popover__footer__ODgzZ').click()
        cy.log(date_r)
    });

    it('Vlidate the search functionality', () => {
        cy.scrollTo('top')
        cy.wait(5000)
        cy.get('.BpkButtonBase_bpk-button__NTM4Y').click()
        cy.reload()
        cy.clearCookies() // clear all cookies

        cy.get('.App_container__OGNkZ').then(el=>{
            expect(el[0].textContent).to.equal('Dubai (Any) - Kathmandu (KTM)1 adultEconomy')
        })
       
    });
   


});