import React from 'react';

const BusResult = ({bus}) => {
    return (
        <div className='bg-warning p-4 d-flex justify-content-between m-3'>
            <h4>{bus.busName}</h4>
        </div>
    );
};

export default BusResult;