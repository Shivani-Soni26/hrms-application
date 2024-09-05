import React from "react";
import GenericFormComponent from "./Master"

const token = localStorage.getItem('token');
const schema = [
  {
    grid:12,
    type: "input",
    inputType:"text",
    name: "role",
    label: "Role Name",
    placeholder: "Enter role name",
    defaultValue: "",
    // pattern: /^[A-Za-z\s]+$/,
    required: true
  },
  {
    name:"token"
  },

  {
    type: "button",
  },
];

const customConfig = {
    title: {
      text: 'NEW ROLE',
    },
};

function RoleForm() {
  const formData = {
    role: "",
    token: token,
  };

  const data = { schema }; 
  const endpoint = "createRole";

  return (
    <div className='Myform'>
      <GenericFormComponent initialData={formData} data={ data } customConfig={customConfig} endpoint={endpoint}
      listRoute='/layout/roleList'/>
    </div>
  );
};

export default RoleForm;