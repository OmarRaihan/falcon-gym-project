
import React from 'react';
import Services from '../Services/Services';
import banner from '../../../images/images/banner.jpg'
import './Home.css'
import Footer from '../../Shared/Footer/Footer';

const Home = () => {
    return (
        <div>
            <div className='title'>
                <h1>FALCON GYM</h1>
                <p>No Pain, No Gain</p>
            </div>
            <div>
                <img className='img-fluid' src={banner} alt="" />
            </div>
            <Services></Services>
            <Footer></Footer>
        </div>
    );
};

export default Home;