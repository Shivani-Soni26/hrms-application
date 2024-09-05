import React from 'react';
import GenericMasterListComponent from '../components/GenericMasterListComponent';

const columns = [
  { label: 'Available Casual Leaves', key: 'cl', },
  { label: 'Available Sick Leaves', key: 'ml' },
  { label: 'Carry Forward Leaves', key: 'cf' },
  { label: 'Availed Leaves', key: 'availed' },
];

function AvailableLeaves() {
  const userId = localStorage.getItem('userId');
  const endpoint = `fetchTotalLeaves/${userId}`;

  return (
    <div>
      <GenericMasterListComponent
        endpoint={endpoint}
        columns={columns}
        heading="Available Leaves"
        showTotalCount={false}
        showButtons={false}
        showEditActionButtons={false}
      />
    </div>
  );
}

export default AvailableLeaves;