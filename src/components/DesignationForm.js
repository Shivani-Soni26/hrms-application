import React from "react";
import GenericFormComponent from "./Master";

const token = localStorage.getItem('token');
const schema = [
  {
    grid: 12,
    type: "input",
    inputType: "text",
    name: "designation",
    label: "Designation Name",
    placeholder: "Enter designation name",
    defaultValue: "",
    // pattern:/^[A-Za-z\s]+$/,
    required: true,
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
    text: ' NEW DESIGNATION',
  },
};

function DesignationForm() {
  const formData = {
    designation:"",
    token: token,
  };

  const data = { schema }; 
  const endpoint = "createDesignation";
  
  return (
    <div className='Myform'>
      <GenericFormComponent initialData={formData} data={data} customConfig={customConfig} endpoint={endpoint} 
      listRoute= '/layout/designationList'/>
    </div>
  );
};

export default DesignationForm;