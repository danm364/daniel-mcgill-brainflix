


function VideoFeed(props) {

    
    
    return (
        
            
            <div key={props.id} className="video-feed__video-wrap">
                <img src={props.videoImg} alt="Video Image" className="video-feed__img"/>
                <div className="video-feed__info-wrap">
                    <p>{props.title}</p>
                    <p>{props.channel}</p>
                </div>
                
            </div>
        
        
    );
  }
  
  export default VideoFeed;