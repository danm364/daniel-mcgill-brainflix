import userImg from "../../../assets/images/Mohan-muruge.jpg"
import commentSvg from "../../../assets/images/icons/publish.svg"
import Comment from "./Comment"


function CommentFeed(props) {

    console.log(props.videoDetails[0].comments)
    
    return (
        
        <section className="comment__container">
            
            <h2 className="comment__header">{props.numberOfComments} Comments</h2>
            
            <form className="comment__form-container ">
                <label htmlFor="" className="comment__form-header --none">JOIN THE CONVERSATION</label>
                <div className="comment__anchor-left ">
                    <img src={userImg} alt="" className="comment__user-img"/>
                    <div className="comment__anchor-left">
                        <label htmlFor="" className="comment__form-header --smartphone-none" >JOIN THE CONVERSATION</label>
                        <textarea type="text" className="comment__input-area" placeholder="Add a new comment">
                        </textarea>
                    </div>   
                </div>
                <div className="comment__anchor-right">
                    <button type="submit" className="comment__btn" >COMMENT</button>
                    <object data={commentSvg} type="" className="comment__svg"></object>
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