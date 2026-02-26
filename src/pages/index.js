import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

const FEATURES = [
  {
    title: 'Privacy Firewall',
    description: 'A strict Tier 1-3 disclosure model. Anonymized data by default, protecting highly sensitive PII behind expiring, operator-controlled grants.',
    icon: '🛡️',
  },
  {
    title: 'Conditional Trust',
    description: 'Employers gain Tier-2 access strictly through MSA compliance and active trust-level escalations managed by Platform Admins.',
    icon: '🔐',
  },
  {
    title: 'Operator Governed',
    description: 'Direct communication is structurally forbidden. Every interview, candidate lock, and placement is routed and verified by K-Staff.',
    icon: '⚖️',
  },
];

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="Privacy-first, operator-governed cross-border recruitment.">
      
      <main className="modern-homepage">
        <div className="hero-section">
          <div className="hero-content">
            <h1 className="hero-title">K-Staff <span className="highlight">Ecosystem</span></h1>
            <p className="hero-subtitle">
              The technical and operational documentation for our privacy-first, 
              operator-governed cross-border recruitment liaison platform.
            </p>
            <div className="hero-buttons">
              <Link className="btn btn-primary" to="/docs/employer">
                Employer Guide
              </Link>
              <Link className="btn btn-secondary" to="/docs/korea-partner">
                Korea Partner Guide
              </Link>
            </div>
          </div>
        </div>

        <div className="features-section">
          <div className="container">
            <div className="features-grid">
              {FEATURES.map((feature, idx) => (
                <div key={idx} className="feature-card">
                  <div className="feature-icon">{feature.icon}</div>
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-desc">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      
    </Layout>
  );
}