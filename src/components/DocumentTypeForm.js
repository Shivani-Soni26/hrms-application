import React from "react";
import GenericFormComponent from "./Master"

const token = localStorage.getItem('token');
const schema = [
  {
    grid: 12,
    type: "input",
    inputType: "text",
    name: "name",
    label: "Document Name",
    placeholder: "Enter document name",
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
    text: 'DOCUMENT TYPE FORM',
  },
};

function DocumentTypeForm() {
  const formData = {
    name: "",
    token: token,
  };

  const data = { schema };
  const endpoint = "createDocumentType";

  return (
    <div className='Myform'>
      <GenericFormComponent initialData={formData} data={data} customConfig={customConfig} endpoint={endpoint}
        listRoute='/layout/documentTypeList' />
    </div>
  );
};

export default DocumentTypeForm;