import "@testing-library/jest-dom";
import jest from 'jest-mock';
import React from 'react';
import { render, waitFor } from '@testing-library/react';
import ResultList from '../../../../src/components/Modal/ResultsList/ResultList';

test('renders ResultList component with children', () => {
  // Define mock children elements
  const child1 = <li key="1" data-testid="child-1">Child 1</li>;
  const child2 = <li key="2" data-testid="child-2">Child 2</li>;
  const child3 = <li key="3" data-testid="child-3">Child 3</li>;

  // Render ResultList component with mock children
  render(
    <ResultList>
      {child1}
      {child2}
      {child3}
    </ResultList>
  );

  // Assert that children elements are rendered correctly
  waitFor(() => {
    const child1Element = screen.getByTestId('child-1');
    expect(child1Element).toBeInTheDocument();

    const child2Element = screen.getByText('child-2');
    expect(child2Element).toBeInTheDocument();

    const child3Element = screen.getByText('child-3');
    expect(child3Element).toBeInTheDocument();
  });
});
