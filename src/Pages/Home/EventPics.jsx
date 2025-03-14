import data from "../../data/index.json";

export default function EventPics() {
  return (
    <section className="eventpics--section" id="EventPics">
      <div className="events--container-box">
        <div className="events--container">
          <h2 className="sections--heading">Event Pictures</h2>
        </div>
      </div>

      <h2 className="sections--subheading">Break The Password</h2>
      <div className="events--section--container">
        {data?.eventPicsBTP?.map((item, index) => (
          <div key={index} className="eventpics--section--card">
            <div className="eventpics--section--card--review">
              
            </div>
            <div className="events--section--card--img">
              <img src={item.src} alt="Avatar" />
            </div>
          </div>
        ))}
      </div>

      <h2 className="sections--subheading">Game of Code</h2>
      <div className="events--section--container">
        {data?.eventPicsGOC?.map((item, index) => (
          <div key={index} className="eventpics--section--card">
            <div className="eventpics--section--card--review">
              
            </div>
            <div className="events--section--card--img">
              <img src={item.src} alt="Avatar" />
            </div>
          </div>
        ))}
      </div>

      <h2 className="sections--subheading">Quantative Aptitude</h2>
      <div className="events--section--container">
        {data?.eventPicsQA?.map((item, index) => (
          <div key={index} className="eventpics--section--card">
            <div className="eventpics--section--card--review">
              
            </div>
            <div className="events--section--card--img">
              <img src={item.src} alt="Avatar" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
