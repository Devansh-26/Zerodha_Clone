import React from 'react';
import { Link } from "react-router-dom";
function Hero() {
    return ( 
        <div className='container p-5 mb-5'>
            <div className='row text-center p-5'>
                <img src='media/images/homeHero.png' alt='Hero_Img' className='mb-5'></img>
                <h1 className='pt-5'>
                    Invest in everything
                </h1>
                <p className='fs-5'>
                    Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.
                </p>
                {/* <button style={{margin:"0 auto"}} className='btn btn-primary col-2 p-2 mt-4 fs-5 mb-5'>Sign up for free</button> */}
                <Link to={"/signup"} style={{margin:"0 auto"}} className='btn btn-primary col-2 p-2 mt-4 fs-5 mb-5'>Sign up for free</Link>
            </div>
        </div>
     );
}

export default Hero;