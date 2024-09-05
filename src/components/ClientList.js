
import React from 'react';
import GenericMasterListComponent from './GenericMasterListComponent';
const columns = [
  {label: 'Client Name', key: 'client' },
  {label: 'Company Name', key:'companyname'},
  {label: 'Client Email', key:'email'},
  {label: 'Enable', key:'enable'},

];

function ClientList() {
    const endpoint =  "/fetchRecords/client";
    return (
      <div>
        <GenericMasterListComponent
          endpoint={endpoint}
          columns={columns}
          heading="CLIENT LIST"
          showTotalCount={true}
         addHeading="Total Clients"
          addButtonText="New Client"
          addRoute="/layout/clientForm" 
          editRoute="/layout/updateClient"
        />
      </div>
    );
  }
  
  export default ClientList;