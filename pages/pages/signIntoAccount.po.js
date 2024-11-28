class signIntoAccount{
    
    singninLink(){
       return "Sign In "
    }
    EnterEmail(){
        return '#email'
    }
    EnterPassword(){
        return '//input[@name="login[password]"]'
    }
    clickOnSignInButton(){
        return  '.action.login.primary'
    }
    assertsignin(){
        return "https://magento.softwaretestingboard.com/customer/account/"
    }
}
const obj_signIntoAccount = new signIntoAccount()
export default obj_signIntoAccount