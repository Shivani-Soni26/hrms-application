import React from "react";
import GenericFormComponent from "../components/Master";
const schema = [
    {
        grid: 3,
        label: "Document Type ",
        name: "name",
        type: "select",

    },
    {
        grid: 3,
        label:"Upload Documents",
        name: "file", 
        type: "file", 
    },
    {
        name:"employeeid"
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
        text: 'DOCUMENTS',
    },
};

function DocumentsType() {
    const token = localStorage.getItem('token');
    const formData = {
        employeeid:localStorage.getItem('id'),
        file:'file',
        token: token,
        };
    const data = { schema };
    const endpoint='uploadDocuments';
    const endpointUrls = {
        name: "fetchRecords/documenttype",
    };
    return (
        <div className='Myform'>
            <GenericFormComponent initialData={formData} data={data} customConfig={customConfig} endpoint={endpoint} endpointUrls={endpointUrls} listRoute="/layout/docList" />
        </div>
    );
};

export default DocumentsType;