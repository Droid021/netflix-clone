import React from 'react';
import { Header } from '../components';

export default function Header() {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo />
        <Header.Button />
      </Header.Frame>
    </Header>
  );
}
