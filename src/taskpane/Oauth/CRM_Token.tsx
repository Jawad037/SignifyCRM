import React from 'react'
import SignifySignin from '../components/SignifyCRM_Pages/LoginPage/SignifySignin'
import SignifyLoginAPI from '../Services/Signify_API/SignifyLoginAPI'


const CRM_Token = () => {

    const LoginToken = localStorage.getItem("API_Token")
    // console.log("LoginToken: ", LoginToken)
    return LoginToken
}

export default CRM_Token
