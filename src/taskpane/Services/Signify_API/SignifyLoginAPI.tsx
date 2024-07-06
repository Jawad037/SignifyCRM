import React from 'react';
import CRM_Url from '../../Hooks/CRM_Url';

let tokenValue;
let getUser;
let assignedUserid;
let userCurrencyName;
const SignifyLoginAPI = async () => {
    const API_URL = CRM_Url()
    // const CRM_URL = 'https://demo.signifycrm.net/outlook-addin';
    // const API_VERSION = 'v1';
    // const API_URL = `${CRM_URL}/rest_api/${API_VERSION}/rest/`;
    const API_KEY = '14FF3618556206C62CAD177EC037C952';
    const USERNAME = 'Inter-sales03';
    const PASSWORD = 'demo41';

    try {
        let spayload = {
            "Api-Key": API_KEY,
            "login_name": USERNAME,
            "login_password": PASSWORD
        };

        let rawResponse = await fetch(API_URL + 'login', {
            method: 'POST',
            body: JSON.stringify(spayload),
            headers: { 'Content-Type': 'application/json' }
        });

        let response = await rawResponse.json();
        if (response.data) {
            let output = JSON.parse(response.data);
            // console.log("output:", output)
            const userid = output.name_value_list.user_id.value;
            assignedUserid = userid;
            const userName = output.name_value_list.user_name.value;
            const userCurrency = output.name_value_list.user_currency_name.value;
            userCurrencyName = userCurrency
            // console.log(userName);
            getUser = userName
            const SignifyToken = output.token;
            // console.log(SignifyToken)
            tokenValue = SignifyToken
            return output; // Returning both userName and SignifyToken
        }
        return false;
    } catch (e) {
        console.error(e);
        return false; // Return false in case of error
    }


}

export default SignifyLoginAPI;

export const crmToken = () => {

    return tokenValue
}
export const CRMuser = () => {

    return getUser
}

export const getUserId = () => {
    return assignedUserid
}

export const getUserLoginCurrency = () => {
    return userCurrencyName
}
