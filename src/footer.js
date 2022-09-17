import {ReactComponent as GithubIcon} from './SVGs/font_awesome_icons/github-brands.svg'
import {ReactComponent as LinkedInIcon} from './SVGs/font_awesome_icons/linkedin-brands.svg'
import {ReactComponent as EmailIcon} from './SVGs/font_awesome_icons/envelope-solid.svg'
import './CSS/footer.css';

const Footer = () => {
    return (
      <footer>
        <a href="https://github.com/Timah158/timanderic" rel='noreferrer' target="_blank"><GithubIcon className='footer_icon'/></a>
        <a href="https://www.linkedin.com/in/timlopez22" rel='noreferrer' target="_blank"><LinkedInIcon className='footer_icon'/></a>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" rel='noreferrer' target="_blank"><EmailIcon className='footer_icon'/></a>
      </footer>
    );
  }

  export default Footer;