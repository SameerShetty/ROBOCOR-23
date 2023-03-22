import React from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Fade } from "react-awesome-reveal";
function Card(props) {
  return (
    <div className="col-md-5 col-11">
      <Fade triggerOnce={true} delay={0.1} direction="up">
        <div
          className="card mb-5"
          style={{
            margin: "1rem .5rem",
            backgroundColor: "#ecedec",
            border: "none",
            outline: "transparent",
            boxShadow:
              "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
          }}
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
              {props.title}
            </h5>
            <p className="card-text" style={{ color: "#52616b" }}>
              {props.desc}
            </p>
            <div className="d-flex align-items-center justify-content-between flex-wrap flex-row my-2 mb-3">
              <div className="my-1">
                {" "}
                <strong>Venue : </strong>
                {props.ev}
              </div>

              <div className="my-1">
                <strong>Timing : </strong>
                {props.et}
              </div>
            </div>
            <Link to={`/event/${props.eventId}`}>
              {/* <button className="btn btn-dark">Know more</button> */}
              <button className="btn ">
                <span className="btn__inner">
                  <span className="btn__slide"></span>
                  <span className="btn__content">Know more</span>
                </span>
              </button>
            </Link>
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default Card;
