import { useEffect, useState } from "react";
import config from "../common/config";
import '../components/Master.css';
const EmployeeDashboard = () => {
    const [employeeData, setEmployeeData] = useState(null);
    const userId = localStorage.getItem('userId');
    const endpoint = `totalLeavesDetailsById/${userId}`;
    const token = localStorage.getItem('token');

    useEffect(() => {
        const fetchEmployeeData = async () => {
            try {
                const response = await fetch(`${config.baseApiUrl}${endpoint}/${token}`)
                if (!response.ok) {
                    throw new Error(`Failed to fetch data. Status: ${response.status}`);
                }

                const data = await response.json();
                setEmployeeData(data);
            } catch (error) {
                console.error('Error fetching data:', error.message);
            }
        };
        fetchEmployeeData();
    }, [endpoint, token]);

    const clLeave = employeeData && employeeData.Data && employeeData.Data[0] ? employeeData.Data[0]?.cl : 0;
    const cfLeave = employeeData && employeeData.Data && employeeData.Data[0] ? employeeData.Data[0]?.cf : 0;
    const mlLeave = employeeData && employeeData.Data && employeeData.Data[0] ? employeeData.Data[0]?.ml : 0;
    const availedCL = employeeData && employeeData.Data && employeeData.Data[0] ? employeeData.Data[0]?.totalCLLeaves : 0;
    const availedSL = employeeData && employeeData.Data && employeeData.Data[0] ? employeeData.Data[0]?.totalSLLeaves : 0;

    return (
        <>
        <div className="row" style={{ padding: '0px', margin: '10px' }}>
            <div className="col-sm-12" >
                <div className="card-body">
                    <div className="row">
                        <div className="col-sm-3">
                            <div className="dashboard-1">
                                <h5 className="dash-h5">Available<br />Leave:</h5>
                                <p className="card-bg-text">{clLeave + cfLeave} <span className="card-bg-text-2"></span></p>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="dashboard-2">
                                <h5 className="dash-h5">Sick<br />Leave:</h5>
                                <p className="card-bg-text1"> {mlLeave}<span className="card-bg-text-2"></span></p>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="dashboard-3">
                                <h5 className="dash-h5">Availed<br />Casual Leave:</h5>
                                <p className="card-bg-text2"> {availedCL}<span className="card-bg-text-2"></span></p>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="dashboard-4">
                                <h5 className="dash-h5">Availed<br />Sick Leave:</h5>
                                <p className="card-bg-text3"> {availedSL}<span className="card-bg-text-2"></span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default EmployeeDashboard;