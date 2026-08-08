/**
 * skills.js — Technical skills organised by category
 * Each category has an icon (emoji/text), a label, and a list of skills.
 */

const skills = [
  {
    id: 'dev',
    category: 'Software Development',
    icon: '⌨️',
    items: [
      { name: '.NET / ASP.NET' },
      { name: 'PHP' },
      { name: 'Python' },
      { name: 'JavaScript' },
      { name: 'HTML5' },
      { name: 'CSS3' },
      { name: 'Bootstrap' },
      { name: 'REST APIs' },
    ],
  },
  {
    id: 'db',
    category: 'Databases',
    icon: '🗄️',
    items: [
      { name: 'MySQL' },
      { name: 'Microsoft SQL Server' },
      { name: 'PostgreSQL' },
      { name: 'DBMS' },
      { name: 'Stored Procedures' },
      { name: 'ADO.NET' },
    ],
  },
  {
    id: 'tools',
    category: 'Development Tools',
    icon: '🛠️',
    items: [
      { name: 'Git' },
      { name: 'GitHub' },
      { name: 'Docker' },
      { name: 'Visual Studio' },
      { name: 'VS Code' },
    ],
  },
  {
    id: 'it',
    category: 'IT & Support',
    icon: '🖥️',
    items: [
      { name: 'Hardware Troubleshooting' },
      { name: 'Windows OS' },
      { name: 'LAN / Wi-Fi' },
      { name: 'Networking' },
      { name: 'Installation & Configuration' },
    ],
  },
  {
    id: 'saas',
    category: 'Application Support',
    icon: '☁️',
    items: [
      { name: 'SaaS Dashboards' },
      { name: 'Restaurant Management Software' },
      { name: 'User Onboarding' },
      { name: 'Issue Resolution' },
      { name: 'Technical Documentation' },
    ],
  },
];

export default skills;
