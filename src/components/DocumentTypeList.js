import React from 'react';
import GenericMasterListComponent from './GenericMasterListComponent';
const columns = [
  {label: 'Document name', key: 'name' },
  {label: 'Enable', key:'enable'}
];

function DocumentTypeList() {

  const endpoint =  "fetchRecords/documenttype"
    return (
      <div>
        <GenericMasterListComponent
          endpoint={endpoint}
          columns={columns}
          heading="Documents Type list"
          addButtonText="New Document"
          addRoute="/layout/documentType" 
          editRoute="/layout/updateDocumentType"
        />
      </div>
    );
  }
  
  export default DocumentTypeList;