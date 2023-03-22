import React from "react";

function ScrollSpinner() {
  window.onscroll = () => {
    document.getElementById("scrollSpin").style.transform =
      "rotate(" + window.pageYOffset / 2 + "deg)";
  };
  return (
    <div
      className="d-flex align-items-center justify-content-center position-relative"
      style={{ margin: "2rem 0rem", width: "100%" }}
    >
      <h1 className="text-center position-absolute top-50 start-50 translate-middle">
        {" "}
        Events
      </h1>
      <div
        id="scrollSpin"
        style={{
          width: "210px ",
          aspectRatio: "1",
          borderRadius: "50%",
          //   border: "0px solid #fa4454",
          position: "relative",
          fontSize: "3rem",
          transformStyle: "preserve-3d",
        }}
      >
        <div className="position-absolute top-0 start-50 translate-middle">
          🔥
        </div>
        <div className="position-absolute top-50 start-0 translate-middle">
          ❤️
        </div>
        <div className="position-absolute top-100 start-50 translate-middle">
          😍
        </div>
        <div className="position-absolute top-50 start-100 translate-middle">
          🥳
        </div>
      </div>
    </div>
  );
}

export default ScrollSpinner;
