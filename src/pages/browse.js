import React from 'react';
import BrowseContainer from '../containers/browse';
import { useContent } from '../hooks';
import selectionFilter from '../utils/selection-filter';

export default function Browse() {
  // films, series
  const { series } = useContent('series');
  const { films } = useContent('films');

  // slides
  const slides = selectionFilter({ series, films });

  return <BrowseContainer slides={slides} />;
}
