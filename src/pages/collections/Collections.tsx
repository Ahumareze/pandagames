import React from 'react';

//styles
import classes from './collections.module.css';

//components
import { Background, Header } from '../../components';

//utilities
import { collections } from '../../utilities/links';
import Collection from './components/collection/Collection';

function Collections() {
    return (
        <Background bubbles={false} explore>
            <div className={classes.container}>
                <Header active={collections} />
                <section>
                    <div  className={classes.intro}>
                        <h2>Explore our well sorted game collections</h2>
                        <p >Browse from our list of different games genres and find a game that suits you lifestyle. From action games to play with family and friends to role-playing games to play alone </p>
                    </div>

                    <div className={classes.collectionsContainer}>
                        <Collection />
                        <Collection />
                        <Collection />
                        <Collection />
                        <Collection />
                        <Collection />
                        <Collection />
                        <Collection />
                    </div>
                </section>
            </div>
        </Background>
    );
}

export default Collections;