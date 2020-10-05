import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import Buscador from './ui/Buscador';
import Navegacion from '../components/layouts/Navegacion';
import Boton from './ui/Boton';

const ContenedorHeader = styled.div`
    max-width: 1200px;
    width: 95%;
    margin: 0 auto;
    @media (min-width:768px) {
        display: flex;
        justify-content: space-between;
    }
`;
const Logo = styled.p`
    color: var(--naranja);
    font-size: 4rem;
    line-height: 0;
    font-weight: 700;
    font-family: 'Roboto', sans-serif;
    margin-right: 2rem;
    cursor: pointer;
`;
const Header = () => {
    const user = false;
    return ( 
        <header
            css={`
                border-bottom: 2px solid var(--gris3);
                padding: 1rem 0;
            `}
        >
            <ContenedorHeader>
                <div
                    css={`
                        display: flex;
                        align-items: center;
                    `}
                >
                    <Link href="/"><Logo>P</Logo></Link>
                    {/* Buscador aquí */}
                    <Buscador />
                    <Navegacion />
                </div>
                <div
                    css={`
                        display: flex;
                        align-items: center
                    `}
                >
                    {/* Menu de administracion */}
                    {user ? 
                        (<>
                        <p css={`margin-right: 2rem; `}> 
                            Hola: Gerardo
                        </p>
                        <Boton bgColor={true}>Cerrar Sesión</Boton>
                        </>):(
                            <>
                            <Link href="/login"><Boton bgColor={true}>Login</Boton></Link>
                            <Link href="/crear-cuenta"><Boton>Crear Cuenta</Boton></Link>
                            </>
                        )
                    }
                </div>
            </ContenedorHeader>
        </header>
    );
}
 
export default Header;
