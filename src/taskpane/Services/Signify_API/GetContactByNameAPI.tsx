// import React, { useState, useEffect } from 'react';
// import GetEmailBody from '../../Utilty/GetEmailBody';
// import CRM_Token from '../../Oauth/CRM_Token';
// import CRM_Url from '../../Hooks/CRM_Url';
// import AccountSelect from '../../components/SignifyCRM_UI/Signify_DropDown/AccountSelect';
// import ContactSelect from '../../components/SignifyCRM_UI/Signify_DropDown/ContactSelect';
// import { GetUserData } from '../../Oauth/GetUserData';

// const GetContactByNameAPI = () => {
//     const [contactNameData, setContactNameData] = useState([]);

//     const [totalCount, setTotalCount] = useState(0);

//     const { API_Key } = GetUserData()
//     const API_URL = CRM_Url();
//     const LoginToken = CRM_Token();
//     const { getName, firstName } = GetEmailBody();

//     useEffect(() => {

//         const myHeaders = new Headers();
//         myHeaders.append("Content-Type", "application/json");
//         myHeaders.append("Authorization", `Bearer ${LoginToken}`);
//         const raw = JSON.stringify({
//             "Api-Key": API_Key,
//             "module_name": "Contacts",
//             "str_query": `(concat(contacts.first_name, ' ', contacts.last_name) = '${getName}' OR contacts.first_name = '${firstName}') AND contacts.deleted = 0`,
//             "str_order_by": "",
//             "offset": 0,
//             "select_fields": [
//                 "id",
//                 "first_name",
//                 "last_name"
//             ],
//             "link_name_to_fields_array": "",
//             "max_results": 1,
//             "deleted": "false"
//         });

//         const requestOptions: RequestInit = {
//             method: "POST",
//             headers: myHeaders,
//             body: raw,
//             redirect: "follow"
//         };


//         fetch(`${API_URL}get_entry_list`, requestOptions)
//             .then((response) => response.json())
//             .then((result) => {
//                 if (result.status === 200 && result.data) {
//                     const getAccountName = result.data.entry_list;
//                     setContactNameData(getAccountName);
//                     console.log("getAccountName:", getAccountName)
//                     setTotalCount(result.data.total_count)

//                 } else {
//                     console.error("Error", result.message);
//                 }


//             })
//             .catch((error) => {
//                 console.error("Error", error);
//             });



//     }, [getName, firstName]);

//     return (
//         <>
//             <ContactSelect contactNameData={contactNameData} totalCount={totalCount} />

//         </>
//     );
// };

// export default GetContactByNameAPI;







import React, { useState, useEffect } from 'react';
import GetEmailBody from '../../Utilty/GetEmailBody';
import LeadList from '../../components/SignifyCRM_UI/SignifyCRM_Lists/LeadList';  // Assuming LeadList is in the same directory
import ContactList from '../../components/SignifyCRM_UI/SignifyCRM_Lists/ContactList';
import CRM_Url from '../../Hooks/CRM_Url';
import CRM_Token from '../../Oauth/CRM_Token';
import { GetUserData } from '../../Oauth/GetUserData';
import ContactSelect from '../../components/SignifyCRM_UI/Signify_DropDown/ContactSelect';

const GetContactByNameAPI = () => {
    const { getEmailAddress, firstName, getName } = GetEmailBody();
    const [contactNameData, setContactNameData] = useState([]);
    // const [totalCount, setTotalCount] = useState(0);
    const API_URL = CRM_Url()
    const LoginToken = CRM_Token()
    const { API_Key, User_ID } = GetUserData()
    useEffect(() => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        //  myHeaders.append("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE3MTY5NjQwMzUsImp0aSI6ImZ6OUZMTnJYdHlRNGljdE12eFdDZ3c9PSIsImlzcyI6Imh0dHBzOlwvXC9kZW1vLnNpZ25pZnljcm0ubmV0XC9vdXRsb29rLWFkZGluIiwibmJmIjoxNzE2OTY0MDM1LCJleHAiOjE3MTk1NTYwMzUsImRhdGEiOnsidXNlck5hbWUiOiJJbnRlci1TYWxlczAzIiwidXNlcklkIjoiNDdkZjY2MWQtYmNmZS00NTcwLTY2MjAtNWQ1YTgyYzIyNWI4In19.vrtRRwK7M3yt2mlVk9rms_LgxeEY35j_2JTl8suGbpAyp_lz-b3qRjCgtzZYWMtVfHPMMhBWanYSDlkLsxQgrg");
        myHeaders.append("Authorization", `Bearer ${LoginToken}`);
        const raw = JSON.stringify({
            "Api-Key": API_Key,
            "module_name": "Contacts",
            // "str_query": `(concat(contacts.first_name, ' ', contacts.last_name) LIKE '%${name}%' OR contacts.first_name LIKE '%Junaid%') AND contacts.deleted = 0 AND contacts.id IN (SELECT eabr.bean_id FROM email_addr_bean_rel eabr JOIN email_addresses ea ON ( ea.id = eabr.email_address_id ) WHERE eabr.deleted = 0 AND ea.email_address LIKE '%${email}%' AND ea.deleted = 0 AND eabr.bean_module = 'Contacts')`,
            "str_order_by": "contacts.first_name ASC, contacts.last_name ASC",
            "offset": 0,
            "select_fields": ["id", "first_name", "last_name"],
            "link_name_to_fields_array": "",
            "max_results": 100,
            "deleted": "false"
        });

        const requestOptions: RequestInit = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch(`${API_URL}get_entry_list`, requestOptions)
            .then((response) => response.json())
            .then((result) => {
                if (result.status === 200 && result.data) {
                    const getAccountName = result.data.entry_list;
                    setContactNameData(getAccountName);
                    // console.log("getAccountName:", getAccountName.name_value_list.id.value)
                    // setTotalCount(result.data.total_count)

                } else {
                    console.error("Error", result.message);
                }
            })
            .catch((error) => {
                console.error("Error", error);
            });
    }, []);

    return (
        <div>
            <ContactSelect contactNameData={contactNameData} />

        </div>
    );
}

export default GetContactByNameAPI;
