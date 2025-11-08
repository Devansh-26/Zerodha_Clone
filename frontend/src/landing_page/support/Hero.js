import React from 'react';
function Hero() {
    return ( 
        <div className='container-fluid p-5 mt-3' id="supportHero">
            <div className='p-5' id='supportWrap'>
                <h1>Support Portal</h1>
                <button  className='btn btn-primary col-1 p-1 fs-5 mb-2'>My tickets</button>
            </div>
            <div id="supportInput p-5 ">
                <input className="supportInput" placeholder='Eg:How do I open my account, How do i activate my F&O...'/>
            </div>
            
        </div>
     );
}

export default Hero;