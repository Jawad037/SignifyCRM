
import React, { useEffect, useState } from 'react';
import { Box, Button, TextField } from '@mui/material';
import { Link, useNavigate } from "react-router-dom"
import CRM_Token from '../../../Oauth/CRM_Token';


let connectUrl = "";
const ConnectURL = () => {
    const [url, setUrl] = useState('');
    const navigate = useNavigate()
    const handleConnect = () => {

        connectUrl = url;
        window.localStorage.setItem("connectUrl", url);
        navigate("/SignifySignin")
    };
    const handleCancel = () => {

        const BackUpToken = window.localStorage.getItem("Backup_Token");

        if (BackUpToken) {
            window.localStorage.setItem("API_Token", BackUpToken);
            navigate("/Home");
        } else {

            console.log("Please Add CRM Login Link");

            return;
        }
    };



    const LoginToken = CRM_Token()
    useEffect(() => {
        if (LoginToken) {
            navigate("/Home")
        } else {
            navigate("/")
        }

    }, []);

    return (
        <>
            <Box sx={{ m: 2 }}>
                <TextField
                    size="small"
                    label="CRM URL"
                    variant="outlined"
                    sx={{ width: "auto" }}
                    style={{ width: "285px" }}
                    value={url}
                    // onChange={handleInputChange}
                    onChange={(e) => setUrl(e.target.value)}
                />
            </Box>

            <Button sx={{ ml: 2 }} variant="contained" onClick={handleConnect}>
                Connect
            </Button>
            <Button sx={{ ml: 5, color: "#6074ac" }} onClick={handleCancel}>
                Cancel
            </Button>


        </>

    );
};

export default ConnectURL;

export const connectURlValue = () => {
    // console.log("connectvalue:", connectUrl)
    return connectUrl

}

