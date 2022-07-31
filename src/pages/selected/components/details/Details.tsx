import React, { FC, useState } from 'react';

//component
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

//types
import { SelectedGameDetailsProps } from '../../../../types';

//styles
import classes from '../../selected.module.css';

const Details:FC<SelectedGameDetailsProps> = ({details}):JSX.Element => {
    //local state
    const [seeMore, setSeeMore] = useState<boolean>(false);

    let parsedDetails = details.split(' ').splice(0, 35).join(' ');

    let container;

    if(seeMore){
        container = (
            <>
                <p className={classes.detailsP}>{details}</p>

                <div className={classes.seeMoreButton} onClick={() => setSeeMore(false)} >
                    <p>See less</p>
                    <FiChevronUp />
                </div>
            </>
        )
    }else{
        container = (
            <>
                <p className={classes.detailsP}>{parsedDetails} ...</p>

                <div className={classes.seeMoreButton} onClick={() => setSeeMore(true)} >
                    <p>See more</p>
                    <FiChevronDown />
                </div>
            </>
        )
    }

    return (
        <div className={classes.details}>
            {container}
        </div>
    );
}

export default Details;