import publishSvg from "../assets/images/icons/publish.svg"; 
import bikeImage from "../assets/images/Upload-video-preview.jpg";


function UploadPage() {


    
    return (
        
        <div className="uploadpage__container"> 
            <h1>Upload Video</h1>
            <section className="uploadpage__video-info">
                <div className="uploadpage__image-container">
                    <label className="uploadpage__label" htmlFor="">VIDEO THUMBNAIL</label>
                    <img src={bikeImage} alt=""  />
                </div>
                <div className="uploadpage__info-container">
                    <label className="uploadpage__label" htmlFor="">TITLE YOUR VIDEO</label>
                    <input type="text" placeholder="Add a title to your video"/>
                </div>
                <div className="uploadpage__info-container"> 
                    <label className="uploadpage__label" placeholder="" htmlFor="">ADD A VIDEO DESCRIPTION</label>
                    <textarea type="text" className="uploadpage__info-desc" placeholder="Add a description to your video" />
                </div>
            </section>
            <div className="uploadpage__btn-container">
                <div className="uploadpage__anchor ">
                    <button className="uploadpage__publish-btn">PUBLISH</button>
                    <object data={publishSvg} aria-label="publishSvg" className="uploadpage__publishSvg" type=""></object>
                    <button className="uploadpage__cancel-btn">CANCEL</button>
                </div>
            </div>
            
        </div>
        
    );
  }
  
  export default UploadPage;