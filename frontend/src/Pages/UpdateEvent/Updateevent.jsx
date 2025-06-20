import React, { useState } from "react";
import "./Updateevent.css";
import logo from "../Images/profile.jpeg";
import useUpdateEvent from "../../hooks/useUpdateEvent";


const Teacherdash = () => {
  const [inputs, setInputs] = useState({
    name: "",
    date: "",
    location: "",
    description: "",
  });

  const {loading,updateEvent} =useUpdateEvent();

  const handleSubmit=(e)=>{
    e.preventDefault();
    updateEvent(inputs)
  }

  return (
    <>
      <div className="outermost">
        <div className="rightdiv">
          <div className="profile">
            <div id="rightcondiv">
              <form onSubmit={handleSubmit}>
                <div id="add-event-card">
                  <div className="inner-most">
                    <label htmlFor="subj" className="ev-name">
                      Name
                    </label>
                    <input
                      id="subj"
                      type="text"
                      value={inputs.name}
                      onChange={(e) =>
                        setInputs({ ...inputs, name: e.target.value })
                      }
                    />{" "}
                    <br />
                    <label htmlFor="subj" className="ev-date">
                      Date
                    </label>
                    <input
                      id="subj"
                      type="text"
                      placeholder="mm-dd-yy"
                      value={inputs.date}
                      onChange={(e) =>
                        setInputs({ ...inputs, date: e.target.value })
                      }
                    />{" "}
                    <br />
                    <label htmlFor="subj" className="ev-location">
                      Location
                    </label>
                    <input
                      id="subj"
                      type="text"
                      value={inputs.location}
                      onChange={(e) =>
                        setInputs({ ...inputs, location: e.target.value })
                      }
                    />{" "}
                    <br />
                    <label htmlFor="subj" className="ev-description">
                      Description
                    </label>
                    <textarea
                      id="ev-desc"
                      value={inputs.description}
                      onChange={(e) =>
                        setInputs({ ...inputs, description: e.target.value })
                      }
                    ></textarea>
                    <button id="butn">Update Event</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Teacherdash;
