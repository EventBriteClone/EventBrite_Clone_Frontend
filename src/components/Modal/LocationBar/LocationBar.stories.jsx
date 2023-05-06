import React from 'react';
import LocationBar from './LocationBar';

export default {
  title: 'Components/Modal/LocationBar',
  component: LocationBar,
};

const Template = (args) => <LocationBar {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const withQuery = Template.bind({});
withQuery.args = {
  query: "New York"
}

export const withBackButton = Template.bind({});
withBackButton.args = {
  onBackClick: () => {
    alert("Back button clicked");
  }
}


export const withSearchButton = Template.bind({});
withSearchButton.args = {
  onBackClick: () => {
    alert("Search button clicked");
  }
} 

