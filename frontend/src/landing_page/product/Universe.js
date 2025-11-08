import React from "react";
import { Link } from 'react-router-dom';
function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center p-5 text-muted">
        <h2 className="fs-4 mt-5">The Zerodha Universe</h2>
        <p className="fs-6 mt-4">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="col-4 text-center p-4">
          <img
            style={{ width: "50%" }}
            src="media/images/zerodhaFundhouse.png"
          ></img>
          <p style={{ fontSize: "13px" }} className="mt-4">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4 text-center p-4">
          <img
            style={{ width: "60%" }}
            src="media/images/sensibullLogo.svg"
          ></img>
          <p style={{ fontSize: "13px" }} className="mt-4">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>
        <div className="col-4 text-center p-4">
          <img style={{ width: "50%" }} src="media/images/tijori.svg"></img>
          <p style={{ fontSize: "14px" }} className="mt-3">
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>

        <div className="col-4 text-center p-4">
          <img style={{ width: "50%" }} src="media/images/streakLogo.png"></img>
          <p style={{ fontSize: "13px" }} className="mt-4">
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>
        <div className="col-4 text-center p-4">
          <img
            style={{ width: "60%" }}
            src="media/images/smallcaseLogo.png"
          ></img>
          <p style={{ fontSize: "13px" }} className="mt-4">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-4 text-center p-4">
          <img style={{ width: "40%" }} src="media/images/dittoLogo.png"></img>
          <p style={{ fontSize: "14px" }} className="mt-3">
            Personalized advice on life and health insurance. No spam and no
            mis-selling.
          </p>
        </div>
        {/* <button style={{margin:"0 auto"}} className='btn btn-primary col-2 p-2 mt-4 fs-5 mb-5'>Sign up for free</button> */}
        <Link to={"/signup"} style={{margin:"0 auto"}} className='btn btn-primary col-2 p-2 mt-4 fs-5 mb-5'>Sign up for free</Link>
      </div>
    </div>
  );
}

export default Universe;
