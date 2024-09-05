import React from "react";
import EditForm from "./MasterEdit";
import { useLocation } from "react-router-dom";
const updateSeatSchema = [
  {
    grid: 12,
    type: 'input',
    inputType: 'text',
    name: 'seatnumber',
    label: 'seat name',
    placeholder: 'Enter Seat Number ',
    defaultValue: '',
    required: true,
  },

  {
    type: "button",
  },
];

const customConfig = {
  title: {
    text: 'Edit SeatNumber',
  },
};
function UpdateSeat({ handleInputChange }) {
  const location = useLocation();
  const formData = {
    seat: location.state.item.Seat

  };
  const updateEndpoint = "updateSeat";
  const getEndpoint = "fetchSeatById/";
  const Id = location.state.item.id;

  return (
    <div className="Myform">
      <EditForm
        dataSchema={updateSeatSchema}
        initialData={formData}
        recordType="Seat"
        id={Id}
        customConfig={customConfig}
        getEndpoint={getEndpoint}
        updateEndpoint={updateEndpoint}
        onChange={handleInputChange}
        listRoute="/layout/seatList"
      />
    </div>
  );
};

export default UpdateSeat;