import React from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Fade } from "react-awesome-reveal";
function Card(props) {
  return (
    <div className="col-md-5 col-11">
      <Fade triggerOnce={true} delay={0.1} direction="up">
        <div
          className="card shadow-lg mb-5 bg-white rounded"
          style={{ margin: "1rem .5rem" }}
        >
          <Link to={`/event/${props.eventId}`}>
            <LazyLoadImage
              alt={props.title}
              effect="blur"
              src={props.img}
              className="card-img-top img"
            />
          </Link>

          <div className="card-body" style={{ padding: "2.5rem" }}>
            <h5 className="card-title" style={{ color: "#1e2022" }}>
            {props.eventId}.{props.title} 
            </h5>
            <p>Venue:{props.ev}</p>
            <p>Time:{props.et}</p>
            <p>Team Size:{props.ts}</p>
            <p className="card-text" style={{ color: "#52616b" }}>
              {props.desc}
            </p>
            <Link to={`/event/${props.eventId}`}>
              <button className="btn btn-dark">Know more</button>
            </Link>
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default Card;
