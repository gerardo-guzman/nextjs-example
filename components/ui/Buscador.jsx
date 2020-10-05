import React from 'react';
import styled from 'styled-components';

const InputText = styled.input`
    border: 1px solid var(--gris3);
    padding: 1rem;
    min-width: 300px;

`;

const InputSearch = styled.button`
    height: 3rem;
    width: 3rem;
    display: block;
    background-size: 4rem;
    background-image: url('/static/img/buscar.png');
    background-repeat: no-repeat;
    position: absolute;
    right: 1rem;
    top: 1px;
    background-color: white;
    border: none;
    text-indent: -9999px;
    &:hover {
        cursor: pointer;
    }
`;

const Buscador = () => {
    return (
        <form
            css="position: relative;"
        >
            <InputText placeholder="Buscar Productos" type="text"/>
            <InputSearch type="submit">Buscar</InputSearch>
        </form>
    );
}
 
export default Buscador;
