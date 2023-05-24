import userImg from "../../../assets/images/Mohan-muruge.jpg"

function Comment(props) {


    
    return (

            <div className="user-comment__container " key={props.id}>
                <div>
                    <img src={userImg} alt="" className="user-comment__user-img"/>
                </div>
                <div className="user-comment__headers-wrap ">
                    <div className="user-comment__anchor">
                        <label htmlFor="" className="user-comment__fullname">{props.name}</label>
                        <label htmlFor="" className="comment__date">{props.date}</label>
                        
                    </div>
                    
                    <div>
                        <p className="comment__user-comment">{props.comment}</p>
                    </div>  
                    
                </div>
                           
            </div>

        
    );
  }
  
  export default Comment;