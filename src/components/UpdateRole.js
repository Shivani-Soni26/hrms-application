import React from "react";
import EditForm from "./MasterEdit";
import { useLocation } from "react-router-dom";

const updateRoleSchema  =[
    {
      grid: 12,
      type: 'input',
      inputType: 'text',
      name: 'role',
      label: 'Role name',
      placeholder: 'Enter Role ',
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
          text: 'Edit Role',
        },
      };
    function UpdateRole({handleInputChange}){
      const location =useLocation();
      const formData = {
          role:location.state.item.role
   
      };
      const updateEndpoint = "updateRole";
      const getEndpoint ="fetchRoleById/";
      const Id= location.state.item.id;
    
      return (
        <div className="Myform">
          <EditForm
            dataSchema={updateRoleSchema}
            initialData={formData}
            recordType="Role"
            id={Id}
            customConfig={customConfig}
            getEndpoint={getEndpoint}
            updateEndpoint={updateEndpoint}
            onChange={handleInputChange}
            listRoute="/layout/roleList"
          />
        </div>
      );
    };
    
    export default UpdateRole;