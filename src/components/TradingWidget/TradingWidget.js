import React, { useEffect } from 'react';
import './Tradingidget.css';

function TradingWidget(props) {

    useEffect(() => {
        getWidget();
    }, [])

    const getWidget = () => {
        const script = document.createElement('script');
        script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-screener.js'
        script.async = true;
        script.innerHTML = JSON.stringify({
            "width": window.innerWidth - 40,
            "height": 490,
            "defaultColumn": "overview",
            "screener_type": "crypto_mkt",
            "displayCurrency": "USD",
            "colorTheme": "light",
            "locale": "en"
          })
        document.getElementById("myContainer").appendChild(script);
    }

    return (
        <div className='TradingWidget'>
            <div id="myContainer">
                <div className="tradingview-widget-container">
                <div className="tradingview-widget-container__widget">
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TradingWidget;