import React from 'react';
import { test, expect, describe } from 'vitest';
import { render } from '@testing-library/react';
import { getQueriesForElement } from '@testing-library/dom';

import EventHeader from '../../../../src/components/Event/EventPage/EventHeader';

describe('EventHeader', () => {
  it('renders an image with the correct alt text', () => {
    const { container } = render(<EventHeader />);
    const queries = getQueriesForElement(container);
    const image = queries.getByAltText('event poster');

    expect(image).toBeDefined();
  });
});
