import React from "react";
import Layout from '../components/Layout'



// ant.design
import 'antd/dist/antd.css';

// To override the default App
export default function MyApp({Component, pageProps}) {
    return (
        <div>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
        </div>
    )
}


