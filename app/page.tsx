const focusAreas = [
  {
    number: '01',
    title: 'Professional learning',
    text: 'Timely conversations at the intersection of people, policy, and responsible workplace practice.',
  },
  {
    number: '02',
    title: 'Cross-discipline exchange',
    text: 'A shared forum for HR and legal professionals to learn from one another’s perspectives.',
  },
  {
    number: '03',
    title: 'Stronger communities',
    text: 'Supporting thoughtful leadership and informed decision-making across the greater Seattle region.',
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Seattle HR and Legal Professionals Association home">
          <span className="brand-mark" aria-hidden="true"><span>SH</span><span>LP</span></span>
          <span className="brand-name">Seattle HR + Legal<br />Professionals Association</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#focus">Our focus</a>
          <a href="#organization">Organization</a>
          <a className="nav-button" href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-orbit orbit-one" aria-hidden="true" />
        <div className="hero-orbit orbit-two" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow"><span /> Seattle, Washington</p>
          <h1>Where people,<br /><em>policy</em> &amp; purpose meet.</h1>
          <p className="hero-intro">
            A professional association advancing thoughtful dialogue between human resources and legal professionals in the greater Seattle community.
          </p>
          <div className="hero-actions">
            <a className="button-primary" href="#about">Discover our purpose <span aria-hidden="true">↗</span></a>
            <a className="text-link" href="#organization">View organization details <span aria-hidden="true">↓</span></a>
          </div>
        </div>
        <div className="hero-card" aria-label="Organization summary">
          <p>Established for professional exchange</p>
          <div className="monogram" aria-hidden="true">S</div>
          <div className="hero-card-footer">
            <span>HR</span><i /> <span>Legal</span><i /> <span>Community</span>
          </div>
        </div>
        <div className="hero-index" aria-hidden="true">01 / 03</div>
      </section>

      <section className="statement" id="about">
        <div className="section-label"><span>01</span> Who we are</div>
        <div>
          <p className="lead">
            Better workplaces begin when <strong>human insight</strong> and <strong>legal clarity</strong> share the same table.
          </p>
          <div className="statement-grid">
            <p>
              Seattle HR and Legal Professionals Association brings together practitioners who care about sound judgment, responsible policy, and the people behind every workplace decision.
            </p>
            <p>
              Our purpose is to encourage learning and exchange across disciplines—helping professionals engage with complex workplace questions thoughtfully and constructively.
            </p>
          </div>
        </div>
      </section>

      <section className="focus-section" id="focus">
        <div className="focus-heading">
          <div className="section-label light"><span>02</span> Our focus</div>
          <h2>Connected expertise.<br />Practical perspective.</h2>
          <p>Three principles shape our work and the professional community we seek to support.</p>
        </div>
        <div className="focus-list">
          {focusAreas.map((area) => (
            <article className="focus-card" key={area.number}>
              <span className="focus-number">{area.number}</span>
              <h3>{area.title}</h3>
              <p>{area.text}</p>
              <span className="card-arrow" aria-hidden="true">↗</span>
            </article>
          ))}
        </div>
      </section>

      <section className="organization" id="organization">
        <div>
          <div className="section-label"><span>03</span> Organization details</div>
          <h2>Transparent by design.</h2>
          <p className="organization-intro">
            The identifying information below is provided to help members, partners, and platform reviewers confirm the organization’s legal identity.
          </p>
        </div>
        <dl className="details-card">
          <div>
            <dt>Legal organization name</dt>
            <dd>Seattle HR and Legal Professionals Association</dd>
          </div>
          <div className="detail-pair">
            <div>
              <dt>D‑U‑N‑S® Number</dt>
              <dd>143061186</dd>
            </div>
            <div>
              <dt>Employer Identification Number</dt>
              <dd>41-3476359</dd>
            </div>
          </div>
          <div>
            <dt>Mailing address</dt>
            <dd>10800 NE 8th Street, Suite 918<br />Bellevue, WA 98004-4463<br />United States</dd>
          </div>
        </dl>
      </section>

      <section className="contact" id="contact">
        <div className="contact-kicker">Official correspondence</div>
        <h2>Let’s keep the<br />conversation moving.</h2>
        <p>For organization inquiries and formal correspondence, please write to our Bellevue mailing address.</p>
        <address>
          Seattle HR and Legal Professionals Association<br />
          10800 NE 8th Street, Suite 918<br />
          Bellevue, WA 98004-4463, United States
        </address>
      </section>

      <section className="privacy" id="privacy">
        <div className="section-label"><span>04</span> Privacy</div>
        <div>
          <h2>Privacy notice</h2>
          <p>
            This informational website does not use contact forms, user accounts, advertising cookies, or analytics trackers, and does not collect personal information from visitors. If this practice changes, this notice will be updated before any data collection begins.
          </p>
          <p className="privacy-date">Effective August 26, 2026</p>
        </div>
      </section>

      <footer>
        <a className="brand footer-brand" href="#top">
          <span className="brand-mark" aria-hidden="true"><span>SH</span><span>LP</span></span>
          <span className="brand-name">Seattle HR + Legal<br />Professionals Association</span>
        </a>
        <div className="footer-meta">
          <a href="#privacy">Privacy notice</a>
          <span>© 2026 Seattle HR and Legal Professionals Association</span>
        </div>
      </footer>
    </main>
  );
}
