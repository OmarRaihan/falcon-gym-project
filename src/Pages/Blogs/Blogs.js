import React from "react";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div>
      <h1 className="text-center my-3">Blog Section</h1>

        {/* Question - 1 */}
      <div className="question w-75 mx-auto my-5">
        <h4 className="text-center my-3">Authentication VS Authorization</h4>
        <hr />
        <div>
          <p>1. Authentication verifies the user. And Authorization verifies the resources a user can access.</p>
          <p>
            2. Authentication works through passwords, one-time pins, biometric information, and others. Authorization works through implemented
            settings which is maintained by the organization.
          </p>
          <p>3. The first step of a good identity is Authentication. Authorization always takes place after authentication.</p>
        </div>
      </div>

        {/* Question - 2 */}
      <div className="question-2 w-75 mx-auto my-5">
        <h2 className="text-center">Question - 2</h2>
        <hr />
        <div>
          <h4 className="text-center my-3">A. Use of Firebase</h4>
          <p>
          1.Create web application easily
          </p>
          <p>
          2. Use authentication which is collaborated with google
          </p>
          <p>
          3. Used to store users data like chat messages, users details and other meta data
          </p>
          <hr />
        </div>

        <div>
            <h4 className="text-center my-3">B. Alternatives of Firebase Authentication</h4>
            <li>Auth0</li>
            <li>Okta</li>
            <li>Heroku</li>
            <li> Parse</li>
        </div>
      </div>

      {/* Question - 3 */}
      <div>

      </div>
    </div>
  );
};

export default Blogs;
