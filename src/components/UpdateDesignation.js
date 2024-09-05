import React from "react";
import EditForm from "./MasterEdit";
import { useLocation } from "react-router-dom";

const updateDesignationSchema  =[
    {
      grid: 12,
      type: 'input',
      inputType: 'text',
      name: 'designation',
      label: 'Designation Name',
      placeholder: 'Enter designation Name',
      defaultValue: '', // Use the existing data as default value
      // pattern: /^[A-Za-z\s]+$/,
      required: true,
    },
 
    
      {
        type: "button",
      },
  ];
    function UpdateDesignation({handleInputChange}){
      const location =useLocation();
      const formData = {
      designation:location.state.item.designation,
    
      };
      const updateEndpoint = "updateDesignation";
      const getEndpoint ="fetchDesignationById/";
      const Id= location.state.item.id;
      
    
      return (
        <div className="Myform">
          <EditForm
            dataSchema={updateDesignationSchema}
            initialData={formData}
            recordType="DESIGNATION"
            id={Id}
            getEndpoint={getEndpoint}
            updateEndpoint={updateEndpoint}
            onChange={handleInputChange}
            listRoute="/layout/designationList"
          />
        </div>
      );
    };
    
    export default UpdateDesignation;