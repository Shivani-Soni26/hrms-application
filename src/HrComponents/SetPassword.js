import React, { useEffect, useState } from 'react';
import config from '../common/config';
import '../components/Master.css';

const SetPassword = () => {
    const [employeeId, setEmployeeId] = useState('');
    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');
    const [allData, setAllData] = useState([]);
    const endpoint = "/updateEmployeePassword"
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
            // console.log('Type of allData:', allDetails?.Data?.map((ele => console.log(ele.id))));
        }
        fetchData();
    }, []);

    const onHandleChange = (e) => {
        // alert(e.target.value);
        setEmployeeId(e.target.value)

    }


    const handleSubmit = async () => {
        if (input1 === input2) {
            try {
                const response = await fetch(`${config.baseApiUrl}${endpoint}/${employeeId}/${token}`, {
                    method: 'put',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ password: input1 }),
                });

                if (response.ok) {
                    console.log('Record inserted successfully');
                    alert('Password Generated successfully.');
                    handleCancel();
                } else {
                    console.error('Error inserting record');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        } else {
            alert('Oops! Password does not matches');
        }
    };

    const handleCancel = () => {
        setEmployeeId('');
        setInput1('');
        setInput2('');
    }
    return (
        <div className="Myform" >
            <div className='inner-form-1'>
                <div className="row inner-form-data">
                    <h2>Set Employee Password</h2>
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

                        <label className="label">Password</label>
                        <input className='input-field form-control'
                            type="password"
                            id="input1"
                            placeholder="Enter Password"
                            value={input1}
                            onChange={(e) => setInput1(e.target.value)}
                            required
                        />
                    </div>
                    <div className="col-md-6">
                        <label className="label" >Confirm password</label>
                        <input className='input-field form-control'
                            type="password"
                            id="input2"
                            placeholder="Re-Enter"
                            value={input2}
                            onChange={(e) => setInput2(e.target.value)}
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

export default SetPassword;