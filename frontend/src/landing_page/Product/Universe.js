import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-3 mt-5">
          <img src="media/images/dittoLogo.png" style={{width : "30%"}} />
          <p className="text-small text-muted">Insurance</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/sensibullLogo.svg" style={{width : "50%"}}  />
          <p className="text-small text-muted mt-2">Options Strategy Platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/streakLogo.png" style={{width : "30%"}} />
          <p className="text-small text-muted">Algo and Strategy Platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/goldenpiLogo.png" style={{width : "40%"}} />
          <p className="text-small text-muted">Bonds Trading Platform</p>
        </div>
        <div className="col-4 p-3 mt-5" >
          <img src="media/images/zerodhaFundHouse.png"  style={{width : "40%"}}/>
          <p className="text-small text-muted">Assests Management platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/smallcaseLogo (1).png" />
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>
        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Signup Now
        </button>
      </div>
    </div>
  );
}

export default Universe;