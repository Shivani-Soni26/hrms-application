import React from "react";
import MasterProfile from "./MasterProfile";


const columns =[
  {label:'Full Name', key:'fullName' },
  {label:'Contact',key:'phonenumber'},
  {label:'Employee Id',key:'employeeid'},
  {label:'Email',key:'email'},
  {label:'Role',key:'role'},
  {label:'Client',key:'client'},
  {label:'Device',key:'device'},
  {label:'Designation',key:'designation'},
  {label:'Seat Number',key:'seatnumber'},
  {label:'Security name',key:'securitygroupname'},
  {label:'Technology',key:'technology'},
  {label:'Type',key:'type'},
  {label:'Manager First Name',key:'manager_firstname'},
  {label:'Manager Last Name',key:'manager_lastname'},
 ];
function EmployeeProfile(){
const empId = localStorage.getItem('id');
const endpoint=`fetchEmployeeData/${empId}`;
 
return(
 
    <MasterProfile
    endpoint={endpoint}
    columns={columns}
    docRoute="/layout/docList"
    // detailsroute="/layout/employeePersonalDetails"
    route="/layout/updateSalary"
    buttonName="View Document"
    buttonsName="View Salary"
    />
);
}

export default EmployeeProfile;