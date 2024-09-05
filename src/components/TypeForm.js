import React from "react";
import GenericFormComponent from "./Master"

const token = localStorage.getItem('token');

const schema = [
  {
    grid: 12,
    type: "input",
    inputType: "text",
    name: "type",
    label: "Employee Type",
    placeholder: "Enter Employee Type",
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
    text: 'New TYPE',
  },
};

function TypeForm() {


  const formData = {
    type: "",
    token: token,
  };

  const data = { schema };
  const endpoint = "createType";

  return (
    <div className='Myform'>
      <GenericFormComponent initialData={formData}
        data={data}
        customConfig={customConfig}
        endpoint={endpoint}
        listRoute=
        '/layout/typeList' />
    </div>
  );
};

export default TypeForm;