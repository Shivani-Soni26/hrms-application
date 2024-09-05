import React from "react";
import GenericFormComponent from "./Master"

const token = localStorage.getItem('token');
const schema = [
  {
    grid: 12,
    type: "input",
    inputType: "text",
    name: "seatnumber",
    label: "Seat Name",
    placeholder: "Enter seat seatnumber",
    defaultValue: "",
    required: true
  },
  {
    name: "token"
  },

  {
    type: "button",
  },
];

const customConfig = {
  title: {
    text: 'NEW SEAT',
  },
};

function SeatForm() {
  const formData = {
    seatnumber: "",
    token: token,
  };

  const data = { schema };
  const endpoint = "createSeat";

  return (
    <div className='Myform'>
      <GenericFormComponent initialData={formData} data={data} customConfig={customConfig} endpoint={endpoint}
        listRoute='/layout/seatList' />
    </div>
  );
};

export default SeatForm;