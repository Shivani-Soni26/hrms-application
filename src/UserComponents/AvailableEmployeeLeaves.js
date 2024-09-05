import React from 'react';
import GenericMasterListComponent from '../components/GenericMasterListComponent';

const columns = [
    { label: 'Employee Name', key: 'fullname', },
    { label: 'Available Casual Leaves', key: 'cl', },
    { label: 'Available Sick Leaves', key: 'ml' },
    { label: 'Carry Forward Leaves', key: 'cf' },
    { label: 'Availed Casual Leaves', key: 'totalCLLeaves' },
    { label: 'Availed Sick Leaves', key: 'totalSLLeaves' }
];

function AvailableEmployeeLeaves() {
    const endpoint = `fetchTotalLeavesWithoutId`;

    return (
        <div>
            <GenericMasterListComponent
                endpoint={endpoint}
                columns={columns}
                heading="Available Employees Leave"
                showTotalCount={false}
                showButtons={false}
                showEditActionButtons={false}
            />
        </div>
    );
}

export default AvailableEmployeeLeaves;