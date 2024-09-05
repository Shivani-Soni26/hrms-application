import React, { useState } from "react";
import config from "../common/config";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-multi-date-picker";
import '../components/Master.css';
function Leaves() {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [leavetype, setLeaveType] = useState('');
    const [employeecomment, setEmployeeComment] = useState('');
    const [employeeError, setEmployeeError] = useState('');
    const [leaveError, setLeaveError] = useState('');
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
    const navigate = useNavigate();

    const handleCommentChange = (e) => {
        setEmployeeComment(e.target.value);
    };

    const handleOptionChange = (e) => {
        setLeaveType(e.target.value);
    }
    const handleSubmit = async (event) => {
        event.preventDefault()
        const employeeError = employeecomment.trim() === '' ? 'Your comment is required' : '';
        const leaveError = leavetype === '' ? 'Leave type is required' : '';

        setEmployeeError(employeeError);
        setLeaveError(leaveError);

        if (employeeError || leaveError) {
            console.log('Validation failed. Please check the form.');
            return;
        }
        const apiUrl = `${config.baseApiUrl}applyLeaves`;

        if (userId && startDate && endDate && leavetype && employeecomment) {
            try {
                const formattedStartDate = startDate.format("YYYY/MM/DD");
                const formattedEndDate = endDate.format("YYYY/MM/DD");

                const response = await fetch(apiUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        "employeeid": userId,
                        "startDate": formattedStartDate,
                        "endDate": formattedEndDate,
                        "employeecomment": employeecomment,
                        "leavetype": leavetype,
                        "token": token
                    }),
                });
                const responseData = await response.json();
                if (responseData.Ack === 1) {
                    alert('Leave request submitted successfully');
                    console.log('Leave request submitted successfully');
                    navigate(-1);
                } else if (responseData.Ack === 0) {
                    alert('Opps! you have already applied leaves for some dates ')
                } else {
                    console.log('Error submitting leave request');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        } else {
            console.warn('Please fill in all fields before submitting.');
        }
    };
    const handleCancel = (e) => {
        e.preventDefault();
        setStartDate('');
        setEndDate('');
        setLeaveType('');
        setEmployeeComment('');
        setEmployeeError('')
        setLeaveError('')

    };
    return (
        <div className="Myform">
             <div className='inner-form-1'>
                <div className="row inner-form-data">
                    <h2>Leave Form</h2>

                    <div className="col-md-6">
                        <label className="label">From : </label>
                        <DatePicker
                            selectsStart
                            selected={startDate}
                            onChange={date => setStartDate(date)}
                            startDate={startDate} 
                            />
                    </div>
                    <div className="col-md-6">
                        <label className="label">To : </label>
                        <DatePicker
                            selectsEnd
                            selected={endDate}
                            onChange={date => setEndDate(date)}
                            endDate={endDate}
                            startDate={startDate}
                            minDate={startDate}
                            />
                    </div>
                    <div className="col-md-6">
                        <label className="label">Type Of Leave:</label>
                        <select value={leavetype} onChange={handleOptionChange}>
                            <option value=" ">Select Option</option>
                            <option value="SL">Sick Leave</option>
                            <option value="CL">Casual Leave</option>
                        </select>
                        {leaveError && <span className="error-message-leave">{leaveError}</span>}
                    </div>

                    <div className="col-md-6">
                        <label className="label">Comment : </label>
                        <textarea className="input-field form-control " type="text" value={employeecomment} onChange={handleCommentChange} />
                        {employeeError && <span className="error-message-leave">{employeeError}</span>}
                    </div>
                    <div className="col-md-6">
                        <div className="main-button-color">
                            <button className="btn btn-secondary" onClick={handleSubmit}>Submit</button>
                            <button className="btn btn-danger" onClick={handleCancel}>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Leaves;