class accountPage {
    assertAccountPage() {
        return "https://magento.softwaretestingboard.com/customer/account/"
    }
    clickonArrow() {
        return '//button[@type="button"]'
    }

    clickOnSignOut() {
        return 'Sign Out '
    }
    
}


const obj_accountPage = new accountPage()
export default obj_accountPage