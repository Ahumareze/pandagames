import React from 'react';

//styles
import classes from './collection.module.css';

//utilities
import { collectionsLink } from '../../utilities/links';

//components
import { Background, Game, Header } from '../../components';
import { useParams } from 'react-router-dom';

//data
import games from '../../assets/data/games';

function Collection() {
    const { id } = useParams();

    return (
        <Background bubbles={false} explore={false}>
            <div className={classes.container}>
                <Header active={collectionsLink} />
                <section>
                    <h2>{id} games</h2>
                    <div className={classes.collectionContainer}>
                    {games.map((i, idx) => (
                        <Game
                            title={i.title}
                            image={i.image}
                            prices={i.prices}
                            key={idx}
                            id={i.id}
                        />
                    ))}
                    </div>
                </section>
            </div>
        </Background>
    );
}

export default Collection;