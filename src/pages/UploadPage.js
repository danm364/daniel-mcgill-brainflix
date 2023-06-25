import { Link } from "react-router-dom";
import publishSvg from "../assets/images/icons/publish.svg"; 
import bikeImage from "../assets/images/Upload-video-preview.jpg";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';


function UploadPage() {

    function handleSubmit(e) {
        
        e.preventDefault()  

        let videoTitle = (document.getElementById('uploadpage__video-title').value).toString()
        let videoDesc = document.getElementById('uploadpage__video-desc').value
        let newId = uuidv4()
        const API_URL = process.env.REACT_APP_API_URL 
        

        axios.post(`${API_URL}/videos`, {
            "id": newId,
            "title": videoTitle,
            "channel": "loren ipsum",
            "image": "https://i.imgur.com/eNJliSp.jpeg",
            "description": videoDesc,
            "views": "1,001,023",
            "likes": "110,985",
            "duration": "4:01",
            "video": "https://project-2-api.herokuapp.com/stream",
            "timestamp": Date.now(),
            "comments": [
      {
        "id": "35bba08b-1b51-4153-ba7e-6da76b5ec1b9",
        "name": "",
        "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium alias minima obcaecati officiis cumque nesciunt accusantium nobis eum, molestias, quis provident repellendus aliquam adipisci harum, laudantium quam sunt debitis ullam!",
        "likes": 0,
        "timestamp": 1628522461000
      },
      {
        "id": "091de676-61af-4ee6-90de-3a7a53af7521",
        "name": "Gary Wong",
        "comment":" Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt dignissimos magnam doloribus quidem, distinctio dolores et consequuntur minus quas magni ab saepe quae similique laborum dolore non! Doloremque, eos beatae!",
        "likes": 0,
        "timestamp": 1626359541000
      },
      {
        "id": "66b7d3c7-4023-47f1-a02c-520c9ca187a6",
        "name": "Theodore Duncan",
        "comment": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur at aliquam fuga aspernatur modi ex. Sequi a, aspernatur quisquam ab ad praesentium? Praesentium debitis totam ullam beatae explicabo nam in!",
        "likes": 0,
        "timestamp": 1626011132000
      }]
        }).then((res) => {
            console.log(res)
            videoDesc = ''
            videoTitle = ''
        })


    }
    
    return (
        
        <form className="uploadpage__container" onSubmit={handleSubmit}> 
            <h1>Upload Video</h1>
            <section className="uploadpage__video-info">
                <div className="uploadpage__image-container">
                    <label className="uploadpage__label" htmlFor="">VIDEO THUMBNAIL</label>
                    <img src={bikeImage} alt=""  />
                </div>
                <div className="uploadpage__info-container">
                    <label className="uploadpage__label" htmlFor="" >TITLE YOUR VIDEO</label>
                    <input type="text" placeholder="Add a title to your video" id="uploadpage__video-title"/>
                </div>
                <div className="uploadpage__info-container"> 
                    <label className="uploadpage__label" placeholder="" htmlFor="">ADD A VIDEO DESCRIPTION</label>
                    <textarea type="text" className="uploadpage__info-desc" id="uploadpage__video-desc" placeholder="Add a description to your video" />
                </div>
            </section>
            <div className="uploadpage__btn-container">
                <div className="uploadpage__wrap ">
                    <div className="uploadpage__anchor">
                        <div className="uploadpage__link">
                            <button className="uploadpage__publish-btn" >PUBLISH</button>
                        </div>
                        <object data={publishSvg} aria-label="publishSvg" className="uploadpage__publishSvg" type=""></object>
                    </div>
                    <button className="uploadpage__cancel-btn" >CANCEL</button>
                    
                </div>
            </div>
            
        </form>
        
    );
  }
  
  export default UploadPage;