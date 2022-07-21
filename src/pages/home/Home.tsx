import React from 'react';

//styles
import classes from './home.module.css';

//components
import { Background, Header } from '../../components';
import Collections from './components/collections/Collections';
import Categories from './components/categories/Categories';

function Home() {
    return (
        <Background>
            <div className={classes.container}>
                <Header />
                <section>
                    <Collections />
                    <Categories />
                </section>
            </div>
        </Background>
    );
}

export default Home;