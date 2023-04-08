import React, { useState } from "react";
import { jsPDF } from "jspdf";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Loader from "../components/Loader";

function Certificate() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
  });
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const genPDF = (e) => {
    e.preventDefault();
    const doc = new jsPDF({
      orientation: "landscape",
    });
    doc.text("Certificate of Completion", 140, 60, { align: "center" }); // adjust coordinates for landscape mode
    doc.text("This is to certify that", 40, 100);
    doc.text(formData.name, 40, 110);
    doc.text("has completed the course", 40, 120);
    doc.text("in JavaScript Programming", 40, 130);
    doc.text("with a grade of A", 40, 140);
    doc.addImage("../imgs/dinopng.png", "PNG", 40, 40, 50, 50); // adjust coordinates for landscape mode
    doc.save("Certificate.pdf");
    setLoading(false);
    setFormData({
      name: "",
    });
  };

  return (
    <>
      <NavBar />
      <div className="container-fluid" style={{ minHeight: "100vh" }}>
        <div
          className="d-flex align-items-center justify-content-center header flex-column"
          style={{ minHeight: "100vh" }}
        >
          <div>
            <h1 className="text-center mt-5"> Certificate</h1>
            <form
              onSubmit={genPDF}
              style={{
                width: "100%",
                padding: "1.5rem 2rem",
                borderRadius: "12px",
                marginBottom: "1.5rem",
                boxShadow:
                  "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
              }}
            >
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="Enter your name"
                  name="name"
                  required
                  id="name"
                  value={formData.name}
                  onChange={handleOnChange}
                />
                <label htmlFor="name" className="form-label">
                  NAME
                </label>
              </div>
              <button type="submit" className="btn btn--light">
                <span className="btn__inner">
                  <span className="btn__slide"></span>
                  <span className="btn__content">
                    {" "}
                    {loading ? <Loader color="#0f1924" /> : "Download"}
                  </span>
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Certificate;
