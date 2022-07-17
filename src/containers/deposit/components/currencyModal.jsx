import React from 'react';

//styles
import classes from '../deposit.module.css';

function CurrencyModal({data, close, active, updateMainCoin, type}) {

    const Item = ({name, image, network, isActive}) => {
        const updateCoin = () => {
            const data = {
                name,
                image,
                network
            };
            updateMainCoin(data)
        };

        return(
            <div className={classes.CurrencyModalItem} onClick={updateCoin} style={isActive ? {backgroundColor: '#f5f5f5'} : {}}>
                <div style={{backgroundImage: `url(${image})`}} />
                <p>{name}</p>
            </div>
        )
    }

    return (
        <div className={classes.backgroundModal} onClick={close}>
            <div className={classes.maniModal}>
                <div className={classes.modalTitle}>
                    <h3>{type}</h3>
                </div>
                {data.map((i, idx) => (
                    <Item 
                        name={i.name} 
                        image={i.image} 
                        network={i.network}
                        isActive={active === i.name}
                        key={idx} 
                    />
                ))}
            </div>
        </div>
    );
}

export default CurrencyModal;