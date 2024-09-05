import React, { useState, useEffect } from 'react';
import './GenericMasterListComponent.css';
import config from '../common/config';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faFileAlt, faPenSquare, faPlus } from '@fortawesome/free-solid-svg-icons';

const GenericMasterListComponent = ({ endpoint, columns, heading, addButtonText, addRoute, addHeading, editRoute, linkRoute, showEditPersonal = false, showEditActionButtons = true, docRoute, route, editPersonal, showButtons = true,showAddIcon=true, showLinkButtons = false, showTotalCount = false, handleDownload, showFilterValue = false }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalCount, setTotalCount] = useState(0);
  const[activeCount,setActiveCount]=useState(0);
  const[inactiveCount,setInactiveCount]=useState(0);
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const [filterValue, setFilterValue] = useState('active');
  useEffect(() => {
    fetch(`${config.baseApiUrl + endpoint}/${token}`)
      .then((response) => {
        console.log('response ', response);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((response) => {
        console.log(response.Data);
        if (response.Data && Array.isArray(response.Data)) {
          setData(response.Data);
          
          const activeData=response.Data.filter(item=>item.enable===1);
          setActiveCount(activeData.length);
          
          const inactiveData=response.Data.filter(item=>item.enable===0);
          setInactiveCount(inactiveData.length);
          setTotalCount(response.Data.length);
        } else {
          throw new Error('Data is not an array');
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setError(error);
        setLoading(false);
      });
  }, [endpoint + token]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!Array.isArray(data)) {
    return <div>Data is not an array.</div>;
  }

  const handleAddButtonClick = () => {
    console.log("Add button clicked");
    if (addRoute) {
      navigate(addRoute);
    } else {
      console.warn('Add route not provided. Handling logic here.');
    }
  };

  const handleLinkButtonClick = (item) => {
    console.log("sdfgh", data)
    if (docRoute) {
      const itemId = item.employeeid
      navigate(docRoute, { state: { employeeid: itemId } })
    } else {
      console.warn('document not added.');
    }
  };

  const handleEdit = (item) => {
    console.log("Edit button clicked for item:", item);
    if (editRoute) {
      navigate(editRoute, { state: { item } });
    }
    else {
      console.warn('Edit route not provided. Handling logic here.');
    }
  };
  const handlePersonalEdit = (item) => {
    console.log("Edit button clicked for item:", item);
    if (editPersonal) {
      navigate(editPersonal, { state: { item } });
    }
    else {
      console.warn('Edit route not provided. Handling logic here.');
    }
  };
  const handleLinkClick = (item, column) => {
    if (column.key && column.key === 'clientid') {
      console.log("Navigating to:", linkRoute);
      navigate(`${linkRoute}`, { state: { item } });
    }
    else if (column.key && column.key === 'path') {
      localStorage.setItem('linkPath', item.path);
      if (column.name === 'Download') {
        handleDownload(item.path);
      } else {
        navigate(`${linkRoute}`);
      }
    }
    else if (column.key && column.key === 'id') {
      if (column.key && column.key === 'id') {
        localStorage.setItem('id', item.id);
        navigate(`${route}`);
      }
    }
    else if (column.key && column.key === 'employeeid') {
      localStorage.setItem('employeeid', item.employeeid);
      localStorage.setItem('uniqueId', item?.uniqueId || 'default');//bhooopendra
      navigate(`${route}`);
    }
  };

  const handleFilterChange = (event) => {
    setFilterValue(event.target.value);
  }
  return (
    <div className='master-list-container'>
      <div className="card-header-tech"><h2>{heading}</h2>
        {showButtons && showAddIcon && (
          <button className='add-button' onClick={handleAddButtonClick}>
            <FontAwesomeIcon icon={faPlus} /> {addButtonText} </button>)}
        {showButtons && !showAddIcon && (
          <button className='add-button' onClick={handleAddButtonClick}>
            {addButtonText} </button>)}
        {showLinkButtons && (
          <button className='link-button' onClick={handleLinkButtonClick}> <FontAwesomeIcon icon={faFileAlt} /> Add Document</button>
        )}
      </div>
      <div className='main-card-header'>{showTotalCount && (<div className='card-header-tech-P'>
        <p>{addHeading} : {filterValue==='active'?activeCount: filterValue==='inactive'?inactiveCount:totalCount}</p>
      </div>)}
        {showFilterValue && (<div>
          <select value={filterValue} onChange={handleFilterChange}>
            <option value="active">Active Employee</option>
            <option value="inactive">Inactive Employee</option>
            <option value="all">All Employee</option>
          </select>
        </div>)}
      </div>
      <table className='master-list-table table table-striped table-hover table-bordered'>
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index}>{column.label}</th>
            ))}
            {showEditPersonal && (<th>Personal Details</th>)}
            {showEditActionButtons && (<th>Action</th>)}
          </tr>
        </thead>
        <tbody>

          {data.map((item, index) => {
            var showItem= true;
            if(showFilterValue){
               showItem =
              filterValue === 'all'|| (filterValue === 'active' && (item.enable === 1 
              || item.enable==="1")) ||
               (filterValue === 'inactive' && (item.enable === 0 || item.enable==="0"))  ;
            }
            

            return showItem ? (
              <tr key={index}>
                {columns.map((column, columnIndex) => (
                  <td key={columnIndex}>
                    {column.linkTo ? (
                      <button style={{ background: "#0eb4e9", cursor: 'pointer', color: 'white', border: 'none', borderRadius: '5px' }} onClick={() => handleLinkClick(item, column)}>
                        {column.name}
                      </button>
                    ) : column.key === 'enable' ? (
                      item[column.key] ? 'Active' : 'Inactive'
                    ) : (
                      item[column.key]
                    )}
                  </td>
                ))}
                {showEditPersonal && (
                  <td>
                    <FontAwesomeIcon icon={faAddressCard} onClick={() => handlePersonalEdit(item)} />
                  </td>)}
                {showEditActionButtons && (
                  <td>
                    <FontAwesomeIcon icon={faPenSquare} onClick={() => handleEdit(item)} />
                  </td>)}
              </tr>
            ) : null;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default GenericMasterListComponent;