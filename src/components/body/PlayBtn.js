
import playBtn from "../../assets/images/icons/play.svg";


function PlayBtn() {


    
    return (

        <div className="video__play-btn--wrap">
          <object className="video__play-btn"  data={playBtn} aria-label="hello"></object>
        </div>
    );
  }
  
  export default PlayBtn;