import React from 'react';
import loadable from '@loadable/component';
import logo from './logo.svg';
import { Container, Image, Link } from './App.style';

// https://loadable-components.com/docs/prefetching/
const DynamicImport = loadable(() => import('./DynamicImport'));

const App = (): JSX.Element => {
  return (
    <Container>
      <Image src={logo} alt="logo" />
      <DynamicImport />
      <Link href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        Learn React
      </Link>
    </Container>
  );
};

export default App;
