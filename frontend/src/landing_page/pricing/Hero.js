import React from "react";

function Hero() {
  return (
    <div className="container mt-3 p-5">
      <div className="row p-5 mb-5 text-center">
        <h1>Charges</h1>
        <h6 className="text-muted fs-3 mb-5 mt-3">
          List of all charges and taxes
        </h6>
        <div className="col-4  text-center mt-5">
          <img src="media/images/pricing0.svg" style={{width:"80%"}}/>
          <h1 className="fs-3 mb-3">Free Equity Delivery</h1>
          <p className="text-muted">
            All equity delivery investments (NSE, BSE),
            <br /> are absolutely free — ₹ 0 brokerage.
          </p>
        </div>
        <div className="col-4 mt-5">
          <img src="media/images/intradayTrades.svg" style={{width:"80%"}}/>
          <h1 className="fs-3 mb-3">Intraday and F&O trades</h1>
          <p className="text-muted">
            Flat Rs. 20 or 0.03% (whichever is lower) per <br /> executed order
            on intraday trades across <br /> equity, currency, and commodity
            trades. Flat <br /> ₹20 on all option trades.
          </p>
        </div>
        <div className="col-4 mt-5">
          <img src="media/images/pricing0.svg" style={{width:"80%"}}/>
          <h1 className="fs-3 mb-3">Free direct MF</h1>
          <p className="text-muted">
            All direct mutual fund investments are <br /> absolutely free — ₹ 0
            commissions & DP <br /> charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
