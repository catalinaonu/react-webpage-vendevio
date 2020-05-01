import React from "react";

function Layout(props) {
    return (
        <div className="page-layout">
            {props.children}
            <style jsx global>{`
             body {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
                background-color: #fafafa;
                color: #8c8c8c;
                font-size: 16px;
             }   
             @font-face {
                font-family: 'Roboto', sans-serif;
                src:  url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
                font-weight: 400;
                font-style: normal;
                font-display: swap;
             }
             p {
                 color: #8c8c8c;
             }
                                             
             h3 {
                 color: #8c8c8c;
             }
             
             a {
                 color: #8c8c8c;
                 text-decoration: none;
             }
             
             a:hover {
                opacity: 0.6;
                color: #8c8c8c;
            }
           `}</style>
        </div>
    )
}

export default Layout