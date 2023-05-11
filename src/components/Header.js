
import Logo from "./Logo"
import SearchBar from "./SearchBar";
import UploadBtn from "./UploadBtn";



function Header() {
    return (
      <header className="header__container">
        <Logo />
        <SearchBar />
        <UploadBtn />
      </header>
    );
  }
  
  export default Header;