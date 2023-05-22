
import viewsSvg from "../../../assets/images/icons/views.svg"
import likesSvg from "../../../assets/images/icons/likes.svg"



function Content(props) {
    
    


    return (
      <div className="content__container">
        <h1 className="content__header">{props.videoTitle}</h1>
        <div className="content__video-info">
          <div className="content__column--wrap flex-left">
            <div className="content__author">By {props.videoChannel}</div>
            <div className="content__date">{props.videoDate}</div>
          </div>
          <div className="content__column--wrap flex-right">
            <div className="content__video-views">{props.videoViews}
              <object data={viewsSvg} type="" className="content--absolute" aria-label="Views"></object>
            </div>
            <div className="content__video-likes">{props.videoLikes}
              <object data={likesSvg} type="" className="content--absolute " aria-label="Likes"></object>
            </div>
          </div>
        </div>
        <p className="content__video-desc">{props.videoDesc}</p>

      </div>

    );
  }
  
  export default Content;