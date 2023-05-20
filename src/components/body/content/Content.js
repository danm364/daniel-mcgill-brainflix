import videoDetails from "../../../data/video-details.json"
import viewsSvg from "../../../assets/images/icons/views.svg"
import likesSvg from "../../../assets/images/icons/likes.svg"



function Content() {
    
    console.log(videoDetails)
    const videoTitle = videoDetails[0].title
    const videoDesc = videoDetails[0].description
    const videoLikes = videoDetails[0].likes
    const videoViews = videoDetails[0].views
    const videoChannel = videoDetails[0].channel
    const videoDate = new Date(videoDetails[0].timestamp).toLocaleDateString()
    console.log(videoDate)


    return (
      <div className="content__container">
        <h1 className="content__header">{videoTitle}</h1>
        <div className="content__video-info">
          <div className="content__column--wrap flex-left">
            <div className="content__author">By {videoChannel}</div>
            <div className="content__date">{videoDate}</div>
          </div>
          <div className="content__column--wrap flex-right">
            <div className="content__video-views">{videoViews}
              <object data={viewsSvg} type="" className="content--absolute"></object>
            </div>
            <div className="content__video-likes">{videoLikes}
              <object data={likesSvg} type="" className="content--absolute "></object>
            </div>
          </div>
        </div>
        <p className="content__video-desc">{videoDesc}</p>

      </div>

    );
  }
  
  export default Content;