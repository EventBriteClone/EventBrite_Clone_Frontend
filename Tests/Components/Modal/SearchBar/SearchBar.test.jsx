import "@testing-library/jest-dom";
import jest from 'jest-mock';
import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { FaSearch, FaArrowRight } from 'react-icons/fa';
import SearchBar from '../../../../src/components/Modal/SearchBar/SearchBar';

test('renders SearchBar component with correct elements and handles events', () => {
  // Define mock query and event handlers
  const query = 'Test Query';
  const handleQueryChange = jest.fn();
  const handleBackClick = jest.fn();
  const handleSearchClick = jest.fn();

  // Render SearchBar component with mock props
  const { getByPlaceholderText, getByTestId, getByText } = render(
    <SearchBar query={query} handleQueryChange={handleQueryChange} />
  );

  // Assert that SearchBar component is rendered correctly
  const searchIcon = getByTestId('search-icon');
  expect(searchIcon).toBeInTheDocument();
  expect(searchIcon).toHaveClass('search-icon');
  fireEvent.click(searchIcon);
  waitFor(() => expect(handleSearchClick).toHaveBeenCalledTimes(1));

  const searchInput = getByPlaceholderText('Search for anything');
  expect(searchInput).toBeInTheDocument();
  expect(searchInput).toHaveValue(query);
  fireEvent.input(searchInput, { target: { value: 'New Query' } });
  waitFor(() => expect(handleQueryChange).toHaveBeenCalledTimes(1));

  const backIcon = getByTestId('back-icon');
  expect(backIcon).toBeInTheDocument();
  expect(backIcon).toHaveClass('back-icon');
  fireEvent.click(backIcon);
  waitFor(() => expect(handleBackClick).toHaveBeenCalledTimes(1));
});
