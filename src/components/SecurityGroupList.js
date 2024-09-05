import React from 'react';
import GenericMasterListComponent from './GenericMasterListComponent';
const columns = [
  { label: 'Security Group', key: 'securitygroupname' },
  { label: 'Enable', key: 'enable' }
];

function SecuritygroupList() {
  const endpoint = "fetchRecords/securitygroup";
  return (
    <div>
      <GenericMasterListComponent
        endpoint={endpoint}
        columns={columns}
        heading="Security Groups List "
        addButtonText="New Security Group"
        addRoute="/layout/addsecuritygroup"
        editRoute="/layout/updateSecurityGroup"
      />
    </div>
  );
}

export default SecuritygroupList;