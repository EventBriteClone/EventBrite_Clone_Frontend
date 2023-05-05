
import React from 'react';
import  Footer  from './Footer';

export default {
  title: 'Components/Layout/Footer',
  component: Footer,
};

const Template = (args) => <Footer {...args} />;

export const Default = Template.bind({});
Default.args = {
  links: [
    { title: 'Home', url: '/' },
    { title: 'About', url: '/about' },
    { title: 'Contact', url: '/contact' },
  ],
  socialLinks: [
    { icon: 'facebook', url: 'https://facebook.com' },
    { icon: 'twitter', url: 'https://twitter.com' },
    { icon: 'instagram', url: 'https://instagram.com' },
  ],
  year: new Date().getFullYear(),
};

export const withCompanyInfo = Template.bind({});
withCompanyInfo.args = {
  companyInfo: [
      {companyName: "Acme Inc."},
      {companyAddress:"123 Main St., Anytown USA"},
      {companyPhoneNumber:"(555) 555-5555"},
      {companyEmail:"info@acme.com"}
  ]
    
}

export const NoSocialLinks = Template.bind({});
NoSocialLinks.args = {
  links: [
    { title: 'Home', url: '/' },
    { title: 'About', url: '/about' },
    { title: 'Contact', url: '/contact' },
  ],
  socialLinks: [],
  year: new Date().getFullYear(),
};
