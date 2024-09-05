
import React from 'react';
import GenericMasterListComponent from './GenericMasterListComponent';

const columns = [
  { label: 'Designation', key: 'designation' },
  { label: 'Enable', key: 'enable' }
];

function DesignationList() {
  // const token = localStorage.getItem('token');
  // const endpoint = "fetchRecords/designation/"+ token;
  const endpoint = "fetchRecords/designation";
  return (
    <div>
      <GenericMasterListComponent
        endpoint={endpoint}
        columns={columns}
        heading="DESIGNATION LIST"
        addButtonText="New Designation"
        addRoute="/layout/addDesignation"
        editRoute="/layout/updateDesignation"
      />
    </div>
  );
}

export default DesignationList;