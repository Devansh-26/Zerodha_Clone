import React from "react";
function Hero() {
  return (
    <div className="container p-5 mt-5">
      <h1 className="text-center fs-4 mt-5">Charges</h1>
      <h3 className="text-center mt-3 text-muted fs-5 mb-5">
        List of all charges and taxes
      </h3>
      <div
        className="row p-5 mt-5 text-muted text-center"
        style={{ lineHeight: "1.8", fontSize: "1.1rem" }}
      >
        <div className="col-4 p-3">
          <img
            style={{ width: "70%" }}
            src="media/images/pricingEquity.svg"
          ></img>
          <h1 className="fs-4">Free equity delivery</h1>
          <p className="mt-3">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-4 p-3">
          <img
            style={{ width: "70%" }}
            src="media/images/intradayTrades.svg"
          ></img>
          <h1 className="fs-4">Intraday and F&O trades</h1>
          <p className="mt-3">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-4 p-3">
          <img
            style={{ width: "70%" }}
            src="media/images/pricingEquity.svg"
          ></img>
          <h1 className="fs-4">Free direct MF</h1>
          <p className="mt-3">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
