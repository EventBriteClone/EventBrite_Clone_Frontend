import React from 'react';
import { render, waitFor } from '@testing-library/react';
import Suggested from '../../../../src/components/Modal/Suggested/Suggested';
// import Badge from './Badge/Badge';

test('renders Suggested component with badges', () => {
  // Render Suggested component
  const { getByText } = render(<Suggested />);

  // Assert that badges are rendered correctly
  const onlineBadge = getByText('Online');
  expect(onlineBadge).to.exist;
  const todayBadge = getByText('Today');
  expect(todayBadge).to.exist;

  const thisWeekendBadge = getByText('This Weekend');
  expect(thisWeekendBadge).to.exist;

  const freeBadge = getByText('Free');
  expect(freeBadge).to.exist;

  const musicBadge = getByText('Music');
  expect(musicBadge).to.exist;

  const foodAndDrinkBadge = getByText('Food & drink');
  expect(foodAndDrinkBadge).to.exist;

  // Assert that Badge components are rendered correctly
  const badgeComponents = document.querySelectorAll('.badge');
  waitFor(() => {
    expect(badgeComponents.length).toBe(6);
    expect(badgeComponents[0].textContent).toBe('Online');
    expect(badgeComponents[1].textContent).toBe('Today');
    expect(badgeComponents[2].textContent).toBe('This Weekend');
    expect(badgeComponents[3].textContent).toBe('Free');
    expect(badgeComponents[4].textContent).toBe('Music');
    expect(badgeComponents[5].textContent).toBe('Food & drink');
  });
});
