import React, { useEffect, useState } from 'react';
import config from '../common/config';
import '../components/Master.css';

const LeaveConfig = () => {
    const [employeeId, setEmployeeId] = useState('');
    const [casual, setCasual] = useState('');
    const [sick, setSick] = useState('');
    const [carry, setCarry] = useState('');
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear().toString());
    const [allData, setAllData] = useState([]);
    const endpoint = "fetchAllEmployeesData"
    const endpoint1 = "createTotalLeaves"
    const token = localStorage.getItem('token');
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`${config.baseApiUrl}${endpoint}/${token}`, {
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
        setEmployeeId(e.target.value)

    }

    const handleSubmit = async () => {
        if (employeeId && carry && casual && sick && currentYear) {
            try {
                const response = await fetch(`${config.baseApiUrl}${endpoint1}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        "id": employeeId,
                        "cl": casual,
                        "ml": sick,
                        "year": currentYear,
                        "cf": carry,
                        "token": token
                    }),
                });

                if (response.ok) {
                    console.log('Leave Record inserted successfully');
                    alert('Leave Record insert successfully.');
                    handleCancel();
                } else {
                    console.error('Error inserting record');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        } else {
            alert('Oops! Leave record does not matches');
        }
    };

    const handleCancel = () => {
        setEmployeeId('');
        setCarry('');
        setCasual('')
        setSick('');

    }
    return (
        <div className="Myform" >
            <div className='inner-form-1'>
                <div className="row inner-form-data">
                    <h2>Leave Config</h2>
                    <div className="col-md-6">
                        <label className="label">Employee Name</label>
                        <select value={employeeId} onChange={onHandleChange}>
                            <option value="0">--Select Employee--</option>
                            {allData.map((data) => (
                                <option key={data.id} value={data.id}>
                                    {`${data.fullName}`}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="col-md-6">

                        <label className="label">Year</label>
                        <input className='input-field form-control'
                            type="text"
                            value={currentYear}
                        />
                    </div>
                    <div className="col-md-6">

                        <label className="label">Casual Leave</label>
                        <input className='input-field form-control'
                            type="text"
                            placeholder="Enter total casual leaves"
                            value={casual}
                            onChange={(e) => setCasual(e.target.value)}
                            required
                        />
                    </div>
                    <div className="col-md-6">
                        <label className="label" >Sick Leaves</label>
                        <input className='input-field form-control'
                            type="text"
                            placeholder="Enter total sick leaves"
                            value={sick}
                            onChange={(e) => setSick(e.target.value)}
                            required
                        />
                    </div>
                    <div className="col-md-6">
                        <label className="label" >Carry Forward</label>
                        <input className='input-field form-control'
                            type="text"
                            placeholder="Enter carry forward leaves"
                            value={carry}
                            onChange={(e) => setCarry(e.target.value)}
                            required
                        />
                    </div>
                    <div className="col-md-6">
                        <div className="main-button-color">
                            <button className='btn btn-secondary' type="button" onClick={handleSubmit}>
                                Submit
                            </button>
                            <button className='btn btn-danger' onClick={handleCancel}>
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default LeaveConfig;