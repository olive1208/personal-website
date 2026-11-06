// Site-wide settings. Edit this file to change your name, links, or menu.

export const site = {
  name: 'Olive Li',
  description:
    'Olive Li. MBA student at Berkeley Haas. Projects and writing on AI and physical AI.',
};

// Top menu. To add a page later (for example AGENTS), add one line here
// and create the page in src/pages (for example src/pages/agents.astro).
export const nav = [
  { label: 'About', href: '/' },
  { label: 'Projects', href: '/projects/' },
  { label: 'Writing & Learning', href: '/writing/' },
  // { label: 'Agents', href: '/agents/' },
];

export const contact = {
  linkedin: 'https://www.linkedin.com/in/olive-ge-li-709253125',
  github: 'https://github.com/olive1208',
  email: 'olive.li@berkeley.edu',
};

// Order of sections on the Writing & Learning page.
// Any category not listed here still shows up, after these, in A to Z order.
export const categoryOrder = ['Physical AI', 'MBA Life'];
