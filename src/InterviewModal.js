import {ReactComponent as CloseIcon} from './SVGs/close_button.svg'
import './CSS/Interview.css';

function InterviewModal({props}) {
    return (
      <div className='modal_wrapper'>
        <div className='modal_content'>
            <CloseIcon className='close_button' onClick={() => props(false)}/>
            <h3>Schedule An Interview</h3>
            <form id='interview_form'>
                <div id='interview_row1'>
                  <input type="date"/>
                  <input type="time"/>
                  <select name="person" id="person">
                    <option value="Tim">Tim</option>
                    <option value="Eric">Eric</option>
                  </select>
                  <input type="email" placeholder='email@email.com'/>
                  <input type="tel" placeholder='(888)-888-8888'/>
                </div>
                <textarea placeholder='Tell us about your company...'></textarea>
                <input type="submit"/>
            </form>
        </div>
      </div>
    );
  }

export default InterviewModal;