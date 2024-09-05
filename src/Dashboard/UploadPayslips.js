import { useState } from 'react';
import config from "../common/config";
import DateSelector from './DateSelector';
import '../../src/index.css';

const UploadPayslips = () => {
  const token = localStorage.getItem('token');
  const endpoint = 'fetchEmployeeData';
  const endpoint1 = 'fetchSalarySlipByEmployeeId';
  const endpoint2 = 'getEmployeesIdFromSalarySlips';
  const [selectedDate, setSelectedDate] = useState('');
  const handleDateChange = date => {
    setSelectedDate(date);
  };
  const dateObject = new Date(selectedDate);
  const month = dateObject.getMonth() + 1;
  const year = dateObject.getFullYear();

  const employees = async () => {
    try {
      const response = await fetch(`${config.baseApiUrl}${endpoint2}/${month}/${year}/${token}`)
      if (!response.ok) {
        throw new Error(`Failed to fetch data. Status: ${response.status}`);
      }
      const ids = await response.json();
      ids.Data.map(async (id) => {
        const employeeId = id.employeeid;
        const month_name = id.month_name;
        const response = await fetch(`${config.baseApiUrl}${endpoint}/${employeeId}/${token}`)
        if (!response.ok) {
          throw new Error(`Failed to fetch data. Status: ${response.status}`);
        }

        const employeeData = await response.json();
        const employeeName = employeeData.Data[0] ? employeeData.Data[0]?.fullName : '-';
        const emp_id = employeeData.Data[0] ? employeeData.Data[0]?.employeeid : '-';
        const pan = employeeData.Data[0] ? employeeData.Data[0]?.pan : '-';
        const doj = employeeData.Data[0] ? employeeData.Data[0]?.doj : '-';
        const bankName = employeeData.Data[0] ? employeeData.Data[0]?.bankName : '-';
        const bankAcco = employeeData.Data[0] ? employeeData.Data[0]?.bankAcco : '-';
        const client = employeeData.Data[0] ? employeeData.Data[0]?.client : '-';
        const address = employeeData.Data[0] ? employeeData.Data[0]?.address : '-';
        const designation = employeeData.Data[0] ? employeeData.Data[0]?.designation : '-';
        const workLocation = employeeData.Data[0] ? employeeData.Data[0]?.worklocation : '-';
        const epfAcco = employeeData.Data[0] ? employeeData.Data[0]?.epfAcco : '-';
        const email = employeeData.Data[0] ? employeeData.Data[0]?.email : '-';
        const uan = employeeData.Data[0] ? employeeData.Data[0]?.uan : '-';


        const response1 = await fetch(`${config.baseApiUrl}${endpoint1}/${employeeId}/${month}/${token}`)
        if (!response1.ok) {
          throw new Error(`Failed to fetch data. Status: ${response1.status}`);
        }
        const employeeSalary = await response1.json();

        const basicSalaryInt = parseInt(employeeSalary?.Data?.[0]?.basic ?? 0);
        const hraInt = parseInt(employeeSalary?.Data?.[0]?.hra ?? 0);
        const performanceBonusInt = parseInt(employeeSalary?.Data?.[0]?.performanceBonus ?? 0);
        const transportallowanceInt = parseInt(employeeSalary?.Data?.[0]?.transportAllowance ?? 0);
        const employeePFInt = parseInt(employeeSalary?.Data?.[0]?.employeePf ?? 0);
        const employerPFInt = parseInt(employeeSalary?.Data?.[0]?.employerPf ?? 0);
        const specialAllowanceInt = parseInt(employeeSalary?.Data?.[0]?.specialAllowance ?? 0);
        const esiInt = parseInt(employeeSalary?.Data?.[0]?.esi ?? 0);
        const workingDays = parseInt(employeeSalary?.Data?.[0]?.workingDays ?? 0);
        const workedDays = parseInt(employeeSalary?.Data?.[0]?.workedDays ?? 0);

        const totalEarning = basicSalaryInt + hraInt + performanceBonusInt + transportallowanceInt + employeePFInt + specialAllowanceInt;
        const totalDetection = employeePFInt + esiInt + employerPFInt;
        const netPay = totalEarning - totalDetection;
        const htmlContent = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>HTML5 Table</title>
          <style>
            .main-form-div {
              margin: 45px;
            }
            .main-div {
              border: 1px solid black;
              padding-left: 1%;
              padding-right: 1%;
            }
            .top-para {
              margin: 5px;
              width: 100%;
              height: 100px;
              text-align: left;
              border-collapse: collapse;
              table-layout: fixed;
            }
            .companyName {
              font-size: 1.1em;
              font-family: 'montserrat', sans-serif;
              font-weight: 500;
            }
            .companyName-span-A {
              font-size: 0.7em;
              font-weight: 400;
            }
            .tableName {
              width: 100%;
              border-collapse: collapse;
              padding-left: 20px;
            }
            .tableName, .headerName, .headerName-1, .tableDataAmt, .tableData, .tableData-1 {
              border: 1px solid black;
            }
            .headerName {
              background: linear-gradient(#c8e0e7, #e1eef4);
              text-align: center;
              padding: 2px;
            }
            .headerName-1 {
              background: linear-gradient(#c8e0e7, #e1eef4);
              padding: 2px;
              padding-right: 2px;
              font-size: 12px;
            }
            .tableData, .tableDataAmt {
              font-size: 11px;
              padding-left: 2px;
              font-weight: 400;
            }
            .bottom-para {
              margin-left: 70% !important;
              padding-top: 24px;
            }
            .company-logo {
              height: 45px;
              margin-right: 20px;
              float: right;
            }
      
            .amount {
              display: block;
              text-align: right;
              padding-right: 2px;
            }
      
          </style>
        </head>
        <body>
          <div>
            <div class='main-form-div'>
              <div class='main-div'>
                <div class='top-div'>
                  <table class="top-para">
                    <tr>
                      <td colspan="5" class="companyName">
                        TechCompiler Data System Pvt Ltd.<br />
                        <span class="companyName-span-A">Block A - 632, Logix Technova Business Park, Sector-132<br /></span>
                        <span class="companyName-span-A">Noida, (UP), India, 201301...</span>
                      </td>
                      <td colspan="4">
                        <img src='http://localhost:3000/static/media/logo.b891b4823d0c118e474b.png' alt='Logo' class='company-logo' />
                      </td>
                    </tr>
                  </table>
                </div>
                <table class='tableName'>
                  <tbody>
                    <tr>
                      <th colspan="4" class='headerName'>Employee Pay slip: ${month_name}</th>
                    </tr>
                    <tr>
                      <td class='tableData'>Employee Name</td>
                      <td class='tableData-1'>${employeeName}</td>
                      <td class='tableData'>Employee Id</td>
                      <td class='tableData-1'>${emp_id}</td>
                    </tr>
                    <tr>
                      <td class='tableData'>Designation</td>
                      <td class='tableData-1'>${designation}</td>
                      <td class='tableData'>DOJ</td>
                      <td class='tableData-1'>${doj}</td>
                    </tr>
                    <tr>
                      <td class='tableData'>Client</td>
                      <td class='tableData-1'>${client}</td>
                      <td class='tableData'>E-Mail</td>
                      <td class='tableData-1'>${email}</td>
                    </tr>
                    <tr>
                      <td class='tableData'>Address (Perm.)</td>
                      <td class='tableData-1'>${address}</td>
                      <td class='tableData'>Work Location</td>
                      <td class='tableData-1'>${workLocation}</td>
                    </tr>
                    <tr>
                      <td class='tableData'>Bank Name</td>
                      <td class='tableData-1'>${bankName}</td>
                      <td class='tableData'>Bank A/c No.</td>
                      <td class='tableData-1'>${bankAcco}</td>
                    </tr>
                    <tr>
                      <td class='tableData'>PAN</td>
                      <td class='tableData-1'>${pan}</td>
                      <td class='tableData'>UAN</td>
                      <td class='tableData-1'>${uan}</td>
                    </tr>
                    <tr>
                      <td class='tableData'>EPF A/c No</td>
                      <td class='tableData-1'>${epfAcco}</td>
                      <td class='tableData'>Pay Mode</td>
                      <td class='tableData-1'>Bank Transfer</td>
                    </tr>
                    <tr>
                      <td class='tableData'>Working Days</td>
                      <td class='tableData-1'>${workingDays}</td>
                      <td class='tableData'>Worked Days</td>
                      <td class='tableData-1'>${workedDays}</td>
                    </tr>
                    <tr>
                      <th class='headerName-1'>Earnings</th>
                      <th class='headerName-1'><span class='amount'>Amount</span></th>
                      <th class='headerName-1'>Deductions</th>
                      <th class='headerName-1'><span class='amount'>Amount</span></th>
                    </tr>
                    <tr>
                      <td class='tableDataAmt'>Basic Salary</td>
                      <td class='tableDataAmt'><span class='amount'>&#8377;${basicSalaryInt}.00</span></td>
                      <td class='tableDataAmt'>Employee PF Contribution</td>
                      <td class='tableDataAmt'><span class='amount'>&#8377;${employeePFInt}.00</span></td>
                    </tr>
                    <tr>
                      <td class='tableDataAmt'>HRA</td>
                      <td class='tableDataAmt'><span class='amount'>&#8377;${hraInt}.00</span></td>
                      <td class='tableDataAmt'>Employer PF Contribution</td>
                      <td class='tableDataAmt'><span class='amount'>&#8377;${employerPFInt}.00</span></td>
                    </tr>
                    <tr>
                      <td class='tableDataAmt'>Performance Bonus</td>
                      <td class='tableDataAmt'><span class='amount'>&#8377;${performanceBonusInt}.00</span></td>
                      <td class='tableDataAmt'>ESI</td>
                      <td class='tableDataAmt'><span class='amount'>&#8377;${esiInt}.00</span></td>
                    </tr>
                    <tr>
                      <td class='tableDataAmt'>Conveyance</td>
                      <td class='tableDataAmt'><span class='amount'>&#8377;${transportallowanceInt}</span></td>
                      <th class='headerName-1'>Total Deductions</th>
                      <th class='headerName-1'><span class='amount'>&#8377;${totalDetection}.00</span></th>
                    </tr>
                    <tr>
                      <td class='tableDataAmt'>Special Allowance</td>
                      <td class='tableDataAmt'><span class='amount'>&#8377;${specialAllowanceInt}.00</span></td>
                    </tr>
                    <tr>
                      <td class='tableDataAmt'>Employee PF Contribution</td>
                      <td class='tableDataAmt'><span class='amount'>&#8377;${employeePFInt}.00</span></td>
                    </tr>
                    <tr>
                      <th class='headerName-1'>Total Earnings</th>
                      <th class='headerName-1'><span class='amount'>&#8377;${totalEarning}.00</span></th>
                      <th class='headerName-1'>Net Pay Rs.</th>
                      <th class='headerName-1'><span class='amount'>&#8377;${netPay}.00</span></th>
                    </tr>
                    <tr>
                      <th colspan="4" class='headerName-1'>Net Pay Amount in words:${numberToWords(netPay)}</th>
                    </tr>
                  </tbody>
                </table>
                <p class='bottom-para'>Authorised Signature<br />Samarjeet Singh</p>
              </div>
            </div>
          </div>
        </body>
        </html>`;
        generatePDF(htmlContent, employeeId, month_name);
      })
      if (ids.Data.length === 0) {
        alert('Oops! you have not generate or publish pay slip for this month, First generate and publish ');
      } else {
        alert('Great! pay slip may have been generated successfully if not please check manually');
      }
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }

  }

  function numberToWords(number) {
    const units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const thousands = ['', 'thousand', 'million', 'billion', 'trillion'];
    function convertLessThanOneThousand(number) {
      let word = '';
      if (number % 100 < 20) {
        word = units[number % 100];
        number = Math.floor(number / 100);
      } else {
        word = units[number % 10];
        number = Math.floor(number / 10);

        word = tens[number % 10] + ' ' + word;
        number = Math.floor(number / 10);
      }
      if (number > 0) {
        word = units[number] + ' hundred ' + word;
      }
      return word.trim();
    }

    function convert(number) {
      if (number === 0) {
        return 'zero';
      }

      let word = '';
      let chunkIndex = 0;

      while (number > 0) {
        if (number % 1000 !== 0) {
          word = convertLessThanOneThousand(number % 1000) + ' ' + thousands[chunkIndex] + ' ' + word;
        }
        number = Math.floor(number / 1000);
        chunkIndex++;
      }

      return word.trim();
    }

    return convert(number);
  }
  
  const generatePDF = async (htmlContent, employeeId, month_name) => {
    const endpoint = 'uploadPaySlip';
    const token = localStorage.getItem('token');
    try {
      const response = await fetch(`${config.baseApiUrl}${endpoint}/${token}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ htmlContent, employeeId, month_name }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate PDF');
      }

    } catch (error) {
      console.error('Error generating PDF:', error);
    }
  };

  // Call generatePDF function when you want to generate the PDF
  // generatePDF();
  return (
    <>
      <div className='UploadPdf-btn'>
        <DateSelector onDateChange={handleDateChange} />
        <button onClick={employees}>Upload Pay Slips</button>
      </div>

    </>
  );
}

export default UploadPayslips;
