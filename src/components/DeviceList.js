import React from 'react';
import GenericMasterListComponent from './GenericMasterListComponent';
const columns = [
  {label: 'Device Name', key: 'device' },
  {label: 'Enable', key:'enable'}
];

function DeviceList() {
  // const token = localStorage.getItem('token');
  //   const endpoint =  "fetchRecords/device/"+ token;
  const endpoint =  "fetchRecords/device"
    return (
      <div>
        <GenericMasterListComponent
          endpoint={endpoint}
          columns={columns}
          heading="Device list"
          addButtonText="New Device"
          addRoute="/layout/adddevice" 
          editRoute="/layout/updateDevice"
        />
      </div>
    );
  }
  
  export default DeviceList;