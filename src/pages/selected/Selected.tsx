import React from 'react';

//styles
import classes from './selected.module.css';

//utilities
import { collections } from '../../utilities/links';

//components
import { Background, Header } from '../../components';
import HeaderDetails from './components/headerDetails/HeaderDetails';
import Banners from './components/banners/Banners';

function Selected() {
    return (
        <Background bubbles={false} explore={false}>
            <div className={classes.container}>
                <Header active={collections} />
                <section className={classes.section}>
                    <div>
                        <HeaderDetails />
                        <Banners />
                    </div>
                </section>
            </div>
        </Background>
    );
}

export default Selected;