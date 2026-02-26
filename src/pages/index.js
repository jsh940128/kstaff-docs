import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)} style={{ backgroundColor: '#1b2b40' }}>
      {/* Note: I added a dark blue hex code above to match your K-Staff sidebar branding, feel free to change it! */}
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/overseas-partner">
            View Documentation
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="K-Staff is a privacy-first, operator-governed cross-border recruitment liaison platform.">
      <HomepageHeader />
      <main>
        {/* The default dinosaur features have been removed for a clean, professional look */}
      </main>
    </Layout>
  );
}