import userImg from "../../../assets/images/Mohan-muruge.jpg"
import commentSvg from "../../../assets/images/icons/publish.svg"
import Comment from "./Comment"


function CommentFeed(props) {

    console.log(props.videoDetails[0].comments)
    
    return (
        
        <section className="comment__container">
            
            <h2 className="comment__header">{props.numberOfComments} Comments</h2>
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
            {props.videoDetails[0].comments.map ((comment) => 
                <Comment 
                    name = {comment.name}
                    comment = {comment.comment}
                    likes = {comment.likes}
                    date = {new Date(comment.timestamp).toLocaleDateString()}
                />
            )}

        </section>
        
    );
  }
  
  export default CommentFeed;