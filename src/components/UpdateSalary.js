import React from "react";
import EditForm from "./MasterEdit";
import './Master.css';
import SalaryForm from "./SalaryForm";
import { useLocation } from "react-router-dom";
const updateSalarySchema = [
  {
    grid: 4,
    type: "input",
    inputType: "text",
    name: "basic",
    label: "Basic salary",
    placeholder: "Enter Basic salary",
    required: true,
  },

  {
    grid: 4,
    type: "input",
    inputType: "text",
    name: "hra",
    label: "HRA",
    placeholder: "Enter Hra",
  
    
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
    placeholder: "Enter Employee PF",
   
    
  },

  {
    grid: 4,
    type: "input",
    inputType: "text",
    name: "teammemberpf",
    label: "Team member PF",
    placeholder: "Enter Team member PF",
   
    
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
    label: "Monthly CTC",
    placeholder: "Enter Monthly CTC",
    
  },
 
  {
    type: "textarea",
    name: "note",
    label: "Note"
  },

  {
    name: "employeeid"
  },

  {
    type: "button",
  },
];
function UpdateSalary({ handleInputChange }) {
  const location = useLocation();
  if (location.state.userData.id && !location.state.userData.salaryid) {
    return (
      <div className="Myform">
        <SalaryForm />
      </div>
    );
  }

  const formData = {
    id: location.state.userData.id,
    basic: location.state.userData.basic,
    hra: location.state.userData.hra,
    transportallowance: location.state.userData.transportallowance,
    specailallowance: location.state.userData.specailallowance,
    employeepf: location.state.userData.employeepf,
    teammemberpf: location.state.userData.teammemberpf,
    performanceBonus:location.state.userData.performanceBonus,
    tds: location.state.userData.tds,
    esi: location.state.userData.esi,
    rate: location.state.userData.rate,
    monthlyctc: location.state.userData.monthlyctc,
    note:location.state.userData.note,


  };
  const updateEndpoint = "updatesalary";
  const getEndpoint = "fetchSalaryByemployeeId/";
  const Id = location.state.userData.id;
  const Fullname = location.state.userData.fullName;

  return (
    <div className="Myform">
      <h4><b>Employee Name:</b> {Fullname}</h4>
      <EditForm
        dataSchema={updateSalarySchema}
        initialData={formData}
        recordType="Salary"
        id={Id}
        getEndpoint={getEndpoint}
        updateEndpoint={updateEndpoint}
        onChange={handleInputChange}
        listRoute="/layout/employeeList"
      />
    </div>
  );
};

export default UpdateSalary;