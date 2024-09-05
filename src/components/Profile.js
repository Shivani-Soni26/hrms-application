import React, { useState, useEffect } from 'react';
import { Container} from 'react-bootstrap';
import config from '../common/config';
import './Master.css';
const Profile = () => {
  const token = localStorage.getItem('token');
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    if (!userId) {
      console.error('User ID not available');

      return;
    }

    const fetchUserDetails = async () => {
      try {
        const response = await fetch(`${config.baseApiUrl}fetchEmployeeDetails/${userId}/${token}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const userData = await response.json();
          console.log('Fetched User Details:', userData);

          if (userData.Ack === 1 && userData.Data && userData.Data.length > 0) {
            setUserDetails(userData.Data[0]);
          } else {
            console.error('Invalid user details in the server response');
          }
        } else {
          console.error('Failed to fetch user details');
        }
      } catch (error) {
        console.error('Error during fetching user details:', error);
      }
    };

    fetchUserDetails();
  }, []);


  return (
  <Container>
    {userDetails && (
      <div className="container" id='main-con'>
      <div className="row" id='toprow1'>
        <div className="col-sm">
          <p className='heading-user-profile'></p>
        </div>
      </div>

      <div className="row" style={{borderBottom:"1px solid #8a8a8a"}}>
        <div className="col-sm">
          <p className='row1-para1'>Full Name : <span className='row1-para1-span'>{`${userDetails.firstname} ${userDetails.lastname}`}</span></p>
          <p className='row1-para1'>Role : <span className='row1-para1-span'>{userDetails.role}</span></p>
          <p className='row1-para1'>Email : <span className='row1-para1-span'>{userDetails.email}</span></p>
        </div>
      </div>

      <div className="row" id='toprow1'>
        <div className="col-sm">
          <p  className='row2-para'>Phone Number : <span  className='row2-para-span'>{userDetails.phonenumber}</span></p>
        </div>
        <div className="col-sm">
          <p  className='row2-para'>Technology : <span  className='row2-para-span'>{userDetails.technology}</span></p>
        </div>
        <div className="col-sm">
          <p  className='row2-para'>EmployeeId : <span  className='row2-para-span'>{userDetails.employeeid}</span></p>
        </div>
      </div>

      <div className="row" id='toprow1'>
        <div className="col-sm">
          <p  className='row2-para'>Manager Name : <span  className='row2-para-span'>{`${userDetails.manager_firstname}${userDetails.manager_lastname}`}</span></p>
        </div>
        <div className="col-sm">
          <p  className='row2-para'>Device : <span  className='row2-para-span'>{userDetails.device}</span></p>
        </div>
        <div className="col-sm">
          <p  className='row2-para'>Designation : <span  className='row2-para-span'>{userDetails.designation}</span></p>
        </div>
      </div>

      <div className="row" id='toprow1'>
        <div className="col-sm">
          <p  className='row2-para'>Type :  <span  className='row2-para-span'>{userDetails.type}</span></p>
        </div>
        <div className="col-sm">
          <p  className='row2-para'>Security Group : <span  className='row2-para-span'>{userDetails.securitygroupname}</span></p>
        </div>
        <div className="col-sm">
          <p  className='row2-para'>Seat number : <span  className='row2-para-span'>{userDetails.seatnumber}</span></p>
        </div>
      </div>

    </div>

    )}
  </Container>
  );
};

export default Profile;