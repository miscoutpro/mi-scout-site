import React from 'react'
import { createRoot } from 'react-dom/client'
import { motion } from 'framer-motion'
import {
  Search, BarChart3, FileText, ShieldCheck, ArrowRight, CheckCircle2,
  Mail, Crown, AlertTriangle, TrendingUp, Eye, Download, Lock, Euro,
  MessageCircle, ExternalLink, Star, MapPin, Calendar, Activity
} from 'lucide-react'
import './styles.css'

const trackEvent = (eventName) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName)
  }
}

const Card = ({ children, className = '' }) => (
  <div className={`card ${className}`}>{children}</div>
)

const services = [
  { icon: Search, title: 'Hidden Talent Discovery', text: 'Lower divisions, youth competitions, B teams and overlooked European and African markets scanned for undervalued players.' },
  { icon: BarChart3, title: 'Recruitment Intelligence', text: 'Player fit, market value, contract situation, upside, tactical role and transfer feasibility combined into one decision view.' },
  { icon: FileText, title: 'Board-Ready Reports', text: 'Clean PDF reports and structured Excel databases designed for sporting directors, scouts and recruitment departments.' },
]

const painPoints = [
  'The best-value players are visible too late.',
  'Traditional scouting often misses lower-market opportunities.',
  'Clubs waste time filtering players who do not fit their model.',
  'Decision makers need clear shortlists, not endless names.',
]

const proofPoints = [
  'Europe-focused hidden player pool',
  '100-player monthly database',
  '20 detailed scout reports',
  'Risk, upside and priority ranking',
  'PDF + Excel delivery',
  'Solo scout model with fast execution',
]

const playerCards = [
  { name: 'Hidden Winger Profile', role: 'RW / LW', age: '19', market: 'Belgium / Netherlands', tag: 'Explosive 1v1', score: '8.4', upside: 'High resale potential' },
  { name: 'Undervalued Midfielder', role: 'CM / AM', age: '20', market: 'Scandinavia', tag: 'Progressive passer', score: '8.1', upside: 'Low-cost opportunity' },
  { name: 'Breakout Striker Type', role: 'ST', age: '21', market: 'Balkan region', tag: 'Box presence', score: '7.9', upside: 'Short-term impact' },
]

const packages = [
  { name: 'Starter Intelligence', price: '€499', period: 'one-off report', note: 'Best for first test mission.', comparison: 'Ideal for first collaboration.', features: ['20-player shortlist', '5 full scout reports', 'Position-based analysis', 'PDF + Excel delivery', 'Delivery in 7–10 days'] },
  { name: 'Elite Monthly Intelligence', price: '€1,499', period: 'per month', note: 'Recommended for clubs. Designed to replace internal scouting time and reduce recruitment noise.',
  roi: 'One successful transfer insight can cover the entire cost.',
  comparison: 'Lower than the cost of a single scouting trip.', featured: true, features: ['100-player hidden pool', '20 full scout reports', 'Risk & upside analysis', 'Transfer priority ranking', 'Executive presentation design', 'Monthly strategy call'] },
  { name: 'Private Recruitment Mandate', price: 'Starting at €2,500', period: 'project-based', limited: 'Limited availability', note: 'Private intelligence for targeted recruitment operations.', features: ['Specific position search', 'Country / league focus', 'Budget filter', 'Final transfer shortlist', 'Club-ready presentation', 'Confidential project delivery'] },
]

const process = [
  'Define the club’s recruitment need, tactical profile and budget zone.',
  'Scan target markets where undervalued players are most likely to appear.',
  'Filter players through data, video, profile fit and transfer feasibility.',
  'Deliver a ranked shortlist with clear next-action recommendations.',
]

function App() {
  return (
    <main>
      <a
        className="floating-whatsapp"
        href="https://wa.me/905363728898?text=Hello%2C%20I%20reviewed%20MI%20Scout.%20Can%20you%20send%20a%20sample%20report%3F"
        target="_blank"
        rel="noreferrer"
        onClick={() => trackEvent("whatsapp_click")}
      >
        <MessageCircle size={20} /> Quick Contact
      </a>

      <section className="hero">
        <div className="hero-bg" />
        <img src="/mi-logo.png" alt="MI Scout watermark" className="watermark" />

        <div className="container">
          <nav className="nav">
            <div className="brand">
              <img src="/mi-logo.png" alt="MI Scout" />
              <span>FOOTBALL RECRUITMENT INTELLIGENCE</span>
            </div>

            <div className="nav-links">
              <a href="#solution">Solution</a>
              <a href="#proof">Preview</a>
              <a href="#insights">Insights</a>
              <a href="#authority">Authority</a>
              <a href="#packages">Pricing</a>
              <a href="#contact">Contact</a>
            </div>
          </nav>

          <div className="hero-grid">
            <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
              <div className="pill"><ShieldCheck size={16} /> For clubs seeking recruitment advantage</div>
              <h1>Recruit smarter before the market catches up</h1>
              <div className="hero-signals">
  <span>Independent Recruitment Intelligence</span>

  <span>Confidential Club Delivery</span>
</div>
              <p className="hero-text">
                MI Scout helps clubs identify undervalued players across Europe and Africa before they become expensive, competitive or out of reach.
                Built for clubs seeking early-market advantage.
                The best transfers are made months before they become obvious.
              </p>

              <div className="actions">
                <a
                  href="/sample-report.pdf"
                  download
                  onClick={() => trackEvent("pdf_download")}
                  className="btn btn-solid"
                >
                  Get Sample Report <Download size={18} />
                </a>

                <a href="#contact" className="btn btn-outline">
                  Request 3-Player Shortlist <ArrowRight size={18} />
                </a>
              </div>

            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.65, delay: 0.1 }}>
              <Card className="report-card">
                <div className="report-inner">
                  <div className="report-head">
                    <div>
                      <p>Monthly Intelligence</p>
                      <h2>Elite Club Intelligence</h2>
                    </div>
                    <Crown className="gold-icon" />
                  </div>

                  <div className="stats">
                    {[
                      ['100', 'Hidden Players'],
                      ['20', 'Full Reports'],
                      ['8', 'Markets'],
                      ['4', 'Priority Tiers']
                    ].map(([n, l]) => (
                      <div className="stat" key={l}>
                        <strong>{n}</strong>
                        <span>{l}</span>
                      </div>
                    ))}
                  </div>

                  <p className="green-box">
                    Built for clubs seeking early-market recruitment advantage.
                  </p>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="container pain">
        {painPoints.map(p => (
          <div className="pain-card" key={p}>
            <AlertTriangle />
            <p>{p}</p>
          </div>
        ))}
      </section>

      <section id="solution" className="section alt">
        <div className="container">
          <div className="section-head">
            <span>The Solution</span>
            <h2>A lean recruitment intelligence service for clubs that need sharper decisions.</h2>
            <p>Instead of sending clubs a long list of names, MI Scout delivers filtered, prioritized and actionable recruitment intelligence.</p>
          </div>

          <div className="grid3">
            {services.map(item => {
              const Icon = item.icon
              return (
                <Card key={item.title}>
                  <Icon className="green-icon" />
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>
            <section id="proof" className="section container">
  <div className="section-head">
    <span>Real Intelligence Preview</span>
    <h2 className="preview-headline">
      What clubs actually receive</h2>
    <p>
      A practical preview of the deliverables: player database, individual scout reports and priority shortlist.
    </p>
  </div>

  <div className="preview-proof-bar">
    <span>PDF Reports</span>
    <span>Scout Dashboard</span>
    <span>Player Cards</span>
    <span>Excel Database</span>
    <span>Priority Shortlist</span>
  </div>

  <div className="preview-grid">
    <div className="pdf-preview-image">
      <img src="/pdf-preview.png" alt="MI Scout PDF Scout Report Preview" />
    </div>

    <div className="dashboard-preview">
      <img src="/scout-dashboard-preview.png" alt="MI Scout Dashboard Preview" />
    </div>

    <div className="player-cards-preview">
      <img src="/player-cards-preview.png" alt="MI Scout Player Cards Preview" />
    </div>

    <div className="excel-preview">
      <img src="/excel-preview.png" alt="MI Scout Excel Database Preview" />
    </div>
  </div>

  <p className="micro">
    Sample data is anonymized. Real reports include player identity, club, contract context and video notes.
  </p>
</section>
            <section id="market-intelligence" className="section container">
  <div className="section-head">
    <span>Market Intelligence</span>
    <h2>Markets and signals currently monitored by MI Scout</h2>
    <p>
      A compact view of the player markets and recruitment signals tracked before profiles become obvious targets.
    </p>
  </div>

  <div className="tracking-strip compact">
    <span>CURRENTLY TRACKING</span>

    <div className="tracking-items">
      <p>Africa</p>
      <p>Balkans</p>
      <p>Belgium</p>
      <p>France</p>
      <p>Netherlands</p>
      <p>Portugal</p>
      <p>Scandinavia</p>
      <p>Türkiye</p>
    </div>
  </div>

  <div className="compact-feed">
    {[
      {
        tag: 'Market Signal',
        title: 'Young winger gaining traction in Belgium / Netherlands corridor'
      },
      {
        tag: 'Role Fit',
        title: 'Scandinavian midfielder profile matching possession-based systems'
      },
      {
        tag: 'Timing Alert',
        title: 'France lower-tier striker entering breakout visibility phase'
      }
    ].map(item => (
      <div className="compact-feed-item" key={item.title}>
        <span>{item.tag}</span>
        <p>{item.title}</p>
      </div>
    ))}
  </div>

  <p className="micro">
    Examples are anonymized. Full intelligence is shared only through club-specific reports.
  </p>
</section>

      <section className="section alt">
        <div className="container two-col">
          <div>
            <span className="eyebrow">Method</span>
            <h2>From scouting need to ranked shortlist.</h2>
          </div>

          <div className="steps">
            {process.map((step, i) => (
              <div className="step" key={step}>
                <b>{i + 1}</b>
                <p>{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
<section id="insights" className="section container">

  <div className="section-head">
    <span>Intelligence Notes</span>

    <h2>Latest recruitment insights</h2>

    <p>
      Short intelligence snapshots focused on undervalued markets,
      breakout profiles and recruitment timing opportunities.
    </p>
  </div>

  <div className="insights-grid">

    <a
  className="insight-card"
  href="/intelligence-note.pdf"
  target="_blank"
  rel="noreferrer"
>
      <div className="insight-meta">
        <span>Belgium</span>
        <span>LIVE</span>
      </div>

      <h3>
        5 undervalued wingers before the 2027 market spike
      </h3>

      <p>
        Wide profiles currently gaining traction across Belgium and
        Netherlands recruitment pipelines.
      </p>
      <div className="insight-link">
  View Intelligence Note →
</div>
    </a>

    <article className="insight-card">
      <div className="insight-meta">
        <span>Scandinavia</span>
        <span>UPDATED</span>
      </div>

      <h3>
        Why Scandinavian midfielders fit possession-heavy systems
      </h3>

      <p>
        Tactical and physical profiles increasingly targeted by clubs
        seeking controlled build-up structures.
      </p>
    </article>

    <article className="insight-card">
      <div className="insight-meta">
        <span>France</span>
        <span>NEW</span>
      </div>

      <h3>
        France lower-tier striker market entering visibility phase
      </h3>

      <p>
        Several forwards are approaching the final undervalued window
        before broader market exposure.
      </p>
    </article>

  </div>

</section>
      <section id="authority" className="section container">
        <div className="two-col">
          <div>
            <span className="eyebrow">Authority</span>
            <h2>Why clubs trust MI Scout</h2>
            <p className="muted">
              MI Scout is not content, media or fan-based analysis. It is a focused recruitment intelligence service built for real club decision making. Independent scouting model → no agency bias, no internal pressure.
            </p>

            <div className="check-list">
              {[
                'Independent solo scout model → fast execution & no internal noise',
                'Focused only on undervalued markets',
                'Reports designed for sporting directors, not social media',
                'Clear shortlist instead of long, unusable player lists',
                'Transfer-oriented thinking (fit, price, timing)',
                'Confidential and club-ready delivery'
              ].map(x => (
                <div key={x}><CheckCircle2 /> {x}</div>
              ))}
            </div>
          </div>

          <div className="authority-boxes">
            <Card><p>Positioning</p><h3>Not another scouting list.</h3><span>A decision-making tool for recruitment departments.</span></Card>
            <Card><p>Focus</p><h3>Hidden markets only</h3><span>Africa, Balkans, Belgium, France, Netherlands, Portugal, Scandinavia, Türkiye.</span></Card>
            <Card><p>Outcome</p><h3>Actionable shortlist</h3><span>Every report leads to a clear next recruitment step.</span></Card>
          </div>
        </div>
      </section>

      <section id="case-study" className="section container">
        <div className="section-head">
          <span>Case Study</span>
          <h2>From longlists to signable targets</h2>
          <p>Example of how MI Scout converts broad scouting needs into clear, actionable recruitment decisions.
            Typical output for clubs operating in €1M–€5M transfer range.
            Want a shortlist like this for your club?</p>
        </div>

        <div className="case-grid">
          <div className="before">
            <p>Before MI Scout</p>
            <h3>Noise, time loss, unclear priorities</h3>
            <ul>
              <li>150+ player names from multiple sources</li>
              <li>No clear tactical fit filtering</li>
              <li>Time wasted on video screening</li>
              <li>No transfer timing insight</li>
            </ul>
          </div>

          <div className="after">
            <p>After MI Scout</p>
            <h3>5-player actionable shortlist</h3>
            <ul>
              <li>100-player filtered database</li>
              <li>20 detailed scout reports</li>
              <li>Top 5 priority targets identified</li>
              <li>Clear sign / monitor / drop decisions</li>
            </ul>
          </div>
        </div>

        <div className="grid3">
          <Card><p>Timeline</p><h3>3 Weeks</h3><span>From request to final shortlist delivery</span></Card>
          <Card><p>Output</p><h3>5 Targets</h3><span>Ready for recruitment action</span></Card>
          <Card><p>Impact</p><h3>Faster Decisions</h3><span>Less scouting noise, more clarity</span></Card>
        </div>
        <p className="micro">Based on real scouting workflow simulations and market analysis.</p>
        <div className="actions" style={{ marginTop: '24px' }}>
  <a href="#contact" className="btn btn-solid">
    Request 3-Player Shortlist <ArrowRight size={18} />
  </a>
</div>
      </section>

      <section id="packages" className="section container">
        <div className="section-head center">
          <span>Pricing</span>
          <h2>Simple packages for serious recruitment.</h2>
          <p className="muted">
  Built for clubs seeking long-term recruitment advantage.</p>
        </div>

        <div className="grid3">
          {packages.map(pkg => (
            <Card key={pkg.name} className={pkg.featured ? 'featured' : ''}>
              {pkg.featured && (
    <div className="popular-badge">
      MOST POPULAR
    </div>
  )}
              <div className="pkg-head">
                <h3>{pkg.name}</h3>
                {pkg.limited && (
  <div className="limited-badge">
    {pkg.limited}
  </div>
)}
                {pkg.featured ? (
  <Crown />
) : pkg.name === 'Private Recruitment Mandate' ? (
  <Lock />
) : null}
              </div>

              <h4>{pkg.price}</h4>
              <p>{pkg.period}</p>
              <span>{pkg.note}</span>
<p className="roi-text">{pkg.roi}</p>
<p className="comparison-text">{pkg.comparison}</p>
              <div className="pkg-features">
                {pkg.features.map(f => (
                  <div key={f}><CheckCircle2 />{f}</div>
                ))}
              </div>
              <div className="actions" style={{ marginTop: '20px' }}>
  <a href="#contact" className="btn btn-solid">
  {pkg.featured
    ? 'Start Monthly Intelligence'
    : pkg.name === 'Private Recruitment Mandate'
      ? 'Request Private Consultation'
      : 'Request This Package'}
</a>
</div>
            </Card>
          ))}
        </div>
      </section>

      <section className="section container value">
        <Card><Eye className="green-icon" /><h3>Early visibility</h3><p>Spot players before competition increases and price rises.</p></Card>
        <Card><TrendingUp className="green-icon" /><h3>Transfer upside</h3><p>Identify profiles with resale potential and development value.</p></Card>
        <Card><FileText className="green-icon" /><h3>Decision-ready</h3><p>Reports designed to support fast, confident recruitment decisions.</p></Card>
      </section>

      <section id="contact" className="contact">
        <div className="logo-center"><img src="/mi-logo.png" alt="MI Scout" /></div>

        <div className="container two-col">
          <div>
            <span className="eyebrow">Contact</span>
            <h2>Start building your competitive edge.</h2>
            <p className="muted">
              Request a sample report and see how MI Scout can support your club’s recruitment strategy.
              Limited number of clubs accepted each month.
            </p>

            <div className="actions">
              <a
                href="mailto:miscoutpro@gmail.com"
                className="btn btn-solid"
                onClick={() => trackEvent("email_click")}
              >
                <Mail size={18} /> Email: miscoutpro@gmail.com
              </a>

              <a
                href="https://wa.me/905363728898?text=Hello%2C%20I%20reviewed%20MI%20Scout.%20Can%20you%20send%20a%20sample%20report%3F"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline"
                onClick={() => trackEvent("whatsapp_click")}
              >
                <MessageCircle size={20} /> Contact MI Scout
              </a>
            </div>
          </div>

          <Card>
            <h3>Request a sample report</h3>

            <form
              action="https://formspree.io/f/xojrqqad"
              method="POST"
              className="form"
              onSubmit={() => trackEvent("lead_form_submit")}
            >
              <div className="contact-note">
  <p>
    Private recruitment requests are reviewed manually.
  </p>

  <span>
    Limited number of club partnerships accepted monthly.
  </span>
</div>
              <input name="name" placeholder="Name" required />
              <input name="club" placeholder="Club / Company" />
              <input name="email" type="email" placeholder="Email" required />
              <select name="interest">
                <option>Interested in...</option>
                <option>Starter Intelligence</option>
                <option>Elite Monthly Intelligence</option>
                <option>Custom Recruitment Mission</option>
              </select>
              <textarea name="message" placeholder="Tell us your recruitment need"></textarea>

              <button type="submit" className="btn btn-solid">
                Request Intelligence <ArrowRight size={18} />
              </button>
              <p className="secure-payment-note">
  Secure invoice-based payments for professional club collaborations.
</p>
            </form>
          </Card>
        </div>
      </section>
      <section id="legal" className="legal-section">
  <div id="privacy" className="legal-card">
    <h3>Privacy Policy</h3>
    <p>
      MI Scout respects the privacy of clubs, recruitment departments, scouts and visitors using this website.
      Information submitted through contact forms may be used to respond to inquiries, deliver recruitment intelligence services and improve website functionality.
      MI Scout does not sell personal information to third parties.
    </p>
  </div>

  <div id="terms" className="legal-card">
    <h3>Terms of Service</h3>
    <p>
      MI Scout provides independent football recruitment intelligence, scouting analysis and market-focused reporting for informational and recruitment evaluation purposes.
      MI Scout does not guarantee transfers, contract agreements, recruitment outcomes or sporting performance.
    </p>
  </div>

  <div id="ip-notice" className="legal-card">
    <h3>Intellectual Property Notice</h3>
    <p>
      © 2026 MI Scout. All scouting reports, recruitment intelligence notes, databases, visual layouts, branding elements and written analysis are protected.
      Unauthorized reproduction, redistribution or commercial reuse is prohibited.
    </p>
  </div>
</section>
      <footer className="site-footer">
  <p>
    © 2026 MI Scout — Confidential recruitment intelligence for modern football clubs.
  </p>

  <div className="legal-links">
    <a href="#privacy">Privacy Policy</a>
    <a href="#terms">Terms of Service</a>
    <a href="#ip-notice">Intellectual Property Notice</a>
  </div>
</footer>
      <button
  className="back-to-top"
  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
>
  ↑
</button>
    </main>
  )
}

createRoot(document.getElementById('root')).render(<App />)
