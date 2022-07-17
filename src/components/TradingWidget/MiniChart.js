import React, {useEffect} from 'react';

function MiniChart(props) {
    useEffect(() => {
        getWidget()
    }, [])
    const getWidget = () => {
        const script = document.createElement('script');
        script.src='https://s3.tradingview.com/external-embedding/embed-widget-timeline.js';
        script.async = true;
        let TradingView;
        script.innerHTML = JSON.stringify(
            {
                "feedMode": "market",
                "market": "crypto",
                "colorTheme": "light",
                "isTransparent": false,
                "displayMode": "regular",
                "width": window.innerWidth - 30,
                "height": 830,
                "locale": "en"
            }
        );
        document.getElementById("tradingview-widget-container").appendChild(script);
    }
    return (
        <div class="tradingview-widget-container" style={{zIndex: 200}} >
            <div class="tradingview-widget-container__widget"></div>
            <div class="tradingview-widget-copyright"><a href="https://www.tradingview.com/markets/cryptocurrencies/key-events/" rel="noopener" target="_blank"><span class="blue-text">Daily cryptocurrency news</span></a> by TradingView</div>
        </div>
    );
}

export default MiniChart;


