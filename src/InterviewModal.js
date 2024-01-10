import React,{ useState } from 'react';
import {ReactComponent as CloseIcon} from './SVGs/close_button.svg';
import './CSS/Interview.css';
// import { generateClient } from "@aws-amplify/api";
// import { createInterview } from './graphql/mutations';

// const client = generateClient();

// const newInterview = await client.graphql({
//   query: createInterview,
//   authMode: 'apiKey',
//   variables: {
//       input: {
//   "email": "test12346789@testemailtestemail.com",
//   "phone": "(555) 123-6789",
//   "date": "1970-01-01Z",
//   "time": "12:30:23.999Z",
//   "about": "Lorem ipsum dolor sit amet",
//   "user": "Lorem ipsum dolor sit amet"
// }
//   }
// });

// newInterview();

// async function createNewInterview(interview) {
//   await client.graphql({
//     mutation: createInterview,
//     authMode: "apiKey",
//     variables: {
//       input: {
//         "email": interview.email,
//         "phone": interview.phone,
//         "date": interview.date,
//         "time": interview.time,
//         "about": interview.about,
//         "user": interview.person
//       }
//     }
//   });
// }

function InterviewModal({props}) {
  const [inputs, setInputs] = useState({});
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    // createNewInterview(inputs);
    props.setNavigation({
      page: props.Navigation.page,
      modal: {
        display: false,
        element: ""
    }})
  }

    return (
      <div className='modal_wrapper'>
        <div className='modal_content'>
            <CloseIcon className='close_button' onClick={() => props.setNavigation({
              page: props.Navigation.page,
              modal: {
                display: false,
                element: ""
            }})}/>
            <h3>Schedule An Interview</h3>
            <form id='interview_form' onSubmit={handleSubmit}>
                <div id='interview_row1'>
                  <input 
                  type="date" 
                  name='date'
                  value={inputs.date || ""} 
                  onChange={handleChange}
                  required
                  />
                  <input 
                  type="time" 
                  name='time'
                  value={inputs.time || ""} 
                  onChange={handleChange}
                  required
                  />
                  <select 
                  name="person" 
                  id="person" 
                  value={inputs.person || ""} 
                  onChange={handleChange}
                  required
                  >
                    <option></option>
                    <option value="Tim">Tim</option>
                    <option value="Eric">Eric</option>
                  </select>
                  <input 
                  type="email" 
                  placeholder='email@email.com' 
                  name='email'
                  value={inputs.email || ""} 
                  onChange={handleChange}
                  required
                  />
                  <input 
                  type="tel" 
                  placeholder='888-888-8888' 
                  name='phone'
                  value={inputs.phone || ""} 
                  onChange={handleChange}
                  required
                  />
                </div>
                <textarea 
                placeholder='Tell us about your company...' 
                name='about'
                value={inputs.about || ""}
                onChange={handleChange}
                />
                <input type="submit" value="Submit"/>
            </form>

        </div>
      </div>
    );
  }

export default InterviewModal;