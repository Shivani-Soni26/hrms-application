import React, { useRef } from 'react';
import { useEffect, useState } from 'react';
import config from '../common/config';
import { useReactToPrint } from 'react-to-print';
import DateSelector from './DateSelector';
import NumberToWords from './NumberToWords ';
import EmployeeSelector from './EmployeeSelector';
import logo from '../assets/images/logo.png';
import '../../src/index.css';
import GenerateButton from './GenerateButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faCircleUser, faFileDownload, faFileInvoiceDollar } from '@fortawesome/free-solid-svg-icons';
import fingerPointingGif from '../assets/images/finger-pointing.gif';


const PaySlip = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  const token = localStorage.getItem('token');
  const userRole = localStorage.getItem('roleName')

  const endpoint = "fetchEmployeeData";
  const endpoint1 = "fetchSalarySlipByEmployeeId";
  const endpoint2 = "updateSalarySlipByEmployeeId";
  const [employeeData, setEmployeeData] = useState("");
  const [employeeSalary, setEmployeeSalary] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [employeeId, setEmployeeId] = useState('')
  const [editWorkingDays, setEditWorkingDays] = useState('');
  const [editWorkedDays, setEditWorkedDays] = useState('');
  const [showGenerateButton, setShowGenerateButton] = useState(false);
  const [showDownloadButton, setShowDownloadButton] = useState(false);

  const handleDateChange = date => {
    setSelectedDate(date);
    console.log(date);
  };
  const dateObject = new Date(selectedDate);
  const month = dateObject.getMonth() + 1;

  const months = [

    '', 'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const selectedMonth = months[month];

  const handleEmployeeChange = employeeId => {
    setEmployeeId(employeeId)
  }
  const handleWorkingDays = event => {
    setEditWorkingDays(event.target.value);
  }

  const handleWorkedDays = event => {
    setEditWorkedDays(event.target.value);
  }

  const handleGenerateButtonClick = () => {
    setShowGenerateButton(!showGenerateButton);
    setShowDownloadButton(false);
    setEmployeeId('');
  };
  const handleDownloadButtonClick = () => {
    if (showDownloadButton) {
      setShowDownloadButton(false);
      setShowGenerateButton(false);
      setSelectedDate(null);
      setEmployeeId('');
    } else {
      setShowDownloadButton(true);
      setShowGenerateButton(false);
    }
  };
  useEffect(() => {
    const fetchEmployeeData = async () => {
      try {
        const response = await fetch(`${config.baseApiUrl}${endpoint}/${employeeId}/${token}`)
        if (!response.ok) {
          throw new Error(`Failed to fetch data. Status: ${response.status}`);
        }

        const data = await response.json();
        setEmployeeData(data);

        const response1 = await fetch(`${config.baseApiUrl}${endpoint1}/${employeeId}/${month}/${token}`)
        if (!response1.ok) {
          throw new Error(`Failed to fetch data. Status: ${response1.status}`);
        }

        const data1 = await response1.json();
        setEmployeeSalary(data1);

      } catch (error) {
        console.error('Error fetching data:', error.message);
      }

    };
    fetchEmployeeData();
  }, [endpoint, endpoint1, selectedDate, employeeId,month, token]);

  console.log('employeeSalary details', employeeSalary, month);

  const employeeName = employeeData && employeeData.Data && employeeData.Data[0] ? employeeData.Data[0]?.fullName : '-';
  const emp_id = employeeData && employeeData.Data && employeeData.Data[0] ? employeeData.Data[0]?.employeeid : '-';
  const pan = employeeData && employeeData.Data && employeeData.Data[0] ? employeeData.Data[0]?.pan : '-';
  const doj = employeeData && employeeData.Data && employeeData.Data[0] ? employeeData.Data[0]?.doj : '-';
  const bankName = employeeData && employeeData.Data && employeeData.Data[0] ? employeeData.Data[0]?.bankName : '-';
  const bankAcco = employeeData && employeeData.Data && employeeData.Data[0] ? employeeData.Data[0]?.bankAcco : '-';
  const client = employeeData && employeeData.Data && employeeData.Data[0] ? employeeData.Data[0]?.client : '-';
  const address = employeeData && employeeData.Data && employeeData.Data[0] ? employeeData.Data[0]?.address : '-';
  const designation = employeeData && employeeData.Data && employeeData.Data[0] ? employeeData.Data[0]?.designation : '-';
  const workLocation = employeeData && employeeData.Data && employeeData.Data[0] ? employeeData.Data[0]?.worklocation : '-';
  const epfAcco = employeeData && employeeData.Data && employeeData.Data[0] ? employeeData.Data[0]?.epfAcco : '-';
  const email = employeeData && employeeData.Data && employeeData.Data[0] ? employeeData.Data[0]?.email : '-';
  const uan = employeeData && employeeData.Data && employeeData.Data[0] ? employeeData.Data[0]?.uan : '-';


  const basicSalary = employeeSalary?.Data?.[0]?.basic ?? '0';
  const hra = employeeSalary?.Data?.[0]?.hra ?? '0';
  const performanceBonus = employeeSalary?.Data?.[0]?.performanceBonus ?? '0';
  const transportAllowance = employeeSalary?.Data?.[0]?.transportAllowance ?? '0';
  const employeePF = employeeSalary?.Data?.[0]?.employeePf ?? '0';
  const employerPF = employeeSalary?.Data?.[0]?.employerPf ?? '0';
  const specialAllowance = employeeSalary?.Data?.[0]?.specialAllowance ?? '0';
  const esi = employeeSalary?.Data?.[0]?.esi ?? '0';
  const workingDays = employeeSalary?.Data?.[0]?.workingDays ?? '0';
  const workedDays = employeeSalary?.Data?.[0]?.workedDays ?? '0';

  const basicSalaryInt = parseInt(basicSalary);
  const hraInt = parseInt(hra);
  const performanceBonusInt = parseInt(performanceBonus);
  const transportallowanceInt = parseInt(transportAllowance);
  const employeePFInt = parseInt(employeePF);
  const employerPFInt = parseInt(employerPF);
  const specialAllowanceInt = parseInt(specialAllowance);
  const esiInt = parseInt(esi);

  const totalEarning = basicSalaryInt + hraInt + performanceBonusInt + transportallowanceInt + employeePFInt + specialAllowanceInt;
  const totalDetection = employeePFInt + esiInt + employerPFInt;
  const netPay = totalEarning - totalDetection;

  const updatedWorkingDays = editWorkingDays || workingDays;
  const updatedWorkedDays = editWorkedDays || workedDays;

  console.log('Updated Working Days:', updatedWorkingDays);
  console.log('Updated Worked Days:', updatedWorkedDays);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${config.baseApiUrl}${endpoint2}/${employeeId}/${month}/${token}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "workingDays": updatedWorkingDays,
          "workedDays": updatedWorkedDays,
          "publish": 1,
        }),
      });
      if (!response.ok) {
        throw new Error(`Failed to update data. Status: ${response.status}`);
      } else {
        const updatedEmployeeSalary = await fetch(`${config.baseApiUrl}${endpoint1}/${employeeId}/${month}/${token}`);
        const updatedEmployeeSalaryData = await updatedEmployeeSalary.json();
        setEmployeeSalary(updatedEmployeeSalaryData);
        alert('Salary updated successfully!');
      }
    } catch (error) {
      console.error('Error updating data:', error.message);
    }

  };

  return (
    <>
      <div className='pay-slip-btn'>
      {userRole === 'Admin' && (
          <div onClick={handleGenerateButtonClick}>
            <button className='generate-btn-salary'><FontAwesomeIcon icon={faFileInvoiceDollar} /> Generate Salary Slip</button>
          </div>
        )}
        <div onClick={handleDownloadButtonClick}>
          <button className='generate-btn-salary'><FontAwesomeIcon icon={faFileDownload} />  Download Pay Slip</button>
        </div>
        <img src={fingerPointingGif} alt="Finger pointing GIF" className="finger-pointing-gif" style={{ width: "5%" }} />
      </div>
     
      {showGenerateButton && <GenerateButton />}
      <div className='payslip-main-form'>
        {showDownloadButton && (
          <>
            <div className='heading-pay-slip'> <h3> Download Pay Slip </h3></div>

            <div className='btn-div'>
              <div className='select-info'>
              <FontAwesomeIcon icon={faCalendar} />
              <DateSelector onDateChange={handleDateChange}/>
              <FontAwesomeIcon icon={faCircleUser}/><EmployeeSelector onEmployeeChange={handleEmployeeChange} />
              </div>

              <div className='select-action-button'>
                {selectedDate && employeeId && (
                  <>
                    {userRole === "Admin" ?<button className='btn-2' onClick={handleSubmit}>Save</button> : " "}
                    <button className='btn-1' onClick={handlePrint}>Print PDF</button>
                  </>
                )}
              </div>
            </div>
          </>
        )}
      {employeeId ?
        <div className='main-form-div' ref={componentRef}>
          <div className='main-div'>
            <div className='top-div'>
              <table className="top-para">
                <tr>
                  <td colSpan="5" className="companyName">
                    TechCompiler Data System Pvt Ltd.<br />
                    <span className="companyName-span-A">Block A - 632, Logix Technova Business Park, Sector-132<br /></span>
                    <span className="companyName-span-A">Noida, (UP), India, 201301</span>
                  </td>
                  <td colSpan="4">
                    <img src={logo} alt='Logo' className='company-logo' />
                  </td>
                </tr>
              </table>
            </div>
            <table className='tableName'>
              <tbody>
                <tr>
                  <th colSpan="4" className='headerName'>Employee Pay slip: {selectedMonth}</th>
                </tr>
                <tr>
                  <td className='tableData'>Employee Name</td>
                  <td className='tableData-1'>{employeeName}</td>
                  <td className='tableData'>Employee Id </td>
                  <td className='tableData-1'>{emp_id}</td>
                </tr>
                <tr>
                  <td className='tableData'>Designation</td>
                  <td className='tableData-1'>{designation}</td>
                  <td className='tableData'>DOJ</td>
                  <td className='tableData-1'>{doj}</td>
                </tr>
                <tr>
                  <td className='tableData'>Client</td>
                  <td className='tableData-1'>{client}</td>
                  <td className='tableData'>E-Mail</td>
                  <td className='tableData-1'>{email}</td>
                </tr>
                <tr>
                  <td className='tableData'>Address (Perm.) </td>
                  <td className='tableData-1'>{address}</td>
                  <td className='tableData'>Work Location</td>
                  <td className='tableData-1'>{workLocation}</td>
                </tr>
                <tr>
                  <td className='tableData'>Bank Name</td>
                  <td className='tableData-1'>{bankName}</td>
                  <td className='tableData'>Bank A/c No. </td>
                  <td className='tableData-1'>{bankAcco}</td>
                </tr>
                <tr>
                  <td className='tableData'>PAN</td>
                  <td className='tableData-1'>{pan}</td>
                  <td className='tableData'>UAN</td>
                  <td className='tableData-1'>{uan}</td>
                </tr>
                <tr>
                  <td className='tableData'>EPF A/c No</td>
                  <td className='tableData-1'>{epfAcco}</td>
                  <td className='tableData'>Pay Mode</td>
                  <td className='tableData-1'>Bank Transfer</td>
                </tr>
                <tr>
                  <td className='tableData'>Working Days</td>
                  <td className='tableData-1'>
                    {userRole === "Admin" ? (<input
                      type="text"
                      value={editWorkingDays || workingDays}
                      onChange={handleWorkingDays}
                      style={{ border: "none" }}
                    />) : (<span>{workingDays}</span>)}
                  </td>
                  <td className='tableData'>Worked Days</td>
                  <td className='tableData-1'>
                    {userRole === "Admin" ? (<input
                      type="text"
                      value={editWorkedDays || workedDays}
                      onChange={handleWorkedDays}
                      style={{ border: "none" }}
                    />) : (<span>{workedDays}</span>)}</td>
                </tr>
                <tr>
                  <th className='headerName-1'>Earnings</th>
                  <th className='headerName-1'><span className='amount'>Amount</span></th>
                  <th className='headerName-1'>Deductions</th>
                  <th className='headerName-1'><span className='amount'>Amount</span></th>
                </tr>
                <tr>
                  <td className='tableDataAmt'>Basic Salary</td>
                  <td className='tableDataAmt'><span className='amount'>&#8377;{basicSalary}.00</span></td>
                  <td className='tableDataAmt'>Employee PF Contribution</td>
                  <td className='tableDataAmt'> <span className='amount'>&#8377;{employeePF}.00</span></td>
                </tr>
                <tr>
                  <td className='tableDataAmt'>HRA</td>
                  <td className='tableDataAmt'><span className='amount'>&#8377;{hra}.00</span></td>
                  <td className='tableDataAmt'>Employer PF Contribution</td>
                  <td className='tableDataAmt'><span className='amount'>&#8377;{employeePF}.00</span></td>
                </tr>
                <tr>
                  <td className='tableDataAmt'>Performance Bonus</td>
                  <td className='tableDataAmt'><span className='amount'>&#8377;{performanceBonus}.00</span></td>
                  <td className='tableDataAmt'>ESI</td>
                  <td className='tableDataAmt'><span className='amount'>&#8377;{esi}.00</span></td>
                </tr>
                <tr>
                  <td className='tableDataAmt'>Conveyance </td>
                  <td className='tableDataAmt'><span className='amount'>&#8377;{transportAllowance}</span></td>
                  <th className='headerName-1'>Total Deductions</th>
                  <th className='headerName-1'><span className='amount'>&#8377;{totalDetection}.00</span></th>
                </tr>
                <tr>
                  <td className='tableDataAmt'>Special Allowance</td>
                  <td className='tableDataAmt'><span className='amount'>&#8377;{specialAllowance}.00</span></td>
                </tr>
                <tr>
                  <td className='tableDataAmt'>Employee PF Contribution</td>
                  <td className='tableDataAmt'><span className='amount'>&#8377;{employeePF}.00</span></td>
                </tr>
                <tr>
                  <th className='headerName-1'>Total Earnings</th>
                  <th className='headerName-1'><span className='amount'>&#8377;{totalEarning}.00</span></th>
                  <th className='headerName-1'>Net Pay Rs.</th>
                  <th className='headerName-1'><span className='amount'>&#8377;{netPay}.00</span></th>
                </tr>
                <tr>
                  <th colSpan="4" className='headerName-1'><NumberToWords number={netPay} /></th>
                </tr>
              </tbody>
            </table>
            <p className='bottom-para'>Authorised Signatory<br />Samarjeet Singh</p>
          </div>
        </div> : null}
      </div>
      
    </>
  );
};

export default PaySlip;