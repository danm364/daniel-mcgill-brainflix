import { Link } from "react-router-dom";
import {useParams} from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

function Video(props) {


    const params = useParams()
    const API_KEY = process.env.REACT_APP_API_KEY
    
    
    useEffect(() => {
        if (params.id) {
        axios.get(`http://localhost:3500/videos/${params.id}`).then((res) => {
            props.setVideo(res.data)
           

        }) }
    },[params.id])


    
    return (
        
            
            <div key={props.id} className="video-feed__video-wrap" >
                <Link to={`/videos/${props.id}`}  className="video-feed__anchor-wrap">
                    <img src={props.videoImg} alt="Video Image" className="video-feed__img"/>
                </Link>
                <div className="video-feed__info-wrap">
                    <p className="video-feed__title">{props.title}</p>
                    <p className="video-feed__channel">{props.channel}</p>
                </div>
                
            </div>
        
        
    );
  }
  
  export default Video;