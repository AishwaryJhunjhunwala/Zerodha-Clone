import React from 'react';

function Hero() {
    return ( 
        <section className="container-fluid" id="supportHero" style={{backgroundColor: '#387ed1', color: 'white'}}>
            <div className="row " style={{display: 'flex', alignItems: 'center', marginLeft:"100px"}}>
                <div className="col-6 p-5">
                    <h4 className='mb-5'>Support Portal</h4>
                    <h4>Search for an answer or browse help topics to create a ticket</h4><br />
                    <input placeholder="Eg. how do I activate F&O, why is my order getting rejected..." style={{width: '90%', padding: '1vw'}}/><br /> <br />
                    <a href="" style={{color: 'white', marginRight: '2vw', fontSize: '18px'}}>Track account opening</a>
                    <a href="" style={{color: 'white', marginRight: '2vw', fontSize: '18px'}}>Track segment activation</a><br/>
                    <a href="" style={{color: 'white', marginRight: '2vw', fontSize: '18px'}}>Intraday margins</a>
                    <a href="" style={{color: 'white', marginRight: '2vw', fontSize: '18px'}}>Kite user manual</a>
                </div>
                <div className="col-6 p-5">
                    <a href="" style={{color: 'white', fontSize: '20px'}} >Track Tickets</a>
                    <h4 className='mt-5'>Featured</h4>
                    <ol>
                        <li><a href="" style={{color: 'white', marginRight: '2vw', fontSize: '18px'}}>Current Takeovers and Delisting - January 2024</a></li>
                        <li><a href="" style={{color: 'white', marginRight: '2vw', fontSize: '18px'}}>Latest Intraday leverages - MIS & CO</a></li>
                    </ol>
                </div>
            </div>
        </section>
     );
}

export default Hero;