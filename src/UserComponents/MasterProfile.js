import { useEffect, useState } from "react";
import config from "../common/config";
import { Container, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import '../components/Master.css';
const MasterProfile = ({ endpoint, columns, docRoute, route, showLinkButtons = true, buttonName, buttonsName }) => {
    const [details, setDetails] = useState(null);
    const token = localStorage.getItem('token');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserDetails = async () => {
            try {
                const response = await fetch(`${config.baseApiUrl + endpoint}/${token}`, {
                    method: 'GET',
                    headers: {
                        'content-Type': 'application/json',
                    },
                });
                if (response.ok) {
                    const userData = await response.json();
                    console.log('Fetched User Details: testing', userData);

                    if (userData.Ack === 1 && userData.Data && userData.Data.length > 0) {
                        setDetails(userData.Data[0]);
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
    }, [endpoint]);

    const handleLinkButtonClick = () => {
        if (docRoute) {
            navigate(docRoute, { state: {userData: details} });
        } else {
            console.warn('document not added.');
        }
    };

    const handleButtonClick = () => {
        if (route) {
            navigate(route, { state: { userData: details } });
        } else {
            console.warn('Salary not added.');
        }
    }
    // const handleOnButton=()=>{
    //     if (detailsroute) {
    //         navigate(detailsroute, { state: { userData: details } });
    //     } else {
    //         console.warn('Employee personal details not added.');
    //     }
    // }

    return (
        <Container>
            <div className="master-profile-sec">
            <div className="emp-profile card-header-tech">
            
                <h2>Employee Profile</h2>
                {showLinkButtons && (
                    <div>
                        {/* <button className='link-button' onClick={handleOnButton}>{buttonEmpDetails}</button>&nbsp;&nbsp;&nbsp; */}
                        <button className='link-button' onClick={handleLinkButtonClick}>{buttonName}</button>&nbsp;&nbsp;&nbsp;
                        <button className='link-button' onClick={handleButtonClick}>{buttonsName}</button>
                    </div>
                )}</div>
            {details && (
                <div className="emp-pro-data ">
                <div className="row">
                    <div className="column-item col-md-12">
                        {columns.map(column => (
                            <ul>
                               <li><strong>{column.label}</strong> <span>{details[column.key]}</span></li> 
                            </ul>
                        ))}
                    </div>
                </div>
                </div>
            )}
            </div>
        </Container>
      
    );
};

export default MasterProfile;