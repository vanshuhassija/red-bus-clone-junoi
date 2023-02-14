import React from 'react';

const BusResult = ({bus}) => {
    return (
        <div className='row bg-white p-2 d-flex justify-content-between m-3 align-items-center'>
            <h4 className="col-md-3">{bus.busName}</h4>
            <div className='d-flex flex-column justify-content-between col-md-3'>
                <div >DEPARTURE</div>
                <h4 >{bus.departureTime}</h4>
            </div>
            <div className='d-flex flex-column col-md-3'>
                <div>ARRIVAL</div>
                <h4>{bus.arrivalTime}</h4>
            </div>
            <h4 className='col-md-3'>{bus.ticketPrice}/-</h4>
        </div>
    );
};

export default BusResult;