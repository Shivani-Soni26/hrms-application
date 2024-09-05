import Login from "./Login";
import ClientList from "./ClientList";
import DesignationList from "./DesignationList";
import DeviceList from "./DeviceList";
import EmployeeList from "./EmployeeList";
import RoleList from "./RoleList";
import SeatList from "./SeatList";
import SecurityGroupList from "./SecurityGroupList";
import TechnologyMasterList from "./TechnologyMasterList";
import TypeList from "./TypeList";
// import Layout from "./Layout";
import Profile from "./Profile";
import UpdateEmployee from "./UpdateEmployee";
import TypeForm from "./TypeForm";
import ClientForm from "./ClientForm";
import SeatForm from "./SeatForm";
import SecurityGroupForm from "./SecurityGroupForm";
import TechnologyForm from "./TechnologyForm";
import RoleForm from "./RoleForm";
import DeviceForm from "./DeviceForm";
import DesignationForm from "./DesignationForm";
import TeamList from "./TeamList";
import UpdateSeat from "./UpdateSeat";
import UpdateSalary from "./UpdateSalary";
import UpdateRole from "./UpdateRole";
import UpdateClient from "./UpdateClient";
import UpdateDesignation from "./UpdateDesignation";
import UpdateDevice from "./UpdateDevice";
import UpdateSecurityGroup from "./UpdateSecurityGroup";
import UpdateTechnology from "./UpdateTechnology";
import UpdateType from "./UpdateType";
import DocumentsType from "../UserComponents/DocumentsType";
import MyTeamList from "./MyTeamList";
import MemberList from "./MemberList";
import EmployeeProfile from "../UserComponents/EmployeeProfile";
import UserDocuments from "../UserComponents/UserDocuments";
import UserDocumentsList from "../UserComponents/UserDocumentsList";
import AdminTeamList from "./AdminTeamList";
import AdminMemberList from "./AdminMemberList";
import EmployeeDetails from "../UserComponents/EmployeeDetails";
import SetPassword from "../HrComponents/SetPassword";
import DocumentTypeForm from "./DocumentTypeForm";
import DocumentTypeList from "./DocumentTypeList";
import UpdateDocumentType from "./UpdateDocumentType";
import HrEmployeeList from "../HrComponents/HrEmployeeList";
import EmpDetails from "../UserComponents/EmpDetails";
import Leaves from "../UserComponents/Leaves";
import LeaveList from "../UserComponents/LeaveList";
import UpdateLeaves from "../UserComponents/UpdateLeaves";
import EmployeeLeaveList from "../UserComponents/EmployeeLeaveList";
import LeaveConfig from "../UserComponents/LeaveConfig";
import AvailableLeaves from '../UserComponents/AvailableLeaves';
import AvailableEmployeeLeaves from "../UserComponents/AvailableEmployeeLeaves";
import ApproveLeaveList from "../UserComponents/ApproveLeaveList";
import Dashboard from "../Dashboard/Dashboard";
import PaySlip from "../Dashboard/PaySlip";
import SalarySlip from "../Dashboard/SalarySlip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBusinessTime, faChair, faCircleUser, faDashboard, faDesktop, faFolderOpen, faLaptopCode, faLock, faMoneyBill, faMoneyCheck, faPersonWalkingArrowRight, faRectangleList, faShieldHalved, faUserGroup, faUserTie, faUsers, faUsersRectangle } from "@fortawesome/free-solid-svg-icons";
import { faBlackTie, faWpforms } from "@fortawesome/free-brands-svg-icons";
const userRole = localStorage.getItem('roleName');
const routes = [
    {
        path: '/*',
        path1: '/',
        element: <Login />,
        isPrivate: true,
        isAdmin: true,
        isManager: false,
        isUser: false,
        text: 'Login'
    },
    {
        path: '/login',
        path1: 'login',
        element: <Login />,
        isPrivate: true,
        isAdmin: true,
        isManager: false,
        isUser: false,
        text: 'Login'
    },
    // {
    //     path: '/layout/:param1',
    //     path1: 'layout',
    //     element: <Layout />,
    //     isPrivate: true,
    //     isAdmin: true,
    //     text: 'Layout'
    // },

    {
        path: '/layout/:param1',
        path1: 'dashboard',
        element: <Dashboard />,
        isPrivate: false,
        isAdmin: userRole === 'Admin',
        isManager: userRole === 'Manager',
        isHr: userRole === 'HR',
        isUser: userRole === 'Employee',
        text: <h6><span className="icon-sidebar"><FontAwesomeIcon icon={faDashboard}/></span> Dashboard</h6>
    },
    {
        path: '/layout/:param1',
        path1: 'employeeList',
        element: <EmployeeList />,
        isPrivate: false,
        isAdmin: userRole === 'Admin',
        isManager: false,
        isUser: false,
        isHr: userRole === 'HR',
        text:   <h6><span className="icon-sidebar"><FontAwesomeIcon icon={faUsers}/></span> Employees</h6>
    },
    {
        path: '/layout/:param1',
        path1: 'teams',
        element: <TeamList />,
        isPrivate: false,
        isAdmin: userRole === 'Admin',
        isManager: false,
        isUser: false,
        isHr: false,
        text: <h6><span className="icon-sidebar"><FontAwesomeIcon icon={faUsersRectangle}/></span>  Teams</h6>
    },
    {
        path: '/layout/:param1',
        path1: 'myteams',
        element: <MyTeamList />,
        isPrivate: false,
        isAdmin: userRole === 'Admin',
        isManager: userRole === 'Manager',
        isUser: false,
        isHr: false,
        text: <h6><span className="icon-sidebar"><FontAwesomeIcon icon={faUserGroup}/></span> My Teams</h6>
    },
    {
        path: '/layout/:param1',
        path1: 'myteams1',
        element: <AdminTeamList />,
        isPrivate: true,
        isAdmin: userRole === 'Admin',
        isManager: userRole === 'Manager',
        isUser: false,
        isHr: false,
        text: <h6><span className="icon-sidebar"><FontAwesomeIcon icon={faUserGroup}/></span> My Teams</h6>
    },

    {
        path: '/layout/:param1',
        path1: 'clientList',
        element: <ClientList />,
        isPrivate: false,
        isAdmin: userRole === 'Admin',
        isManager: false,
        isUser: false,
        isHr: userRole === 'HR',
        text:  <h6><span className="icon-sidebar"><FontAwesomeIcon icon={faCircleUser}/></span> Clients</h6>
    },
    {
        path: '/layout/:param1',
        path1: 'designationList',
        element: <DesignationList />,
        isPrivate: false,
        isAdmin: userRole === 'Admin',
        isManager: false,
        isUser: false,
        isHr: userRole === 'HR',
        text: <h6><span className="icon-sidebar"><FontAwesomeIcon icon={faBlackTie}/></span> Designations</h6>
    },
    {
        path: '/layout/:param1',
        path1: 'deviceList',
        element: <DeviceList />,
        isPrivate: false,
        isAdmin: userRole === 'Admin',
        isManager: false,
        isUser: false,
        isHr: userRole === 'HR',
        text: <h6><span className="icon-sidebar"><FontAwesomeIcon icon={faDesktop}/></span> Devices</h6>
    },

    {
        path: '/layout/:param1',
        path1: 'roleList',
        element: <RoleList />,
        isPrivate: false,
        isAdmin: userRole === 'Admin',
        isManager: false,
        isUser: false,
        isHr: userRole === 'HR',
        text: <h6><span className="icon-sidebar"><FontAwesomeIcon icon={faUserTie}/></span> Roles</h6>
    },
    {
        path: '/layout/:param1',
        path1: 'seatList',
        element: <SeatList />,
        isPrivate: false,
        isAdmin: userRole === 'Admin',
        isManager: false,
        isUser: false,
        isHr: userRole === 'HR',
        text: <h6><span className="icon-sidebar"><FontAwesomeIcon icon={faChair}/></span> Seats</h6>
    },
    {
        path: '/layout/:param1',
        path1: 'securityGroupList',
        element: <SecurityGroupList />,
        isPrivate: false,
        isAdmin: userRole === 'Admin',
        isManager: false,
        isUser: false,
        isHr: userRole === 'HR',
        text:<h6><span className="icon-sidebar"><FontAwesomeIcon icon={faShieldHalved}/></span> Security Groups</h6>
    },
    {
        path: '/layout/:param1',
        path1: 'technologyMasterList',
        element: <TechnologyMasterList />,
        isPrivate: false,
        isAdmin: userRole === 'Admin',
        isManager: false,
        isUser: false,
        isHr: userRole === 'HR',
        text: <h6><span className="icon-sidebar"><FontAwesomeIcon icon={faLaptopCode}/></span> Technologies</h6>
    },
    {
        path: '/layout/:param1',
        path1: 'typeList',
        element: <TypeList />,
        isPrivate: false,
        isAdmin: userRole === 'Admin',
        isManager: false,
        isUser: false,
        isHr: userRole === 'HR',
        text: <h6><span className="icon-sidebar"><FontAwesomeIcon icon={faBusinessTime}/></span> Type</h6>
    },
    {
        path: '/layout/:param1',
        path1: 'memberList',
        element: <MemberList />,
        isPrivate: true,
        isAdmin: userRole === 'Admin',
        isManager: userRole === 'Manager',
        isUser: false,
        isHr: false,
        text: ''
    },
    {
        path: '/layout/:param1',
        path1: 'memberList1',
        element: <AdminMemberList />,
        isPrivate: true,
        isAdmin: userRole === 'Admin',
        isManager: userRole === 'Manager',
        isUser: false,
        isHr: false,
        text: ''
    },

    {
        path: '/layout/:param1',
        path1: 'profile',
        element: <Profile />,
        isPrivate: true,
        isAdmin: userRole === 'Admin',
        isManager: userRole === 'Manager',
        isUser: userRole === 'Employee',
        isHr: userRole === 'HR',
        text: 'Profile'
    },
    {
        path: '/layout/:param1',
        path1: 'employeeprofile',
        element: <EmployeeProfile />,
        isPrivate: false,
        isAdmin: false,
        isManager: false,
        isUser: false,
        isHr: false,
        text: ''
    },
    {
        path: '/layout/:param1',
        path1: 'employeedetails',
        element: <EmployeeDetails />,
        isPrivate: false,
        isAdmin: false,
        isManager: false,
        isUser: false,
        isHr: false,
        text: ''
    },
    {
        path: '/layout/:param1',
        path1: 'emp',
        element: <EmpDetails />,
        isPrivate: false,
        isAdmin: false,
        isManager: false,
        isUser: false,
        isHr: false,
        text: ''
    },

    {
        path: '/layout/:param1',
        path1: 'userDocumentsList',
        element: <UserDocumentsList />,
        isPrivate: false,
        isAdmin: userRole === 'Admin',
        isManager: userRole === 'Manager',
        isUser: userRole === 'Employee',
        isHr: userRole === 'HR',
        text: <h6><span className="icon-sidebar"><FontAwesomeIcon icon={faFolderOpen}/></span> My Documents</h6>
    },
    {
        path: '/layout/:param1',
        path1: 'userDocuments',
        element: <UserDocuments />,
        isPrivate: true,
        isAdmin: userRole === 'Admin',
        isManager: userRole === 'Manager',
        isUser: userRole === 'Employee',
        isHr: userRole === 'HR',
        text: 'userDocuments'
    },
    {
        path: '/layout/:param1',
        path1: 'setPassword',
        element: <SetPassword />,
        isPrivate: false,
        isAdmin: userRole === 'Admin',
        isManager: false,
        isUser: false,
        isHr: userRole === 'HR',
        text:  <h6><span className="icon-sidebar"><FontAwesomeIcon icon={faLock}/></span> set Password</h6>
    },
    {
        path: '/layout/:param1',
        path1: 'documentType',
        element: <DocumentTypeForm />,
        isPrivate: true,
        isAdmin: userRole === 'Admin',
        isManager: false,
        isUser: false,
        isHr: userRole === 'HR',
        text: 'Document Type'
    },
    {
        path: '/layout/:param1',
        path1: 'documentTypeList',
        element: <DocumentTypeList />,
        isPrivate: false,
        isAdmin: userRole === 'Admin',
        isManager: false,
        isUser: false,
        isHr: userRole === 'HR',
        text:  <h6><span className="icon-sidebar"><FontAwesomeIcon icon={faRectangleList}/></span>  Documents List</h6>
    },
    {
        path: '/layout/:param1',
        path1: 'updateDocumentType',
        element: <UpdateDocumentType />,
        isPrivate: true,
        isAdmin: userRole === 'Admin',
        isManager: false,
        isUser: false,
        isHr: userRole === 'HR',
        text: 'UpdateDocumentTypeList'
    },
    {
        path: '/layout/:param1',
        path1: 'hrEmployeeList',
        element: <HrEmployeeList />,
        isPrivate: true,
        isAdmin: false,
        isManager: false,
        isUser: false,
        isHr: userRole === 'HR',
        text:  <h6><span className="icon-sidebar"><FontAwesomeIcon icon={faUsers}/></span> Employees</h6>
    },

    //shivani
    {
        path: '/layout/:param1',
        path1: 'clientForm',
        element: <ClientForm />,
        isPrivate: true,
        isHr: userRole === 'HR',
        text: 'ClientForm'
    },
    {
        path: '/layout/:param1',
        path1: 'updateemployee',
        element: <UpdateEmployee />,
        isPrivate: true,
        isHr: userRole === 'HR',
        text: ''
    },

    {
        path: '/layout/:param1',
        path1: 'updateSeat',
        element: <UpdateSeat />,
        isPrivate: true,
        isHr: userRole === 'HR',
        text: ''
    },
    {
        path: '/layout/:param1',
        path1: 'updateSalary',
        element: <UpdateSalary />,
        isPrivate: true,
        text: ''
    },
    {
        path: '/layout/:param1',
        path1: 'updateRole',
        element: <UpdateRole />,
        isPrivate: true,
        isHr: userRole === 'HR',
        text: ''
    },
    {
        path: '/layout/:param1',
        path1: 'updateClient',
        element: <UpdateClient />,
        isPrivate: true,
        isAdmin: userRole === 'Admin',
        isHr: userRole === 'HR',
        text: ''
    },
    {
        path: '/layout/:param1',
        path1: 'updateDesignation',
        element: <UpdateDesignation />,
        isPrivate: true,
        isAdmin: userRole === 'Admin',
        isHr: userRole === 'HR',
        text: ''
    },
    {
        path: '/layout/:param1',
        path1: 'updateDevice',
        element: <UpdateDevice />,
        isPrivate: true,
        isAdmin: userRole === 'Admin',
        isHr: userRole === 'HR',
        text: ''
    },
    {
        path: '/layout/:param1',
        path1: 'updateSecurityGroup',
        element: <UpdateSecurityGroup />,
        isPrivate: true,
        isAdmin: userRole === 'Admin',
        isHr: userRole === 'HR',
        text: ''
    },
    {
        path: '/layout/:param1',
        path1: 'updateTechnology',
        element: <UpdateTechnology />,
        isPrivate: true,
        isAdmin: userRole === 'Admin',
        isHr: userRole === 'HR',
        text: ''
    },
    {
        path: '/layout/:param1',
        path1: 'updateTye',
        element: <UpdateType />,
        isPrivate: true,
        isAdmin: userRole === 'Admin',
        isHr: userRole === 'HR',
        text: ''
    },

    //garima start 
    {
        path: '/layout/:param1',
        path1: 'addseat',
        element: <SeatForm />,
        isPrivate: true,
        isAdmin: userRole === 'Admin',
        isHr: userRole === 'HR',
        text: ''
    },
    {
        path: '/layout/:param1',
        path1: 'addsecuritygroup',
        element: <SecurityGroupForm />,
        isPrivate: true,
        isAdmin: userRole === 'Admin',
        isHr: userRole === 'HR',
        text: ''
    },

    {
        path: '/layout/:param1',
        path1: 'addtechnology',
        element: <TechnologyForm />,
        isPrivate: true,
        isAdmin: userRole === 'Admin',
        isHr: userRole === 'HR',
        text: ''
    },

    {
        path: '/layout/:param1',
        path1: 'addrole',
        element: <RoleForm />,
        isPrivate: true,
        isAdmin: userRole === 'Admin',
        isHr: userRole === 'HR',
        text: ''
    },

    {
        path: '/layout/:param1',
        path1: 'adddevice',
        element: <DeviceForm />,
        isPrivate: true,
        isAdmin: userRole === 'Admin',
        isHr: userRole === 'HR',
        text: ''
    },

    {
        path: '/layout/:param1',
        path1: 'addDesignation',
        element: <DesignationForm />,
        isPrivate: true,
        isAdmin: userRole === 'Admin',
        isHr: userRole === 'HR',
        text: ''
    },

    {
        path: '/layout/:param1',
        path1: 'addType',
        element: <TypeForm />,
        isPrivate: true,
        isAdmin: userRole === 'Admin',
        isHr: userRole === 'HR',
        text: ''
    },
    {
        path: '/layout/:param1',
        path1: 'addDocument',
        element: <DocumentsType />,
        isPrivate: true,
        isAdmin: userRole === 'Admin',
        isHr: userRole === 'HR',
        text: ''
    },
    {
        path: '/layout/:param1',
        path1: 'leaves',
        element: <Leaves />,
        isPrivate: true,
        isAdmin: false,
        isManager: userRole === 'Manager',
        isHr: userRole === 'HR',
        isUser: userRole === 'Employee',
        text: ''
    },
    {
        path: '/layout/:param1',
        path1: 'leavelist',
        element: <LeaveList />,
        isPrivate: false,
        isAdmin: false,
        isManager: userRole === 'Manager',
        isHr: userRole === 'HR',
        isUser: userRole === 'Employee',
        text: 'Leave List'
    },

    {
        path: '/layout/:param1',
        path1: 'employeeleavelist',
        element: <EmployeeLeaveList />,
        isPrivate: false,
        isAdmin: userRole === 'Admin',
        isManager: userRole === 'Manager',
        isHr: false,
        isUser: false,
        text: <h6><span className="icon-sidebar"><FontAwesomeIcon icon={faPersonWalkingArrowRight}/></span>  Employee Leaves</h6>
    },
    {
        path: '/layout/:param1',
        path1: 'updateleaves',
        element: <UpdateLeaves />,
        isPrivate: true,
        isAdmin: userRole === 'Admin',
        isManager: userRole === 'Manager',
        isHr: false,
        isUser: false,
        text: 'Update Leave '
    },
    {
        path: '/layout/:param1',
        path1: 'leaveconfig',
        element: <LeaveConfig />,
        isPrivate: false,
        isAdmin: userRole === 'Admin',
        isManager: false,
        isHr: userRole === 'HR',
        isUser: false,
        text:  <h6><span className="icon-sidebar"><FontAwesomeIcon icon={faWpforms}/></span> Leaves Config</h6>
    },
    {
        path: '/layout/:param1',
        path1: 'availableleaves',
        element: <AvailableLeaves />,
        isPrivate: false,
        isAdmin: false,
        isManager: false,
        isHr: false,
        isUser: false,
        text: ''
    },
    {
        path: '/layout/:param1',
        path1: 'availemployeeleaves',
        element: <AvailableEmployeeLeaves />,
        isPrivate: false,
        isAdmin: userRole === 'Admin',
        isManager: false,
        isHr: userRole === 'HR',
        isUser: false,
        text: 'Available Emp Leave'
    },
    {
        path: '/layout/:param1',
        path1: 'approveleave',
        element: <ApproveLeaveList />,
        isPrivate: true,
        isAdmin: userRole === 'Admin',
        isManager: false,
        isHr: userRole === 'HR',
        isUser: false,
        text: ''
    },
    {
        path: '/layout/:param1',
        path1: 'payslip',
        element: <PaySlip />,
        isPrivate: false,
        isAdmin: userRole === 'Admin',
        isManager: false,
        isHr: userRole === 'HR',
        isUser: false,
        text:  <h6><span className="icon-sidebar"><FontAwesomeIcon icon={faMoneyCheck}/></span>  Pay Slip</h6>
    },
    {
        path: '/layout/:param1',
        path1: 'salaryslip',
        element: <SalarySlip/>,
        isPrivate: false,
        isAdmin: false,
        isManager: userRole === 'Manager',
        isHr: false,
        isUser: userRole === 'Employee',
        text: <h6><span className="icon-sidebar"><FontAwesomeIcon icon={faMoneyBill}/></span> Salary Slip</h6>
    },

];

export default routes;