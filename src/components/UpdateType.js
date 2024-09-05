import React from "react";
import { useLocation } from "react-router-dom";
import EditForm from "./MasterEdit";


const updateTypeSchema = [
  {
    grid: 12,
    type: 'input',
    inputType: 'text',
    name: 'type',
    label: 'Type name',
    placeholder: 'Enter Type ',
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
    text: 'Edit Type',
  },
};
function UpdateType({ handleInputChange }) {

  const location = useLocation();
  const formData = {
    type: location.state.item.type

  };
  const updateEndpoint = "updateType";
  const getEndpoint = "fetchTypeById/";
  const Id = location.state.item.id;

  return (
    <div className="Myform">
      <EditForm
        dataSchema={updateTypeSchema}
        initialData={formData}
        recordType="Type"
        id={Id}
        customConfig={customConfig}
        getEndpoint={getEndpoint}
        updateEndpoint={updateEndpoint}
        onChange={handleInputChange}
        listRoute="/layout/typeList"
      />
    </div>
  );
};

export default UpdateType;