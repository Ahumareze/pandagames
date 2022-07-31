import React, { useEffect, useState } from 'react';

//styles
import classes from './selected.module.css';

//utilities
import { collectionsLink } from '../../utilities/links';

//components
import { Background, Header, PrimaryButton } from '../../components';
import HeaderDetails from './components/headerDetails/HeaderDetails';
import Banners from './components/banners/Banners';
import Platforms from './components/platforms/Platforms';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGames } from '../../redux/actions';
import { useParams } from 'react-router-dom';

import { IRootState } from '../../redux/reducers/mainReducer';
import PurchasePlatform from './components/purchasePlatform/PurchasePlatform';

function Selected() {
    //initialized
    const dispatch = useDispatch();
    let { id } = useParams();

    //redux state
    const selectedGame = useSelector((state: IRootState) => state.selectedGame);

    //local state
    const [prices, setPrices] = useState<Array<object>>([]);
    const [mainPrice, setMainPrice] = useState<number>(0);

    useEffect(() => {
        if(id){
            const newId = JSON.parse(id)
            dispatch(fetchGames(newId))
        };
    }, [dispatch, id]);

    useEffect(() => {
        if(selectedGame){
            console.log(selectedGame.prices[0]);
            setPrices(selectedGame.prices[0]);
        }
    }, [selectedGame]);

    useEffect(() => {
        priceCalculator();
    }, [prices])

    const priceCalculator = () => {

    }

    let container;

    if(selectedGame){
        container = (
            <section className={classes.section}>
                <div>
                    <HeaderDetails 
                        collection={selectedGame.collection}
                        collectionLink={selectedGame.collectionLink}
                        title={selectedGame.title}
                        rating={selectedGame.rating}
                        age={selectedGame.age}
                    />
                    <Banners
                        img1={selectedGame.image}
                        img2={selectedGame.image}
                        img3={selectedGame.image}
                        img4={selectedGame.image}
                    />
                    <div className={classes.details}>
                        <p>Embark on a journey across Teyvat to find your lost sibling and seek answers from The Seven — the gods of each element. Explore this wondrous world, join forces with a diverse range of characters, and unravel the countless mysteries that Teyvat holds.
                            Harness the seven elements to unleash elemental reactions. Anemo, Electro, Hydro, Pyro, Cryo, Dendro, and Geo interact in all sorts of ways, and Vision wielders have the power to turn this to their advantage.
                            Will you vaporize Hydro with Pyro, electro-charge it with Electro, or freeze it with Cryo? Your mastery of the elements will give you the upper hand in battle and exploration.
                        </p>
                    </div>
                    <Platforms platforms={selectedGame.prices} />
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
                    <div className={classes.price}>N {(mainPrice).toLocaleString()}</div>
                    <div className={classes.buttonsContainer}>
                        <div className={classes.purchasePlatformContianer}>
                            <PurchasePlatform />
                            <PurchasePlatform />
                            <PurchasePlatform />
                        </div>
                        <PrimaryButton title={'add to cart'} onClick={() => console.log('add  to cart')} />
                    </div>
                </div>
            </section>
        )
    }

    return (
        <Background bubbles={false} explore={false}>
            <div className={classes.container}>
                <Header active={collectionsLink} />
                {container}
            </div>
        </Background>
    );
}

export default Selected;