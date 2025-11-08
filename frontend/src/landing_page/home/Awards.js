import React from 'react';
function Awards() {
    return (
        <div className='container mt-5 p-5'>
            <div className='row p-5'>
                <div className='col-6'>
                    <img src='media/images/largestBroker.svg' alt='Awards'></img>
                </div>
                <div className='col-6'>
                    <h1 className='mt-4'>Largest Stock Broker in India</h1>
                    <p className='fs-5'>2+ million Zerodha clients contribute to over 15% of all retail
                        order volumes in India daily by trading and investing in:</p>
                    <div className='row mt-5 mb-3'>
                        <div className='col-6'>
                            <ul>
                                <li>
                                    <p>Futures and Options</p>
                                </li>
                                <li>
                                    <p>Commodity derivatives Direct</p>
                                </li>
                                <li>
                                    <p>Currency derivatives</p>
                                </li>
                            </ul>
                        </div>
                        <div className='col-6'>
                            <ul>
                                <li>
                                    <p>Stocks & IPOS</p>
                                </li>
                                <li>
                                    <p>Direct mutual funds</p>
                                </li>
                                <li>
                                    <p>Bonds and Govt.Securities</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <img src='media/images/pressLogos.png' alt='press_logo' style={{width:"90%"}}></img>
                </div>
            </div>
        </div>
    );
}

export default Awards;