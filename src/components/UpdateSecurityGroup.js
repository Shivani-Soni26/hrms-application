import React from "react";
import { useLocation } from "react-router-dom";
import EditForm from "./MasterEdit";

const updateSecurityGroupSchema = [
  {
    grid: 12,
    type: 'input',
    inputType: 'text',
    name: 'securitygroupname',
    label: 'security group name',
    placeholder: 'Enter SecurityGroupName ',
    defaultValue: '',
    // pattern: /^[A-Za-z\s]+$/,
    required: true,
  },



  {
    type: "button",
  },
];

const customConfig = {
  title: {
    text: 'Edit Securiygroupname',
  },
};
function UpdateSecurityGroup({ handleInputChange }) {
  const location = useLocation();
  const formData = {
    securitygroup: location.state.item.securitygroupname

  };
  const updateEndpoint = "updateSecurityGroup";
  const getEndpoint = "fetchSecurityGroupById/";
  const Id = location.state.item.id;

  return (
    <div className="Myform">
      <EditForm
        dataSchema={updateSecurityGroupSchema}
        initialData={formData}
        recordType="Securitygroup"
        id={Id}
        customConfig={customConfig}
        getEndpoint={getEndpoint}
        updateEndpoint={updateEndpoint}
        onChange={handleInputChange}
        listRoute="/layout/securityGroupList"

      />
    </div>
  );
};

export default UpdateSecurityGroup;