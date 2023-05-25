


function VideoFeed(props) {

    
    
    return (
        
            
            <div key={props.id} className="video-feed__video-wrap">
                <img src={props.videoImg} alt="Video Image" className="video-feed__img"/>
                <div className="video-feed__info-wrap">
                    <p className="video-feed__title">{props.title}</p>
                    <p className="video-feed__channel">{props.channel}</p>
                </div>
                
            </div>
        
        
    );
  }
  
  export default VideoFeed;