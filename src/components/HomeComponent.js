import React from 'react';
import AllAbout from './AllAboutComponent';
import CalendarConnect from './CalendarConnectComponent';
import Contact from './ContactComponent';
import Resources from './ResourcesComponent';
import SignUp from './SignUp';



function Home(props) {
    return (
        <div className="container">
            <div className="row">
                <SignUp />
            </div>
            <div className="row">
                <AllAbout />
                <CalendarConnect />
                <Contact />
                <Resources />
            </div>
        </div>
    );
}

export default Home;