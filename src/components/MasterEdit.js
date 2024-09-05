import React, { useState, useEffect } from "react";
import GenericFormComponent from "./Master";
import config from "../common/config";

const EditForm = ({ recordType, dataSchema, updateEndpoint, getEndpoint, initialData, endpointUrls, id, listRoute }) => {
  const [formData, setFormData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const token = localStorage.getItem('token');
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (id) {
          const response = await fetch(`${config.baseApiUrl + getEndpoint + id}/${token}`);
          if (response.ok) {
            const data = await response.json();
            setFormData(data.Data[0]);
          } else {
            console.error(`Error fetching ${recordType} data:`, response.statusText);
          }
        } else {
          console.error(`recordId is undefined`);
        }
      } catch (error) {
        console.error(`Error fetching ${recordType} data:`, error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [recordType, id, getEndpoint]);

  const customConfig = {
    title: {
      text: `${recordType}`,
    },
  };

  return (
    <div className="edit-form">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <GenericFormComponent
          initialData={formData || initialData}
          data={{ schema: dataSchema }}
          updateEndpoint={updateEndpoint}
          customConfig={customConfig}
          endpointUrls={endpointUrls}
          listRoute={listRoute}
        />
      )}
    </div>
  );
};

export default EditForm;