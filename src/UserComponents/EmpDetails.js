import React from "react";
import MasterProfile from "./MasterProfile";


const columns =[
  {label:'First Name', key:'firstname' },
  {label:'Last Name',key:'lastname'},
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
function EmpDetails(){
const empId = localStorage.getItem('id');
const endpoint=`fetchEmployeeDetails/${empId}`;
 
return(
  <div>
    <MasterProfile
    endpoint={endpoint}
    columns={columns}
    showLinkButtons={false}/>
  </div>
);
}

export default EmpDetails;