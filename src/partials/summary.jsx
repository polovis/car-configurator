import React from 'react';

const Summary = ({ model, engine, gearbox, color, enginePrice, gearboxPrice, colorPrice, currency }) => {
    return (
        <div className='col-xs-12 col-md-4 summary-wrapper'>
            <div className='summary'>
                <p>Summary</p>
                <div className='car-icon-wrapper'>
                    <i className='fas fa-car fa-3x' style={{ color: color }}></i>
                </div>
                <div className='details-wrapper'>
                    <div><span>Model:</span><span>{model}</span></div>
                    <div><span>Engine:</span><span> {engine}</span></div>
                    <div><span>Gearbox:</span><span> {gearbox}</span></div>
                    <div><span>Color:</span><span> {color}</span></div>
                    <div><span>Total price:</span><span> {currency} {enginePrice + gearboxPrice + colorPrice}</span></div>
                </div>
            </div>
        </div>
    )
}

export default Summary;