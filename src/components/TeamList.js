import React, { useEffect, useState } from 'react';
import config from '../common/config';
import './Master.css';
import { NavDropdown } from 'react-bootstrap';

const TeamList = () => {
  const token = localStorage.getItem('token');
  const [selectedTeam, setSelectedTeam] = useState('');
  const [employeeData, setEmployeeData] = useState([]);
  const [managerTeamEmployeeMap, setManagerTeamEmployeeMap] = useState([]);
  const [sortedArray, setSortedArray] = useState([]);
  const [totals, setTotals] = useState({
    totalTeam: 0,
    totalSalary: 0,
    totalRate: 0,
    totalPercentage: 0,
    totalNet: 0,
  })

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${config.baseApiUrl + "employeeData"}/${token}`);
        const data = await response.json();
        console.log("jklmn", data);

        if (data.Ack === 1) {
          setEmployeeData(data.Data);
        } else {
          console.error('Failed to fetch data');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [token]);

  useEffect(() => {
    // Create a mapping of manager names and teams to an array of employees
    const newManagerTeamEmployeeMap = {};
    const uniqueClients = new Set();
    let totalTeam = 0;
    let totalSalary = 0;
    let totalRate = 0;
    employeeData.forEach(employee => {
      const managerName = `${employee.manager_firstname} ${employee.manager_lastname}`;
      const clientId = employee.client;

      if (clientId && employee.enable === 1) {
        const key = `${clientId}`;

        if (!newManagerTeamEmployeeMap[key]) {
          newManagerTeamEmployeeMap[key] = { managerName, team: clientId, count: 1, employee: employee.monthlyctc, rate: employee.rate, percentage: ((employee.rate - employee.monthlyctc) / employee.monthlyctc) * 100, net: (employee.rate - employee.monthlyctc) };
        } else {
          newManagerTeamEmployeeMap[key].count += 1;
          newManagerTeamEmployeeMap[key].managerName = managerName;
          newManagerTeamEmployeeMap[key].employee += employee.monthlyctc;
          newManagerTeamEmployeeMap[key].rate += employee.rate;
          newManagerTeamEmployeeMap[key].percentage = ((newManagerTeamEmployeeMap[key].rate - newManagerTeamEmployeeMap[key].employee) / newManagerTeamEmployeeMap[key].employee) * 100;
          newManagerTeamEmployeeMap[key].net = (newManagerTeamEmployeeMap[key].rate - newManagerTeamEmployeeMap[key].employee);
        }
        uniqueClients.add(clientId);
        totalTeam += 1;
        totalSalary += employee.monthlyctc;
        totalRate += employee.rate;
      }
    });
    // Convert the mapping to an array
    const resultArray = Object.values(newManagerTeamEmployeeMap);
    const sortedArray = resultArray.slice().sort((a, b) => {
      const managerNameA = a.managerName.toLowerCase();
      const managerNameB = b.managerName.toLowerCase();

      if (managerNameA < managerNameB) {
        return -1;
      }
      if (managerNameA > managerNameB) {
        return 1;
      }
      return 0;
    });
    setSortedArray(sortedArray);

    setManagerTeamEmployeeMap(resultArray);
    setTotals({
      totalTeam: uniqueClients.size,
      totalSalary,
      totalRate,
      totalPercentage: ((totalRate - totalSalary) / totalSalary) * 100,
      totalNet: totalRate - totalSalary,
    });
  }, [employeeData]);

  const handleSelectChange = (eventKey) => {
    setSelectedTeam(eventKey);
  };
  const filteredData = selectedTeam
    ? sortedArray.filter(item => item.managerName === selectedTeam)
    : sortedArray;

  const newTotals = filteredData.reduce((acc, item) => {
    acc.totalTeam += 1;
    acc.totalSalary += item.employee;
    acc.totalRate += item.rate;
    acc.totalPercentage = ((acc.totalRate - acc.totalSalary) / acc.totalSalary) * 100;
    acc.totalNet = acc.totalRate - acc.totalSalary;
    return acc;
  }, {
    totalTeam: 0,
    totalSalary: 0,
    totalRate: 0,
    totalPercentage: 0,
    totalNet: 0,
  });

  return (
    <div className='teamMain-data'>
      <div className='totalData-part'>
        <div class="detailMainname">
          <h2>
            TEAM DETAILS
          </h2>
          <NavDropdown
              title={selectedTeam || 'All Managers'}
              onSelect={handleSelectChange}
            ><NavDropdown.Item >
                All Managers
              </NavDropdown.Item>
              {Array.from(new Set(managerTeamEmployeeMap.map(item => item.managerName))).map((managerName, index) => (
                <NavDropdown.Item key={index} eventKey={managerName}>
                  {managerName}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
        </div>
        <div className='teamdetails'>
          <h6>Total Teams:<span> {newTotals.totalTeam}</span></h6>
          <h6>Total Members : <span>{filteredData.reduce((acc, item) => acc + item.count, 0)}</span></h6>
          <h6>Total Monthly CTC :<span>{newTotals.totalSalary}</span></h6>
          <h6>Total Rate : <span>{newTotals.totalRate}</span></h6>
          <h6>Total Percentage : <span>{Math.round(newTotals.totalPercentage)} %</span></h6>
          <h6>Total Net : <span>{newTotals.totalNet}</span></h6>
        </div>
      </div>
      <table className='table table-striped table-hover table-bordered'>
        <thead>
          <tr>
            <th>Team Name</th>
            <th >Manager Name</th>
            <th>Team Members Count</th>
            <th>Monthly CTC</th>
            <th>Rate</th>
            <th>Percentage</th>
            <th>Net</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, index) => (
            <tr key={index}>
              <td>{item.team}</td>
              <td>{item.managerName}</td>
              <td>{item.count}</td>
              <td>{item.employee}</td>
              <td>{item.rate}</td>
              <td>{Math.round(item.percentage)}%</td>
              <td>{item.net}</td>
            </tr>
          ))}
          <tr>
            <td><strong>Grand Total  :</strong> {newTotals.totalTeam}</td>
            <td>{new Set(filteredData.map(item => item.managerName)).size}</td>
            <td>{filteredData.reduce((acc, item) => acc + item.count, 0)}</td>
            <td>{newTotals.totalSalary}</td>
            <td>{newTotals.totalRate}</td>
            <td>{Math.round(newTotals.totalPercentage)}%</td>
            <td>{newTotals.totalNet}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TeamList;