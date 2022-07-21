import React from 'react';

//styles
import classes from './home.module.css';

//components
import { Background, Header } from '../../components';
import Collections from './components/collections/Collections';

function Home() {
    return (
        <Background>
            <div className={classes.container}>
                <Header />
                <section>
                    <Collections />
                </section>
            </div>
        </Background>
    );
}

export default Home;