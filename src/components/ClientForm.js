import React from "react";
import GenericFormComponent from "./Master"
const schema = [
  {
    grid:4,
    type: "input",
    inputType:"text",
    name: "client",
    label: "Client Name",
    placeholder: "Enter client name",
    defaultValue: "",
    pattern: /^[A-Za-z0-9\s]+$/,
    required: true
  },

  {
    grid:4,
    type: "input",
    inputType:"email",
    name: "email",
    label: "Email ",
    placeholder: "Enter client email address",
    defaultValue: "",
   // pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    required: true
  },
  {
    grid:4,
    type: "input",
    inputType:"text",
    name: "companyname",
    label: "Company Name",
    placeholder: "Enter your company name",
    defaultValue: "",
    pattern: /^[A-Za-z0-9\s]+$/,
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
      text: 'NEW CLIENT',
    },
};

function ClientForm() {
  const token=localStorage.getItem("token")
  const formData = {
    client: "",
    email: "",
    companyname: "",
    token:token
  };

  const data = { schema }; 
  const endpoint = "createClient";

  return (
    <div className='Myform'>
      <GenericFormComponent initialData={formData} data={ data } customConfig={customConfig} endpoint={endpoint} listRoute="/layout/clientList"/>
    </div>
  );
};

export default ClientForm;