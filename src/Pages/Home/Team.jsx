import data from "../../data/index.json";

export default function Team() {
  return (
    <section className="team--section" id="Team">
      <div className="team--container">
        <h2 className="team--section--heading">Our Team</h2>
      </div>
      
      <div className="team--section--container">
        {data?.faculty?.map((item, index) => (
          <div key={index} className="team--section--card">
            <div className="team--section--img">
              <img src={item.src} alt="Product Chain" height="250px" width="250px"/>
            </div>
            <div className="team--section--card--content">
              <h3 className="team--section--title">{item.title}</h3>
              <p className="team--section--description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="team--section--container">
        {data?.core1?.map((item, index) => (
          <div key={index} className="team--section--card">
            <div className="team--section--img">
              <img src={item.src} alt="Product Chain" height="250px" width="250px"/>
            </div>
            <div className="team--section--card--content">
              <h3 className="team--section--title">{item.title}</h3>
              <p className="team--section--description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="team--section--container">
        {data?.core2?.map((item, index) => (
          <div key={index} className="team--section--card">
            <div className="team--section--img">
              <img src={item.src} alt="Product Chain" height="250px" width="300px"/>
            </div>
            <div className="team--section--card--content">
              <h3 className="team--section--title">{item.title}</h3>
              <p className="team--section--description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="team--section--container">
        {data?.core3?.map((item, index) => (
          <div key={index} className="team--section--card">
            <div className="team--section--img">
              <img src={item.src} alt="Product Chain" height="250px" width="300px"/>
            </div>
            <div className="team--section--card--content">
              <h3 className="team--section--title">{item.title}</h3>
              <p className="team--section--description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
