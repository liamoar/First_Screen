import { LoginPage } from "../page/LoginPage";

const loginP = new LoginPage

export function verifyLoginOptions(){
    loginP.getContinueWithEmailButton()
    loginP.getGoogleButton()
    loginP.getFacebookButton()
    loginP.getAppleButton()
}

export function closeLoginModelPopUp(){
    loginP.clickLoginModuleCrossIconPopUpClose()
}

export function verify_Continue_With_Email_ModelContent(){
    loginP.verify_Continue_With_Email_Section_CloseIcon()
    loginP.verify_Continue_With_Email_Section_backIcon()
    loginP.verify_Continue_with_email_section_title()
    loginP.verify_Continue_with_email_section_next_button_IsDisabled()
}


export function login_With_Continue_withEmail(email){
 loginP.typein_Continue_with_email_section_EmailInputField(email)
 loginP.verify_Continue_with_email_section_next_button_IsEnabled()
 
}
