import React from 'react';

//utilities
import { collections } from '../../utilities/links';

//components
import { Background, Header } from '../../components';

//styles
import classes from './collection.module.css';

function Collection() {
    return (
        <Background bubbles={false} explore={false}>
            <div className={classes.container}>
                <Header active={collections} />
                <section>
                    <h2>Action Games</h2>
                </section>
            </div>
        </Background>
    );
}

export default Collection;