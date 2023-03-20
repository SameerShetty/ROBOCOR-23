import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import {
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { Link } from "react-router-dom";
import Loader from "./Loader";

function Footer() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
  });
  return (
    <footer
      style={{
        width: "100%",
      }}
    >
      <iframe
        title="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21196.047076970044!2d77.10587906813463!3d13.321289481298475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb02c6a8e4a1b33%3A0xef0799d235e8d52b!2sDepartment%20of%20Industrial%20Engineering%20And%20Management!5e0!3m2!1sen!2sin!4v1679157079789!5m2!1sen!2sin"
        style={{ border: "0", width: "100%" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <div
        className="row p-4 align-items-start justify-content-around flex-wrap"
        style={{ width: "100%" }}
      >
        <div className="col-md-3 col-12 d-flex justify-content-center flex-column p-3">
          <h6>CORSIT</h6>{" "}
          <p style={{ color: "#c9d6df" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrs standard dummy
          </p>
          <div
            className="d-flex align-items-center justify-content-between"
            style={{ fontSize: "1.5rem", width: "70%" }}
          >
            <a
              href="https://www.linkedin.com/company/corsit/?originalSubdomain=in"
              target={"_blank"}
              rel="noreferrer"
            >
              <FaLinkedinIn
                style={{
                  color: "#fa4454",
                }}
              />
            </a>
            <a
              href="https://www.instagram.com/corsit.sit/"
              target={"_blank"}
              rel="noreferrer"
            >
              <FaInstagram
                style={{
                  color: " #fa4454",
                }}
              />
            </a>
            <a
              href="https://www.youtube.com/channel/UCcm-ttunddHrEGWUdYkUd2w"
              target={"_blank"}
              rel="noreferrer"
            >
              <FaYoutube
                style={{
                  color: "#fa4454",
                }}
              />
            </a>{" "}
          </div>
        </div>
        <div className="col-md-3 col-12 d-flex  justify-content-center flex-column p-3">
          <h6>EXTRA LINKS</h6>

          <ul style={{ color: "#c9d6df" }}>
            <li>
              <Link to={"/register"}>Register</Link>
            </li>
            <li>
              {" "}
              <Link to={"/results"}>Results</Link>
            </li>
            <li>
              {" "}
              <Link to={"/rulebook"}>Rule Book</Link>
            </li>
          </ul>
        </div>
        <div className="col-md-3 col-12 d-flex  justify-content-center flex-column p-3">
          <h6>NEED HELP ?</h6>
          <p style={{ color: "#c9d6df" }}>Corsit Lab</p>
          <p style={{ color: "#c9d6df" }}>
            Siddaganga Institute of Technology Tumkur, Karnataka
          </p>
          <a href="https://api.whatsapp.com/send?phone=919986094165">
            <p style={{ color: "#c9d6df" }}>
              <FaWhatsapp
                style={{
                  color: "#fa4454",
                  fontSize: "1.5rem",
                  verticalAlign: "top",
                }}
              />
              {"  "}
              Contact us on WhatsApp
            </p>
          </a>
          <a href="mailto:cosit@sit.ac.in" target={"_blank"} rel="noreferrer">
            <p style={{ color: "#c9d6df" }}>
              <SiGmail
                style={{
                  color: "#fa4454",
                  fontSize: "1.5rem",
                  verticalAlign: "top",
                }}
              />
              {"  "}
              Contact us on Gmail
            </p>
          </a>
        </div>
        <div className="col-md-3 col-12 d-flex justify-content-center flex-column p-3">
          <h6>SUBSCRIBE</h6>
          <form
            style={{ backgroundColor: "transparent" }}
            onSubmit={(e) => {
              e.preventDefault();
              setLoading(true);
              const subData = {
                email: formData.email,
              };
              axios
                .post("/api/register/subscribe", subData)
                .then((response) => {
                  if (response.status === 200) {
                    setLoading(false);
                    toast.success(response.data);
                    setFormData({
                      email: "",
                    });
                  }
                })
                .catch((err) => {
                  setLoading(false);
                  toast.error(err.response.data.message);
                });
            }}
          >
            <div className="form-floating">
              <input
                type="email"
                className="form-control mb-3"
                placeholder="Enter your email"
                name="email"
                required
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                id="email"
                value={formData.email}
                onChange={(e) => {
                  const { name, value } = e.target;
                  setFormData((prev) => {
                    return {
                      ...prev,
                      [name]: value,
                    };
                  });
                }}
              />
              <label htmlFor="email" className="form-label">
                EMAIL
              </label>
            </div>
            <button type="submit" className="btn btn-dark">
              {loading ? <Loader color="#c9d6df" /> : "Subscribe"}
            </button>
          </form>
        </div>
      </div>
      <p className="text-center" style={{ color: "#c9d6df" }}>
        {" "}
        CORSIT &#169; {new Date().getFullYear()} | All Rights Reserved
      </p>
    </footer>
  );
}

export default Footer;
