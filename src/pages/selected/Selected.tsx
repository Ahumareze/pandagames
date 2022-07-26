import React, { useEffect } from 'react';

//styles
import classes from './selected.module.css';

//utilities
import { collections } from '../../utilities/links';

//components
import { Background, Header, PrimaryButton, SecondaryButton } from '../../components';
import HeaderDetails from './components/headerDetails/HeaderDetails';
import Banners from './components/banners/Banners';
import Platforms from './components/platforms/Platforms';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGames } from '../../redux/actions';
import { useParams } from 'react-router-dom';

import { IRootState } from '../../redux/reducers/mainReducer';

function Selected() {
    //initialized
    const dispatch = useDispatch();
    let { id } = useParams();

    //state
    const selectedGame = useSelector((state: IRootState) => state.selectedGame)

    useEffect(() => {
        if(id){
            const newId = JSON.parse(id)
            dispatch(fetchGames(newId))
        }
    })

    return (
        <Background bubbles={false} explore={false}>
            <div className={classes.container}>
                <Header active={collections} />
                <section className={classes.section}>
                    <div>
                        <HeaderDetails />
                        <Banners image={selectedGame ? selectedGame.image : ''} />
                        <div className={classes.details}>
                            <p>Embark on a journey across Teyvat to find your lost sibling and seek answers from The Seven — the gods of each element. Explore this wondrous world, join forces with a diverse range of characters, and unravel the countless mysteries that Teyvat holds.
                                Harness the seven elements to unleash elemental reactions. Anemo, Electro, Hydro, Pyro, Cryo, Dendro, and Geo interact in all sorts of ways, and Vision wielders have the power to turn this to their advantage.
                                Will you vaporize Hydro with Pyro, electro-charge it with Electro, or freeze it with Cryo? Your mastery of the elements will give you the upper hand in battle and exploration.
                            </p>
                        </div>
                        <Platforms />
                        <div className={classes.developers}>
                            <p className={classes.title}>Developers</p>
                            <div className={classes.devStudios}>
                                <p>Kurame Studios inc.</p>
                            </div>
                        </div>
                        <div className={classes.developers}>
                            <p className={classes.title}>Release date</p>
                            <div className={classes.releaseDate}>
                                <p>July 14th, 2022</p>
                            </div>
                        </div>
                    </div>

                    <div className={classes.purchaseDiv}>
                        <div className={classes.price}>$39.99</div>
                        <div className={classes.buttonsContainer}>
                            <PrimaryButton title={'buy now'} onClick={() => console.log('buy now')} />
                            <SecondaryButton title={'add to cart'} onClick={() => console.log('add to cart')}/>
                        </div>
                    </div>
                </section>
            </div>
        </Background>
    );
}

export default Selected;