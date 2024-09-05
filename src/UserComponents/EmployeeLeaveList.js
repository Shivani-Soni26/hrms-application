import React from 'react';
import GenericMasterListComponent from "../components/GenericMasterListComponent";

const columns = [
    { label: 'Employee Name', key: 'employeeName'},
    { label: 'From Date', key: 'startDate'},
    { label: 'To Date', key: 'endDate'},
    { label:'Leave Type',key:'leaveType'},
    { label:'Total Leave',key:'totalLeaves'},
    { label: "Leave Details", key: 'employeeid',name:'Leave Request', linkTo: true }
];

function EmployeeLeaveList() {
    const userId = localStorage.getItem('userId');
    const endpoint = `fetchLeavesByManagerId/${userId}`;

    return (

        <div>
            <GenericMasterListComponent
                endpoint={endpoint}
                columns={columns}
                heading="Employee Leave List"
                addButtonText="Approved/Not-Approved"
                addRoute="/layout/approveleave" 
                showEditActionButtons= {false}
                route="/layout/updateleaves"
                showAddIcon={false}
            />
        </div>
    );


}

export default EmployeeLeaveList;