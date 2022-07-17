import React, { useState } from 'react';

//styles
import classes from './brains.module.css';

import 'aos/dist/aos.css';
import Aos from 'aos';

function Item({image, name, position}) {
    const [showDetails, setShowDetails] = useState(false);
    Aos.init();

    const container = (
        <div className={classes.mainItem}>
            <div>
                <p className={classes.name}>{name}</p>
                <p className={classes.position}>{position}</p>
            </div>
        </div>
    )

    return (
        <div className={classes.Item} style={{backgroundImage: `url(${image})`}} 
            onMouseEnter={() => setShowDetails(true)} 
            onTouchStart={() => setShowDetails(true)} 
            onMouseLeave={() => setShowDetails(false)} 
            onTouchEnd={() => setShowDetails(false)}
            data-aos="fade-up"
        >
            {showDetails  && container}
        </div>
    );
}

export default Item;