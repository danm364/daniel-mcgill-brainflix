import Video from "./Video";


function VideoFeed(props) {
        
        console.log(props.videoDetails)
    
    
    return (
        <section className="video-feed__container">
            <h2>NEXT VIDEOS</h2>     
            {props.videoDetails.filter((element) => element.title !== props.currentVideo.title ).map((element) => 
                <Video 
                    id={element.id}
                    title={element.title}
                    channel = {element.channel}
                    videoImg = {element.image}
                    setVideo = {props.setVideo}
                    videoDetails = {props.videoDetails}
                />
            )
        }     
            

        </section>
        
    );
  }
  
  export default VideoFeed;