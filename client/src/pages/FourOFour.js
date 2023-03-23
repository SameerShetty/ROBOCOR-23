import React, { useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

function FourOFour() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <NavBar />
      <div className="container-fluid" style={{ minHeight: "100vh" }}>
        <div
          className="d-flex align-items-center justify-content-center header flex-column"
          style={{ minHeight: "100vh" }}
        >
          <div>
            <LazyLoadImage
              alt="dino-404"
              effect="blur"
              src={"../imgs/dinopng.png"}
              className="img"
            />
          </div>
          <h1 className="text-center">404</h1>
        </div>
      </div>
    </>
  );
}

export default FourOFour;
