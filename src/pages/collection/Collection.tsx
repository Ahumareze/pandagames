import React, { useEffect } from 'react';

//styles
import classes from './collection.module.css';

//utilities
import { collectionsLink } from '../../utilities/links';

//components
import { Background, Error, Game, Header } from '../../components';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCollection } from '../../redux/actions/actions';

//types
import { IRootState } from '../../redux/reducers/mainReducer';


//data
import Loader from './components/Loader';


function Collection() {
    //initialize
    const { id } = useParams();
    const dispatch = useDispatch();

    //redux state
    const collection = useSelector((state: IRootState) => state.collection);
    const loading = useSelector((state: IRootState) => state.loading);
    const errorMessage = useSelector((state: IRootState) => state.errorMessage);

    useEffect(() => {
        if(id){
            dispatch(fetchCollection(id))
        }
    }, [id, dispatch]);

    let container;

    if(collection){
        container = (
            <section className={classes.section}>
                <h2>{id} games</h2>
                <div className={classes.collectionContainer}>
                {collection?.map((i: any, idx: number) => (
                    <Game
                        title={i.name}
                        image={i.images[0]}
                        prices={i.prices}
                        key={idx}
                        id={i._id}
                    />
                ))}
                </div>
            </section>
        );
    }else if(errorMessage){
        container = <Error title={'Network Error'} details={'Check your internet connection and reload page'} />
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
            </div>
        </Background>
    );
}

export default Collection;