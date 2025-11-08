import React from "react";
function Hero() {
  return (
    <div className="container p-5 mt-5 mb-3 border-bottom">
      <div className="row p-5 text-center ">
        <h1 className="fs-4">Zerodha Products</h1>
        <h3 className="fs-4 mt-3 text-muted">Sleek, modern, and intuitive trading platforms</h3>
        <p className="mt-3">
          Check out our{" "}
          <a href="#" style={{ textDecoration: "none" }}>
            {" "}
            investment offerings<i class="fa-solid fa-arrow-right"></i>{" "}
          </a>
        </p>
      </div>
    </div>
  );
}

export default Hero;
