import React, { useEffect } from 'react';
// import {} from 'react-tradingview-widget';

function ChartWidget(props) {
    useEffect(() => {
        getWidget()
    }, []);

    const getWidget = () => {
        const script = document.createElement('script');
        script.src='https://s3.tradingview.com/tv.js';
        script.async = true;
        let TradingView;
        script.innerHTML = JSON.stringify(
            {
                "width": 980,
                "height": 610,
                "symbol": "BINANCE:BTCUSDT",
                "interval": "D",
                "timezone": "Etc/UTC",
                "theme": "light",
                "style": "1",
                "locale": "en",
                "toolbar_bg": "#f1f3f6",
                "enable_publishing": false,
                "allow_symbol_change": true,
                "container_id": "tradingview_1bb55"
            }
        );
        document.getElementById("tradingview-widget-container").appendChild(script);
    };

    return (
        <div className='tradingview-widget-container' id='tradingview-widget-container'>
            <div id="tradingview_1bb55"></div>
            <div class="tradingview-widget-copyright"><a href="https://www.tradingview.com/symbols/BTCUSDT/?exchange=BINANCE" rel="noopener" target="_blank"><span class="blue-text">BTCUSDT Chart</span></a> by TradingView</div>
        </div>
    );
}

export default ChartWidget;


// <!-- TradingView Widget BEGIN -->
// <div class="tradingview-widget-container">
//   <div id="tradingview_1bb55"></div>
//   <div class="tradingview-widget-copyright"><a href="https://www.tradingview.com/symbols/BTCUSDT/?exchange=BINANCE" rel="noopener" target="_blank"><span class="blue-text">BTCUSDT Chart</span></a> by TradingView</div>
//   <script type="text/javascript" src="https://s3.tradingview.com/tv.js"></script>
//   <script type="text/javascript">
//   new TradingView.widget(
//   {
//   "width": 980,
//   "height": 610,
//   "symbol": "BINANCE:BTCUSDT",
//   "interval": "D",
//   "timezone": "Etc/UTC",
//   "theme": "light",
//   "style": "1",
//   "locale": "en",
//   "toolbar_bg": "#f1f3f6",
//   "enable_publishing": false,
//   "allow_symbol_change": true,
//   "container_id": "tradingview_1bb55"
// }
//   );
//   </script>
// </div>
// <!-- TradingView Widget END -->