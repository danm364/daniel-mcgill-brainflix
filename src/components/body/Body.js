import VideoPlayer from "./VideoPlayer";
import Content from "./content/Content";
import CommentFeed from "./comment/CommentFeed" ;
import videoDetails from "../../data/video-details.json";
import VideoFeed from "../videos/VideoFeed";
import { useState } from "react";

function Body() {
  
    
    const numberOfComments = videoDetails[0].comments.length

    

    
    const [currentVideo, setVideo] = useState(videoDetails[0])
    

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

              numberOfComments = {numberOfComments} 
              videoDetails = {videoDetails}
              currentVideo = {currentVideo}
              
              
            />
          </div>
          <VideoFeed 
            videoDetails={videoDetails}
            currentVideo = {currentVideo}
            setVideo = {setVideo}
          />
        </section>
        
      </div>
    );
  }
  
  export default Body;