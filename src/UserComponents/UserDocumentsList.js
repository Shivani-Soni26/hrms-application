import React from 'react';
import GenericMasterListComponent from '../components/GenericMasterListComponent';
import axios from 'axios';
import config from '../common/config';

const columns=[
    {label:'Document Type',key:'name'},
    {label:'Document', key:'path', name:'Download', linkTo:true},
]

function UserDocumentsList(){
    const Id = localStorage.getItem('userId');
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
          alert('Sorry you can not download the file from local server');
        });
    };

    return(
        <div>
            <GenericMasterListComponent
            endpoint={endpoint}
            columns={columns}
            heading="All Document List"
            showButtons={false}
            showLinkButtons={true}
            showEditActionButtons={false}
            docRoute="/layout/userDocuments"
            handleDownload={handleDownload} 
            />
        </div>
    );
}

export default UserDocumentsList;