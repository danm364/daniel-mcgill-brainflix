import VideoPlayer from "../components/body/VideoPlayer";
import Content from "../components/body/content/Content";
import CommentFeed from "../components/body/comment/CommentFeed" ;
import VideoFeed from "../components/videos/VideoFeed";
import { useState, useEffect } from "react";
import axios  from "axios";
import { useParams } from "react-router-dom";



function HomePage() {
  
 
    const API_KEY = process.env.REACT_APP_API_KEY
    const GET_REQUEST = `http://localhost:3500/videos`
    
    const params = useParams()
    
  
    const [currentVideo, setVideo] = useState({})
    useEffect(() => {
      axios.get(GET_REQUEST).then((res) => {
        
        setVideo(res.data[0])

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