import React from "react";
import Document, {Html, Head, Main, NextScript} from 'next/document'

// To override the default Document
class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <link
                        rel="preload"
                        href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"
                        as="font"
                        crossOrigin=""
                    />
                </Head>
                <body>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        )
    }
}

export default MyDocument