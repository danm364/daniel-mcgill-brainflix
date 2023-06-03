import publishSvg from "../assets/images/icons/publish.svg"; 



function UploadPage() {


    
    return (
        <div className="uploadpage__container"> 
            <h1>Upload Video</h1>
            <section className="uploadpage__video-info">
                <div className="uploadpage__image-container">
                    <label className="uploadpage__label" htmlFor="">VIDEO THUMBNAIL</label>
                    <img src="" alt=""  />
                </div>
                <div className="uploadpage__info-container">
                    <label className="uploadpage__label" htmlFor="">TITLE YOUR VIDEO</label>
                    <input type="text" placeholder="Add a title to your video"/>
                </div>
                <div className="uploadpage__info-container"> 
                    <label className="uploadpage__label" placeholder="" htmlFor="">ADD A VIDEO DESCRIPTION</label>
                    <input type="text" placeholder="Add a description to your video" />
                </div>
            </section>
            <div className="uploadpage__btn-container">
                <button className="uploadpage__publish-btn">PUBLISH</button>
                <object data={publishSvg} aria-label="publishSvg" className="uploadpage__publishSvg" type=""></object>
            </div>
            <p>CANCEL</p>
        </div>
        
    );
  }
  
  export default UploadPage;