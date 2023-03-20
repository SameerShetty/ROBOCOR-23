import React from "react";

function Loader(props) {
  return (
    <div className="spinner-border" role="status">
      <span className="sr-only" style={{ color: props.color }}></span>
    </div>
  );
}

export default Loader;
