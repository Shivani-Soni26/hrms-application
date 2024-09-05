import React from "react";
import { useLocation } from "react-router-dom";
import EditForm from "./MasterEdit";

const updateDeviceSchema = [
    {
        grid: 12,
        type: 'input',
        inputType: 'text',
        name: 'device',
        label: 'Device name',
        placeholder: 'Enter device Name',
        defaultValue: '', // Use the existing data as default value
        // pattern: /^[A-Za-z\s]+$/,
        required: true,
    },



    {
        type: "button",
    },
];

const customConfig = {
    title: {
        text: 'Edit Device',
    },
};
function UpdateDevice({handleInputChange}) {
    const location =useLocation();
    const formData = {
        device: location.state.item.device

    };
    const updateEndpoint = "updateDevice";
    const getEndpoint = "fetchDeviceById/";
    const Id = location.state.item.id;
    


    return (
        <div className="Myform">
            <EditForm
                dataSchema={updateDeviceSchema}
                initialData={formData}
                recordType="device"
                id={Id}
                customConfig={customConfig}
                getEndpoint={getEndpoint}
                updateEndpoint={updateEndpoint}
                onChange={handleInputChange}
                listRoute="/layout/deviceList"
               
            />
        </div>
    );
};

export default UpdateDevice;