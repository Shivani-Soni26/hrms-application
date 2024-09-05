import React, { useEffect, useState } from "react";
import config from "../common/config";
import { useNavigate } from "react-router-dom";
function UpdateLeaves() {
    const [managercomment, setManagerComment] = useState('');
    const [status, setStatus] = useState("");
    const token = localStorage.getItem('token');
    const empId = localStorage.getItem('employeeid');
    const uniqueId = localStorage.getItem('uniqueId');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [leavetype, setLeaveType] = useState('');
    const [empName, setEmpName] = useState('');
    const [employeecomment, setEmployeeComment] = useState('');
    const [managerError, setManagerError] = useState('');
    const [statusError, setStatusError] = useState('');
    useEffect(() => {
        const fetchLeaveDetails = async () => {
            try {
                const apiUrl = `${config.baseApiUrl}fetchLeavesByUniqueId/${empId}/${uniqueId}/${token}`;

                const response = await fetch(apiUrl);
                if (response.ok) {
                    const data = await response.json();
                    console.log("Fetched data:", data);
                    setEmpName(data.Data[0].employeeName);
                    setStartDate(data.Data[0].startDate);
                    setEndDate(data.Data[0].endDate);
                    setLeaveType(data.Data[0].leaveType);
                    setEmployeeComment(data.Data[0].employeecomment);
                } else {
                    console.log('Error fetching leave details');
                }

            } catch (error) {
                console.error('Error:', error);
            }
        };
        fetchLeaveDetails();
    }, [empId, token, uniqueId]);
    const navigate = useNavigate();

    const handleCommentChange = (e) => {
        setManagerComment(e.target.value);
    };

    const handleOptionChange = (e) => {
        setStatus(e.target.value);
    }
    const handleSubmit = async (event) => {
        event.preventDefault()
        const managerError = managercomment.trim() === '' ? 'Manager comment is required' : '';
        const statusError = status === '' ? 'Status is required' : '';

        setManagerError(managerError);
        setStatusError(statusError);

        if (managerError || statusError) {
            console.log('Validation failed. Please check the form.');
            return;
        }
        const apiUrl = `${config.baseApiUrl}updateLeaves/${empId}/${uniqueId}/${token}`;
        try {
            const response = await fetch(apiUrl, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "approved": status,
                    "approvercomment": managercomment,
                }),
            });
            if (response.ok) {
                console.log('Leave request submitted successfully');
                navigate(-1);
            } else {
                console.log('Error submitting leave request');
            }
        } catch (error) {
            console.error('Error:', error);
        }

    };
    const handleCancel = () => {
        navigate("/layout/employeeleavelist");
        // e.preventDefault();
        // setStatus('')
        // setStatusError('')
        // setManagerComment('')
        // setManagerError('')
    };
    return (
        <form className="leave-form">
            <div className="inner-form-1">
                <div className="row inner-form-data date-picker-part">
                    <h2>Update Leave</h2>
                    <div className="col-md-6">
                        <label className="label">Employee Name : </label>
                        <input className="input-field form-control" type="text" value={empName} readOnly />
                    </div>
                    <div className="col-md-6">
                        <label className="label">From : </label>
                        <input className="input-field form-control" type="text" value={startDate} readOnly />
                    </div>
                    <div className="col-md-6">
                        <label className="label">To : </label>
                        <input className="input-field form-control" type="text" value={endDate} readOnly />
                    </div>
                    <div className="col-md-6">
                        <label className="label">Type Of Leave:</label>
                        <input className="input-field form-control"
                            type="text"
                            value={leavetype}
                            readOnly

                        />
                    </div>
                    <div className="col-md-6">
                        <label className="label">Employee Comment : </label>
                        <textarea type="text" value={employeecomment} readOnly />
                    </div>
                    <div className="col-md-6">
                        <label className="label">Manager Status:</label>
                        <select value={status} onChange={handleOptionChange}>
                            <option value=" ">Select Option</option>
                            <option value="Approved">Approved</option>
                            <option value="Not-Approved">Not Approved</option>
                        </select>
                        {statusError && <span className="error-message-leave">{statusError}</span>}
                    </div>
                    <div className="col-md-6">
                        <label className="label">Manager Comment : </label>
                        <textarea type="text" value={managercomment} onChange={handleCommentChange} />
                        {managerError && <span className="error-message-leave">{managerError}</span>}
                    </div>
                    <div className="col-md-6">
                        <div className="main-button-color">
                            <button className="btn btn-secondary" onClick={handleSubmit}>Submit</button>
                            <button className="btn btn-danger" onClick={handleCancel}>Cancel</button>
                        </div>

                    </div>
                </div>
            </div>
        </form>


    )

}

export default UpdateLeaves;