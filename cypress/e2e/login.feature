
Feature: Verify Signup and Signin At Magento Webpage

    Scenario: Verify Signup In Magento Webpage
        Given Open Magento Webpage
        When Click on create Account link
        And Enter Firstname and Lastname
        And Enter Email and Password and retype password
        Then click on Submit button
        And Assert login success page
        And signout from the page


    Scenario: verifying signin into website

        Given Open Magento Webpage
        When Click on signin link
        Then Enter Email Address
        And Enter Password
        And click on Sign In Button
        And assert sign in or not

