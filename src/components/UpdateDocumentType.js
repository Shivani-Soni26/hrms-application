import React from "react";
import { useLocation } from "react-router-dom";
import EditForm from "./MasterEdit";

const updateDeviceSchema = [
    {
        grid: 12,
        type: 'input',
        inputType: 'text',
        name: 'name',
        label: 'Document name',
        placeholder: 'Enter Document Name',
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
        text: 'Edit document Type',
    },
};
function UpdateDocumentType({handleInputChange}) {
    const location =useLocation();
    const formData = {
        name: location.state.item.name

    };
    const updateEndpoint = "updateDocumentType";
    const getEndpoint = "fetchDocumentTypeById/";
    const Id = location.state.item.id;
    


    return (
        <div className="Myform">
            <EditForm
                dataSchema={updateDeviceSchema}
                initialData={formData}
                recordType="name"
                id={Id}
                customConfig={customConfig}
                getEndpoint={getEndpoint}
                updateEndpoint={updateEndpoint}
                onChange={handleInputChange}
                listRoute="/layout/documentTypeList"
               
            />
        </div>
    );
};

export default UpdateDocumentType;