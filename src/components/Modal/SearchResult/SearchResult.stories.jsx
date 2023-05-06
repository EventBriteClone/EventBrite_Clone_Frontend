import React from 'react';
import { action } from '@storybook/addon-actions';
import SearchResult from './SearchResult';
import data from '../../../../mock-data/db'

export default {
  title: 'Components/Modal/SearchResult',
  component: SearchResult,
};

const recentSearches = ['Apple', 'Banana', 'Cherry', 'Date'];
const trendingSearches = [
  { term: 'Kiwi', count: 100 },
  { term: 'Lemon', count: 50 },
  { term: 'Mango', count: 25 },
  { term: 'Orange', count: 10 },
];



export const Default = () => (
  <SearchResult recent={recentSearches} trends={trendingSearches} char="a" />
);

export const NoResults = () => (
  <SearchResult recent={recentSearches} trends={trendingSearches} char="z" />
);
