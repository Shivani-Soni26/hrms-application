import React, { useState } from 'react';
import config from '../common/config';
import UploadPayslips from './UploadPayslips';

const GenerateButton = () => {
    const token = localStorage.getItem('token');

    const [formData, setFormData] = useState({
        date: '',
        workingDays: '',
        workedDays: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.date && !formData.workingDays && !formData.workedDays) {
            console.log("Please fill in at least one field");
            alert("Please fill the field")
            return;
        }

        const endpoint = "/generatePaySlip";
        try {
            const response = await fetch(`${config.baseApiUrl}${endpoint}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${formData.token}`,
                },
                body: JSON.stringify({
                    date: formData.date,
                    workingDays: formData.workingDays,
                    workedDays: formData.workedDays,
                    token: token,
                }),
            });
            console.log('Response:', response);
            // Handle the response as needed
            if (response.ok) {
                const responseData = await response.json();
                if (responseData.status === 202) {
                    alert('Sorry !! You cannot generate again, you have already generated data for this month.');
                    setFormData({
                        date: '',
                        workingDays: '',
                        workedDays: '',
                    });
                } else {
                    console.log("generated", responseData);
                    alert('Data Generated Successfully.')
                    setFormData({
                        date: '',
                        workingDays: '',
                        workedDays: '',
                    });
                }
            } else {
                console.error('Error in post request:', response.statusText);
            }
        } catch (error) {
            console.error('Error:', error.message);
        }
    };

    return (
        <>
            <form className='generate-btn' onSubmit={handleSubmit}>
                <div className='input-generate-field'>
                    <label>
                        Select month:
                    </label>
                    <input type="date" name="date" value={formData.date} onChange={handleChange} placeholder="YYYY-MM-DD" />
                </div>
                <div className='input-generate-field'>
                    <label>
                        Working Days:
                    </label>
                    <input type="text" name="workingDays" value={formData.workingDays} onChange={handleChange} placeholder="Enter working days" />
                </div>
                <div className='input-generate-field'>
                    <label>
                        Worked Days:
                    </label>
                    <input type="text" name="workedDays" value={formData.workedDays} onChange={handleChange} placeholder="Enter worked days" />
                </div>
                <div className='input-generate-field'>
                    <label></label>
                    <button type="submit">Submit</button>
                </div>

            </form>
            <UploadPayslips />
        </>
    );
};

export default GenerateButton;
