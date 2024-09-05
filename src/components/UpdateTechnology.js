import React from "react";
import { useLocation } from "react-router-dom";
import EditForm from "./MasterEdit";

const updateTechnologySchema = [
  {
    grid: 12,
    type: 'input',
    inputType: 'text',
    name: 'technology',
    label: 'Technology name',
    placeholder: 'Enter Technology ',
    defaultValue: '',
    // pattern: /^[A-Za-z\s]+$/,
    required: true,
  },

  {
    type: "button",
  },
];

const customConfig = {
  title: {
    text: 'Edit Technology',
  },
};
function UpdateTechnology({ handleInputChange }) {
  const location = useLocation();
  const formData = {
    technology: location.state.item.technology

  };
  const updateEndpoint = "updateTechnology";
  const getEndpoint = "fetchTechnologyById/";
  const Id = location.state.item.id;

  return (
    <div className="Myform">
      <EditForm
        dataSchema={updateTechnologySchema}
        initialData={formData}
        recordType="Technology"
        id={Id}
        customConfig={customConfig}
        getEndpoint={getEndpoint}
        updateEndpoint={updateEndpoint}
        onChange={handleInputChange}
        listRoute="/layout/technologyMasterList"

      />
    </div>
  );
};

export default UpdateTechnology;