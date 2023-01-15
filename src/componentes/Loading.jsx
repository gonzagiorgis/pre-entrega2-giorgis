import React from "react";

const Loading = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center m-5">
          <div className="spinner-border text-warning" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
