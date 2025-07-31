import React from 'react';

function Team() {
    return ( 
       <div className='container'>
        <div className='row text-center'>
            <h1>People</h1>
             <div
        className="row p-5 "
        style={{ lineHeight: "1.8", fontSize: "16px", color:"#424242" }}>
        
        <div className="col-6 p-5 text-center">
              <img
            src="media/images/nithinKamath.jpg"
            style={{ borderRadius: "100%", width: "55%" }}
          />
               <h4 className="mt-5 fs-3">Nithin Kamath</h4>
          <h6 className='text-muted'>Founder, CEO</h6>
         

        </div>
        <div className="col-6 p-5 text-start">
        <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader.Today, <br/>Zerodha has changed the landscape of the Indian broking industry.</p>
        <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
        <p>Playing basketball is his zen.</p>
          <p>
            Connect on <a href="" style={{textDecoration:"none"}}>Homepage</a> / <a href="" style={{textDecoration:"none"}}>TradingQnA</a> /{" "}
            <a href="" style={{textDecoration:"none"}}>Twitter</a>
          </p>

    </div>
    
        </div>
       </div>
       </div>
     );
}

export default Team;