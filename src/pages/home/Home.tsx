import React from 'react';

//styles
import classes from './home.module.css';

//components
import { Background, Header } from '../../components';
import Collections from './components/collections/Collections';
import Categories from './components/categories/Categories';
import Loader from './components/loader/Loader';

//utilities
import { home } from '../../utilities/links';

function Home() {
    return (
        <Background bubbles explore={false}>
            <div className={classes.container}>
                <Header active={home} />
                <section className={classes.section}>
                    <Collections />
                    <Categories />
                    <Categories />
                </section>
            </div>
        </Background>
    );
};

export default Home;