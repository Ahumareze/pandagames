import React from 'react';

//components
import Item from './Item';

//styles
import classes from './services.module.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

//images
const binance = require('../../../../assets/images/coins/binance.png');
const bitcoin = require('../../../../assets/images/coins/bitcoin.png');
const ethereum = require('../../../../assets/images/coins/ethereum.png');
const laughing = require('../../../../assets/images/coins/laughing.png');
const shibaInu = require('../../../../assets/images/coins/shiba-inu.png');
const thether = require('../../../../assets/images/coins/tether.png');

function Services(props) {
    AOS.init();

    return (
        <div className={classes.container} data-aos="fade-up">
            <h2>Our <span>Services</span></h2>
            <p className={classes.intro}>Using our master class strategy with our algorithm and automated trading bots and softwares we give our clients the best satisfaction by giving back to them 100% Return Of Investment (ROI) after making profitable entries in the crypto market. Investing with Apexcorp gives you no reason to loose whether the market is Bearish or Bullish. Invest with us now and start earning daily from the comfort of your home.</p>
            <div className={classes.main}>
                <Item image={bitcoin} title='Bitcoin (BTC)' content={'Bitcoin is a decentralized digital currency, without a central bank or single administrator that can be sent from user to user on the peer to peer Bitcoin network without the need for intermediaries.'} />
                <Item image={ethereum} title='ETHEREUM (ETH)' content={'Ethereum is a decentralized, open-source blockchain with smart contract functionality. Ether is the native cryptocurrency of the platform.'}/>
                <Item image={thether} title='Usdt (TRC20)' content={'Tether (often called by its symbol USDT) is a cryptocurrency with tokens issued by Tether limited. Tether is called stable coin because it was originally designed to always be worth US$1.00, maintaining $1.00 in reserves for each Tether used.'}/>
                <Item image={laughing} title='Dogecoin (DOGE)' content={'Doge is a cryptocurrency created by software engineers Billy Markus and Jackson Palmer, who decided to create a payment system as a "joke", making fun of the wild speculation in cryptocurrencies at the time'}/>
                <Item image={binance} title='Binance Smart Chain (BNB)' content={'Binance coin (BEP20) is a cryptocurrency that can be used to trade and pay fees on the Binance cryptocurrency exchange. The Binance exchange is the largest cryptocurrency exchange in the world as of January 2018, facilitating more than 1.4 million transactions per second. BNB can also be exchanged or traded for other cryptocurrencies such as BTC, ETH, USDT etc'}/>
                <Item image={shibaInu} title='Shiba Inu (SHIB)' content={'Decentralized cryptocurrency created in August 2020 by Ryoshi. This token is popularly known as "the Doge killer" and its holders bears the name "Shiba Army".'}/>
            </div>
        </div>
    );
}

export default Services;