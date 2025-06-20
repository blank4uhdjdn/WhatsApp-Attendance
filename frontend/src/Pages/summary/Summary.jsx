import React, { useState } from 'react';
import "./summary.css"
import useSubmitSummary from '../../hooks/useSubmitSummary';
import logo1 from "../Images/logo.jpg";

const Summary = () => {
    const [inputs, setInputs] = useState({
        subject: '',
        rollNumber: '',
        phoneNumber: ''
    });
    const { submitSummary } = useSubmitSummary();

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevents page reload
        submitSummary(inputs)
    };

    return (
        <>
            <div className='outermost'>
                <div className='rightdiv'>
                    <form onSubmit={handleSubmit}>
                        <div className='profile'>
                            <div id='rightcondiv'>
                                <div id='add-event-card'>
                                    <div className='inner-most'>
                                        <div>
                                            <img src={logo1} alt="logo" className='imge' />
                                        </div>
                                        <label htmlFor="subject" className='su-name'>Subject</label>
                                        <input
                                            id='subj'
                                            type="text"
                                            value={inputs.subject}
                                            onChange={(e) => setInputs({ ...inputs, subject: e.target.value })}
                                        />
                                        <br />

                                        <label htmlFor="rollNumber" className='su-date'>Roll Number</label>
                                        <input
                                            id='subj'
                                            type="text"
                                            value={inputs.rollNumber}
                                            onChange={(e) => setInputs({ ...inputs, rollNumber: e.target.value })}
                                        />
                                        <br />

                                        <label htmlFor="phoneNumber" className='su-location'>Phone Number</label>
                                        <input
                                            id='subj'
                                            type="text"
                                            value={inputs.phoneNumber}
                                            onChange={(e) => setInputs({ ...inputs, phoneNumber: e.target.value })}
                                        />
                                        <br />

                                        <button type="submit" id='butn'>Send Summary</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Summary;
