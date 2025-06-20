import React, { useEffect, useState } from "react";
import "./MainHome.css";
import logo from "../Images/profile.png";
import logo1 from "../Images/logo.jpg";
import { useAuthContext } from "../../cotext/authContext";
import useMarkAttendance from "../../hooks/useMarkAttendance";
import MyCarousel from "../testbootrap/MyCarousel";
import GetAtt from "../Table/GetAtt";
import { useNavigate } from "react-router-dom";



const MainHome = () => {
  const navigate=useNavigate()
  const { authUser } = useAuthContext();
  const { markAttendance, loading } = useMarkAttendance();

  const [rollNumber, setRollNumber] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [inputs, setInputs] = useState({
    subject: "",
    rollNumber: "",
    status: "",
    phoneNumber: "",
    otp: "",
  });
  const [events, setEvents] = useState([]);
  const [load, setLoad] = useState(false)


  useEffect(() => {
    const fetchEvents = async () => {
      setLoad(true)
      try {
        const res = await fetch('/api/getevent', {
          method: "GET",
          headers: {
            'Content-Type': "application/json"
          },

        });
        
        
        const resData = await res.json();
        // console.log(resData)
        if (resData.error) {
          toast.error(resData.error)
        }
        setEvents(resData)
      } catch (error) {
        toast.error('Error in fetching the events .')
      }
      finally {
        setLoad(false)
      }
    }
    fetchEvents();
  }, []);

  useEffect(() => {
    const roll = authUser?.rollNumber || "";
    const phone = authUser?.phoneNumber || "";
    setRollNumber(roll);
    setPhoneNumber(phone);
    setInputs((prev) => ({
      ...prev,
      rollNumber: roll,
      phoneNumber: phone,
    }));
  }, [authUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    const success = markAttendance(inputs);
    if (success) {
      setInputs({
        subject: "",
        status: "",
        otp: "",
        rollNumber,
        phoneNumber,
      });
    }
  };
  const handlelogout = () => {
          localStorage.removeItem('auth-user');
          navigate('/logsin');
          toast.success("Logged out successfully.")

        }

  return (
    <>
      <div className="outermost">
        {/* <div className="leftdiv">
          {[...Array(1)].map((_, i) => (
            <div className="leftcondiv" key={i}>
              <div id="card">
                <ul>
                  <li className="list">
                    <a href="" className="listcont">
                      About
                    </a>
                  </li>
                  <li className="list">
                    <a href="#" className="listcont">
                      Events
                    </a>
                  </li>
                  <li className="list">
                    <a href="#" className="listcont">
                      Get-Attendence
                    </a>
                  </li>
                  <li className="list">
                    <a href="#" className="listcont">
                      Mark-Attendence
                    </a>
                  </li>
                  <li className="list">
                    <a href="#" className="listcont">
                      Calander
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div> */}

        <div className="rightdiv">
          <div className="profile">
            <div className="rightcondiv1">
              <div>
                <img src={logo} alt="logo" className="proimg" />
              </div>
              <div className="scont">
                <h6 className="sname"> {authUser.fullName} </h6>
                <p className="uname">
                  B.Tech, Computer Science & Engineering, University School of{" "}
                  <br />
                  Studies (USS), 6th SEMESTER, 2027 Batch
                </p>
              </div>
              <div className="logout"><li className='li4'><button onClick={handlelogout} id='btnlogout'>Logout</button></li></div>
            </div>

            <div className="rightcondiv2">
              <div className="overview">
                <p className="over">Overview</p>
              </div>
              <div className="sinfo">
                <div className="leftsinfo">
                  <ul className="sinlist">
                    <li className="lists">
                      <p className="listscontl">
                        Full Name
                      </p>
                    </li>
                    <li className="lists">
                      <p className="listscontl">
                        User Name
                      </p>
                    </li>
                    <li className="lists">
                      <p className="listscontl">
                        Roll Number
                      </p>
                    </li>
                    <li className="lists">
                      <p className="listscontl">
                        Phone Number
                      </p>
                    </li>
                    <li className="lists">
                      <p href="#" className="listscontl">
                        ID
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="rightsinfo">
                  <ul className="sinlist">
                    <li className="lists">
                      <p className="listscontr">
                        {authUser.fullName}
                      </p>
                    </li>
                    <li className="lists">
                      <p className="listscontr">
                        {authUser.userName}
                      </p>
                    </li>
                    <li className="lists">
                      <p className="listscontr">
                        {authUser.rollNumber}
                      </p>
                    </li>
                    <li className="lists">
                      <p className="listscontr">
                        {authUser.phoneNumber}
                      </p>
                    </li>
                    <li className="lists">
                      <p className="listscontr">
                        {authUser._id}
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="contactc">
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

          <div className="attendence">


            <div id="cardsc">
              <MyCarousel />
            </div>
            <div className="attcon">
              <form onSubmit={handleSubmit}>
                <div id="markcard">
                  <div className="inner-most">
                    <br />
                    <div>
                      <img src={logo1} alt="logo" className="imge" />
                    </div>

                    {/* Subject */}
                    <label htmlFor="subj" className="Subject">
                      Subject
                    </label>
                    <input
                      id="subj"
                      name="subject"
                      type="text"
                      value={inputs.subject}
                      onChange={handleChange}
                    />
                    <br />

                    {/* Roll Number (read-only) */}
                    <label htmlFor="roll" className="rollno">
                      RollNumber
                    </label>
                    <input
                      id="roll"
                      type="text"
                      placeholder={authUser?.rollNumber}
                      value={rollNumber}
                      readOnly
                    />
                    <br />

                    {/* Status */}
                    <label htmlFor="select" className="status">
                      Status
                    </label>
                    <select
                      id="select"
                      name="status"
                      value={inputs.status}
                      onChange={handleChange}
                    >
                      <option value="">......</option>
                      <option value="present">Present</option>
                      <option value="absent">Absent</option>
                    </select>
                    <br />

                    {/* Phone Number (read-only) */}
                    <label htmlFor="phnno" className="phnno">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      id="phnno"
                      placeholder={authUser?.phoneNumber}
                      value={phoneNumber}
                      readOnly
                    />
                    <br />

                    {/* OTP */}
                    <label htmlFor="otp" className="otp">
                      OTP
                    </label>
                    <input
                      type="text"
                      id="otp"
                      name="otp"
                      value={inputs.otp}
                      onChange={handleChange}
                    />
                    <br />

                    <button id="butn" type="submit">
                      Mark Attendance
                    </button>
                    <br />
                  </div>
                </div>
              </form>
            </div>

            <div className="attcon">

            </div>
          </div>
          <div className="getatt">
            {/* <GetAtt/> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default MainHome;

// import React, { useEffect, useState } from 'react'
// import './MainHome.css'
// import logo from '../Images/profile.jpeg'
// import { useAuthContext } from '../../cotext/authContext'
// import { use } from 'react'

// const MainHome = () => {
//   const {authUser,setAuthUser}=useAuthContext();
//   const [rollNumber,setRollNumber]=useState("");
//   const [phoneNumber,setPhoneNumber]=useState('');

//   const [iputs,setInputs]=useState({
//     subject:"",
//     rollNumber:"",
//     status:"",
//     phoneNumber:"",
//     otp:''
//   })

//   useEffect(()=>{
//     setRollNumber(authUser.rollNumber);
//     setPhoneNumber(authUser.phoneNumber);
//     },[authUser]);

//   return (
//     <>
//       <div className='outermost'>
//         <div className='leftdiv'>
//           <div className='leftcondiv'>
//             <div id='card'>
//               <ul>
//                 <li className='list'><a href="#" className='listcont'>About</a></li>
//                 <li className='list'><a href="#" className='listcont'>Events</a></li>
//                 <li className='list'><a href="#" className='listcont'>Jow</a></li>
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
//             <div className='rightcondiv1'>
//               <div>
//                 <img src={logo} alt="logo" className='proimg' />
//               </div>
//               <div className='scont'>
//                 <h6 className='sname'>Sumender Singh</h6>
//                 <p className='uname'>B.Tech, Computer Science & Engineering, University School of <br /> Studies (USS), 6th SEMESTER, 2027 Batch</p>
//               </div>
//             </div>
//             <div className='rightcondiv2'>
//               <div className="overview">
//                <p className="over">
//                 Overview
//                </p>
//               </div>
//               <div className="sinfo">
//               <div className='leftsinfo'>
//               <ul className='sinlist'>
//                 <li className='lists'><a href="#" className='listscontl'>Email id</a></li>
//                 <li className='lists'><a href="#" className='listscontl'>Phone Number</a></li>
//                 <li className='lists'><a href="#" className='listscontl'>Date of Birth</a></li>
//                 <li className='lists'><a href="#" className='listscontl'>Gender</a></li>
//                 <li className='lists'><a href="#" className='listscontl'>Category</a></li>
//                 <li className='lists'><a href="#" className='listscontl'>Address</a></li>
//               </ul>
//               </div>
//               <div className='rightsinfo'>
//                 <ul className='sinlist'>
//                 <li className='lists'><a href="#" className='listscontr'>Email id</a></li>
//                 <li className='lists'><a href="#" className='listscontr'>Phone Number</a></li>
//                 <li className='lists'><a href="#" className='listscontr'>Date of Birth</a></li>
//                 <li className='lists'><a href="#" className='listscontr'>Gender</a></li>
//                 <li className='lists'><a href="#" className='listscontr'>Category</a></li>
//                 <li className='lists'><a href="#" className='listscontr'>Address</a></li>
//               </ul>
//               </div>
//               </div>
//             </div>
//           </div>
//           <div className='attendence'>
//             <div className='attcon'>
//               <div id='cards'>
//                       <div className='inner-most'>
//                         <div>
//                     <img src={logo} alt="logo" className='imge' />
//                         </div>
//                         <label htmlFor="subj" className='Subject'>Subject</label>
//                         <input id='subj' type="text" /> <br />
//                         <label htmlFor="roll" className='rollno'>RollNumber</label>
//                         <input id='roll' type="text" /> <br />
//                         <button id='butn'>Get Attendence</button>
//                       </div>
//                     </div>
//             </div>
//             <div className='attcon'>
//         <form>
//             <div id='markcard'>
//                       <div className='inner-most'>
//                         <br />
//                         <div>
//                     <img src={logo} alt="logo" className='imge' />
//                         </div>
//                         <label htmlFor="subj" className='Subject'>Subject</label>
//                         <input id='subj' type="text"

//                         /> <br />
//                         <label htmlFor="roll" className='rollno'>RollNumber</label>
//                         <input id='roll' type="text" placeholder= {authUser?.rollNumber}
//                         value={rollNumber}
//                         readOnly /> <br />
//                         <label htmlFor="sttus" className='status'>Status</label>
//                         <select name="my" id="select">
//                           <option value="null">......</option>
//                           <option value="present">Present</option>
//                           <option value="absent">Absent</option>
//                         </select>
//                         <br />
//                         <label htmlFor="phn" className='phnno'>Phone Number</label>
//                         <input type="text" id='phnno' placeholder={authUser?.phoneNumber}
//                         value={phoneNumber}
//                         readOnly

//                         />
//                         <br />
//                         <label htmlFor="otp" className='otp'>OTP</label>
//                         <input type="text" id='otp'/>
//                         <br />

//                         <button id='butn'>Mark Attendence</button>
//                         <br />
//                       </div>
//                     </div>
//       </form>
//             </div>
//             <div className='attcon'>
//               <div id='cards'>
//                       <div className='inner-most'>
//                         <div>
//                     <img src={logo} alt="logo" className='imge' />
//                         </div>
//                         <label htmlFor="subj" id='Subject'>Username</label>
//                         <input id='subj' type="text" /> <br />
//                         <label htmlFor="roll" id='rollno'>Password</label>
//                         <input id='roll' type="password" /> <br />
//                         <button id='butn'>Login</button>
//                       </div>
//                     </div>
//             </div>
//           </div>
//           <div className='contactc'></div>
//         </div>
//       </div>
//     </>
//   )
// }
