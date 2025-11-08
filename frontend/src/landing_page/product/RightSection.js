import React from "react";
function RightSection({ imageURL, productName, productDescription, anchor }) {
  return (
    <div className="container p-5">
      <div className="row p-5">
        <div className="col-4 mt-5">
          <h1 className="fs-4">{productName}</h1>
          <p style={{ fontSize: "18px" }} className="mt-4">
            {productDescription}
          </p>
          <div className="mb-4 fs-6">
            <a style={{ textDecoration: "none" }} href="#">
              {anchor}
            </a>
          </div>
        </div>
        <div className="col-1"></div>
        <div className="col-7">
          <img src={imageURL} alt="img"></img>
        </div>
      </div>
    </div>
  );
}

export default RightSection;
