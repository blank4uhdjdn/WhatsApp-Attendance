// import './App.css';
// import Signup from './Pages/Signup/signup'

// import Navbar from './Pages/Navbar/Navbar'
// import LoginSignup from './Pages/LoginSignup/LoginSignup';
// import MainHome from './Pages/MainHome/MainHome';
// import Teacherdash from './Pages/Teacherdash/Teacherdash'
// import Addevent from './Pages/AddEvent/Addevent'
// import Updateevent from './Pages/UpdateEvent/Updateevent'
// import Deleteevent from './Pages/DeleteEvent/Deleteevent'
// import GetAtt from './Pages/Table/GetAtt'
// import { Navigate, Route, Routes } from 'react-router-dom';
// import { Toaster } from 'react-hot-toast';
// import { useAuthContext } from './cotext/authContext';

// import MyCarousel from './Pages/testbootrap/MyCarousel';
// function App() {
//   const {authUser}=useAuthContext();
//   return (
//      <>
//      {/* <Navbar/> */}
//      <Routes> 
//      <Route path="/" element={<Navigate to={authUser ? "/home" : "/logsin"} />} />
//      <Route path='/getAtt' element={<GetAtt/>} />
//      <Route path='/signup' element={<Signup/>} />
//      <Route path='/logsin' element={<LoginSignup/>} />
//      <Route path='/home' element={<MainHome/>} />
//      <Route path='/addevent' element={<Addevent/>} />
//      <Route path='/delevent' element={<Deleteevent/>} />
//      <Route path='/upevent' element={<Updateevent/>} />
//      <Route path='/teachdash' element={<Teacherdash/>} />
//      </Routes>
//      <Toaster/>
//      </>
//   );
// }

// export default App;

import './App.css';
import Signup from './Pages/Signup/signup';
import Navbar from './Pages/Navbar/Navbar';
import LoginSignup from './Pages/LoginSignup/LoginSignup';
import MainHome from './Pages/MainHome/MainHome';
import Teacherdash from './Pages/Teacherdash/Teacherdash';
import Addevent from './Pages/AddEvent/Addevent';
import Updateevent from './Pages/UpdateEvent/Updateevent';
import Deleteevent from './Pages/DeleteEvent/Deleteevent';
import GetAtt from './Pages/Table/GetAtt';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { useAuthContext } from './cotext/authContext';
import About from './Pages/About/About';


function App() {
  const { authUser,loading } = useAuthContext();
  console.log("authUser: ", authUser);
  console.log("loading: ", loading);
  if (loading) {
    return <div>Loading...</div>; 
  }

  return (
    <>
      <Navbar />
      
      <Routes>
        <Route path="/" element={authUser ? <Navigate to="/home" /> : <Navigate to="/logsin" />} />
        <Route path="/home" element={authUser ? <MainHome/>: <Navigate to="/logsin" />} />
        <Route path="/logsin" element={<LoginSignup />} />
        <Route path="/signup" element={ <Signup />} />
        <Route path="/addevent" element={<Addevent />} />
        <Route path="/delevent" element={<Deleteevent />} />
        <Route path="/upevent" element={<Updateevent />} />
        <Route path="/teachdash" element={<Teacherdash />} />
        <Route path="/getAtt" element={<GetAtt />} />
        <Route path="/aboutus" element={<About/>} />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
