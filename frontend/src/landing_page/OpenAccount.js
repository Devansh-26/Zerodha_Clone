import React from 'react';
import { Link } from 'react-router-dom';
function OpenAccount() {
    return ( 
        <div className='container p-5 '>
            <div className='row p-5 text-center'>
                <h1 className='fs-3 mb-4'>Open a Zerodha account</h1>
                <p className='fs-6 mb-4 text-muted'>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
                {/* <button style={{margin:"0 auto"}} className='btn btn-primary col-2 p-2 fs-5'>Sign up for free</button> */}
                <Link to={"/signup"} style={{margin:"0 auto"}} className='btn btn-primary col-2 p-2 mt-4 fs-5 mb-5'>Sign up for free</Link>
            </div>
        </div>
     );
}

export default OpenAccount;