import Video from "./Video";
import axios from "axios";
import { useEffect, useState } from "react";

function VideoFeed(props) {

    const [videoDetails, setVideoDetails] = useState([{}])
    
    useEffect(() => {
        axios.get(`https://project-2-api.herokuapp.com/videos?api_key=${process.env.REACT_APP_API_KEY}`).then((res) => {
            setVideoDetails(res.data)
        })
    }, [])

    return (
        <section className="video-feed__container">
            <h2>NEXT VIDEOS</h2>     
            {videoDetails ? videoDetails.filter((element) => element.title !== props.currentVideo.title ).map((element) => 
                <Video 
                    id={element.id}
                    title={element.title}
                    channel = {element.channel}
                    videoImg = {element.image}
                    setVideo = {props.setVideo}
                    
                />
            )
            : "Not available"
        }     
            

        </section>
        
    );
  }
  
  export default VideoFeed;