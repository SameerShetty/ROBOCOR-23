import React from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import CountDownTimer from "../components/CountDownTimer";
import EventDetails from "../EventDetails";
import SponsorDetails from "../SponsorDetails";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

function Home() {
  const targetDate = new Date("2023-05-17T00:00:00");
  return (
    <>
      <NavBar />
      <div className="hero"></div>

      <div className="container-fluid" style={{ minHeight: "100vh" }}>
        <div
          className="row align-items-center justify-content-center header"
          style={{ minHeight: "100vh" }}
        >
          <h1
            className="text-center tracking-in-contract-bck "
            style={{
              margin: "3rem .5rem .5rem",
              textShadow: "3px 3px 20px #fa4454,-2px 1px 30px #fa4454",
            }}
          >
            {" "}
            ROBOCOR
          </h1>
          <h6
            className="text-center"
            style={{ textShadow: "3px 3px 20px #fa4454,-2px 1px 30px #fa4454" }}
          >
            Innovate . Compete . Conquer
          </h6>

          <h5>
            {" "}
            <CountDownTimer targetDate={targetDate} />
          </h5>
        </div>
        <div className="row align-items-center my-3 justify-content-center ">
          <h1 className="text-center " style={{ margin: "3rem .5rem" }}>
            {" "}
            Events
          </h1>
          {EventDetails.map((item) => (
            <Card
              key={item.id}
              eventId={item.id}
              title={item.title}
              desc={item.desc}
              img={item.img}
            />
          ))}
        </div>
        <div className="row align-items-center justify-content-center my-5">
          <div className="col-8 d-flex align-items-center justify-content-center flex-row">
            {" "}
            <div>
              {" "}
              <Link to="/register">
                <button
                  className="btn btn-light btn-lg"
                  style={{ backgroundColor: "#fff", color: "#000" }}
                >
                  Register{" "}
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="row align-items-center my-3 justify-content-center my-5">
          <h1 className="text-center mt-5" style={{ margin: "3rem .5rem" }}>
            Sponsors
          </h1>
          {SponsorDetails.map((item) => (
            <div className="col-10 col-md-4 my-3" key={item.id}>
              {" "}
              <LazyLoadImage
                alt={item.id}
                effect="blur"
                src={item.img}
                className="img"
              />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
