import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

export default function Home() {
  const {siteConfig, i18n: {currentLocale}} = useDocusaurusContext();
  const isKo = currentLocale === 'ko';

  // Clean dictionary pattern to handle localized homepage strings
  const content = {
    title: isKo ? 'K-Staff 생태계' : 'K-Staff Ecosystem',
    titleHighlight: isKo ? '문서 가이드' : 'Ecosystem',
    subtitle: isKo 
      ? '개인정보 보호를 최우선으로 하는 운영자 통제 기반의 국경 간 채용 플랫폼 기술 및 운영 문서입니다.'
      : 'The technical and operational documentation for our privacy-first, operator-governed cross-border recruitment liaison platform.',
    buttons: {
      overseas: isKo ? '해외 파트너 가이드' : 'Overseas Partner Guide',
      employer: isKo ? '고용주 가이드' : 'Employer Guide',
      korea: isKo ? '한국 파트너 가이드' : 'Korea Partner Guide',
    },
    features: [
      {
        title: isKo ? '개인정보 방화벽' : 'Privacy Firewall',
        description: isKo 
          ? '엄격한 Tier 1-3 정보 공개 모델. 기본적으로 익명화된 데이터를 제공하며, 만료 기간이 설정된 운영자 제어 권한을 통해 민감한 개인정보(PII)를 철저히 보호합니다.'
          : 'A strict Tier 1-3 disclosure model. Anonymized data by default, protecting highly sensitive PII behind expiring, operator-controlled grants.',
        icon: '🛡️',
      },
      {
        title: isKo ? '조건부 신뢰' : 'Conditional Trust',
        description: isKo 
          ? '고용주는 MSA 규정 준수 및 플랫폼 관리자의 철저한 신뢰도(Trust-level) 평가 및 승격을 통해서만 Tier-2 접근 권한을 얻을 수 있습니다.'
          : 'Employers gain Tier-2 access strictly through MSA compliance and active trust-level escalations managed by Platform Admins.',
        icon: '🔐',
      },
      {
        title: isKo ? '운영자 직접 관리' : 'Operator Governed',
        description: isKo 
          ? '사용자 간 직접적인 연락은 구조적으로 금지됩니다. 모든 면접, 후보자 잠금(Lock) 및 채용 절차는 K-Staff를 통해 안전하게 라우팅되고 검증됩니다.'
          : 'Direct communication is structurally forbidden. Every interview, candidate lock, and placement is routed and verified by K-Staff.',
        icon: '⚖️',
      },
    ]
  };

  return (
    <Layout
      title={isKo ? 'K-Staff 문서 가이드' : `Welcome to ${siteConfig.title}`}
      description={content.subtitle}>
      
      <main className="modern-homepage">
        <div className="hero-section">
          <div className="hero-content">
            <h1 className="hero-title">
              K-Staff <span className="highlight">{content.titleHighlight}</span>
            </h1>
            <p className="hero-subtitle">
              {content.subtitle}
            </p>
            <div className="hero-buttons">
              <Link className="btn btn-primary" to="/docs/overseas-partner">
                {content.buttons.overseas}
              </Link>
              <Link className="btn btn-secondary" to="/docs/employer">
                {content.buttons.employer}
              </Link>
              <Link className="btn btn-secondary" to="/docs/korea-partner">
                {content.buttons.korea}
              </Link>
            </div>
          </div>
        </div>

        <div className="features-section">
          <div className="container">
            <div className="features-grid">
              {content.features.map((feature, idx) => (
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