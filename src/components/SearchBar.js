import userImg from '../assets/images/Mohan-muruge.jpg'
import searchSvg from '../assets/images/icons/search.svg'


function SearchBar() {
    return (
      <div className="header__search-wrap">
        <input type="text" placeholder="Search" className='header__search-bar'/>
        <object data={searchSvg} className='header__searchSvg'></object>
        <img src={userImg} alt="user-img" className='header__user-img'/>
      </div>
    );
  }
  
  export default SearchBar;