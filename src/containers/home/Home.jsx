import React from 'react';

//components
import { Header, SliderWidget } from '../../components';
import AboutUs from './components/about/AboutUs';
import Brains from './components/brains/Brains';
import Clients from './components/clients/Clients';
import Contact from './components/contactus/Contact';
import Coursel from './components/coursel/Coursel';
import Intro from './components/intro/Intro';
import Pricing from './components/pricing/Pricing';
import Services from './components/services/Services';
import WhyApexcorp from './components/whyApexcorp/WhyApexcorp';

//styles
import classes from './home.module.css';

function Home(props) {
    return (
        <div className={classes.homePage}>
            <Header active={'Home'} toggle={() => console.log('')}/>
            <Coursel />
            <SliderWidget />
            <Intro />
            <Services />
            <Pricing />
            <AboutUs />
            <WhyApexcorp />
            <Brains />
            <Clients />
            <Contact />
            <div className={classes.footer}>
                <p>Copyright © 2022 Apexcorp Investment</p>
            </div>
        </div>
    );
}

export default Home;