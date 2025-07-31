import React from 'react';


function Pricing() {
    return ( 
       <div className='container'>
        <div className='row p-5'>
            <div className='col-5 p-5'>
                <h1 className='mb-3 fs-2'>Unbeatable pricing</h1>
                <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                <a href='' style={{ textDecoration: "none" }}>See pricing 
                <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                </a>
            </div>
                <div className="col-6  mb-5">
          <div className="row text-center" style={{alignItems:"center"}}>
              <div className="col p-3 mt-4 ">
                 <img src='media/images/pricing0.svg' alt='' style={{width: "60%"}}/>
              <p className='text-muted '>
                Free account
                <br />
                opening
              </p>
            </div>
            <div className="col p-3 mt-4">
              <img src='media/images/pricing0.svg' alt='' style={{width: "60%"}}/>
              <p className='text-muted'>
                Free equity delivery and
                <br />
                direct mutual funds
              </p>
            </div>
            <div className="col p-3 mt-1 ">
              <img src='media\images\intradayTrades.svg' alt='' style={{width: "60%"}}/>
              <p className='text-muted'>Intraday and F&O</p>
            </div>
          </div>
        </div>
         <div className='col-1'> </div>
            
            </div>
        </div>
     );
}

export default Pricing;