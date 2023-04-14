import React from 'react';
import '../stylesheets/LandingPage.css'
import image from '../images/business-planning-task-management-concept-260nw-1987578881(1).png'


function LandingPage(props) {
    // return (
    //     <div>
    //         <div className='container'>
    //             <h1> Manage Projects Effectively, and Conveniently </h1>
    //             <h3>Project-App provides an effective and creative way to manage your projects</h3>
    //         </div>
    //     </div>
    // );
    return (
        <div className="landing-page-container">
          <div className="landing-page-text">
            <h1 style={{ fontFamily: 'Roboto Slab, serif' }}>Welcome to TASK MANAGER</h1>
            <p style={{ fontFamily: 'Open Sans, sans-serif' }}>Let us Manage you tasks efficiently</p>
            <p style={{ fontFamily: 'Open Sans, sans-serif' }}>Log in or Sign up to get started</p>
          </div>
          <img src={image} alt="Project management app" className="landing-page-image" />
        </div>
      );
}

export default LandingPage;