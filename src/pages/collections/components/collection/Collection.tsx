import React, { FC } from 'react';

//styles
import classes from './collection.module.css';

//types
import { CollectionProps } from '../../../../types';

//components
import { useNavigate } from 'react-router-dom';

const Collection:FC<CollectionProps> = ({name, image, link}):JSX.Element => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/collections' + link)
    }

    return (
        <div className={classes.container} onClick={() => handleNavigate()}>
            <img src={image} alt='' />
            <p className={classes.title}>{name}</p>
        </div>
    );
}

export default Collection;