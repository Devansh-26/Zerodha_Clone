import React from "react";
function Pricing() {
  return (
    <div className="container  p-5 pt-0">
      <div className="row p-5">
        <div className="col-5">
          <h1 className="fs-2 mb-4">Unbeatable pricing</h1>
          <p className="fs-7 text-muted mb-4">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="/" style={{textDecoration:"none"}}>See pricing <i class="fa-solid fa-arrow-right"></i> </a>
        </div>
        <div className="col-7">
            <div className="row p-5">
                <div className="col-4"><img src="media/images/pricing3.png" alt="pricing_img" style={{width:"90%"}}></img></div>
                <div className="col-4"><img src="media/images/pricing2.png" alt="pricing_img" style={{width:"115%"}}></img></div>
                <div className="col-4"><img src="media/images/pricing1.png" alt="pricing_img" style={{width:"100%"}}></img></div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
