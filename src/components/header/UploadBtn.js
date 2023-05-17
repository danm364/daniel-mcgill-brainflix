
import uploadSvg from '../../assets/images/icons/upload.svg'


function UploadBtn() {
    return (
      <div className="header__upload-wrap">
        <button className='header__upload-btn'>UPLOAD</button>
        <object data={uploadSvg} className='header__uploadSvg' aria-label="upload Svg"></object>
      </div>
    );
  }
  
  export default UploadBtn;