
import React from 'react';
import './Service.css'

const Service = ({service}) => {
    const {img, name, description, price} = service;
    return (
        <div className='card-container mx-auto'>
            <div className="card border-0 rounded-lg shadow-lg p-2" style={{ width: "16rem" }}>
                <img className='rounded' src={img} alt="" />
                <div className="info text-center mt-4">
                    <h6>{name}</h6>
                    <p>{description}</p>
                    <h6>{price}/<small>month</small></h6>
                </div>
                <div className='button mx-auto'>
                <button>Get Service</button>
                </div>
            </div>
        </div>
    );
};

export default Service;