import VideoPlayer from "./VideoPlayer";
import Content from "./content/Content";


function Body() {
    return (
      <div>
        <section className="hero__container">
          <VideoPlayer />
        </section>
        <Content />
      </div>
    );
  }
  
  export default Body;