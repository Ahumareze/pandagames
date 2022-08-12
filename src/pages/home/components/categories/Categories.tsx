import React, { FC } from 'react';

//icons
import { FiChevronRight } from 'react-icons/fi';

//components
import { Game } from '../../../../components';
import { useNavigate } from 'react-router-dom';

//styles
import classes from './categories.module.css';

//types
import { CategoryProps } from '../../../../types';


const Categories:FC<CategoryProps> = ({name, data}):JSX.Element => {
    //initialize
    const navigate = useNavigate();

    return (
        <div className={classes.container}>
            <div className={classes.header}>
                <p className={classes.title}>{name}</p>
                <div className={classes.showAll}>
                    <div onClick={() => navigate('/collections')}>
                        <p>Show all</p>
                        <FiChevronRight size={18} />
                    </div>
                </div>
            </div>

            <div className={classes.gamesContainer}>
                {data?.map((i, idx) => (
                    <Game
                        title={i.name}
                        image={i.images[0]}
                        prices={i.prices}
                        key={idx}
                        id={i._id}
                    />
                ))}
            </div>
        </div>
    );
}

export default Categories;