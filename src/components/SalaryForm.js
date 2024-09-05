import React from "react";
import GenericFormComponent from "./Master";
import './Master.css';
import { useLocation } from "react-router-dom";
const token = localStorage.getItem('token');
const schema = [
    {
        grid: 4,
        type: "input",
        inputType: "text",
        name: "basic",
        label: "Basic salary",
        placeholder: "Enter Basic salary",
        defaultValue: 0,
        required: true,
    },
    {
        grid: 4,
        type: "input",
        inputType: "text",
        name: "hra",
        label: "HRA",
        placeholder: "Enter Hra",
        defaultValue: "0",
       
    },

    {
        grid: 4,
        type: "input",
        inputType: "text",
        name: "transportallowance",
        label: "transport allowance",
        placeholder: "Enter transport allowance",
        
      
    },

    {
        grid: 4,
        type: "input",
        inputType: "text",
        name: "specailallowance",
        label: "special allowance",
        placeholder: "Enter special allowance",
        
        
    },
    {
        grid: 4,
        type: "input",
        inputType: "text",
        name: "performanceBonus",
        label: "Perforamnce Bonus",
        placeholder: "Enter Performance Bonus",
       
    },

    {
        grid: 4,
        type: "input",
        inputType: "text",
        name: "employeepf",
        label: "Employee PF",
        placeholder: "Enter Employee pf",
    },

    {
        grid: 4,
        type: "input",
        inputType: "text",
        name: "teammemberpf",
        label: "Team member PF",
        placeholder: "Enter Team member pf",
    },

    {
        grid: 4,
        type: "input",
        inputType: "text",
        name: "tds",
        label: "TDS",
        placeholder: "Enter TDS",
    },
    {
        grid: 4,
        type: "input",
        inputType: "text",
        name: "esi",
        label: "ESI",
        placeholder: "Enter esi",
    },
    {
        grid: 4,
        type: "input",
        inputType: "text",
        name: "rate",
        label: "Rate",
        placeholder: "Enter Rate",
    },
    {
        grid: 4,
        type: "input",
        inputType: "text",
        name: "monthlyctc",
        label: "MonthlyCTC",
        placeholder: "Enter MonthlyCTC",
    },
    {  
        type:"textarea",
        name:"note",
        label:"Note"
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
        text: 'SALARY',
        
    },
};

function SalaryForm() {
    const location = useLocation();
    const Fullname = location.state.userData.fullName;
    const formData = {
        employeeid:location.state.userData.id,
        basic: "0",
        hra: "0",
        transportallowance: "0",
        specailallowance: "0",
        performanceBonus:"0",
        employeepf: "0",
        teammemberpf: "0",
        tds: "0",
        esi: "0",
        monthlyctc:"0",
        note:"",
        rate:"0",
        token: token
    };
    console.log('Initial Data:', formData);

    const data = { schema };
    const endpoint = "addsalary";

    return (
        <div className='Myform'>
            <h4><b>Employee Name:</b> {Fullname}</h4>
            <GenericFormComponent initialData={formData} data={data} customConfig={customConfig} endpoint={endpoint} listRoute="/layout/employeeList" />
        </div>
    );
};

export default SalaryForm;

