import React, { useEffect, useState } from 'react';

//icons
import { FiSearch } from 'react-icons/fi';

//styles
import classes from './search.module.css';

//components
import { Background, Error, Game, Header } from '../../components';
import { Loader, Suggestion } from './components';

//utilities
import { search } from '../../utilities/links';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../../redux/reducers/mainReducer';
import { fetchGames, searchGames } from '../../redux/actions/actions';


function Search() {
    //initialize
    const dispatch = useDispatch();

    //redux state
    const searchData = useSelector((state: IRootState) => state.searchData);
    const loading = useSelector((state: IRootState) => state.loading);
    const games = useSelector((state: IRootState) => state.games);
    const errorMessage = useSelector((state: IRootState) => state.errorMessage);

    //local state
    const [showSearch, setShowSearch] = useState<boolean>();
    const [value, setValue] = useState<string>('');
    const [items, setItems] = useState<Array<string>>([]);

    useEffect(() => {
        dispatch(fetchGames());
    }, [dispatch]);

    useEffect(() => {
        console.log(games)
    }, [games])

    const handleInput = (e: string) => {

        setValue(e);

        if(e && searchData){
            setShowSearch(true);
            let emptyArr: string[] = [];
            emptyArr = searchData.filter((i: any) => {
                return i.toLocaleLowerCase().startsWith(e.toLocaleLowerCase());
            });
            setItems(emptyArr)
        }else{
            setShowSearch(false)
        };

    };

    const updateSuggestion = (e: string) => {
        setValue(e);
        setShowSearch(false)
    };

    const handleSearch = () => {
        dispatch(searchGames(value))
    }

    let container;

    if(showSearch){
        container = (
            <div className={classes.suggestionsContainer}>
                {items.map((i, idx) => (
                    <Suggestion 
                        name={i} 
                        onSelect={() => updateSuggestion(i)}
                        key={idx}
                    />
                ))}
            </div>
        )
    };

    let gamesContainer;
    if(games){
        if(games.length > 0){
            gamesContainer = (
                <div className={classes.gamesContainer}>
                    {games.map((i: any, idx: number) => (
                        <Game
                            title={i.name}
                            image={i.images[0]}
                            prices={i.prices}
                            key={idx}
                            id={i._id}
                        />
                    ))}
                </div>
            )
        }else{
            gamesContainer = <Error title={'Game Not Found'} details={'No Item matches your search, try a different search'} />
        }
    }else if(errorMessage){
        gamesContainer = <Error title={'Network Error'} details={'Check your internet connection and reload page'} />
    }

    return (
        <Background bubbles={false} explore={false}>
            <div className={classes.container}>
                <Header active={search} />
                <div className={classes.searchBanner}>
                    <div className={classes.searchBackground}>
                        <div className={classes.intro}>
                            <h1>Search Panda Games</h1>
                            <p className={classes.introText}>Browse our extensive collections of well sorted games</p>
                        </div>
                        <div className={classes.searchContainer}>
                            <div className={classes.main}>
                                <input value={value} placeholder='Search Games ...' onChange={(e) => handleInput(e.target.value)} />
                                <div className={classes.searchButton} onClick={handleSearch}>
                                    <FiSearch />
                                </div>
                            </div>
                            {container}
                        </div>
                    </div>
                </div>

                <div className={classes.mainGames}>
                    {loading ? <Loader /> : gamesContainer}
                </div>
            </div>
        </Background>
);
}

export default Search;