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
    import { fetchSelected, addToCart } from '../../redux/actions';
    import { useParams } from 'react-router-dom';
    import PurchasePlatform from './components/purchasePlatform/PurchasePlatform';
    import Details from './components/details/Details';
    import { AddedToCart } from '../../components/animations';

    //types
    import { IRootState } from '../../redux/reducers/mainReducer';
    import Loader from './components/loader/Loader';
    

    function Selected() {
        //initialized
        const dispatch = useDispatch();
        let { id } = useParams();

        //redux state
        const selectedGame = useSelector((state: IRootState) => state.selectedGame);
        const loading = useSelector((state: IRootState) => state.loading);

        //local state
        const [prices, setPrices] = useState<Array<object>>([]);
        const [mainPrice, setMainPrice] = useState<number>(0);
        const [addedToCart, setAddedToCart] = useState<boolean>(false);

        useEffect(() => {
            if(id){
                dispatch(fetchSelected(id))
            };
        }, [dispatch, id]);

        useEffect(() => {
            if(selectedGame){
                setPrices([selectedGame.prices[0]]);
                setMainPrice(selectedGame.prices[0].price)
            }
        }, [selectedGame]);

        const addPlatform = (e: any) => {
            const arr = [...prices];
            arr.push(e);

            setMainPrice(prev => prev + e.price)
            setPrices(arr)
        };

        const removePlatform = (e: any) => {
            if(prices.length > 1){
                let arr = [...prices];
                const itemIndex = arr.findIndex((x: any) => x.name === e.name);
                arr.splice(itemIndex, 1);

                setMainPrice(prev => prev - e.price)
                setPrices(arr)
            }
        };

        const addToCartHandler = () => {
            const arr = {
                ...selectedGame,
                prices,
                mainPrice
            }

            dispatch(addToCart(arr));
            setAddedToCart(true)
        }

        let container;

        if(selectedGame){
            container = (
                <section className={classes.section}>
                    <div className={classes.sectionContainer}>
                        <div>
                            <HeaderDetails 
                                collection={selectedGame.category}
                                collectionLink={selectedGame.categoryLink}
                                title={selectedGame.name}
                                rating={selectedGame.rating}
                                age={selectedGame.age}
                            />
                            <Banners
                                img1={selectedGame.images[0]}
                                img2={selectedGame.images[1]}
                                img3={selectedGame.images[2]}
                            />
                            <Details details={selectedGame.description} />
                            <Platforms platforms={selectedGame.prices} />
                            <div className={classes.developers}>
                                <p className={classes.title}>Developers</p>
                                <div className={classes.devStudios}>
                                    <p>{selectedGame.developers}</p>
                                </div>
                            </div>
                            <div className={classes.developers}>
                                <p className={classes.title}>Release date</p>
                                <div className={classes.releaseDate}>
                                    <p>{selectedGame.releaseDate}</p>
                                </div>
                            </div>
                        </div>

                        <div className={classes.purchaseDiv}>
                            <div className={classes.price}>N{(mainPrice).toLocaleString()}</div>
                            <div className={classes.buttonsContainer}>
                                <div className={classes.purchasePlatformContianer}>
                                    {selectedGame.prices.map((i: any, idx: number) => (
                                            <PurchasePlatform 
                                                name={i.name}
                                                price={i.price}
                                                active={prices.includes(i)}
                                                add={() => addPlatform(i)}
                                                remove={() => removePlatform(i)}
                                                key={idx} 
                                            />
                                    ))}
                                </div>
                                <PrimaryButton title={'add to cart'} onClick={addToCartHandler} />
                            </div>
                        </div>
                    </div>
                </section>
            )
        }else{
            container = <p>Error fetching game</p>
        }

        const loader = (
            <section className={classes.section}>
                <Loader />
            </section>
        )

        return (
            <Background bubbles={false} explore={false}>
                <div className={classes.container}>
                    <Header active={collectionsLink} />
                    {loading ? loader : container}
                    {addedToCart && <AddedToCart game={selectedGame.title} price={mainPrice} onClose={() => setAddedToCart(false)} />}
                </div>
            </Background>
        );
    }

    export default Selected;