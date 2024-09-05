import React from "react";
import EditForm from "./MasterEdit";
import { useLocation } from "react-router-dom";

const updateClientSchema = [
  {
    grid: 4,
    type: 'input',
    inputType: 'text',
    name: 'client',
    label: 'Client Name',
    placeholder: 'Enter client name',
    defaultValue: '', // Use the existing data as default value
    // pattern: /^[A-Za-z0-9\s]+$/,
    required: true,
  },
  {
    grid: 4,
    type: 'input',
    inputType: 'text',
    name: 'email',
    label: 'Email',
    placeholder: 'Enter client email',
    defaultValue: '',
    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    required: true,
  },
  {
    grid: 4,
    type: 'input',
    inputType: 'text',
    name: 'companyname',
    label: 'Company Name',
    placeholder: 'Enter Company Name',
    defaultValue: '', // Use the existing data as default value
    pattern: /^[A-Za-z0-9\s]+$/,
    required: true,
  },
  {
    type: "button",
  },
];

function UpdateClient({ handleInputChange }) {
  const location = useLocation();
  const formData = {
    client: location.state.item.client,
    companyname: location.state.item.companyname,
    email: location.state.item.email

  };
  const updateEndpoint = "updateClient";
  const getEndpoint = "fetchClientById/";
  const Id = location.state.item.id

  return (
    <div className="Myform">
      <EditForm
        dataSchema={updateClientSchema}
        initialData={formData}
        recordType="CLIENT"
        id={Id}
        getEndpoint={getEndpoint}
        updateEndpoint={updateEndpoint}
        onChange={handleInputChange}
        listRoute="/layout/clientList"
      />
    </div>
  );
};

export default UpdateClient;