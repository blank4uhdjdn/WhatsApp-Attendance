import React, { useState } from 'react'
import "./Addevent.css" 
import logo from '../Images/profile.jpeg'
import useAddEvent from '../../hooks/useAddEvent'






const Teacherdash = () => {

const {loading,addEvent} =useAddEvent();

const [inputs,setInputs]=useState({
  name:'',
  date:'',
  location:'',
  description:''
});

const handleSubmit=async (e)=>{
  e.preventDefault();
 const success= await addEvent(inputs)
 if(success){
  setInputs({
    name:'',
    date:'',
    location:'',
    description:''
    
  })
 }
}



  return (
    <>
          <div className='outermost'>
             
            <div className='rightdiv'>
            <form onSubmit={handleSubmit}>
              <div className='profile'> 
                <div id='rightcondiv'>
                        <div id='add-event-card'>
                          <div className='inner-most'>
                            <label htmlFor="subj" className='ev-name'>Name</label>
                            <input id='subj' type="text"
                            value={inputs.name}
                            onChange={(e)=>setInputs({...inputs,name:e.target.value})} 
                           
                             /> <br />
                            <label htmlFor="subj" className='ev-date'>Date</label>
                            <input id='subj' type="text" placeholder='mm-dd-yy'
                            value={inputs.date}
                            onChange={(e)=>setInputs({...inputs,date:e.target.value})}
                           
                            /> <br />
                            <label htmlFor="subj" className='ev-location'>Location</label>
                            <input id='subj' type="text" 

                            value={inputs.location}
                            onChange={(e)=>setInputs({...inputs,location:e.target.value})}

                            
                            /> <br />
                            <label htmlFor="subj" className='ev-description'>Description</label>
                            <textarea   id='ev-desc'
                            value={inputs.description}
                            onChange={(e)=>setInputs({...inputs,description:e.target.value})}
                            ></textarea> 
                            <button id='butn'>Add Event</button>
                          </div>
                        </div>
                 
                </div>
              </div> 
            </form>
            </div>
          </div>
        </>
  )
}

export default Teacherdash
