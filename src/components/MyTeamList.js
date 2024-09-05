import React from 'react';
import GenericMasterListComponent from './GenericMasterListComponent';


const columns = [
    { label: 'Team Name', key: 'client' },
    { label: 'Total Member', key: 'count' },
    { label: 'Members Name', key: 'clientid', name: 'VIEW', linkTo: true }
];

function MyTeamList() {
    const userId = localStorage.getItem('userId');
    const endpoint = `getMemberCount/${userId}`;
    return (
        <div>
            <GenericMasterListComponent
                endpoint={endpoint}
                columns={columns}
                heading="MY TEAM LIST"
                showButtons={false}
                showEditActionButtons={false}
                linkRoute="/layout/memberList"
            />
        </div>
    );
}

export default MyTeamList;