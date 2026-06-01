import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

/**
 * K-Staff documentation homepage.
 *
 * Bilingual via the `currentLocale` from DocusaurusContext. All copy lives in
 * the `content` dictionary below; no React state or i18n plugins needed.
 *
 * Visual structure:
 *   1. Hero (eyebrow + title + subtitle + two CTAs)
 *   2. "Which one are you?": four role cards
 *   3. How-it-works teaser banner
 *   4. "Why K-Staff": three feature cards
 */
export default function Home() {
  const {i18n: {currentLocale}} = useDocusaurusContext();
  const isKo = currentLocale === 'ko';

  const t = isKo ? {
    eyebrow: '국경 간 채용 플랫폼',
    title: 'K-Staff',
    subtitle:
      '한국 비자 채용을 위한 개인정보 보호 우선, 운영자 통제 기반의 국경 간 채용 플랫폼.',
    ctaPrimary: '시작하기',
    ctaSecondary: '작동 방식 보기',

    rolesHeading: '내 역할은 무엇인가요?',
    rolesSub: '플랫폼에서의 역할에 맞는 가이드를 확인하세요.',
    rolesArrow: '가이드 보기 →',

    roles: [
      {to: '/docs/overseas-partner', icon: '🌏', title: '해외 파트너',
       desc: '해외에서 후보자를 발굴하고 등록합니다.'},
      {to: '/docs/korea-partner', icon: '🇰🇷', title: '한국 파트너',
       desc: '한국 현지에서 면접과 채용 체결을 진행합니다.'},
      {to: '/docs/employer', icon: '🏢', title: '고용주',
       desc: '필요한 인력을 찾고 채용 요청을 제출합니다.'},
      {to: '/docs/platform-manager', icon: '🛡️', title: '플랫폼 관리자',
       desc: 'K-Staff 운영과 컴플라이언스를 총괄합니다.'},
    ],

    howHeading: '전체 라이프사이클, 한눈에',
    howDesc:
      '후보자 등록부터 비자 후속 컴플라이언스까지, 각 역할이 어디서 무엇을 하는지 한 페이지에 정리되어 있습니다.',
    howCta: '라이프사이클 보기 →',

    featuresHeading: 'K-Staff를 선택하는 이유',
    featuresSub: '운영자 통제와 단계적 정보 공개로 안전한 채용을 지원합니다.',
    features: [
      {icon: '🛡️', title: '계층화된 정보 공개',
       desc: '익명화된 Tier-1부터 이력서(Tier-2), 민감 문서(Tier-3)까지, 필요한 단계에서만 접근이 열립니다.'},
      {icon: '🔐', title: '운영자 통제',
       desc: '면접, 후보자 잠금, 채용 확정은 모두 K-Staff를 통해 라우팅되고 검증됩니다.'},
      {icon: '⚖️', title: '컴플라이언스 우선',
       desc: 'MSA 서명, 신뢰 등급, 시간 제한 접근 권한이 모든 단계에 적용됩니다.'},
    ],
  } : {
    eyebrow: 'Cross-border recruitment platform',
    title: 'K-Staff',
    subtitle:
      'Privacy-first, operator-governed cross-border recruitment for Korean visa hiring.',
    ctaPrimary: 'Get started',
    ctaSecondary: 'See how it works',

    rolesHeading: 'Which one are you?',
    rolesSub: 'Pick the guide that matches your role on the platform.',
    rolesArrow: 'Read the guide →',

    roles: [
      {to: '/docs/overseas-partner', icon: '🌏', title: 'Overseas Partner',
       desc: 'Source and register candidates from abroad.'},
      {to: '/docs/korea-partner', icon: '🇰🇷', title: 'Korea Partner',
       desc: 'Run interviews and execute placements on the ground in Korea.'},
      {to: '/docs/employer', icon: '🏢', title: 'Employer',
       desc: 'Find workers, sign the agreement, submit a hiring request.'},
      {to: '/docs/platform-manager', icon: '🛡️', title: 'Platform Manager',
       desc: 'Operate K-Staff: routing, access grants, compliance, contracts.'},
    ],

    howHeading: 'The full lifecycle, at a glance',
    howDesc:
      'From candidate intake to post-placement visa compliance, with every hand-off between the four roles mapped on a single page.',
    howCta: 'Read how it works →',

    featuresHeading: 'Why K-Staff',
    featuresSub: 'Operator-governed handoffs and tiered disclosure, end to end.',
    features: [
      {icon: '🛡️', title: 'Tiered disclosure',
       desc: 'Anonymous Tier-1 browsing, gated Tier-2 resumes, platform-only Tier-3 documents. The minimum is exposed by default.'},
      {icon: '🔐', title: 'Operator-governed',
       desc: 'Interviews, candidate locks, and placement confirmations all route through K-Staff. No back-channel.'},
      {icon: '⚖️', title: 'Compliance-first',
       desc: 'MSA signing, trust-level escalation, and time-bounded access grants apply at every step.'},
    ],
  };

  return (
    <Layout
      title={isKo ? 'K-Staff 문서' : 'K-Staff Documentation'}
      description={t.subtitle}>
      <main className="ks-home">
        {/* ── HERO ─────────────────────────────────────────────── */}
        <section className="ks-hero">
          <span className="ks-hero-eyebrow">{t.eyebrow}</span>
          <h1 className="ks-hero-title">{t.title}</h1>
          <p className="ks-hero-subtitle">{t.subtitle}</p>
          <div className="ks-hero-cta-row">
            <Link className="ks-btn ks-btn-primary" to="/docs/intro">
              {t.ctaPrimary} →
            </Link>
            <Link className="ks-btn ks-btn-secondary" to="/docs/how-it-works">
              {t.ctaSecondary}
            </Link>
          </div>
        </section>

        {/* ── ROLE PICKER ──────────────────────────────────────── */}
        <section className="ks-section">
          <div className="ks-section-narrow">
            <h2 className="ks-section-heading">{t.rolesHeading}</h2>
            <p className="ks-section-subheading">{t.rolesSub}</p>
            <div className="ks-role-grid">
              {t.roles.map((r) => (
                <Link key={r.to} to={r.to} className="ks-role-card">
                  <div className="ks-role-card-icon" aria-hidden="true">{r.icon}</div>
                  <h3 className="ks-role-card-title">{r.title}</h3>
                  <p className="ks-role-card-desc">{r.desc}</p>
                  <span className="ks-role-card-arrow">{t.rolesArrow}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── HOW-IT-WORKS TEASER ──────────────────────────────── */}
        <section className="ks-section">
          <div className="ks-section-narrow">
            <div className="ks-how-card">
              <div className="ks-how-text">
                <h2 className="ks-how-title">{t.howHeading}</h2>
                <p className="ks-how-desc">{t.howDesc}</p>
              </div>
              <Link className="ks-btn ks-btn-primary" to="/docs/how-it-works">
                {t.howCta}
              </Link>
            </div>
          </div>
        </section>

        {/* ── WHY K-STAFF ──────────────────────────────────────── */}
        <section className="ks-section ks-features-section">
          <div className="ks-section-narrow">
            <h2 className="ks-section-heading">{t.featuresHeading}</h2>
            <p className="ks-section-subheading">{t.featuresSub}</p>
            <div className="ks-feature-grid">
              {t.features.map((f, i) => (
                <div key={i} className="ks-feature-card">
                  <div className="ks-feature-icon" aria-hidden="true">{f.icon}</div>
                  <h3 className="ks-feature-title">{f.title}</h3>
                  <p className="ks-feature-desc">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
