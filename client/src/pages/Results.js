import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "../components/Table";

function Results() {
  const [results, setResults] = useState();
  useEffect(() => {
    window.scrollTo(0, 0);
    axios
      .get("/api/results")
      .then((response) => {
        setResults(response.data);
      })
      .catch((err) => console.log(err.response.data));
  }, []);

  return (
    <div className="container-fluid">
      <div
        className="row align-items-start justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <h1
          className="text-center mt-5 tracking-in-contract-bck"
          style={{ margin: "3rem .5rem" }}
        >
          Results
        </h1>
        <div className="col-12 col-md-11">
          <>
            {" "}
            <h6 className="mt-4"> EVENT NAME</h6>
            <div className="my-5">
              <Table rData={results} eId={1} />
            </div>
            <h6 className="mt-4"> EVENT NAME</h6>
            <div className="my-5">
              <Table rData={results} eId={2} />
            </div>{" "}
            <h6 className="mt-4"> EVENT NAME</h6>
            <div className="my-5">
              <Table rData={results} eId={3} />
            </div>{" "}
            <h6 className="mt-4"> EVENT NAME</h6>
            <div className="my-5">
              <Table rData={results} eId={4} />
            </div>{" "}
            <h6 className="mt-4"> EVENT NAME</h6>
            <div className="my-5">
              <Table rData={results} eId={5} />
            </div>{" "}
            <h6 className="mt-4"> EVENT NAME</h6>
            <div className="my-5">
              <Table rData={results} eId={6} />
            </div>{" "}
            <h6 className="mt-4"> EVENT NAME</h6>
            <div className="my-5">
              <Table rData={results} eId={7} />
            </div>{" "}
            <h6 className="mt-4"> EVENT NAME</h6>
            <div className="my-5">
              <Table rData={results} eId={8} />
            </div>{" "}
            <h6 className="mt-4"> EVENT NAME</h6>
            <div className="my-5">
              <Table rData={results} eId={9} />
            </div>{" "}
            <h6 className="mt-4"> EVENT NAME</h6>
            <div className="my-5">
              <Table rData={results} eId={10} />
            </div>
          </>
        </div>
      </div>
    </div>
  );
}

export default Results;
