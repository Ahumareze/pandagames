import React, { FC } from 'react';

//types
import {CollectionItemProps} from '../../../../types';

//styles
import classes from './collections.module.css';

const Item:FC<CollectionItemProps> = ({name, image, id, onClick, active}) => {
    return (
        <div className={`${classes.Item} ${active && classes.activeItem }`} onClick={() => onClick(id)}>
            <div style={{backgroundImage: `url(${image})`}} className={classes.itemImage} />
            <div className={classes.itemTextContainer} style={active ? {opacity: 0.9} : {}}>
                {name}
            </div>
        </div>
    );
}

export default Item;