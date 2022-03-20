
Feature: Check the login functionality

Verify Login module,multiple login options 
and verify with valid input user 
can be logged in successfull.

Background: Page Visit
Given I visit the website "https://www.skyscanner.ae/"

@focus
Scenario: Check Landing page consist of Login button in the rightside of navbar
Then Navbar should contain Login button in the right side

@focus
Scenario: Check Landing Page Login Button Click and Validate pop-up
#Given I visit the website
Then I click the Login button
And I validate the pop-up visibility in the middle of screen

Scenario: Check User Login Options in Login Pop-Up section
Given I visit the website
Then I click the Login button
And I validate the pop-up visibility in the middle of screen
Then I verify the login option consists of
|options|
|Continue with email|
|Google|
|Facebook|
|Apple|


Scenario: Check Login pop-up close icon click	
Given I visit the website
Then I click the Login button
And I validate the pop-up visibility in the middle of screen
When I hover and click cross icon to close the popup
Then pop up should be closed


Scenario: Check Login Model Continue With Email Button Click		
Given I visit the website
Then I click the Login button
And I validate the pop-up visibility in the middle of screen
And I click Continue with Email button
Then I verify that the continue with email page consist of
|options|
|close icon in top|
|title: What's your email address?|
|email_input_field|
|next_button|


Scenario: Check Login with new valid Email from Continue with Email section"
Given I visit the website
Then I click the Login button
And I validate the pop-up visibility in the middle of screen
And I click Continue with Email button
Then I type "avishr44+21@gmail.com" in email input section
And I verify the next button is enabled
And I click Next Button
When I hover and click cross icon to close the popup
Then Navbar login button is changed to user icon
		
		
		
		

		 

		


