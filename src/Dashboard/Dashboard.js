import EmployeeDashboard from "./EmployeeDashboard";
import '../components/Master.css';
function Dashboard() {
    const user = localStorage.getItem('roleName');
    return (
        <>
            <div>
                <div className="div-header">
                    <h2 className="Heading-top">Welcome To <span className="heading-top-span">Tech Compiler</span></h2>
                </div>
            </div>
            {
                user === 'Employee' ? <div>
                    <EmployeeDashboard />
                </div> : ' '
            }
        </>

    );
}

export default Dashboard