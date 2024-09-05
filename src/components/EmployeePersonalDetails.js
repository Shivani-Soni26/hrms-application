import { useLocation } from "react-router-dom";
import React from "react";
import EditForm from "./MasterEdit";
const updateEmployeeSchema = [
    {
        type: "input",
        inputType: "date",
        name: "doj",
        label: "Date Of Joining",
        placeholder: "Enter date of joining",
        defaultValue: "-",
    },
    {
        type: "input",
        inputType: "textarea",
        name: "address",
        label: "Permanent Address",
        placeholder: "Enter permanent address",
        defaultValue: "-",
    },
    {
        type: "input",
        inputType: "text",
        name: "workLocation",
        label: "Work Location",
        placeholder: "Enter work location",
        defaultValue: "-",
    },
    {
        type: "input",
        inputType: "text",
        name: "pan",
        label: "PAN",
        placeholder: "Enter pan number",
        defaultValue: "-",
    },
    {
        type: "input",
        inputType: "text",
        name: "bankName",
        label: "Bank Name",
        placeholder: "Enter bank name",
        defaultValue: "-",
    },
    {
        type: "input",
        inputType: "text",
        name: "bankAcco",
        label: "Bank A/C Number",
        placeholder: "Enter a/c number",
        defaultValue: "-",
    },

    {
        type: "input",
        inputType: "text",
        name: "uan",
        label: "UAN No.",
        placeholder: "Enter UAN number",
        defaultValue: "-",

    },
    {
        type: "input",
        inputType: "text",
        name: "epfAcco",
        label: "EPF A/C No.",
        placeholder: "Enter EPF number",
        defaultValue: "-",
    },
    {
        name: "employeeid"
    },
    {
        name: "firstname"
    },
    {
        name: "lastname"
    },
    {
        name: "phonenumber"
    },
    {
        name: "email"
    },
    {
        name: "password"
    },
    {
        name: "role"
    },
    {
        name: "client"
    },
    {
        name: "device"
    },
    {
        name: "designation"
    },
    {
        name: "seatnumber"
    },
    {
        name: "securitygroupname"
    },
    {
        name: "technology"
    },
    {
        name: "type"
    },
    {
        name: "manager_firstname"
    },
    {
        name: "token"
    },
    {
        type: "button",
    },
];

const customConfig={
    title:{
        text:'Personal Details'
    },
};

function EmployeePersonalDetails({ handleInputChange }) {
    const location = useLocation();
    const formData = {
        doj: location.state.item.doj,
        address: location.state.item.address,
        workLocation: location.state.item.workLocation,
        pan: location.state.item.pan,
        bankName: location.state.item.bankName,
        bankAcco: location.state.item.bankAcco,
        uan: location.state.item.uan,
        epfAcco: location.state.item.epfAcco,
    };
    const updateEndpoint = "updateEmployee";
    const getEndpoint = "fetchEmployeeById/";
    const Id = location.state.item.id
    return (
            <div className="Myform">
                <EditForm
                    dataSchema={updateEmployeeSchema}
                    initialData={formData}
                    recordType="Employee Personal Details"
                    id={Id}
                    customConfig={customConfig}
                    getEndpoint={getEndpoint}
                    updateEndpoint={updateEndpoint}
                    onChange={handleInputChange}
                    listRoute="/layout/employeeList"
                />
            </div>
    );
};

export default EmployeePersonalDetails;