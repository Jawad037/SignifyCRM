import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import React from 'react'
import FilterOpportunitySelect from '../../SignifyCRM_UI/Signify_DropDown/FilterOpportunitySelect';
import FilterCaseSelect from '../../SignifyCRM_UI/Signify_DropDown/FilterCaseSelect';
import Navbar from '../../SignifyCRM_UI/Navbar';
import GetEmailBody from '../../../Utilty/GetEmailBody';
import OpenCaseList from '../../SignifyCRM_UI/SignifyCRM_Lists/OpenCaseList';
import ActiveOpportunityList from '../../SignifyCRM_UI/SignifyCRM_Lists/ActiveOpportunityList';
// import { CaseFilterName } from '../../../Services/Signify_API/CaseFilterAPI';

const AccountFilter = () => {
    const { getName } = GetEmailBody();
    return (
        <>
            <Navbar />
            <p style={{ display: 'flex', marginLeft: '15px' }}>
                <FolderOutlinedIcon sx={{ height: "50px", width: "50px" }} />
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <span style={{ paddingLeft: "4px" }}>{getName}</span>
                    <span style={{ fontWeight: 'bold', fontSize: '16px', paddingLeft: '4px' }}> Account</span>
                </div>
            </p>
            <hr />
            <ActiveOpportunityList />

            <hr style={{ marginTop: "12%", marginBottom: "12%" }} />
            {/* <FilterCaseSelect /> */}
            <OpenCaseList />

        </>
    )
}

export default AccountFilter