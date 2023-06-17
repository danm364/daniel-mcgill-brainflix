import VideoPlayer from "../components/body/VideoPlayer";
import Content from "../components/body/content/Content";
import CommentFeed from "../components/body/comment/CommentFeed" ;
import VideoFeed from "../components/videos/VideoFeed";
import { useState, useEffect } from "react";
import axios  from "axios";
import { useParams } from "react-router-dom";



function HomePage() {
  
 
    const API_KEY = process.env.REACT_APP_API_KEY
    const GET_REQUEST = `https://project-2-api.herokuapp.com/videos/84e96018-4022-434e-80bf-000ce4cd12b8?api_key=${API_KEY}`
    
    const params = useParams()
  
    const [currentVideo, setVideo] = useState({})
    useEffect(() => {
      axios.get(GET_REQUEST).then((res) => {

        setVideo(res.data)

      })


   },[params])
    

    

    return (
      
      <div>
        <section className="hero__container">
          <VideoPlayer
            currentVideo = {currentVideo}
            setVideo = {setVideo}
          
          />
        </section>
        <section className="main__wrap">
          <div className="--tablet">
            <Content  
                  currentVideo = {currentVideo}

            />
    
            <CommentFeed 
 
              currentVideo = {currentVideo}
  
            />
          </div>
          <VideoFeed 
            
            currentVideo = {currentVideo}
            setVideo = {setVideo}
          />
        </section>
        
      </div>
      
    );
  }
  
  export default HomePage;