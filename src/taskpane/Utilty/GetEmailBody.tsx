import React from 'react';

const GetEmailBody = () => {
    const getEmailAddress = Office.context.mailbox.item.from.emailAddress;
    const getName = Office.context.mailbox.item.from.displayName;
    // Splitting displayName into first name and last name
    const [firstName, lastName] = getName.split(' ');

    // console.log("Email: ", getEmailAddress);
    // console.log("Name: ", getName);
    // console.log("Name: ", firstName, lastName);

    return { getEmailAddress, getName, firstName, lastName }; // Return an object containing both getEmailAddress and getName
}

export default GetEmailBody;