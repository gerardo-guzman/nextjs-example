import React from 'react';
import Header from '../Header';
import { createGlobalStyle } from 'styled-components'
import Head from 'next/head';

const GlobalStyle = createGlobalStyle`
    :root {
        --gris: #3D3D3D;
        --gris2: #6F6F6F;
        --gris3: #E1E1E1;
        --naranja: #DA552F
    }

    html {
        font-size: 62.5%;
        box-sizing: border-box;
    }
    *, *:before, *:after {
        box-sizing: inherit;
    }
    body {
        font-size: 1.6rem;
        line-height: 1.5;
    }
    h1, h2, h3 {
        margin: 0 0 2rem 0;
        line-height: 1.5;
    }
    h1, h2 {
        font-family: 'Playfair Display', serif;
    }
    h3 {
        font-family: 'Roboto', sans-serif;
    }
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }
    a {
        text-decoration: none;
    }
`;

const Layout = (props) => {
    return ( 
        <>
            <GlobalStyle />
            <Head>
                {/* METADATA COMUNMENTE ENCONTRADA EN HEADER */}
                <title>Product Hunt Firebase y Next</title>
                <link
                    rel="stylesheet" 
                    href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
                    integrity="sha256-l85OmPOjvil/SOvVt3HnSSjzF1TUMyT9eV0c2BzEGzU="
                    crossOrigin="anonymous"
                />
                <link 
                    href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital@1&family=Roboto:wght@300&display=swap"
                    rel="stylesheet" 
                />
                {/* 
                    font-family: 'Roboto', sans-serif;
                    font-family: 'Playfair Display', serif;
                */}
                <link 
                    href="/static/css/app.css"
                    rel="stylesheet"
                />
            </Head>
            <Header />
            <main>
                {props.children}
            </main>
        </>
    );
}
 
export default Layout;
