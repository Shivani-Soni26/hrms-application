
import React from 'react';
import GenericMasterListComponent from './GenericMasterListComponent';
const columns = [
  { label: 'Type', key: 'type' },
  { label: 'Enable', key: 'enable' }
];

function RoleList() {
  // const token = localStorage.getItem('token');
  // const endpoint = "fetchRecords/type/"+token;
  const endpoint = "fetchRecords/type";
  return (
    <div>
      <GenericMasterListComponent
        endpoint={endpoint}
        columns={columns}
        heading="Type list"
        addButtonText="New Type"
        addRoute="/layout/addType"
        editRoute="/layout/updateType"
      />
    </div>
  );
}

export default RoleList;