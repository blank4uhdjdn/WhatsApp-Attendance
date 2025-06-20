import React, { useState } from "react";
import "./Deleteevent.css";
import logo from "../Images/profile.jpeg";
import useDeleteEvent from "../../hooks/useDeleteEvent";

const Teacherdash = () => {
  const {loading,deleteEvent} =useDeleteEvent();
  const [inputs, setInputs] = useState({
    name: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    deleteEvent(inputs)
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="outer">
          <div className="delete-ev-name">
            <input
              type="text"
              className="del-ev"
              placeholder="Event Name"
              value={inputs.name}
              onChange={(e) => setInputs({ ...inputs, name: e.target.value })}
            />
          </div>
          <div className="otp-gen-div">
            <button className="del-ev-btn">Delete Event</button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Teacherdash;
