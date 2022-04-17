
import React from 'react';
import Services from '../Services/Services';
import banner from '../../../images/banner.jpg'

const Home = () => {
    return (
        <div>
            <div>
                <img className='img-fluid' src={banner} alt="" />
            </div>
            <Services></Services>
        </div>
    );
};

export default Home;