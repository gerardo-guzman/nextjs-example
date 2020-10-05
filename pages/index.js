import React from 'react';
import Layout from '../components/layouts/Layout';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Wrapper = styled.section`
  padding: 4rem;
  background: papayawhip;
`;

export default function Home() {
  return (
    <Layout>
      <h1>Inicio</h1>
    </Layout>
  );
}
