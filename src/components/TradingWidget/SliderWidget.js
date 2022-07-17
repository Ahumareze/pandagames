import React, { useEffect } from 'react';

function SliderWidget(props) {
    useEffect(() => {
        getWidget();
    }, []);

    const getWidget = () => {
        const script = document.createElement('script');
        script.src='https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
        script.async = true;
        script.innerHTML = JSON.stringify({
            "symbols": [
              {
                "proName": "FOREXCOM:SPXUSD",
                "title": "S&P 500"
              },
              {
                "proName": "FOREXCOM:NSXUSD",
                "title": "Nasdaq 100"
              },
              {
                "proName": "FX_IDC:EURUSD",
                "title": "EUR/USD"
              },
              {
                "proName": "BITSTAMP:BTCUSD",
                "title": "BTC/USD"
              },
              {
                "proName": "BITSTAMP:ETHUSD",
                "title": "ETH/USD"
              }
            ],
            "showSymbolLogo": true,
            "colorTheme": "light",
            "isTransparent": false,
            "displayMode": "adaptive",
            "locale": "en"
          });
          document.getElementById("tradingview-widget-container").appendChild(script);
    }

    return (
        <div className='tradingview-widget-container' id='tradingview-widget-container'>
            <div className="tradingview-widget-container__widget"></div>
            <div className="tradingview-widget-copyright"><a rel="noopener" target="_blank" /> </div>
        </div>
    );
}

export default SliderWidget;