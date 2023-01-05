import {ReactComponent as CloseIcon} from './SVGs/close_button.svg'
import './CSS/Interview.css';

function InterviewModal() {
    return (
      <div className='modal_wrapper'>
        <div className='modal_content'>
            <CloseIcon/>
            <h3>Schedule An Interview</h3>
            <form>
                <input type="date"/>
                <input type="time"/>
                <select name="person" id="person">
                  <option value="Tim">Tim</option>
                  <option value="Eric">Eric</option>
                </select>
                <input type="email"/>
                <input type="tel"/>
                <textarea></textarea>
                <input type="submit"/>
            </form>
        </div>
      </div>
    );
  }

export default InterviewModal;