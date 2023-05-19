import maximizeBtn from "../../assets/images/icons/fullscreen.svg";
import volumeBtn from "../../assets/images/icons/volume_up.svg";

function Options() {


    
    return (
        <div className="video__options-wrap">
            <div className="--split">
                <object className="video__maximize-btn" data={maximizeBtn}  aria-label="helloo"></object>
            </div>
            <div className="--split">
                <object className="video__volume-btn" data={volumeBtn} aria-label="helloo"></object>
            </div>
        </div>
        
    );
  }
  
  export default Options;