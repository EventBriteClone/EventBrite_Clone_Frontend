
import "@testing-library/jest-dom";
// import jest from 'jest-mock';
import React from 'react';
import { FaClock, FaLevelUpAlt } from "react-icons/fa";
import { render, screen } from '@testing-library/react';
import RecentAndPopular from '../../../../src/components/Modal/RecentAndPopular/RecentAndPopular';

// Mock the recent and trends data for testing
const recentData = ['Recent1', 'Recent2', 'Recent3'];
const trendsData = [
  { term: 'Trend1', icon: <FaLevelUpAlt /> },
  { term: 'Trend2', icon: <FaLevelUpAlt /> },
  { term: 'Trend3', icon: <FaLevelUpAlt /> },
  { term: 'Trend4', icon: <FaLevelUpAlt /> },
];

test('renders RecentAndPopular component with recent and trends data', () => {
  render(<RecentAndPopular recent={recentData} trends={trendsData} />);

  // Assert that the title text is rendered correctly
  const titleElement = screen.getByText('Recent and popular reseaches');
  expect(titleElement).toBeInTheDocument();

  // Assert that the recent items are rendered correctly
  const recentItems = screen.getAllByTestId('recent-item');
  expect(recentItems).toHaveLength(3);
  recentItems.forEach((item, index) => {
    expect(item).toHaveTextContent(recentData[index]);
  });

  // Assert that the trend items are rendered correctly
  const trendItems = screen.getAllByTestId('trend-item');
  expect(trendItems).toHaveLength(4);
  trendItems.forEach((item, index) => {
    expect(item).toHaveTextContent(trendsData[index].term);
  });
});
