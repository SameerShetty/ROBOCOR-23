import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  HiOutlineMenuAlt4,
  HiOutlineChevronLeft,
  HiDownload,
} from "react-icons/hi";
import { SiReacthookform } from "react-icons/si";
import { GiTrophyCup } from "react-icons/gi";

function NavBar() {
  const [isNav, setNav] = useState(false);

  return (
    <>
      {!isNav ? (
        <HiOutlineMenuAlt4
          onClick={() => {
            setNav(!isNav);
          }}
          className="position-fixed rotate-in-center "
          style={{
            top: "15px",
            right: "10px",
            color: "#f0f5f9",
            fontSize: "2rem",
            zIndex: "1000",
            cursor: "pointer",
          }}
        />
      ) : (
        <HiOutlineChevronLeft
          onClick={() => {
            setNav(!isNav);
          }}
          className="position-fixed rotate-in-center"
          style={{
            top: "15px",
            right: "10px",
            color: "#1e2022",
            fontSize: "2rem",
            zIndex: "1000",
            cursor: "pointer",
          }}
        />
      )}

      <nav
        className="position-fixed  top-0 shadow-lg p-3 mb-5 bg-white "
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
            className="d-flex align-items-start justify-content-center"
            style={{ minHeight: "100vh" }}
          >
            <ul className="p-2 my-3 mx-1">
              <li className="my-5">
                <SiReacthookform
                  style={{
                    fontSize: "1.5rem",
                    color: "#000",
                    marginRight: ".3rem",
                  }}
                />

                <Link to={"/register"} style={{ color: "#1e2022" }}>
                  Register
                </Link>
              </li>
              <li className="my-5">
                <GiTrophyCup
                  style={{
                    fontSize: "1.5rem",
                    color: "#000",
                    marginRight: ".3rem",
                  }}
                />
                <Link to={"/results"} style={{ color: "#1e2022" }}>
                  Results
                </Link>
              </li>{" "}
              <li className="my-5">
                <HiDownload
                  style={{
                    fontSize: "1.5rem",
                    color: "#000",
                    marginRight: ".3rem",
                  }}
                />
                <Link to={"/register"} style={{ color: "#1e2022" }}>
                  Rule Book
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
