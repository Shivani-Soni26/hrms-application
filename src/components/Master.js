
import React, { useState, useEffect } from "react";
import config from "../common/config";
import { useNavigate } from 'react-router-dom';
import './Master.css';

const GenericFormComponent = ({ initialData, data, endpointUrls, endpoint, listRoute, onChange, customConfig, updateEndpoint }) => {
    const [formData, setFormData] = useState(initialData);
    const [selectOptions, setSelectOptions] = useState({});
    const [validationErrors, setValidationErrors] = useState({});
    const [submitting, setSubmitting] = useState(false);
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    useEffect(() => {
        const fetchSelectOptions = async (fieldName) => {
            if (endpointUrls && endpointUrls[fieldName]) {
                try {
                    const response = await fetch(`${config.baseApiUrl + endpointUrls[fieldName]}/${token}`);
                    if (response.ok) {
                        const data = await response.json();
                        console.log(`Fetched data for ${fieldName}:`, data);
                        setSelectOptions((prevOptions) => ({
                            ...prevOptions,
                            [fieldName]: data,
                        }));
                    } else {
                        console.error(`Error while fetching data for ${fieldName}: Response not ok`);
                    }
                } catch (error) {
                    console.error(`Error while fetching data for ${fieldName}:`, error);
                }
            }
        };

        data.schema.forEach((field) => {
            if (field.type === "select") {
                console.log('dataschema ', data);
                fetchSelectOptions(field.name);
            }
        });
    }, [data.schema, endpointUrls, initialData?.id]);

    useEffect(() => {
        console.log('initial data', initialData, formData);
        setFormData(initialData);
    }, [initialData?.id]);

    const handleInputChange = (name, value) => {
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));

        setValidationErrors((prevErrors) => ({
            ...prevErrors,
            [name]: null,
        }))
    };

    const handleFormSubmit = async () => {
        if (submitting) return;
        setSubmitting(true);
        try {
            const requiredFields = data.schema.filter((field) => field.type === 'input' && field.required).every((field) => formData[field.name] !== '');

            if (!requiredFields) {
                console.error('Please fill in all required fields.');
                data.schema
                    .filter((field) => field.type === 'input' && field.required && !formData[field.name])
                    .forEach((field) => {
                        setValidationErrors((prevErrors) => ({
                            ...prevErrors,
                            [field.name]: `${field.label} is required field.`,
                        }));
                    });
                setSubmitting(false);
                return;
            }
            const patternFields = data.schema.filter((field) => field.type === 'input' && field.pattern).every((field) => {
                const pattern = new RegExp(field.pattern);
                return pattern.test(formData[field.name]);
            });

            if (!patternFields) {
                console.error('Some input fields do not match the specified pattern.');
                data.schema
                    .filter((field) => field.type === 'input' && field.pattern && !new RegExp(field.pattern).test(formData[field.name]))
                    .forEach((field) => {
                        setValidationErrors((prevErrors) => ({
                            ...prevErrors,
                            [field.name]: `${field.label} pattern is invalid.`,
                        }));
                    });
                setSubmitting(false);
                return;
            }
            const selectFieldsValid = data.schema.filter((field) => field.type === 'select').every((field) => formData[field.name] !== '');

            if (!selectFieldsValid) {
                alert('Please select a valid option for all select fields.');
                data.schema
                    .filter((field) => field.type === 'select' && formData[field.name] === '')
                    .forEach((field) => {
                        setValidationErrors((prevErrors) => ({
                            ...prevErrors,
                            [field.name]: `Please select a valid option for ${field.label}.`,
                        }));
                    });
                setSubmitting(false);
                return;
            }

            const formDataToSend = new FormData();

            Object.entries(formData).forEach(([key, value]) => {
                const schemaElement = data.schema.find((elem) => elem.name === key);

                if (schemaElement && schemaElement.type !== "file") {
                    formDataToSend.append(key, value);
                }
            });

            // Append file fields to formDataToSend
            Object.entries(formData).forEach(([key, value]) => {
                const schemaElement = data.schema.find((elem) => elem.name === key);

                if (schemaElement && schemaElement.type === "file") {
                    formDataToSend.append(key, value);
                    console.log("asdfg", formDataToSend);
                }
            });

            const response = await fetch(`${config.baseApiUrl + (endpoint ? endpoint : updateEndpoint)}` + (formData?.id ? `/${formData?.id}/${token}` : ""), {
                method: endpoint ? "POST" : "PUT",
                body: formDataToSend,
            });
            if (!response.ok) {
                alert("Error : Response not ok")
                throw new Error("Response not ok");
            }
            const responseData = await response.json();
            if (responseData.Ack === 1) {
                console.log("this time hit this endpoint:", endpoint);
                alert("Data saved successfully", + JSON.stringify(responseData));
                console.log(" successfully:", listRoute);
                if (listRoute) {
                    navigate(-1);
                } else {
                    console.warn('List route not provided. Handling logic here.');
                }
            } else if (responseData.Ack === 0) {
                alert(" Message :" + responseData.Message)
            }


        }
        catch (error) {
            console.error("Error while posting data:", error);
        }
        finally {
            setSubmitting(false);
        };
    };

    const handleSubmit = () => {
        handleFormSubmit();
    };

    const handleCancel = () => {
        console.log("bdfgh", listRoute);
        if (listRoute) {
            navigate(-1);
        } else {
            console.warn('List route not provided. Handling logic here.');
        }
    };

    const { schema } = data;

    const dataConfig = {
        title: {
            fontSize: '24px',
            fontWeight: 'bold',
            color: 'black',
            padding: '40px',
        },
        design: {

            paddingitem: '20px',
        },
    };

    const mergedConfig = {
        ...dataConfig,
        ...(customConfig || {}),
    };
    return (
        <div className="inner-form-1">
            <div className="row inner-form-data" style={mergedConfig.design}>
                <div className="col-md-12">
                    <h2 style={mergedConfig.title}>
                        {(customConfig && customConfig.title) ? customConfig.title.text : 'Default Title'}
                    </h2>
                </div>
                {Array.isArray(schema) &&
                    data.schema.map((elem, index) => (
                        <div className="col-md-6" key={index}>
                            {elem.type === "input" && (
                                <div>
                                    <label className="label">{elem.label}</label>
                                    <input
                                        className={`input-field form-control ${validationErrors[elem.name] ? 'is-invalid' : ''}`}
                                        type={elem.inputType}
                                        name={elem.name}
                                        placeholder={elem.placeholder}
                                        value={formData[elem.name]}
                                        onChange={(e) => handleInputChange(elem.name, e.target.value)}
                                        required={elem.required}
                                        pattern={elem.pattern}
                                        defaultValue=""
                                    />
                                    {validationErrors[elem.name] && (
                                        <div className="invalid-feedback">{validationErrors[elem.name]}</div>
                                    )}
                                </div>
                            )}
                            {elem.type === "textarea" && (
                                <div>
                                    <label className="label">{elem.label}</label>
                                    <textarea
                                        className={`input-field form-control ${validationErrors[elem.name] ? 'is-invalid' : ''}`}
                                        name={elem.name}
                                        placeholder={elem.placeholder}
                                        value={formData[elem.name]}
                                        onChange={(e) => handleInputChange(elem.name, e.target.value)}
                                        required={elem.required}
                                        defaultValue=""
                                    />
                                    {validationErrors[elem.name] && (
                                        <div className="invalid-feedback">{validationErrors[elem.name]}</div>
                                    )}
                                </div>
                            )}

                            {elem.type === "select" && elem.name !== "enable" ? (
                                <div>
                                    <label className="label">{elem.label}</label>
                                    <select
                                        name={elem.name}
                                        value={formData[elem.name]}
                                        onChange={(e) => {
                                            console.log("Select field changed:", elem.name, e.target.value);
                                            handleInputChange(elem.name, e.target.value)
                                        }}
                                    >
                                        <option value="">Select {elem.label}</option>
                                        {selectOptions[elem.name] && Array.isArray(selectOptions[elem.name].Data) ?
                                            selectOptions[elem.name].Data.map((option) => (
                                                <option value={option.id} key={option.id}>
                                                    {option[elem.name]}
                                                </option>
                                            )) : null}
                                    </select>
                                </div>
                            ) : null}

                            {elem.type === "select" && elem.name === "enable" ? (
                                <div>
                                    <label className="label">{elem.label}</label>
                                    <select
                                        name={elem.name}
                                        value={formData[elem.name]}
                                        onChange={(e) => {
                                            console.log("Select field changed:", elem.name, e.target.value);
                                            handleInputChange(elem.name, e.target.value)
                                        }}
                                    >
                                        <option value="">Select Option</option>
                                        <option value="1">Enable</option>
                                        <option value="0">Disable</option>
                                    </select>
                                </div>
                            ) : null}

                            {elem.type === "file" && (
                                <div>
                                    <label className="label">{elem.label}</label>
                                    <input
                                        type="file"
                                        name={elem.name}
                                        onChange={(e) => handleInputChange(elem.name, e.target.files[0])}
                                        accept={elem.accept || ""}
                                    />
                                </div>
                            )}

                            {elem.type === "switch" && (
                                <div className="switch-container">
                                    <label className="label">{elem.label}</label>
                                    <input
                                        className="switch-field"
                                        type="checkbox"
                                        name={elem.name}
                                        checked={formData[elem.name] || false}
                                        onChange={(e) => onChange(e)}
                                    />
                                </div>
                            )}
                            {elem.type === "button" && (
                                <div className="main-button-color"><button onClick={handleSubmit} disabled={submitting}
                                    className='btn btn-secondary'>
                                    {submitting ? "Submitting..." : "Submit"}
                                    {elem.label}</button>
                                    <button className='btn btn-danger' onClick={handleCancel}>
                                        Cancel
                                    </button></div>
                            )}
                        </div>

                    ))
                }


            </div>
        </div>
    );
};

export default GenericFormComponent;