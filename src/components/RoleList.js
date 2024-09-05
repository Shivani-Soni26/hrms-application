import React from 'react';
import GenericMasterListComponent from './GenericMasterListComponent';
const columns = [
  { label: 'Role', key: 'role' },
  { label: 'Enable', key: 'enable' }
];

function RoleList() {
  // const token = localStorage.getItem('token');
  // const endpoint = "fetchRecords/role/"+ token;
  const endpoint = "fetchRecords/role";
  return (
    <div>
      <GenericMasterListComponent
        endpoint={endpoint}
        columns={columns}
        heading="Role list"
        addButtonText="New Role"
        addRoute="/layout/addrole"
        editRoute="/layout/updateRole"
      />
    </div>
  );
}

export default RoleList;