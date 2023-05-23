import userImg from "../../../assets/images/Mohan-muruge.jpg"
import commentSvg from "../../../assets/images/icons/publish.svg"
import Comment from "./Comment"


function CommentFeed(props) {

    console.log(props.videoDetails[0].comments)
    
    return (
        <section>
            <div>
                <img src="" alt="" />
                <div>
                    <p></p>
                    <p></p>
                </div>
            </div>
        </section>
        
    );
  }
  
  export default CommentFeed;