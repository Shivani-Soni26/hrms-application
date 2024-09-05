import React from 'react';
import GenericMasterListComponent from './GenericMasterListComponent';
const columns = [
  { label: 'Technology Name', key: 'technology' },
  { label: 'Enable', key: 'enable' }
];

function TechnologyMasterList() {
    const endpoint = "fetchRecords/technology";
  return (
    <div>
      <GenericMasterListComponent
        endpoint={endpoint}
        columns={columns}
        heading="Technologies List "
        addButtonText="New Technology"
        addRoute="/layout/addtechnology"
        editRoute="/layout/updateTechnology"
      />
    </div>
  );
}

export default TechnologyMasterList;