


function Video(props) {

    const handleOnClick = function handleOnClick() {
        props.videoDetails.forEach((element) => {
            if (element.title === props.title) {
                props.setVideo(element)
            }
        })
        
    }
    
    
    return (
        
            
            <div key={props.id} className="video-feed__video-wrap" onClick={handleOnClick}>
                <img src={props.videoImg} alt="Video Image" className="video-feed__img"/>
                <div className="video-feed__info-wrap">
                    <p className="video-feed__title">{props.title}</p>
                    <p className="video-feed__channel">{props.channel}</p>
                </div>
                
            </div>
        
        
    );
  }
  
  export default Video;