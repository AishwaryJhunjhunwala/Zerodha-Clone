import React from 'react';
function Hero() {
    return ( 
        <div className=' container  mt-5 mb-5 '>
            <div className='row mt-5 p-5 mb-5 border-bottom text-center p-3'>
            <h1 className='mb-3'>Zerodha Products</h1>
            <p  className=" text-muted mb-3" style={{fontSize: "20px"}}>Sleek, modern, and intuitive trading platforms</p>
            <p>Check out our <a href=' ' style={{ textDecoration: "none" }}>investment offerings <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>  </p> 

            </div>

        </div>
        
     );
}

export default Hero;