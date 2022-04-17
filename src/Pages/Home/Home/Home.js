
import React from 'react';
import Services from '../Services/Services';
import banner from '../../../images/banner.jpg'
import './Home.css'

const Home = () => {
    return (
        <div>
            <div className='title'>
                <h1>World Gym</h1>
                <p>No Pain, No Gain</p>
            </div>
            <div>
                <img className='img-fluid' src={banner} alt="" />
            </div>
            <Services></Services>
        </div>
    );
};

export default Home;