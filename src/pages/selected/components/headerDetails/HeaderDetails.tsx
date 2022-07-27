import React, { FC } from 'react';

//icons
import { FiStar } from 'react-icons/fi';
import { MdStar } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { SelectedHeaderProps, StarsProps } from '../../../../types';

//styles
import classes from './headerDetails.module.css';

const stars = Array(5).fill(0);



const Stars:FC<StarsProps> = ({rated}):JSX.Element => {
    let container;

    if(rated){
        container = <MdStar />
    }else{
        container = <FiStar className={classes.unstared} />
    }
    return(
        <>
            {container}
        </>
    )
}

const HeaderDetails:FC<SelectedHeaderProps> = ({title, rating, collection, collectionLink, age}):JSX.Element => {
    //initialize components
    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate('/collections' + collectionLink)
    }

    return (
        <div className={classes.container}>
            <h2>{title}</h2>
            <div className={classes.details}>
                <div className={classes.starsContainer}>
                    {stars.map((i, idx) => (
                        <Stars
                            rated={rating >= idx + 1}
                            key={idx}
                        />
                    ))}
                </div>
                <p className={classes.genre} onClick={handleNavigation}>{collection}</p>
                <p className={classes.age}>Age {age}+</p>
            </div>
        </div>
    );
}

export default HeaderDetails;