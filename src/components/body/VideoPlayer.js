import videos from "../../data/videos.json";


function VideoPlayer() {

    console.log(videos[0].image)

    let bmxVideo = videos[0].image
    return (
      <video className="video__container">
        
        <source src={bmxVideo} type="video/jpg" alt="video-image" className="video__carousel"/>
      </video>
    );
  }
  
  export default VideoPlayer;