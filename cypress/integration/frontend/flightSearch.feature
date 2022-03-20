Feature: To validate Homepage Flight Search Functionality for RoundTrip
    Vlidate Round trip,one way, multicity Functionality

    Background: Visit the url and verify that there are 5 input fields
        Given I vist the website "https://www.skyscanner.ae/"
        Then I can see search input form as
            | input_fields            |
            | From                    |
            | To                      |
            | Depart                  |
            | Return                  |
            | Cabin Class & Travelers |

    Scenario: To validate input field "From" section
        Given I focus on From section i can see default location as value
        Then I clear the input field and type "Dubai"
        Then I can see Suggestion list appear below from section input
        And I can verify that list contains "Dubai (Any)United Arab Emirates" in Suggestion
        When I Click the first list from Suggestion
        Then I can see suggestion list disappear
        And input filed value is "Dubai (Any)"


    Scenario: To validate input field "To" section
        Given I focus in To section I can see input filed is empty with placeholder text "Country, city or airport"
        When I click this section
        Then I can see empty suggestion list appear below to section input
        And  I can see the title is "Can't decide where?"
        And I can see the description as "Click here to search Everywhere"
        Then I click this section to see that input value is "Everywhere"
        Then I clear the input fild and type "KTM"
        And I can see suggestion list with "Kathmandu (KTM)Nepal" as first element
        When I select the first element
        Then Suggession list disappear and input filed value is "Kathmandu (KTM)"

    @focus
    Scenario: Validate the search functionality with all input fileds
        Given I focus in To section I can see input filed is empty with placeholder text "Country, city or airport"
        Then I clear the input fild and type "KTM"
        And I can see suggestion list with "Kathmandu (KTM)Nepal" as first element
        When I select the first element
        Then Suggession list disappear and input filed value is "Kathmandu (KTM)"
        When I click the Search Flight Button
        Then The url redirect to search page and validate the data







