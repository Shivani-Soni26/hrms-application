import React from "react";
import GenericFormComponent from "./Master";

const token = localStorage.getItem('token');
const schema = [
  {
    grid: 12,
    type: "input",
    inputType: "text",
    name: "technology",
    label: "Technology Name",
    placeholder: "Enter technology name",
    defaultValue: "",
    // pattern:/^[A-Za-z\s]+$/,
    required: true,
  },
  {
    name: "token"
  },

  {
    type: "button",
  },
];


const customConfig = {
  title: {
    text: 'NEW TECHNOLOGY',
  },
};

function TechnologyForm() {
  const formData = {
    technology:"",
    token: token,
  };

  const data = { schema }; 
  const endpoint = "createTechnology";
  
  return (
    <div className='Myform'>
      <GenericFormComponent  initialData={formData} data={data} customConfig={customConfig} endpoint={endpoint}
      listRoute='/layout/technologyMasterList' />
    </div>
  );
};

export default TechnologyForm;