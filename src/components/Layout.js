import React from 'react';
// import {useParams} from "react-router-dom";
import { useLocation, useParams } from 'react-router-dom';
import EmployeeList from './EmployeeList';
import ClientList from './ClientList';
import DeviceList from './DeviceList';
import TechnologyMasterList from './TechnologyMasterList';
import SecurityGroupList from './SecurityGroupList';
import TypeList from './TypeList';
import RoleList from './RoleList';
import SeatList from './SeatList';
import DesignationList from './DesignationList';
import Footer from './Footer';
import Header from './Header';
import Sidebar from './Sidebar';
import Profile from './Profile';
import EmployeeForm from './EmployeeForm';
import UpdateEmployee from './UpdateEmployee';
import ClientForm from './ClientForm';
import SeatForm from './SeatForm';
import SecurityGroupForm from './SecurityGroupForm';
import TechnologyForm from './TechnologyForm';
import RoleForm from './RoleForm';
import DeviceForm from './DeviceForm';
import DesignationForm from './DesignationForm';
import TypeForm from './TypeForm';
import TeamList from './TeamList';
import UpdateSeat from './UpdateSeat';
import UpdateSalary from './UpdateSalary';
import UpdateRole from './UpdateRole';
import UpdateClient from './UpdateClient';
import UpdateDesignation from './UpdateDesignation';
import UpdateDevice from './UpdateDevice';
import UpdateSecurityGroup from './UpdateSecurityGroup';
import UpdateTechnology from './UpdateTechnology';
import UpdateType from './UpdateType';
import DocumentsType from '../UserComponents/DocumentsType';
import MyTeamList from './MyTeamList';
import MemberList from './MemberList';
import EmployeeProfile from '../UserComponents/EmployeeProfile';
import DocumentList from '../UserComponents/DocumentList';
import UserDocuments from '../UserComponents/UserDocuments';
import UserDocumentsList from '../UserComponents/UserDocumentsList';
import AdminTeamList from './AdminTeamList';
import AdminMemberList from './AdminMemberList';
import EmployeeDetails from '../UserComponents/EmployeeDetails';
import SetPassword from '../HrComponents/SetPassword';
import DocumentType from './DocumentTypeForm';
import DocumentTypeList from './DocumentTypeList';
import UpdateDocumentType from './UpdateDocumentType';
import HrEmployeeList from '../HrComponents/HrEmployeeList';
import EmpDetails from '../UserComponents/EmpDetails';
import Leaves from '../UserComponents/Leaves';
import LeaveList from '../UserComponents/LeaveList';
import UpdateLeaves from '../UserComponents/UpdateLeaves';
import EmployeeLeaveList from '../UserComponents/EmployeeLeaveList';
import LeaveConfig from '../UserComponents/LeaveConfig';
import AvailableLeaves from '../UserComponents/AvailableLeaves';
import AvailableEmployeeLeaves from '../UserComponents/AvailableEmployeeLeaves';
import ApproveLeaveList from '../UserComponents/ApproveLeaveList';
import Dashboard from '../Dashboard/Dashboard';
import ErrorPage from '../Dashboard/ErrorPage';
import PaySlip from '../Dashboard/PaySlip';
import EmployeePersonalDetails from './EmployeePersonalDetails';
import SalarySlip from '../Dashboard/SalarySlip';
const userName = localStorage.getItem('username');
const userRole = localStorage.getItem('roleName');
console.log('nnnnnn', userRole);



function ContentArea() {
    const params = useParams();
    const { param1 } = params;
    const location = useLocation();
    const currentPath = location.pathname;
    const newPath = `${currentPath}/${userRole}`;
    console.log(newPath);

    switch (newPath) {
        case '/layout/clientList/Admin':
            return <ClientList />;
        case '/layout/clientList/HR':
            return <ClientList />;
        case '/layout/designationList/Admin':
            return <DesignationList />;
        case '/layout/designationList/HR':
            return <DesignationList />;
        case '/layout/deviceList/Admin':
            return <DeviceList />;
        case '/layout/deviceList/HR':
            return <DeviceList />;
        case '/layout/employeeList/Admin':
            return <EmployeeList />;
        case '/layout/employeeList/HR':
            return <HrEmployeeList />;
        case '/layout/roleList/Admin':
            return <RoleList />;
        case '/layout/roleList/HR':
            return <RoleList />;
        case '/layout/seatList/Admin':
            return <SeatList />;
        case '/layout/seatList/HR':
            return <SeatList />;
        case '/layout/securityGroupList/Admin':
            return <SecurityGroupList />;
        case '/layout/securityGroupList/HR':
            return <SecurityGroupList />;
        case '/layout/technologyMasterList/Admin':
            return <TechnologyMasterList />;
        case '/layout/technologyMasterList/HR':
            return <TechnologyMasterList />;
        case '/layout/typeList/Admin':
            return <TypeList />;
        case '/layout/typeList/HR':
            return <TypeList />;
        case '/layout/profile/Admin':
            return <Profile />;
        case '/layout/profile/Manager':
            return <Profile />;
        case '/layout/profile/Employee':
            return <Profile />;
        case '/layout/profile/HR':
            return <Profile />;
        case '/layout/employeeprofile/Admin':
            return <EmployeeProfile />;
        case '/layout/employeeprofile/Manager':
            return <EmployeeProfile />;
        case '/layout/employeeprofile/HR':
            return <EmployeeProfile />;
        case '/layout/employeedetails/Admin':
            return <EmployeeDetails />;
        case '/layout/employeedetails/Manager':
            return <EmployeeDetails />;
        case '/layout/empdetails/HR':
            return <EmpDetails />;
        case '/layout/teams/Admin':
            return <TeamList />;
        case '/layout/myteams/Admin':
            return <AdminTeamList />;
        case '/layout/myteams/Manager':
            return <MyTeamList />;
        case '/layout/memberList/Admin':
            return <AdminMemberList />;
        case '/layout/memberList/Manager':
            return <MemberList />;
        case '/layout/employeeForm/Admin':
            return <EmployeeForm />;
        case '/layout/employeeForm/HR':
            return <EmployeeForm />;
        case '/layout/updateemployee/Admin':
            return <UpdateEmployee />;
        case '/layout/updateemployee/HR':
            return <UpdateEmployee />;
        case '/layout/clientForm/Admin':
            return <ClientForm />;
        case '/layout/clientForm/HR':
            return <ClientForm />;
        case '/layout/updateSeat/Admin':
            return <UpdateSeat />
        case '/layout/updateSeat/HR':
            return <UpdateSeat />
        case '/layout/updateSalary/Admin':
            return <UpdateSalary />;
        case '/layout/updateRole/Admin':
            return <UpdateRole />;
        case '/layout/updateRole/HR':
            return <UpdateRole />;
        case '/layout/updateClient/Admin':
            return <UpdateClient />;
        case '/layout/updateClient/HR':
            return <UpdateClient />;
        case '/layout/updateDesignation/Admin':
            return <UpdateDesignation />;
        case '/layout/updateDesignation/HR':
            return <UpdateDesignation />;
        case '/layout/updateDevice/Admin':
            return <UpdateDevice />;
        case '/layout/updateDevice/HR':
            return <UpdateDevice />;
        case '/layout/updateSecurityGroup/Admin':
            return <UpdateSecurityGroup />;
        case '/layout/updateSecurityGroup/HR':
            return <UpdateSecurityGroup />;
        case '/layout/updateTechnology/Admin':
            return <UpdateTechnology />;
        case '/layout/updateTechnology/HR':
            return <UpdateTechnology />;
        case '/layout/updateType/Admin':
            return <UpdateType />;
        case '/layout/updateType/HR':
            return <UpdateType />;
        case '/layout/userDocumentsList/Admin':
            return <UserDocumentsList />;
        case '/layout/userDocumentsList/Manager':
            return <UserDocumentsList />;
        case '/layout/userDocumentsList/Employee':
            return <UserDocumentsList />;
        case '/layout/userDocumentsList/HR':
            return <UserDocumentsList />;
        case '/layout/userDocuments/Admin':
            return <UserDocuments />;
        case '/layout/userDocuments/Manager':
            return <UserDocuments />;
        case '/layout/userDocuments/Employee':
            return <UserDocuments />;
        case '/layout/userDocuments/HR':
            return <UserDocuments />;
        //garima start
        case '/layout/addseat/Admin':
            return <SeatForm />;
        case '/layout/addseat/HR':
            return <SeatForm />;
        case '/layout/addsecuritygroup/Admin':
            return <SecurityGroupForm />;
        case '/layout/addsecuritygroup/HR':
            return <SecurityGroupForm />;
        case '/layout/addtechnology/Admin':
            return <TechnologyForm />;
        case '/layout/addtechnology/HR':
            return <TechnologyForm />;
        case '/layout/addrole/Admin':
            return <RoleForm />;
        case '/layout/addrole/HR':
            return <RoleForm />;
        case '/layout/adddevice/Admin':
            return <DeviceForm />;
        case '/layout/adddevice/HR':
            return <DeviceForm />;
        case '/layout/addDesignation/Admin':
            return <DesignationForm />;
        case '/layout/addDesignation/HR':
            return <DesignationForm />;
        case '/layout/addType/Admin':
            return <TypeForm />;
        case '/layout/addType/HR':
            return <TypeForm />;
        case '/layout/addDocument/Admin':
            return <DocumentsType />;
        case '/layout/docList/Admin':
            return <DocumentList />;
        case '/layout/setPassword/HR':
            return <SetPassword />;
        case '/layout/setPassword/Admin':
            return <SetPassword />;
        case '/layout/documentType/Admin':
            return <DocumentType />;
        case '/layout/documentType/HR':
            return <DocumentType />;
        case '/layout/documentTypeList/Admin':
            return <DocumentTypeList />;
        case '/layout/documentTypeList/HR':
            return <DocumentTypeList />;
        case '/layout/updateDocumentType/Admin':
            return <UpdateDocumentType />;
        case '/layout/updateDocumentType/HR':
            return <UpdateDocumentType />;
        case '/layout/leaves/Employee':
            return <Leaves />;
        case '/layout/leavelist/Employee':
            return <LeaveList />;
        case '/layout/leaves/Manager':
            return <Leaves />;
        case '/layout/leavelist/Manager':
            return <LeaveList />;
        case '/layout/leaves/HR':
            return <Leaves />;
        case '/layout/leavelist/HR':
            return <LeaveList />;
        case '/layout/employeeleavelist/Manager':
            return <EmployeeLeaveList />;
        case '/layout/updateleaves/Manager':
            return <UpdateLeaves />;
        case '/layout/employeeleavelist/Admin':
            return <EmployeeLeaveList />;
        case '/layout/updateleaves/Admin':
            return <UpdateLeaves />;
        case '/layout/leaveconfig/Admin':
            return <LeaveConfig />;
        case '/layout/leaveconfig/HR':
            return <LeaveConfig />;
        case '/layout/availableleaves/HR':
            return <AvailableLeaves />;
        case '/layout/availableleaves/Manager':
            return <AvailableLeaves />;
        case '/layout/availableleaves/Employee':
            return <AvailableLeaves />;
        case '/layout/availemployeeleaves/Admin':
            return <AvailableEmployeeLeaves />;
        case '/layout/availemployeeleaves/HR':
            return <AvailableEmployeeLeaves />;
        case '/layout/approveleave/Admin':
            return <ApproveLeaveList />;
        case '/layout/approveleave/Manager':
            return <ApproveLeaveList />;
        // case '/layout/layout/Employee':
        //     return <Dashboard />;
        case '/layout/dashboard/Admin':
            return <Dashboard />;
        case '/layout/dashboard/Manager':
            return <Dashboard />;
        case '/layout/dashboard/HR':
            return <Dashboard />;
        case '/layout/dashboard/Employee':
            return <Dashboard />;
        case '/layout/payslip/Admin':
            return <PaySlip />;
        case '/layout/payslip/HR':
            return <PaySlip />;
        case '/layout/employeePersonalDetails/Admin':
            return <EmployeePersonalDetails />;
        case '/layout/salaryslip/Employee':
            return <SalarySlip />;
        case '/layout/salaryslip/Manager':
            return <SalarySlip />;
        default:
            return <ErrorPage />
    }
}

function Layout() {
    if (userName) {

        return (
            <>
                <Header />
                <main>
                    <aside>
                        <Sidebar />
                    </aside>
                    {/* CONTENT AREA START */}
                    <div className='main-content-wrapper'>
                        {/* Render your ContentArea component here */}
                        <ContentArea />
                        <Footer />
                    </div>
                    {/* CONTENT AREA END */}
                </main>

            </>
        );
    }
}

export default Layout;