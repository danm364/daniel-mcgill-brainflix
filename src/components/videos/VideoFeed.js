import Video from "./Video";


function VideoFeed(props) {
        const title = props.videoDetails[0].title
        console.log(props.videoDetails)
    
    
    return (
        <section className="video-feed__container">
            <h2>NEXT VIDEOS</h2>     
            {props.videoDetails.map((element) => 
                <Video 
                    id={element.id}
                    title={element.title}
                    channel = {element.channel}
                    videoImg = {element.image}
                />
            )}     
            

        </section>
        
    );
  }
  
  export default VideoFeed;