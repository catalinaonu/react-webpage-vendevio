import React from "react";

// ant.design
import 'antd/dist/antd.css';

// To override the default App
export default function MyApp({Component, pageProps}) {
    return (
        <div>
            <Component {...pageProps} />
                            <style jsx global>{`
                              @font-face {
                                   font-family: 'Roboto', sans-serif;
                                   src:  url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
                                   font-weight: 400;
                                   font-style: normal;
                                   font-display: swap;
                                   }
                                   
                                   * { 
                                     margin: 0;
                                     padding: 0;
                                     box-sizing: border-box;
                                    }
                                   
                                 
                            `}</style>
        </div>
    )
}
