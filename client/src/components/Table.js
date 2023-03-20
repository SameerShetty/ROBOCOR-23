import React, { useState } from "react";

function Table(props) {
  const [isResults, setResults] = useState();

  return (
    <table className="table table-striped table-dark">
      <thead>
        <tr>
          <th scope="col">TEAM NO.</th>
          <th scope="col">TEAM LEADER NAME</th>
          <th scope="col">TEAM LEADER USN</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">2</th>
          <td>Sameer Shetty</td>
          <td>1SI20CS099</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Sameer Shetty</td>
          <td>1SI20CS099</td>
        </tr>{" "}
        <tr>
          <th scope="row">2</th>
          <td>Sameer Shetty</td>
          <td>1SI20CS099</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Sameer Shetty</td>
          <td>1SI20CS099</td>
        </tr>{" "}
        <tr>
          <th scope="row">2</th>
          <td>Sameer Shetty</td>
          <td>1SI20CS099</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Sameer Shetty</td>
          <td>1SI20CS099</td>
        </tr>{" "}
        <tr>
          <th scope="row">2</th>
          <td>Sameer Shetty</td>
          <td>1SI20CS099</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Sameer Shetty</td>
          <td>1SI20CS099</td>
        </tr>{" "}
        <tr>
          <th scope="row">1</th>
          <td>Sameer Shetty</td>
          <td>1SI20CS099</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Sameer Shetty</td>
          <td>1SI20CS099</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Sameer Shetty</td>
          <td>1SI20CS099</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Table;
