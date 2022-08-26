import {ReactComponent as GithubIcon} from './font_awesome_icons/github-brands.svg'
import {ReactComponent as LinkedInIcon} from './font_awesome_icons/linkedin-brands.svg'
import {ReactComponent as EmailIcon} from './font_awesome_icons/envelope-solid.svg'
import './footer.css';

const Footer = () => {
    return (
      <footer>
        <a href="https://github.com/Timah158/timanderic"><GithubIcon className='footer_icon'/></a>
        <a href="https://github.com/Timah158/timanderic"><LinkedInIcon className='footer_icon'/></a>
        <a href="https://github.com/Timah158/timanderic"><EmailIcon className='footer_icon'/></a>
      </footer>
    );
  }

  export default Footer;