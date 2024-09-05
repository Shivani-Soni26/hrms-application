import React, { useState } from 'react';
import GenericMasterListComponent from '../components/GenericMasterListComponent';
import axios from 'axios';
import '../components/Master.css';
import config from '../common/config';
import { useLocation } from "react-router-dom";

const columns=[
    {label:'Document Type',key:'name'},
    {label:'Document', key:'path', name:'Download', linkTo:true},
]

function DocumentList(){
    const location = useLocation();
    const [fullName,setFullname]=useState();
    if(location.state!=null){
      setFullname(location.state.userData.fullName);
      location.state=null
    }
    const Id = localStorage.getItem('id');
    const endpoint=`/getDocList/${Id}`;

    const handleDownload = (path) => {
      const fileName = path.split('/')[5];
  
      axios
        .get(`${config.baseApiUrl+"download"}/${fileName}`, {
          responseType: 'blob',
        })
        .then((response) => {
          const url = URL.createObjectURL(new Blob([response.data]));
          const a = document.createElement('a');
          a.href = url;
          a.download = fileName;
          alert('File is downloading...');
          a.style.display = 'none';
          document.body.appendChild(a);
          a.click();
          a.remove();
          URL.revokeObjectURL(url);
          alert('File downloaded successfully');
          
        })
        .catch((error) => {
          console.error('Error downloading file:', error);
        });
    };
    

    return(
      
        <div className='Myform'>
           <h4><b>Employee Name:</b> {fullName}</h4>
            <GenericMasterListComponent
            endpoint={endpoint}
            columns={columns}
            heading="All Document List"
            showButtons={false}
            showLinkButtons={true}
            showEditActionButtons={false}
            docRoute="/layout/addDocument"
            handleDownload={handleDownload} 
            />
        </div>
    );
}

export default DocumentList;