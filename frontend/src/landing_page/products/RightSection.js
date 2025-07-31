import React from 'react';
function RightSection({
    imageURL,
    productName,
  productDesription,
  learnMore,
}) {
    return ( 
        <div className='container mt-5 p-5'>
            <div className='row'>
                <div className='col-6 p-5  mt-5' style={{display:"flex", justifyContent:"center"}}>
                    <div>
                        <h1>{productName}</h1>
                        <p>{productDesription}</p>
                        <a href={learnMore} style={{textDecoration:"none"}}>
                        Learn More <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
                <div className='col-6'>
                    <img src={imageURL} style={{width: '100%'}}/>
                </div>

            </div>
        </div>
     );
}

export default RightSection;