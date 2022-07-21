import React from 'react';

//styles
import classes from './home.module.css';

//components
import { Background, Header } from '../../components';

function Home() {
    return (
        <Background>
            <div className={classes.container}>
                <Header />
                <h1>Home page</h1>
            </div>
        </Background>
    );
}

export default Home;