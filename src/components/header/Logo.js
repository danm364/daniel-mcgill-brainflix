import svgLogo from '../../assets/images/BrainFlix-logo.svg';



function Logo() {
    return (
      <div className='header__logo-wrap'>
            <img src={svgLogo} alt="header-svg" className="header__svg"/>
      </div>
    );
  }
  
  export default Logo;