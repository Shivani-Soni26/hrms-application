import React from "react";
import EditForm from "./MasterEdit";
import { useLocation } from "react-router-dom";
const updateEmployeeSchema = [
  {
    grid: 4,
    type: 'input',
    inputType: 'text',
    name: 'firstname',
    label: 'First Name',
    placeholder: 'Enter First Name',
    defaultValue: '',
    required: true,
  },
  {
    grid: 4,
    type: 'input',
    inputType: 'text',
    name: 'lastname',
    label: 'Last Name',
    placeholder: 'Enter Last Name',
    defaultValue: '', // Use the existing data as default value
    required: true,
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
    type: 'input',
    inputType: 'text',
    name: 'phonenumber',
    label: 'Phone Number',
    placeholder: 'Enter Phone Number',
    defaultValue: '', // Use the existing data as default value
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
    type: 'input',
    inputType: 'email',
    name: 'email',
    label: 'Email',
    placeholder: 'Enter email address',
    defaultValue: '',
    pattern:/^[a-zA-Z0-9._]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/,
  },
  {
    grid: 3,
    label: "Manager Name",
    name: "managerid",
    type: "select",

  },
  {
    grid: 3,
    label: "Role",
    name: "role",
    type: "select",
    value: '',

  },
  {
    grid: 3,
    label: "Client",
    name: "client",
    type: "select",
    value: '',

  },
  {
    grid: 3,
    label: "Device",
    name: "device",
    type: "select",
    value: '',

  },
  {
    grid: 3,
    label: "Designation",
    name: "designation",
    type: "select",
    value: '',

  },
  {
    grid: 3,
    label: "Seat Number",
    name: "seatnumber",
    type: "select",
    value: '',

  },
  {
    grid: 3,
    label: "Securitygroup",
    name: "securitygroupname",
    type: "select",
    value: '',

  },
  {
    grid: 3,
    label: "Technology",
    name: "technology",
    type: "select",
    value: '',

  },
  {
    grid: 3,
    label: "Type",
    name: "type",
    type: "select",
    value: '',

  },
  {
    grid: 3,
    label: "Enable",
    name: "enable",
    type: "select",
    defaultValue: '',
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
    type: "button",
  },
];

function UpdateEmployee({ handleInputChange }) {
  const location = useLocation();
  const formData = {
    firstname: location.state.item.firstname,
    lastname: location.state.item.lastname,
    dob:location.state.item.dob,
    phonenumber: location.state.item.phonenumber,
    email: location.state.item.email,
    password: location.state.item.password,
    role: location.state.item.role,
    client: location.state.item.client,
    device: location.state.item.device,
    designation: location.state.item.designation,
    seatnumber: location.state.item.seatnumber,
    securitygroupname: location.state.item.securitygroupname,
    technology: location.state.item.technology,
    type: location.state.item.type,
    employeeid: location.state.item.employeeid,
    manager_firstname: location.state.item.manager_firstname,
    enable:location.state.item.enable,
  };
  const updateEndpoint = "updateEmployee";
  const getEndpoint = "fetchEmployeeById/";
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

  const Id = location.state.item.id

  return (
    <div className="Myform">
      <EditForm
        dataSchema={updateEmployeeSchema}
        initialData={formData}
        recordType="Edit Employee"
        id={Id}
        getEndpoint={getEndpoint}
        updateEndpoint={updateEndpoint}
        endpointUrls={endpointUrls}
        onChange={handleInputChange}
        listRoute="/layout/employeeList"
      />
    </div>
  );
};

export default UpdateEmployee;