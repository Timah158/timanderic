import React,{useState} from 'react';
import {ReactComponent as CloseIcon} from './SVGs/close_button.svg'
import './CSS/Interview.css';
import { DataStore } from '@aws-amplify/datastore';
import { Interviews } from './models';

async function createInterview(interview) {
  await DataStore.save(
    new Interviews({
    "time": interview.time,
    "date": interview.date,
    "about": interview.about,
    "user": interview.person,
    "email": interview.email,
    "phone": interview.phone
  })
  );
}

// async function viewInterview() {
//   const models = await DataStore.query(Interviews);
//   console.log(models);
// }
// viewInterview();

function InterviewModal({props}) {
  const [inputs, setInputs] = useState({});
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    createInterview(inputs);
  }

    return (
      <div className='modal_wrapper'>
        <div className='modal_content'>
            <CloseIcon className='close_button' onClick={() => props(false)}/>
            <h3>Schedule An Interview</h3>
            <form id='interview_form' onSubmit={handleSubmit}>
                <div id='interview_row1'>
                  <input 
                  type="date" 
                  name='date'
                  value={inputs.date || ""} 
                  onChange={handleChange}
                  />
                  <input 
                  type="time" 
                  name='time'
                  value={inputs.time || ""} 
                  onChange={handleChange}
                  />
                  <select 
                  name="person" 
                  id="person" 
                  value={inputs.person || ""} 
                  onChange={handleChange}
                  >
                    <option value="Tim">Tim</option>
                    <option value="Eric">Eric</option>
                  </select>
                  <input 
                  type="email" 
                  placeholder='email@email.com' 
                  name='email'
                  value={inputs.email || ""} 
                  onChange={handleChange}
                  />
                  <input 
                  type="tel" 
                  placeholder='888-888-8888' 
                  name='phone'
                  value={inputs.phone || ""} 
                  onChange={handleChange}
                  />
                </div>
                <textarea 
                placeholder='Tell us about your company...' 
                name='about'
                value={inputs.about || ""}
                onChange={handleChange}
                />
                <input type="submit"/>
            </form>
        </div>
      </div>
    );
  }

export default InterviewModal;