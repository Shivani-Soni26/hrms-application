import React from "react";
import GenericFormComponent from "./Master"

const token = localStorage.getItem('token');
const schema = [
  {
    grid: 4,
    type: "input",
    inputType: "text",
    name: "firstname",
    label: "First Name",
    placeholder: "Enter First name",
    defaultValue: "",
    pattern: /^[A-Za-z\s]+$/,
    required: true
  },
  {
    grid: 4,
    type: "input",
    inputType: "text",
    name: "lastname",
    label: "Last Name",
    placeholder: "Enter Last name",
    defaultValue: "",
    pattern: /^[A-Za-z\s]+$/,
    required: true
  },
   {
    grid: 4,
    type: "input",
    inputType: "date",
    name: "dob",
    label: "Date Of Birth",
    placeholder: "Enter DOB",
    defaultValue: "",
  },
  {
    grid: 4,
    type: "input",
    inputType: "text",
    name: "phonenumber",
    label: "Phone Number",
    placeholder: "Enter phone number",
    defaultValue: "",
  },
  {
    grid: 4,
    type: "input",
    inputType: "text",
    name: "employeeid",
    label: "Employee Id",
    placeholder: "Enter Employee Id",
    defaultValue: "",
  },

  {
    grid: 4,
    type: "input",
    inputType: "email",
    name: "email",
    label: "Email ",
    placeholder: "Enter email address",
    defaultValue: "",
    pattern:/^[a-zA-Z0-9._]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/,
  },
  {
    grid: 2,
    label: "Role",
    name: "role",
    type: "select",
  },

  {
    grid: 3,
    label: "Client",
    name: "client",
    type: "select",

  },
  {
    grid: 3,
    label: "Device",
    name: "device",
    type: "select",

  },
  {
    grid: 2,
    label: "Designation",
    name: "designation",
    type: "select",

  },
  {
    grid: 2,
    label: "Seat Number",
    name: "seatnumber",
    type: "select",

  },
  {
    grid: 2,
    label: "Security group",
    name: "securitygroupname",
    type: "select",

  },
  {
    grid: 2,
    label: "Technology",
    name: "technology",
    type: "select",

  },
  {
    grid: 3,
    label: "Type",
    name: "type",
    type: "select",

  },
  {
    grid: 2,
    label: "Manager Name",
    name: "managerid",
    type: "select",

  },
  {
    name: "password",
  },
  {
    name: "doj",
  },
  {
    name: "address",
  },
  {
    name: "worklocation",
  },
  {
    name: "pan",
  },
  {
    name: "bankName",
  },
  {
    name: "bankAcco",
  },
  {
    name: "uan",
  },
  {
    name: "epfAcco",
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
    text: 'New Employee',
  },
};

function EmployeeForm() {
  const formData = {
    firstname: "",
    lastname: "",
    dob:"",
    phonenumber: "",
    employeeid: "",
    email: "",
    password: "",
    role: "",
    client: "",
    device: "",
    designation: "",
    seatnumber: "",
    securitygroupname: "",
    technology: "",
    type: "",
    managerid: "",
    token: token,
  };
  const data = { schema };
  const endpoint = "createEmployee";
  const endpointUrls = {
    role: "fetchRecords/role",
    client: "fetchRecords/client",
    device: "fetchRecords/device",
    designation: "fetchRecords/designation",
    seatnumber: "fetchRecords/seat",
    securitygroupname: "fetchRecords/securitygroup",
    technology: "fetchRecords/technology",
    type: "fetchRecords/type",
    managerid: "getManagerAndAdmin",
  };

  return (
    <div className='Myform'>
      <GenericFormComponent initialData={formData} data={data} customConfig={customConfig} endpoint={endpoint} endpointUrls={endpointUrls} listRoute="/layout/employeeList"/>
    </div>
  );
};

export default EmployeeForm;
