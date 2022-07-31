import React, { FC, useEffect, useState } from 'react';

//styles
import classes from './game.module.css';

//types
import { GameProps } from '../../types';


//icons
import ps4 from '../../assets/icons/ps4.png';
import macos from '../../assets/icons/macos.png';
import windows from '../../assets/icons/windows.png';
import { useNavigate } from 'react-router-dom';


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
        let platformArr: string[] = [];

        prices.map((i: any) => {
            Object.keys(i).map(( k) => {
                platformArr.push(k);
                priceArr.push(i[k]);

                return null;
            });
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
    }

    return (
        <div className={classes.container} onClick={() => handleNavigate()}>
            <img className={classes.mainImage} src={image} alt='' />
            <h4>{title}</h4>
            <div className={classes.extraTags}>
                <PricesContainer />
                <div className={classes.platforms}>
                    <img src={ps4} alt='' />
                    <img src={macos} alt='' />
                    <img src={windows} alt='' />
                </div>
            </div>
        </div>
    );
}

export default Game;