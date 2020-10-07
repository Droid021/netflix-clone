import React from 'react';
import { useContent } from '../hooks';

export default function Browse() {
  // slides
  // films, series
  // pass to browse container
  const { series } = useContent('series');
  console.table(series);

  return <h1>Browse</h1>;
}
