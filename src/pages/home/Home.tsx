import React, { useEffect } from 'react';

//styles
import classes from './home.module.css';

//components
import { Background, Header } from '../../components';
import Collections from './components/collections/Collections';
import Categories from './components/categories/Categories';
import Loader from './components/loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHomeData } from '../../redux/actions';

//utilities
import { home } from '../../utilities/links';

//types
import { IRootState } from '../../redux/reducers/mainReducer';


function Home() {
    //initialize
    const dispatch = useDispatch();

    //redux state
    const loading = useSelector((state: IRootState) => state.loading);
    const homeData = useSelector((state: IRootState) => state.homeData);

    useEffect(() => {
        dispatch(fetchHomeData())
    }, []);

    let container;
    if(homeData){
        container = (
            <>
                <Collections />
                <Categories />
                <Categories />
            </>
        )
    }

    return (
        <Background bubbles explore={false}>
            <div className={classes.container}>
                <Header active={home} />
                <section className={classes.section}>
                    {loading ? <Loader /> : container}
                </section>
            </div>
        </Background>
    );
};

export default Home;