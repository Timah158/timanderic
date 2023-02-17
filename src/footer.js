import {ReactComponent as GithubIcon} from './SVGs/font_awesome_icons/github-brands.svg'
import {ReactComponent as LinkedInIcon} from './SVGs/font_awesome_icons/linkedin-brands.svg'
import {ReactComponent as EmailIcon} from './SVGs/font_awesome_icons/envelope-solid.svg'
import React,{useState} from 'react';
import './CSS/footer.css';

function TimFooter ({props}) {
    return (
      <footer>
        <div className='footer_container'>
          <div className='toggle_footer'>
            <button className='footer_button' onClick={() => props.setToggleFooter(true)}><h4>&#60;</h4></button>
            <button className="footerlink" onClick={() => props.props("tim")}><b>Tim</b></button>
            <button className='footer_button' onClick={() => props.setToggleFooter(true)}><h4>&#62;</h4></button>
          </div>
          <div className='footer_icons'>
            <a href="https://github.com/Timah158" rel='noreferrer' target="_blank"><GithubIcon className='footer_icon'/></a>
            <a href="https://www.linkedin.com/in/timlopez22" rel='noreferrer' target="_blank"><LinkedInIcon className='footer_icon'/></a>
            <EmailIcon className='footer_icon'onClick={() =>  navigator.clipboard.writeText('timothylopez95@gmail.com')}/>
          </div>
        </div>
      </footer>
    );
  }

  function EricFooter ({props}) {
    return (
      <footer>
        <div className='footer_container'>
          <div className='toggle_footer'>
            <button className='footer_button' onClick={() => props.setToggleFooter(false)}><h4>&#60;</h4></button>
            <button className="footerlink" onClick={() => props.props("eric")}><b>Eric</b></button>
            <button className='footer_button' onClick={() => props.setToggleFooter(false)}><h4>&#62;</h4></button>
          </div>
          <div className='footer_icons'>
          <a href="https://github.com/emoore36" rel='noreferrer' target="_blank"><GithubIcon className='footer_icon'/></a>
          <a href="https://www.linkedin.com/in/ericmoore0709/" rel='noreferrer' target="_blank"><LinkedInIcon className='footer_icon'/></a>
          <EmailIcon className='footer_icon' onClick={() =>  navigator.clipboard.writeText('ericmoore0709@gmail.com')}/>
          </div>
        </div>
      </footer>
    )
  }

  function Footer ({props}) {
    const [ToggleFooter, setToggleFooter] = useState(false);

    return (
      <React.Fragment>
        {!ToggleFooter && <TimFooter props={{setToggleFooter, props}}/>}
        {ToggleFooter && <EricFooter props={{setToggleFooter, props}}/>}
      </React.Fragment>
    )
  }

  export default Footer;