// @ts-check

/**
 * Sidebar for the K-Staff documentation.
 *
 * - intro              -- what K-Staff is, the four roles, the three data tiers
 * - how-it-works       -- the full lifecycle in one page, role hand-offs mapped
 * - Role guides        -- the partner-facing operational guide per role
 *
 * @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  tutorialSidebar: [
    'intro',
    'how-it-works',
    {
      type: 'category',
      label: 'Role guides',
      collapsed: false,
      items: [
        'overseas-partner',
        'korea-partner',
        'employer',
        'platform-manager',
      ],
    },
  ],
};

export default sidebars;
