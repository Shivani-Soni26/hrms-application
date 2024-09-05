import React from 'react';
import GenericMasterListComponent from '../components/GenericMasterListComponent';

const columns = [
  { label: 'Employee Name', key: 'fullName', },
  { label: 'Technology', key: 'technology' },
  { label: 'Role', key: 'role' },
  { label: 'Client', key: 'client' },
  { label: 'Manager Name', key: 'manager_firstname' },
  { label: 'Employee Details', key: 'id', name: 'Details', linkTo: true }
];

function HrEmployeeList() {

  const endpoint = 'fetchAllEmployeesData';

  return (
    <div>
      <GenericMasterListComponent
        endpoint={endpoint}
        columns={columns}
        heading="Employee list"
        showFilterValue={true}
        showTotalCount={true}
        addButtonText="New Employee"
        addHeading="Total Employee"
        addRoute="/layout/employeeForm"
        editRoute="/layout/updateemployee"
        route="/layout/empdetails"
      />
    </div>
  );
}

export default HrEmployeeList;