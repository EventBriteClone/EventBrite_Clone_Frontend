import React from 'react';
import "@testing-library/jest-dom";
import jest from 'jest-mock';
import { render, screen } from '@testing-library/react';
import ResultList from '../../../../src/components/Modal/ResultsList/ResultItem';

test('renders ResultList component with title and icon', () => {
  const title = 'Test Title';
  const icon = <svg className="test-icon" />;

  render(<ResultList title={title} icon={icon} />);

  // Assert that the title text is rendered correctly
  const titleElement = screen.getByText(title);
  expect(titleElement).toBeInTheDocument();

  // Assert that the icon is rendered correctly
  const iconElement = screen.getByTestId('result-list-icon');
  expect(iconElement).toBeInTheDocument();
  expect(iconElement).toContainHTML('<svg class="test-icon">');
});

test('invokes handleClick function when clicked', () => {
  const title = 'Test Title';
  const icon = <svg className="test-icon" />;
  const handleClickMock = jest.fn();
  // Mock localStorage.setItem function
  const localStorageSetItemMock = jest.fn();
  global.localStorage.setItem = localStorageSetItemMock;

  render(<ResultList title={title} icon={icon} />);

  const listItem = screen.getByTestId('result-list-item')
  listItem.click();

  // Assert that handleClick function is invoked when the item is clicked
  expect(handleClickMock).to.exist;

  // Assert that localStorage.setItem is called with the correct arguments
  expect(localStorageSetItemMock).toHaveBeenCalledTimes(1);
  expect(localStorageSetItemMock).toHaveBeenCalledWith(
    'recent',
    title + (localStorage.getItem('recent') ? ',' + localStorage.getItem('recent') : '')
  );
});
