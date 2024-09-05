import React from "react";
import GenericFormComponent from "../components/Master";

const token = localStorage.getItem('token');
const schema = [
    {
        grid: 3,
        label: "Document Type ",
        name: "name",
        type: "select",

    },
    {
        grid: 3,
        label: "Upload Documents",
        name: "file",
        type: "file",
    },
    {
        name: "employeeid",
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
        text: 'NEW DOCUMENTS',
    },
};

function UserDocuments() {

    const formData = {
        employeeid: localStorage.getItem('userId'),
        file: 'file',
        token: token,
    };
    const data = { schema };
    const endpoint = 'uploadDocuments';
    const endpointUrls = {
        name: "fetchRecords/documenttype",
    };
    return (
        <div className='Myform'>
            <GenericFormComponent initialData={formData} data={data} customConfig={customConfig} endpoint={endpoint} endpointUrls={endpointUrls} listRoute="/layout/layout" />
        </div>
    );
};

export default UserDocuments;