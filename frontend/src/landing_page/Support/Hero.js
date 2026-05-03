import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">

      {/* TOP BAR */}
      <div
        className="p-5 d-flex justify-content-between align-items-center"
        id="supportWrapper"
        style={{ maxWidth: "1100px", margin: "0 auto" }}
      >
        <h4 style={{ color: "#fff", margin: 0 }}>Support Portal</h4>
        <a href="" style={{ color: "#fff", textDecoration: "underline" }}>
          Track Tickets
        </a>
      </div>

      {/* MAIN CONTENT */}
      <div
        className="row p-5"
        style={{
          maxWidth: "1150px",
          margin: "0 auto",
          alignItems: "flex-start",
          display: "flex",
          columnGap: "80px"
        }}
      >

        {/* LEFT */}
        <div className=" p-3" style={{ flex: "0 0 45%" , maxWidth: "45%"}}>
          <h1
            className="fs-3 text-white mb-4"
            style={{ lineHeight: "1.5", maxWidth: "500px" }}
          >
            Search for an answer or browse help topics to create a ticket
          </h1>

          <input
            placeholder="Eg: how do I activate F&O, why is my order getting rejected.."
            style={{
              width: "100%",
              maxWidth: "480px",
              padding: "14px 16px",
              borderRadius: "6px",
              border: "none",
              outline: "none",
              marginBottom: "18px",
            }}
          />

          <div
            style={{
              display: "flex",
              gap: "18px",
              flexWrap: "wrap",
              maxWidth: "500px",
            }}
          >
            <a href="" className="hero-link">Track account opening</a>
            <a href="" className="hero-link">Track segment activation</a>
            <a href="" className="hero-link">Intraday margins</a>
            <a href="" className="hero-link">Kite user manual</a>
          </div>
        </div>

        {/* RIGHT */}
        <div
          className="p-3"
          style={{
            // paddingLeft: "60px",
             flex: "0 0 45%" , maxWidth: "45%" 
          }}
        >
          <h1 className="fs-3 text-white mb-3">Featured</h1>

          <ol
            className="text-white"
            style={{
              paddingLeft: "18px",
              lineHeight: "2",
            }}
          >
            <li>
              <a href="" className="hero-link">
                Current Takeovers and Delisting - January 2024
              </a>
            </li>
            <li>
              <a href="" className="hero-link">
                Latest Intraday leverages - MIS & CO
              </a>
            </li>
          </ol>
        </div>

      </div>
    </section>
  );
}

export default Hero;