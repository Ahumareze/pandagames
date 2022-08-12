import React, { useEffect } from 'react';

//styles
import classes from './collections.module.css';

//components
import { Background, Error, Header } from '../../components';

//utilities
import { collectionsLink } from '../../utilities/links';

//components
import Collection from './components/collection/Collection';
import { IRootState } from '../../redux/reducers/mainReducer';
import Loader from './components/loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCollections } from '../../redux/actions/actions';

function Collections() {
    //initialize components
    const dispatch = useDispatch();

    //state
    const loading = useSelector((state: IRootState) => state.loading);
    const collections = useSelector((state: IRootState) => state.collections);
    const errorMessage = useSelector((state: IRootState) => state.errorMessage);

    //fetch collections with redux
    useEffect(() => {
        dispatch(fetchCollections())
    }, [dispatch])

    let container;

    if(collections){
        container = (
            <section className={classes.section}>
                <div  className={classes.intro}>
                    <h2>Explore our well sorted game collections 🎮</h2>
                    <p >Browse from our list of different games genres from action games to play with family and friends to role-playing games to play alone </p>
                </div>

                <div className={classes.collectionsContainer}>
                    {collections?.map((i: any, idx: number) => (
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
    }else if(errorMessage){
        container = (<Error title='Error Fetching Collections' details='Check your internet connection and reload page' />)
    };

    const loader = (
        <section>
            <Loader />
        </section>
    )

    return (
        <Background bubbles={false} explore>
            <div className={classes.container}>
                <Header active={collectionsLink} />
                {loading ? loader : container}
            </div>
        </Background>
    );
}

export default Collections;