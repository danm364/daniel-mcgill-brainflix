import videos from "../../data/videos.json";
import { useState } from "react";
import playBtn from "../../assets/images/icons/play.svg";

import PlayBtn from "./PlayBtn";
import VideoTimeBar from "./VideoTimeBar";
import Options from "./Options";

function VideoPlayer() {

    
    let bmxVideo = videos[0].image

    const [videosData, setVideo] = useState({bmxVideo})

    
    return (
      <div className="video__wrap">
        <video className="video__container" poster={bmxVideo}>
        </video>
        <div className="video__controls">
          <PlayBtn />
          <VideoTimeBar />
          < Options />
        </div>
        
      </div>
        
      
    );
  }
  
  export default VideoPlayer;