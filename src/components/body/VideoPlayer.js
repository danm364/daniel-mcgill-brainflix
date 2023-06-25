

import playBtn from "../../assets/images/icons/play.svg";

import PlayBtn from "./PlayBtn";
import VideoTimeBar from "./VideoTimeBar";
import Options from "./Options";

function VideoPlayer(props) {

    
    

    
    return (
      <div className="video__wrap">
        <video className="video__container" poster={props.currentVideo.image ? props.currentVideo.image : "Not available"}>
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