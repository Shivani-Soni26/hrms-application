import axios from "axios";
import config from "../common/config";
import { useState } from "react";
import DateSelector from "./DateSelector";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faDownload } from "@fortawesome/free-solid-svg-icons";
function DownloadPaySlip() {

    const [selectedDate, setSelectedDate] = useState(null);
    const handleDateChange = date => {
        setSelectedDate(date.toLocaleDateString());
    };
    const dateObject = new Date(selectedDate);
    const month = dateObject.getMonth() + 1;

    const months = [

        '', 'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const selectedMonth = months[month];
    const userId = localStorage.getItem('userId');
    const endpoint = `downloadPayslip`;

    const handleDownload = async () => {
        const fileName = `salary_slip_${userId}_${selectedMonth}.pdf`;
        try {
            const response = await axios.get(`${config.baseApiUrl}${endpoint}/${userId}/${selectedMonth}`, {
                responseType: 'blob',
            });

            const url = URL.createObjectURL(new Blob([response.data]));
            const a = document.createElement('a');

            a.href = url;
            a.download = fileName;
            a.style.display = 'none';
            document.body.appendChild(a);
            a.click();
            a.remove();
            URL.revokeObjectURL(url);
            alert('File downloaded successfully');

        } catch (error) {
            console.error('Error downloading file:', error.message);
            alert("Error : " +error.message );
        }
    };

    return (
        <div className="down-payslip">
            <div>
            <FontAwesomeIcon icon={faCalendar}/>
            <DateSelector onDateChange={handleDateChange} />
            </div>
            <div>
            <button onClick={handleDownload} >Download Payslip</button>
            </div>
            
        </div>
    )

}

export default DownloadPaySlip;