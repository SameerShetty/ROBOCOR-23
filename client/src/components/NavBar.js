import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  HiOutlineMenuAlt4,
  HiOutlineChevronLeft,
  HiDownload,
} from "react-icons/hi";
import { SiReacthookform, SiValorant } from "react-icons/si";
import { GiTrophyCup } from "react-icons/gi";
import { LazyLoadImage } from "react-lazy-load-image-component";

function NavBar() {
  const [isNav, setNav] = useState(false);

  return (
    <>
      {!isNav ? (
        <div
          className="position-fixed d-flex align-items-center justify-content-center"
          style={{
            backgroundColor: "#fa4454",
            aspectRatio: "1",
            width: "2.5rem",
            borderRadius: "50%",
            top: "15px",
            right: "10px",
            zIndex: "1000",
            cursor: "pointer",
            boxShadow:
              "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
          }}
        >
          <HiOutlineMenuAlt4
            onClick={() => {
              setNav(!isNav);
            }}
            className="rotate-in-center "
            style={{
              color: "#f0f5f9",
              fontSize: "2rem",
            }}
          />
        </div>
      ) : (
        <div
          className="position-fixed d-flex align-items-center justify-content-center"
          style={{
            backgroundColor: "#fa4454",
            aspectRatio: "1",
            width: "2.5rem",
            borderRadius: "50%",
            top: "15px",
            right: "10px",
            zIndex: "1000",
            cursor: "pointer",
            boxShadow:
              "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
          }}
        >
          <HiOutlineChevronLeft
            onClick={() => {
              setNav(!isNav);
            }}
            className="rotate-in-center "
            style={{
              color: "#f0f5f9",
              fontSize: "2rem",
            }}
          />
        </div>
      )}

      <nav
        className="position-fixed top-0 p-3"
        style={{
          width: "100%",
          minHeight: "100vh",
          zIndex: "999",
          left: isNav ? "0" : "-150%",
          transition: ".5s ease-out",
        }}
      >
        <div className="container-fluid">
          <div
            className="d-flex align-items-start justify-content-center "
            style={{ minHeight: "100vh" }}
          >
            <LazyLoadImage
              alt={"jett-img"}
              effect="blur"
              src={"../imgs/Jett.png"}
              className="img"
              style={{ height: "100vh", opacity: ".243" }}
            />
            <ul className="p-2 my-3 mx-1 position-absolute">
              <li className="my-5">
                <Link to={"/"} style={{ color: "#1e2022" }}>
                  <h6 style={{ color: "#0f1924" }}>
                    <SiValorant
                      style={{
                        fontSize: "1.5rem",
                        color: "#fa4454",
                        marginRight: ".3rem",
                      }}
                    />
                    Home
                  </h6>
                </Link>
              </li>
              <li className="my-5">
                <Link to={"/register"} style={{ color: "#1e2022" }}>
                  <h6 style={{ color: "#0f1924" }}>
                    <SiReacthookform
                      style={{
                        fontSize: "1.5rem",
                        color: "#fa4454",
                        marginRight: ".3rem",
                      }}
                    />
                    Register
                  </h6>
                </Link>
              </li>
              <li className="my-5">
                <Link to={"/results"} style={{ color: "#1e2022" }}>
                  <h6 style={{ color: "#0f1924" }}>
                    <GiTrophyCup
                      style={{
                        fontSize: "1.5rem",
                        color: "#fa4454",
                        marginRight: ".3rem",
                      }}
                    />
                    Results
                  </h6>
                </Link>
              </li>
              <li className="my-5">
                <Link to={"/register"} style={{ color: "#1e2022" }}>
                  <h6 style={{ color: "#0f1924" }}>
                    <HiDownload
                      style={{
                        fontSize: "1.5rem",
                        color: "#fa4454",
                        marginRight: ".3rem",
                      }}
                    />
                    Rule Book
                  </h6>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
