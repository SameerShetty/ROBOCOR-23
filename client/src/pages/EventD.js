import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EventDetails from "../EventDetails";
import { LazyLoadImage } from "react-lazy-load-image-component";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

function EventD() {
  const [event, setEvent] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
    const findEventDetails = EventDetails.find(
      (item) => Number(item.id) === Number(id)
    );

    if (findEventDetails) setEvent(findEventDetails);
    else navigate("/404");
  }, [id, navigate]);
  return (
    <>
      <NavBar />
      <div className="container-fluid">
        <div
          className="row align-items-start justify-content-center"
          style={{ minHeight: "100vh" }}
        >
          <h1 className="text-center mt-5"> {event.title}</h1>
          <div className="col-10 d-flex flex-column align-items-center justify-content-center flex-column ">
            <div className="mb-3">
              {" "}
              <LazyLoadImage
                alt={event.title}
                effect="blur"
                src={event.img}
                className="img"
              />
            </div>
            <div className="my-3">
              {" "}
              <p style={{ color: " #c9d6df", lineHeight: "2rem" }}>
                {event.desc}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default EventD;
