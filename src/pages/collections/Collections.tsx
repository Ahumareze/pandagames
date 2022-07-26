import React, { useState } from 'react';

//styles
import classes from './collections.module.css';

//components
import { Background, Header } from '../../components';

//utilities
import { collections } from '../../utilities/links';

//components
import Collection from './components/collection/Collection';

//data
import mainCollections from '../../assets/data/mainCollections';
import Loader from './components/loader/Loader';

function Collections() {
    const [loading, setLoading] = useState(true);

    setTimeout(() => {
        setLoading(false)
    }, 2000);

    let container;

    if(loading){
        container = (
            <section>
                <Loader />
            </section>
        )
    }else{
        container = (
            <section>
                <div  className={classes.intro}>
                    <h2>Explore our well sorted game collections 🎮</h2>
                    <p >Browse from our list of different games genres from action games to play with family and friends to role-playing games to play alone </p>
                </div>

                <div className={classes.collectionsContainer}>
                    {mainCollections.map((i, idx) => (
                        <Collection
                            name={i.name}
                            image={i.image}
                            link={i.link}
                            key={idx}
                        />
                    ))}
                </div>
            </section>
        )
    }

    return (
        <Background bubbles={false} explore>
            <div className={classes.container}>
                <Header active={collections} />
                {container}
            </div>
        </Background>
    );
}

export default Collections;