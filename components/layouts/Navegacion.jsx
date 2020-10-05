import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const Nav = styled.nav`
    padding-left: 2rem;
    a {
        font-size: 1.8rem;
        margin-left: 2rem;
        color: var(--gris2);
        font-family:'Roboto', sans-serif;
        &:last-of-type {
            margin-right: 0;
        }
    }
`;

const Navegacion = () => {
    return (  
        <Nav>
            <Link href="/"><a>Inicio</a></Link>
            <Link href="/populares"><a>Populares</a></Link>
            <Link href="/nuevo-producto"><a>Nuevo Producto</a></Link>
        </Nav>
    );
}
 
export default Navegacion
;
