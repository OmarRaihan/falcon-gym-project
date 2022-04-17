
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
    const {id, img, name, description, price} = service;
    const navigate = useNavigate();

    const navigateServiceDetail = id =>{
        navigate(`/service/${id}`);
    }

    return (
        <div className='card-container mx-auto'>
            <div className="card border-0 rounded-lg shadow-lg p-2" style={{ width: "16rem" }}>
                <img className='rounded' src={img} alt="" />
                <div className="info text-center mt-4">
                    <h5>{name}</h5>
                    <p>{description}</p>
                    <h6>Fees: {price}/<small>month</small></h6>
                </div>
                <div className='button mx-auto'>
                <button onClick={() => navigateServiceDetail(id)}>Get Service</button>
                </div>
            </div>
        </div>
    );
};

export default Service;