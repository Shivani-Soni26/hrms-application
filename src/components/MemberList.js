import React from "react";
import GenericMasterListComponent from "./GenericMasterListComponent";
import { useLocation } from "react-router-dom";

const columns = [
    { label: "First Name", key: 'firstname' },
    { label: "Last Name", key: 'lastName' },
    { label: "Technology", key: 'technology' },
    { label: "Details", key: 'employeeid',name:'Click', linkTo: true },

];


function MemberList() {
    const location = useLocation();
    const clientId = location.state.item.clientid;
    const userId = localStorage.getItem('userId');
    const endpoint = `getTeams/${clientId}/${userId}`;

    return (
        <div>
            <GenericMasterListComponent
                endpoint={endpoint}
                columns={columns}
                clientid={clientId}
                heading="EMPLOYEE LIST"
                showButtons={false}
                showEditActionButtons={false}
                route="/layout/employeedetails"

            />
        </div>
    );
}

export default MemberList;