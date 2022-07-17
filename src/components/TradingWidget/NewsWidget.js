import React, { useEffect } from 'react';
import './Tradingidget.css';

const width = window.innerWidth;

function NewsWidget(props) {

    useEffect(() => {
        getWidget()
    }, []);

    const getWidget = () =>{
        const script = document.createElement('script');
        script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-timeline.js';
        script.async = true;
        script.innerHTML = JSON.stringify(
            {
                "feedMode": "all_symbols",
                "colorTheme": "light",
                "isTransparent": false,
                "displayMode": "regular",
                "width": 480,
                "height": 830,
                "locale": "en"
            }
        );
        document.getElementById("tradingview-widget-container").appendChild(script);
        console.log(script)
    }

    return (
        <div className='NewsWidgetContainer' style={{width: width - 30}}>
            <div id="tradingview-widget-container" className='tvw_news'>
                <div class="tradingview-widget-container__widget"></div>
                {/* <div class="tradingview-widget-copyright"><a href="https://www.tradingview.com/key-events/" rel="noopener" target="_blank"><span class="blue-text">Daily news roundup</span></a> by TradingView</div> */}
            </div>
        </div>
    );
}

export default NewsWidget;


// <!-- TradingView Widget BEGIN -->
// <div class="tradingview-widget-container">
//   <div class="tradingview-widget-container__widget"></div>
//   <div class="tradingview-widget-copyright"><a href="https://www.tradingview.com/key-events/" rel="noopener" target="_blank"><span class="blue-text">Daily news roundup</span></a> by TradingView</div>
//   <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-timeline.js" async>
//   {
//   "feedMode": "all_symbols",
//   "colorTheme": "light",
//   "isTransparent": false,
//   "displayMode": "regular",
//   "width": "100%",
//   "height": "100%",
//   "locale": "en"
// }
//   </script>
// </div>
// <!-- TradingView Widget END -->