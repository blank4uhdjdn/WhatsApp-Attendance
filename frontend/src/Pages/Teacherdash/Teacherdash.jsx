// import React, { useEffect, useState } from 'react'
// import "./Teacherdash.css"
// import logo from '../Images/profile.jpeg'
// import useOptGen from '../../hooks/useOptGen';
// import { useNavigate } from 'react-router-dom';
// import toast from 'react-hot-toast';
// import MyCarousel from '../testbootrap/MyCarousel';
// import GetAtt from "../Table/GetAtt";



// const Teacherdash = () => {
//   const date = '98-98-2001';
//   const { genOtp, loading, otpGen } = useOptGen();
//   const [otpData, setOtpData] = useState('');
//   const navigate = useNavigate();
//   const [inputs, setInputs] = useState({
//       subject: "",
//       rollNumber: "",
//       status: "",
//       date: "",
      
//     });


//   const handleOtpGen = async () => {
//     const otpData = await genOtp();
//     if (otpData) {
//       setOtpData(otpData);

//     }
//   };
//   const handleAddEvent = () => {
//     navigate("/addevent")
//   }
//   const handleUpEvent = () => {
//     navigate("/upevent")
//   }
//   const handleDelEvent = () => {
//     navigate("/delevent")
//   }

//   const [events, setEvents] = useState([]);
//   const [load, setLoad] = useState(false)


//   useEffect(() => {
//     const fetchEvents = async () => {
//       setLoad(true)
//       try {
//         const res = await fetch('/api/getevent', {
//           method: "GET",
//           headers: {
//             'Content-Type': "application/json"
//           },

//         });
//         const resData = await res.json();
       
//         if (resData.error) {
//           toast.error(resData.error)
//         }
//         setEvents(resData)
//       } catch (error) {
//         toast.error('Error in fetching the events .')
//       }
//       finally {
//         setLoad(false)
//       }
//     }
//     fetchEvents();
//   }, []);



//   return (
//     <>
//       <div className='outermost'>
//         <div className='leftdiv'>
//           <div className='leftcondiv'>
//             <div className="otp-gen-div">
//               <button onClick={handleOtpGen} className='otp-gen-btn'>Generate OTP</button>
//             </div>
//             <br />
//             <div className="otp-gen-div">
//               <button className='otp-gen-btn'>Session ON</button>
//             </div>
//           </div>
//           <div className='leftcondiv'>
//             <div id='events-card'>
//               <ul>
//                 <li className='list'><a href="#" className='listcont'>Events</a></li>
//                 <li className='list'>
//                   <button onClick={handleAddEvent} className='events-btn'>Add Event</button>
//                 </li>
//                 <li className='list'><button onClick={handleUpEvent} className='events-btn'>Update Event</button></li>
//                 <li className='list'><button onClick={handleDelEvent}  className='events-btn'>Delete Event</button></li>
//               </ul>
//             </div>
//           </div>
//           <div className='leftcondiv'>
//             <div id='card'>
//               <ul>
//                 <li className='list'><a href="#" className='listcont'>About</a></li>
//                 <li className='list'><a href="#" className='listcont'>Events</a></li>
//                 <li className='list'><a href="#" className='listcont'>Low</a></li>
//                 <li className='list'><a href="#" className='listcont'>VideoIntro</a></li>
//               </ul>
//             </div>
//           </div>
//           <div className='leftcondiv'>
//             <div id='card'>
//               <ul>
//                 <li className='list'><a href="#" className='listcont'>About</a></li>
//                 <li className='list'><a href="#" className='listcont'>Events</a></li>
//                 <li className='list'><a href="#" className='listcont'>Low</a></li>
//                 <li className='list'><a href="#" className='listcont'>VideoIntro</a></li>
//               </ul>
//             </div>
//           </div>
//         </div>
//         <div className='rightdiv'>
//           <div className='profile'>
//             <div className='otp-output'>
//               <input type="text" className='out-otp' placeholder={otpData?.generatedOpt} />
//             </div><br />
//             <div className='otp-output'>
//               <input type="text" className='out-otp' placeholder='MM-DD-YY' />
//             </div>
//             <div id='rightcondiv2'>
//               {load ? (
//                 <p>Loading events...</p>
//               ) : (
//                 events.map((event) => (
//                   <div id='event-cont-cards' key={event._id}>
//                     <div id='events-inner-most'>
//                       <h1 id='event'>{event.name}</h1>
//                       <p id='p'>{`Date: ${new Date(event.date).toLocaleDateString()}`}</p>
//                       <p id='p'>{`Location: ${event.location}`}</p>
//                       <p id='description'>{event.description}</p>
//                     </div>
//                   </div>
//                 ))
//               )}
//             </div>

//           </div>
//           <div className='attendence'>
           
            


           



//             <div className='attcon'>
//               <form >
//                 <div className='markcard'>
//                   <div className='inner-most'>
//                     <br />
//                     <div>
//                       <img src={logo} alt="logo" className='imge' />
//                     </div>
//                     <label htmlFor="subj" className='Subject'>Subject</label>
//                     <input id='subj' type="text"
//                     value={subject}
//                     onChange={(e) => setSubject({...inputs,subject:e.target.value})} 
//                     /> <br />
//                     <label htmlFor="roll" className='rollno'>RollNumber</label>
//                     <input id='roll' type="text" placeholder='35'
//                     value={rollNumber}
//                     onChange={(e) => setRollNumber({...inputs,rollNumber:e.target.value})}
//                     /> <br />
//                     <label htmlFor="sttus" className='status'>Status</label>
//                     <select name="my" id="select"
//                     value={status}
//                     onChange={(e) => setStatus(e.target.value)}

//                     >
//                       <option value="null">......</option>
//                       <option value="present">Present</option>
//                       <option value="absent">Absent</option>
//                     </select>
//                     <br />
//                     <label htmlFor="phn" className='phonno'>Date</label>
//                     <input type="text" id='phonno' placeholder='02-09-2005'
//                     value={date}
//                     onChange={(e) => setDate(e.target.value)}
//                     />
//                     <br />
//                     <button id='butn'>Update Attendence</button>
//                     <br />
//                   </div>
//                 </div>
//               </form>
//             </div>
//             <div className='attcon'>
//               <div id='cards'>
                
//                 <MyCarousel/>
//               </div>
//             </div>
//           </div>
//           <div className='contactc'></div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default Teacherdash
import React, { useEffect, useState } from 'react';
import "./Teacherdash.css";
import logo from '../Images/profile.jpeg';
import logo1 from "../Images/logo.jpg";

import useOptGen from '../../hooks/useOptGen';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import MyCarousel from '../testbootrap/MyCarousel';
import useLogOut from '../../hooks/useLogout';
import Summary from '../summary/Summary';

const Teacherdash = () => {
  const { genOtp, loading, otpGen } = useOptGen();
  const navigate = useNavigate();

  // OTP and events state
  const [otpData, setOtpData] = useState('');
  const [events, setEvents] = useState([]);
  const [load, setLoad] = useState(false);

  // Attendance input state
  const [inputs, setInputs] = useState({
    subject: "",
    rollNumber: "",
    status: "",
    date: "",
  });

  const handleOtpGen = async () => {
    const otpData = await genOtp();
    if (otpData) {
      setOtpData(otpData);
    }
  };

  const handleAddEvent = () => navigate("/addevent");
  const handleUpEvent = () => navigate("/upevent");
  const handleDelEvent = () => navigate("/delevent");

  useEffect(() => {
    const fetchEvents = async () => {
      setLoad(true);
      try {
        const res = await fetch('/api/getevent');
        const resData = await res.json();
        if (resData.error) {
          toast.error(resData.error);
        } else {
          setEvents(resData);
        }
      } catch (error) {
        toast.error('Error in fetching the events.');
      } finally {
        setLoad(false);
      }
    };
    fetchEvents();
  }, []);

  //hanle logout
  
  const handlelogout = () =>{
    localStorage.removeItem('auth-user');
    navigate('/logsin');
    toast.success("Logged out successfully.")
    
  }

  // ✅ Submit handler for attendance form
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { subject, rollNumber, status, date } = inputs;

    if (!subject || !rollNumber || !status || !date) {
      toast.error("Please fill in all fields.");
      return;
    }

    try {
      const res = await fetch('/api/update', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(inputs)
      });

      const data = await res.json();
      if (data) {
        toast.success(data.message)
        setInputs({ subject: "", rollNumber: "", status: "", date: "" });
      } else {
        toast.error(data.message || "Error updating attendance.");
      }
    } catch (error) {
      toast.error("Server error.");
      return
    }
  };

  return (
    <div className='outermost'>
      <div className='teacher-leftdiv'>
        <div className='leftcondiv'>
          <div className="otp-gen-div">
            <button onClick={handleOtpGen} className='otp-gen-btn'>Generate OTP</button>
          </div>
          <br />
          <div className="otp-gen-div">
            <button onClick={handlelogout} className='otp-gen-btn'>Logout</button>
          </div>
        </div>

        <div className='leftcondiv'>
          <div id='events-card'>
            <ul>
              <li className='list'><a href="#" className='listcont'>Events</a></li>
              <li className='list'><button onClick={handleAddEvent} className='events-btn'>Add Event</button></li>
              <li className='list'><button onClick={handleUpEvent} className='events-btn'>Update Event</button></li>
              <li className='list'><button onClick={handleDelEvent} className='events-btn'>Delete Event</button></li>
            </ul>
          </div>
        </div>

        {/* <div className='leftcondiv'>
          <div id='card'>
            <ul>
              <li className='list'><a href="#" className='listcont'>About</a></li>
              <li className='list'><a href="#" className='listcont'>Events</a></li>
              <li className='list'><a href="#" className='listcont'>Low</a></li>
              <li className='list'><a href="#" className='listcont'>VideoIntro</a></li>
            </ul>
          </div>
        </div> */}
      </div>

      <div className='teacher-rightdiv'>
        <div className='profile'>
          <div className='otp-output'>
            <input type="text" className='out-otp' placeholder={otpData?.generatedOpt || "Gen. OTP"} readOnly />
          </div><br />
          {/* <div className='otp-output'>
            <input type="text" className='out-otp' placeholder='MM-DD-YY' />
          </div> */}

          <div id='rightcondiv2'>
            {load ? (
              <p>Loading events...</p>
            ) : (
              events.map((event) => (
                <div id='event-cont-cards' key={event._id}>
                  <div id='events-inner-most'>
                    <h1 id='event'>{event.name}</h1>
                    <p id='p'>{`Date: ${new Date(event.date).toLocaleDateString()}`}</p>
                    <p id='p'>{`Location: ${event.location}`}</p>
                    <p id='description'>{event.description}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* *************************** Update Attendance Form **************************** */}
        <div className='attendence'>
          <div className='attcon'>
            <form onSubmit={handleSubmit}>
              <div className='markcard'>
                <div className='inner-most'>
                  <br />
                  <div>
                    <img src={logo1} alt="logo" className='imge' />
                  </div>

                  <label htmlFor="subj" className='Subject'>Subject</label>
                  <input
                    id='subj'
                    type="text"
                    value={inputs.subject}
                    onChange={(e) => setInputs({ ...inputs, subject: e.target.value })}
                  /> <br />

                  <label htmlFor="roll" className='rollno'>RollNumber</label>
                  <input
                    id='roll'
                    type="text"
                    placeholder='35'
                    value={inputs.rollNumber}
                    onChange={(e) => setInputs({ ...inputs, rollNumber: e.target.value })}
                  /> <br />

                  <label htmlFor="sttus" className='status'>Status</label>
                  <select
                    name="my"
                    id="select"
                    value={inputs.status}
                    onChange={(e) => setInputs({ ...inputs, status: e.target.value })}
                  >
                    <option value="">......</option>
                    <option value="present">Present</option>
                    <option value="absent">Absent</option>
                  </select>
                  <br />

                  <label htmlFor="phn" className='phonno'>Date</label>
                  <input
                    type="text"
                    id='phonno'
                    placeholder='02-09-2005'
                    value={inputs.date}
                    onChange={(e) => setInputs({ ...inputs, date: e.target.value })}
                  />
                  <br />

                  <button type='submit' id='butn'>Update Attendance</button>
                  <br />
                </div>
              </div>
            </form>
          </div>

          <div className='attcon'>
            {/* <div id='cards'>
              <MyCarousel />
            </div> */}
            <Summary/>
          </div>
        </div>

        <div className='contactc'></div>
      </div>
    </div>
  );
};

export default Teacherdash;
