import React from 'react';
import GenericMasterListComponent from './GenericMasterListComponent';
const columns = [
  {label: 'Seat Number', key: 'seatnumber' },
  {label: 'Enable', key:'enable'}
];

function SeatList() {
    // const token = localStorage.getItem('token');
    // const endpoint =  "fetchRecords/seat/"+ token;
    const endpoint =  "fetchRecords/seat";
    return (
      <div>
        <GenericMasterListComponent
          endpoint={endpoint}
          columns={columns}
          heading="Seat list"
          addButtonText="New Seat"
          addRoute="/layout/addseat" 
          editRoute="/layout/updateSeat"
        />
      </div>
    );
  }
  
  export default SeatList;