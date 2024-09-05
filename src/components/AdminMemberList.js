import React from "react";
import GenericMasterListComponent from "./GenericMasterListComponent";
import { useLocation} from "react-router-dom";

const columns=[
    {label: "First Name", key: 'firstname'},
    {label: "Last Name", key: 'lastName'},
    {label: "Technology", key: 'technology'},
    {label: "Details", key:'employeeid', name:'Click', linkTo:true},
    
];


function AdminMemberList(){
    const location=useLocation();
    const clientId=location.state.item.clientid;
    const endpoint=`getTeamMembersByClientID/${clientId}`;
  
    return(
        <div>
            <GenericMasterListComponent
                endpoint={endpoint}
                columns={columns}
                clientid={clientId}
                heading="EMPLOYEE LIST"
                showEditActionButtons={false}
                showButtons={false}
                route="/layout/employeedetails"
            />
            
        </div>
    );
}

export default AdminMemberList;