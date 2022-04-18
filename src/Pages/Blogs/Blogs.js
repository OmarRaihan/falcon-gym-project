
import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div>
            <h1 className='text-center my-3'>Blog Section</h1>
            
            <div className='question w-75 mx-auto '>
                <h4 className='text-center my-3'>Authentication VS Authorization</h4>
                <hr />
                <div>
                    <p>
                    1. Authentication verifies the user. And Authorization verifies the resources a user can access.
                    </p>
                    <p>
                    2. Authentication works through passwords, one-time pins, biometric information, and others. Authorization works through implemented settings which is maintained by the organization.
                    </p>
                    <p>
                    3. The first step of a good identity is Authentication. Authorization always takes place after authentication.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;