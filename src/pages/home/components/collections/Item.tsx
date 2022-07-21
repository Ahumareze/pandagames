import React, { FC } from 'react';

//types
import {CollectionItemProps} from '../../../../types';

//styles
import classes from './collections.module.css';

const Item:FC<CollectionItemProps> = ({name, image, id, onClick, active}) => {
    console.log(active)
    return (
        <div className={classes.Item} onClick={() => onClick(id)}>
            <div style={{backgroundImage: `url(${image})`}} className={classes.itemImage} />
            <div className={classes.itemTextContainer}>
                {name}
            </div>
        </div>
    );
}

export default Item;