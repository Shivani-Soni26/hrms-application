import React, { useEffect, useState } from 'react';
import config from '../common/config';
import '../../src/index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-regular-svg-icons';

const EmployeeSelector = ({onEmployeeChange}) => {
    const [employeeId, setEmployeeId] = useState('');
    const [allData, setAllData] = useState([]);
    const endpoint1 = "fetchAllEmployeesData"
    const token = localStorage.getItem('token');
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`${config.baseApiUrl}${endpoint1}/${token}`, {
                method: 'get',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            const allDetails = await response.json();
            setAllData(allDetails.Data)
        }
        fetchData();
    }, []);

    const onHandleChange = (e) => {
        setEmployeeId(e.target.value);
        onEmployeeChange(e.target.value);

    };

    const filteredEmployees = allData.filter((data)=>data.enable===1);

    return (
            <>
           
            <select className='emp_selector' value={employeeId} onChange={onHandleChange}>
                <option value="0">Select Employee</option>
                {filteredEmployees.map((data) => (
                    <option key={data.id} value={data.id}>
                        {`${data.fullName}`}
                    </option>
                ))}
            </select></>
            
        
    );
};

export default EmployeeSelector;