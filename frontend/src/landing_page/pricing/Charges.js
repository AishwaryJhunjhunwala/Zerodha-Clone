import React from 'react';

function Charges() {
    return ( 
        <div className="Container mt-5 mb-5">
            <h3 className="text-center mb-5">Charges for Account Opening</h3>
            <table class="table table-striped border" style={{width: '80%', marginLeft: '10%'}}>
                <thead>
                    <tr>
                    <th scope="col">Type of Account</th>
                    <th scope="col">Charges</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">Online Account</th>
                    <td>Free</td>
                    </tr>
                    <tr>
                    <th scope="row">Offline Account</th>
                    <td>Free</td>
                    </tr>
                    <tr>
                    <th scope="row">NRI account (offline only)</th>
                    <td>₹ 500</td>
                    </tr>
                    <tr>
                    <th scope="row">Partnership, LLP, HUF, or Corporate accounts (offline only)</th>
                    <td>₹ 500</td>
                    </tr>
                </tbody>
                </table>
                <h3 className="text-center mt-5 mb-5">Charges for optional value added services</h3>
                <table class="table border table-striped" style={{width: '80%', marginLeft: '10%'}}>
                    <thead>
                        <tr>
                        <th scope="col">Service</th>
                        <th scope="col">Billing Frequency</th>
                        <th scope="col">Charges</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">Tickertape</th>
                        <td>Monthly/Annual</td>
                        <td>Free | Pro: 249/2399</td>
                        </tr>
                        <tr>
                        <th scope="row">Smallcase</th>
                        <td>Per Trasaction</td>
                        <td>Buy & Invest More: 100 | SIP: 10</td>
                        </tr>
                        <tr>
                        <th scope="row">Kite Connect</th>
                        <td>Monthly</td>
                        <td>Connect: 500 | Historical: 500</td>
                        </tr>
                    </tbody>
                </table>
        </div>
     );
}

export default Charges;