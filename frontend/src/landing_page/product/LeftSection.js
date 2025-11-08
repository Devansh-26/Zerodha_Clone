import React from "react";
function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container p-5">
      <div className="row p-5">
        <div className="col-8 ">
          <img src={imageURL} alt="img"></img>
        </div>
        <div className="col-4 mt-5">
          <h1 className="fs-4">{productName}</h1>
          <p style={{fontSize:"18px"}} className="mt-4">{productDescription}</p>
          <div className="mb-4 fs-6">
            <a style={{textDecoration:"none"}} href="#">{tryDemo}</a>
            <a  href="#" style={{marginLeft:"80px",textDecoration:"none"}}>{learnMore}</a>
          </div>
          <div>
            <a href={googlePlay}>
              <img src="media/images/googlePlayBadge.svg"></img>
            </a>
            <a href={appStore}  style={{marginLeft:"30px"}}>
              <img src="media/images/appstoreBadge.svg"></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
