
import uploadSvg from '../../assets/images/icons/upload.svg';
import userImg from '../../assets/images/Mohan-muruge.jpg';
import { Link } from "react-router-dom";

function UploadBtn() {
    return (

        <div className="header__upload-wrap">
            
            <div className='header__uploadbtn-wrap'>
                <Link to="/Upload" className='header__upload-btn'>
                    <button >UPLOAD</button>
                </Link>
                <object data={uploadSvg} className='header__uploadSvg' aria-label="upload Svg"></object>
            </div>
            <img src={userImg} alt="" className='header__upload-userImg'/>
        </div>

    );
  }
  
  export default UploadBtn;