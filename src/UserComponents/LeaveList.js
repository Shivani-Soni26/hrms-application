import React, { useEffect, useState } from 'react';
import config from '../common/config';
import '../components/Master.css';
import { useNavigate } from 'react-router-dom';

function LeaveList() {
  const userId = localStorage.getItem('userId');
  const [leaveData, setLeaveData] = useState([]);
  const token = localStorage.getItem('token');
  const navigate=useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${config.baseApiUrl}fetchLeavesById/${userId}/${token}`);
        const data = await response.json();

        if (data.Ack === 1) {
          setLeaveData(data.Data);
        } else {
          console.error('Failed to fetch leave data');
        }
      } catch (error) {
        console.error('Error fetching leave data:', error);
      }
    };

    fetchData();
  }, [userId]);


  const handleApplyLeave = () => {
    console.log("Add button clicked");
    const addRoute="/layout/leaves"
    if (addRoute) {
      navigate(addRoute);
    } else {
      console.warn('Add route not provided. Handling logic here.');
    }
  };
  const handleAvailableLeave = () => {
    console.log("Add button clicked");
    const addRoute="/layout/availableleaves"
    if (addRoute) {
      navigate(addRoute);
    } else {
      console.warn('Add route not provided. Handling logic here.');
    }
  };
  return (
    <div className='teamMain-data'>
      <div className='totalData-part'>
        <div className="detailMainname">
          <h2>LEAVE LIST</h2>
         <div className='d-flex' style={{gap: "10px"}}>
         <button className='add-button' onClick={handleAvailableLeave}>Available Leave </button>
          <button className='add-button' onClick={handleApplyLeave}>Apply Leave </button>
         </div>
        </div>
      </div>
      <table className='table table-striped table-hover table-bordered'>
        <thead>
          <tr>
            <th>Date</th>
            <th>Leave Type</th>
            <th>Approved</th>
            <th>Manager Name</th>
          </tr>
        </thead>
        <tbody>
          {leaveData.map((leave, index) => (
            <tr key={index}>
              <td>{leave.dateofleave}</td>
              <td>{leave.leavetype}</td>
              <td>{leave.approved}</td>
              <td>{leave.manager}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LeaveList;