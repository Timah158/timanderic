import {ReactComponent as GithubIcon} from './font_awesome_icons/github-brands.svg'
import {ReactComponent as LinkedInIcon} from './font_awesome_icons/linkedin-brands.svg'
import {ReactComponent as EmailIcon} from './font_awesome_icons/envelope-solid.svg'
import './footer.css';

const Footer = () => {
    return (
      <footer>
        <a href="https://github.com/Timah158/timanderic" target="_blank"><GithubIcon className='footer_icon'/></a>
        <a href="https://www.linkedin.com/in/timlopez22" target="_blank"><LinkedInIcon className='footer_icon'/></a>
        <a href="https://github.com/Timah158/timanderic" target="_blank"><EmailIcon className='footer_icon'/></a>
      </footer>
    );
  }

  export default Footer;