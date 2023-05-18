
import Logo from "./Logo"
import SearchBar from "./SearchBar";
import UploadBtn from "./UploadBtn";



function Header() {
    return (
      <header className="header__container">
        <Logo />
        <div className="header__flex-wrap">
          <SearchBar />
          <UploadBtn />
        </div>
      </header>
    );
  }
  
  export default Header;