import VideoPlayer from "./VideoPlayer";
import Content from "./content/Content";
import CommentFeed from "./comment/CommentFeed" ;
import videoDetails from "../../data/video-details.json";
import VideoFeed from "../videos/VideoFeed";

function Body() {
  
    const videoTitle = videoDetails[0].title
    const videoDesc = videoDetails[0].description
    const videoLikes = videoDetails[0].likes
    const videoViews = videoDetails[0].views
    const videoChannel = videoDetails[0].channel
    const videoDate = new Date(videoDetails[0].timestamp).toLocaleDateString()
    const numberOfComments = videoDetails[0].comments.length
    

    return (
      <div>
        <section className="hero__container">
          <VideoPlayer />
        </section>
        <section className="main__wrap">
          <div className="--tablet">
            <Content  
                  videoTitle = {videoTitle} 
                  videoDesc={videoDesc} 
                  videoLikes={videoLikes} 
                  videoViews={videoViews} 
                  videoChannel={videoChannel}
                  videoDate={videoDate}
                  
          
            />
          
          
            <CommentFeed numberOfComments = {numberOfComments} videoDetails = {videoDetails}/>
          </div>
          <VideoFeed videoDetails={videoDetails}/>
        </section>
        
      </div>
    );
  }
  
  export default Body;