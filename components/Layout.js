import React from "react";

function Layout(props) {
    return (
        <div className="page-layout">
            {props.children}
            <style jsx global>{`
             :root {
             --default-background: #fafafa;
             --default-color: #8c8c8c;
             --light-color: #ffffff;
             
             --value-title-color: #faad14;
             --value-description-color: #434343;
             
             --dark-blue-background: #002766;
             --light-blue-background: #364d79;
             --light-blue-hoover: #e6f7ff;
             
             }
             body {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
                background-color: var(--default-background);
                color: var(--default-color);
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
                 color: var(--default-color);
             }
             h1 {
                color: var(--default-color);
             }
                                             
             h3 {
                color: var(--default-color);
             }
             
             a {
                 color: var(--default-color);
                 text-decoration: none;
             }
             
             a:hover {
                opacity: 0.6;
                var(--default-color);
            }
           `}</style>
        </div>
    )
}

export default Layout