class createAccount {

    firstName(){
        return "#firstname"
    }
    lastName(){
        return "#lastname"
    }
    EmailAddress(){
        return "#email_address"
    }
    password(){
       return "#password"
    }
    confirmPassword(){
        return  "#password-confirmation"
    }
    submitButton(){
        return '//button[@type="submit"][@class="action submit primary"]'
    }
}
const obj_createAccount = new createAccount()
export default obj_createAccount
