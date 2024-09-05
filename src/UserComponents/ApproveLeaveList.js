import React from 'react';
import GenericMasterListComponent from "../components/GenericMasterListComponent";

const columns = [
    { label: 'Employee Name', key: 'employeeName'},
    { label: 'From Date', key: 'startDate'},
    { label: 'To Date', key: 'endDate'},
    { label:'Leave Type',key:'leaveType'},
    { label:'Total Leave',key:'totalLeaves'},
    { label:'Approved / Not-Approved',key:'approved'},
];

function ApproveLeaveList() {
    const userId = localStorage.getItem('userId');
    const endpoint = `fetchAppOrNotAppLeavesByManagerId/${userId}`;

    return (

        <div>
            <GenericMasterListComponent
                endpoint={endpoint}
                columns={columns}
                heading="[Approved / Not-Approved] Leave List"
                showButtons={false}
                showEditActionButtons= {false}
            />
        </div>
    );


}

export default ApproveLeaveList;