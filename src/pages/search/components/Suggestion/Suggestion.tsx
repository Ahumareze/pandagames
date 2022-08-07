import React, { FC } from 'react';

//styles
import classes from '../../search.module.css';

//types
import { SearchSuggestionProps } from '../../../../types';

const Suggestion:FC<SearchSuggestionProps> = ({name, onSelect}):JSX.Element => {
    return (
        <div className={classes.suggestion} onClick={onSelect}>
            {name}
        </div>
    );
}

export default Suggestion;