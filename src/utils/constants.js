/**
 * constants.js — App-wide constants
 * Update contact info and social links here; no UI component changes needed.
 */

export const CONTACT_INFO = 
{
  email: 'sahilrathod222@gmail.com',
  phone: '+91 6354764264 ',           // Replace with your actual number
  location: 'Jamnagar, Gujarat, India',
};

export const SOCIAL_LINKS = {
  github: 'https://github.com/developershahil',
  linkedin: 'https://www.linkedin.com/in/rathod-sahil-13b06b368', // Replace with your actual URL
  email: `mailto:${CONTACT_INFO.email}`,
};

export const NAV_LINKS = [
  { label: 'Home',      href: '#hero' },
  { label: 'About',     href: '#about' },
  { label: 'Skills',    href: '#skills' },
  { label: 'Journey',   href: '#journey' },
  { label: 'Projects',  href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact',   href: '#contact' },
];

export const SITE_META = {
  name: 'Sahil Rathod',
  title: 'Software & Technical Professional',
  tagline: 'Building practical software solutions — development, databases & technical support.',
  githubUsername: 'developershahil',
  cvPath: '/Sahil-Rathod-CV.pdf',
};
