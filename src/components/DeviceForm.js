import React from "react";
import GenericFormComponent from "./Master"

const token = localStorage.getItem('token');
const schema = [
  {
    grid: 12,
    type: "input",
    inputType: "text",
    name: "device",
    label: "Device Name",
    placeholder: "Enter device name",
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
    text: 'NEW DEVICE',
  },
};

function DeviceForm() {
  const formData = {
    device: "",
    token: token,
  };

  const data = { schema };
  const endpoint = "createDevice";

  return (
    <div className='Myform'>
      <GenericFormComponent  initialData={formData} data={data} customConfig={customConfig} endpoint={endpoint}
        listRoute='/layout/deviceList' />
    </div>
  );
};

export default DeviceForm;