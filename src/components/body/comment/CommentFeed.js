import userImg from "../../../assets/images/Mohan-muruge.jpg"
import commentSvg from "../../../assets/images/icons/add_comment.svg"
import Comment from "./Comment"


function CommentFeed(props) {

    
    
    return (
        
        <section className="comment__container">
            
            <h2 className="comment__header">{props.currentVideo.comments ? props.currentVideo.comments.length : "Not Available"} Comments</h2>
            <label htmlFor="" className="comment__form-header --none">JOIN THE CONVERSATION</label>
            <form className="comment__form-container ">
                
                <img src={userImg} alt="" className="comment__user-img"/>
                <div className="comment__anchor-left ">
                    
                    <label htmlFor="" className="comment__form-header" >JOIN THE CONVERSATION</label>
                    <textarea type="text" className="comment__input-area" placeholder="Add a new comment">
                    </textarea>
                    <div className="comment__anchor-right">
                        <button type="submit" className="comment__btn" >COMMENT</button>
                        <object data={commentSvg} type="" className="comment__svg"></object>
                    </div>
                </div>   
                
            </form>
            {props.currentVideo.comments ? props.currentVideo.comments.map ((comment) => 
                <Comment 
                    id={comment.id}
                    name = {comment.name}
                    comment = {comment.comment}
                    likes = {comment.likes}
                    date = {new Date(comment.timestamp).toLocaleDateString()}
                />
            ) : "Not available"}

        </section>
        
    );
  }
  
  export default CommentFeed;