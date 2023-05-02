import React from 'react';
import { render, waitFor } from '@testing-library/react';
import SearchResult from '../../../../src/components/Modal/SearchResult/SearchResult';
import { FaClock, FaLevelUpAlt } from 'react-icons/fa';

test('renders SearchResult component with recent and trending results', () => {
  // Define mock recent and trends data
  const recent = ['Result 1', 'Result 2', 'Result 3'];
  const trends = [{ term: 'Trend 1' }, { term: 'Trend 2' }, { term: 'Trend 3' }, { term: 'Trend 4' }];

  // Render SearchResult component with mock props
  const { getByText, queryByText, getByTestId } = render(
    <SearchResult recent={recent} trends={trends} char="r" />
  );

  // Assert that recent and trending results are rendered correctly
  waitFor(() => {
    const resultList = getByTestId('recent-results');
    expect(resultList).toBeInTheDocument();
    expect(resultList).toHaveTextContent('Result 1');
    expect(resultList).toHaveTextContent('Result 2');
    expect(resultList).toHaveTextContent('Result 3');
    expect(queryByText('Result 4')).toBeNull();
  });

  waitFor(() => {
    const trendList = getByTestId('tranding-results');
    expect(trendList).toBeInTheDocument();
    expect(trendList).toHaveTextContent('Trend 1');
    expect(trendList).toHaveTextContent('Trend 2');
    expect(trendList).toHaveTextContent('Trend 3');
    expect(trendList).toHaveTextContent('Trend 4');
  });

  // Assert that ResultList and ResultItem components are rendered correctly
  waitFor(() => {
    const resultListComponent = getByTestId('result-list');
    expect(resultListComponent).toBeInTheDocument();
    expect(resultListComponent).toContainElement(getByText('Result 1'));
    expect(resultListComponent).toContainElement(getByText('Trend 1'));
    expect(resultListComponent).toContainElement(getByTestId('result-item-icon-0'));
    expect(resultListComponent).toContainElement(getByTestId('result-item-icon-3'));
    expect(resultListComponent).toContainElement(getByTestId('result-item-title-0'));
    expect(resultListComponent).toContainElement(getByTestId('result-item-title-3'));
  });
});
