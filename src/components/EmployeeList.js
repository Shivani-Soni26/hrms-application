import React from 'react';
import GenericMasterListComponent from './GenericMasterListComponent';
const columns = [
  { label: 'Name', key: 'fullName', },
  { label: 'Technology', key: 'technology' },
  { label: 'Role', key: 'role' },
  { label: 'Client', key: 'client' },
  { label: 'Manager Name', key: 'manager_firstname' },
  { label: 'Monthly CTC', key: 'monthlyctc' },
  { label: 'Rate', key: 'rate' },
  { label: 'Employee Details', key: 'id', name: 'Details', linkTo: true }
];

function EmployeeList() {
  const endpoint = 'employeeData';
  return (
    <div>
      <GenericMasterListComponent
        endpoint={endpoint}
        columns={columns}
        heading="Employee list"
        showFilterValue={true}
        showTotalCount={true}
        showEditPersonal={true}
        addButtonText="New Employee"
        addHeading="Total Employee"
        addRoute="/layout/employeeForm"
        editRoute="/layout/updateemployee"
        editPersonal="/layout/employeePersonalDetails"
        route="/layout/employeeprofile"
      />
    </div>
  );
}
export default EmployeeList;