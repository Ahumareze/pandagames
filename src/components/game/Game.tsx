import React, { FC, useEffect, useState } from 'react';

//styles
import classes from './game.module.css';

//types
import { GameProps } from '../../types';

//components
import { useNavigate } from 'react-router-dom';

//utilities
import { xbox } from '../../utilities/platforms';

interface GamePlatformProps{
    name: string
}


const Game:FC<GameProps> = ({title, image, prices, id}):JSX.Element => {
    //initialize components
    const navigate = useNavigate();

    //local state
    // const [arrPrices, setPrices] = useState<Array<number>>()
    // const [platforms, setPlatforms] = useState<Array<string>>();

    //prices
    const [lowestPrice, setLowestPrice] = useState<number>(0);
    const [highestPrice, setHighestPrice] = useState<number>(0);

    const handleNavigate = () => {
        navigate('/games/' + id)
    };

    useEffect(() => {
        pricesParser()
    })

    //parse and arrange prices
    const pricesParser = () => {
        let priceArr: number[] = [];
        // let platformArr: string[] = [];

        prices.map((i: any) => {
            priceArr.push(i.price)
            
            return null
        });
        // setPlatforms(platformArr);

        setLowestPrice(Math.min(...priceArr));
        setHighestPrice(Math.max(...priceArr));
    };

    const PricesContainer = () => {
        let main;
        if(lowestPrice === highestPrice){
            main = <div className={classes.price}>N{(highestPrice.toLocaleString())}</div>
        }else{
            main = <div className={classes.price}>N{(lowestPrice).toLocaleString()} - N{(highestPrice.toLocaleString())}</div>
        }

        return(
            <>
                {main}
            </>
        )
    };

    const Platform:FC<GamePlatformProps> = ({name}):JSX.Element => {
        let container;

        if(name === 'ps4'){
            container = <p className={classes.psImg}>{name}</p>
        }else if(name === 'ps5'){
            container = <p className={classes.psImg}>{name}</p>
        }else{
            container = <img src={xbox} className={classes.xboxImg} alt=''/>
        }
        return(
            <>
                {container}
            </>
        )
    }

    return (
        <div className={classes.container} onClick={() => handleNavigate()}>
            <img className={classes.mainImage} src={image} alt='' />
            <h4>{title}</h4>
            <div className={classes.extraTags}>
                <PricesContainer />
                <div className={classes.platforms}>
                    {
                        prices.map((i: any, idx: number) => (
                            <Platform name={i.name} key={idx}/>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Game;