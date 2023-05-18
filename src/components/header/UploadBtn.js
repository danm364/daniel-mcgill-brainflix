
import uploadSvg from '../../assets/images/icons/upload.svg';
import userImg from '../../assets/images/Mohan-muruge.jpg';

function UploadBtn() {
    return (

        <div className="header__upload-wrap">
            <button className='header__upload-btn'>UPLOAD</button>
            <object data={uploadSvg} className='header__uploadSvg' aria-label="upload Svg"></object>
            <img src={userImg} alt="" className='header__upload-userImg'/>
        </div>

    );
  }
  
  export default UploadBtn;