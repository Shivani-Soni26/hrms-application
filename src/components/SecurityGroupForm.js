import React from "react";
import GenericFormComponent from "./Master"

const token = localStorage.getItem('token');
const schema = [
  {
    grid: 12,
    type: "input",
    inputType: "text",
    name: "securitygroupname",
    label: "SecurityGroup Name",
    placeholder: "Enter securitygroupname",
    defaultValue: "",
    // pattern: /^[A-Za-z\s]+$/,
    required: true
  },
  {
    name: "token",
  },

  {
    type: "button",
  },
];

const customConfig = {
  title: {
    text: 'NEW SECURITYGROUP',
  },
};

function SecurityGroupForm() {
  const formData = {
    securitygroupname: "",
    token: token,
  };

  const data = { schema };
  const endpoint = "createSecurityGroup";

  return (
    <div className='Myform'>
      <GenericFormComponent initialData={formData} data={data} customConfig={customConfig} endpoint={endpoint}
        listRoute='/layout/securityGroupList' />
    </div>
  );
};

export default SecurityGroupForm;