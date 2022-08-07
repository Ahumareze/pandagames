import React, { useState } from 'react';

//icons
import { FiSearch } from 'react-icons/fi';

//styles
import classes from './search.module.css';

//components
import { Background, Header } from '../../components';
import { Suggestion } from './components';

//utilities
import { collectionsLink } from '../../utilities/links';

const data = [
    'Genshin Impact',
    'Free Fire IV',
    'Red Dead Redemption 4',
    'Froza Horizon'
]


function Search() {
    const [showSearch, setShowSearch] = useState<boolean>();
    const [value, setValue] = useState<string>('');
    const [items, setItems] = useState<Array<string>>([]);

    const handleInput = (e: string) => {

        setValue(e);

        if(e){
            setShowSearch(true);
            let emptyArr: string[] = [];
            emptyArr = data.filter(i => {
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
    }

    return (
        <Background bubbles={false} explore={false}>
            <div className={classes.container}>
                <Header active={collectionsLink} />
                <div className={classes.searchBanner}>
                    <div className={classes.searchBackground}>
                        <div className={classes.searchContainer}>
                            <div className={classes.main}>
                                <input value={value} placeholder='Search Games ...' onChange={(e) => handleInput(e.target.value)} />
                                <div className={classes.searchButton}>
                                    <FiSearch />
                                </div>
                            </div>
                            {container}
                        </div>
                    </div>
                </div>
            </div>
        </Background>
);
}

export default Search;