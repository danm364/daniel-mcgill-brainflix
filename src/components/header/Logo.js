import svgLogo from '../../assets/images/BrainFlix-logo.svg';
import { Link } from "react-router-dom";


function Logo() {
    return (
      <div className='header__logo-wrap'>
            <Link to="/">
              <img src={svgLogo} alt="header-svg" className="header__svg"/>
            </Link>
      </div>
    );
  }
  
  export default Logo;