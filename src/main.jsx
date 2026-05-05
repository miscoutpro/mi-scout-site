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
  { icon: Search, title: 'Hidden Talent Discovery', text: 'Lower divisions, youth competitions, B teams and overlooked European markets scanned for undervalued players.' },
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
  { name: 'Starter Intelligence', price: '€499', period: 'one-off report', note: 'Best for first test mission', features: ['20-player shortlist', '5 full scout reports', 'Position-based analysis', 'PDF + Excel delivery', 'Delivery in 7–10 days'] },
  { name: 'Elite Monthly Intelligence', price: '€1,499', period: 'per month', note: 'Recommended for clubs', featured: true, features: ['100-player hidden pool', '20 full scout reports', 'Risk & upside analysis', 'Transfer priority ranking', 'Executive presentation design', 'Monthly strategy call'] },
  { name: 'Custom Recruitment Mission', price: 'From €2,500', period: 'project-based', note: 'For specific club needs', features: ['Specific position search', 'Country / league focus', 'Budget filter', 'Final transfer shortlist', 'Club-ready presentation', 'Confidential project delivery'] },
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
        href="https://wa.me/905363728898"
        target="_blank"
        rel="noreferrer"
        onClick={() => trackEvent("whatsapp_click")}
      >
        <MessageCircle size={18} /> WhatsApp
      </a>

      <section className="hero">
        <div className="hero-bg" />
        <img src="/mi-logo.png" alt="MI Scout watermark" className="watermark" />

        <div className="container">
          <nav className="nav">
            <div className="brand">
              <img src="/mi-logo.png" alt="MI Scout" />
              <span>ELITE RECRUITMENT INTELLIGENCE</span>
            </div>

            <div className="nav-links">
              <a href="#solution">Solution</a>
              <a href="#sample">Sample</a>
              <a href="#authority">Authority</a>
              <a href="#packages">Pricing</a>
              <a href="#contact">Contact</a>
            </div>
          </nav>

          <div className="hero-grid">
            <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
              <div className="pill"><ShieldCheck size={16} /> For clubs seeking recruitment advantage</div>
              <h1>Discover talent before the market does.</h1>
              <p className="hero-text">
                MI Scout helps football clubs identify undervalued players across Europe before they become expensive, crowded or obvious transfer targets.
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
                  Request Shortlist <ArrowRight size={18} />
                </a>
              </div>

              <div className="tags">
                <span>PDF Reports</span><span>Excel Database</span><span>Europe Focus</span><span>Hidden Talents</span>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.65, delay: 0.1 }}>
              <Card className="report-card">
                <div className="report-inner">
                  <div className="report-head">
                    <div>
                      <p>Monthly Intelligence</p>
                      <h2>Elite Club Report</h2>
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
                    Built for sporting directors, recruitment departments and ambitious clubs looking for early-market advantage.
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

      <section id="sample" className="section container">
        <div className="two-col">
          <div>
            <span className="eyebrow">Sample Output</span>
            <h2>A real scout report experience, built for decision makers.</h2>
            <p className="muted">
              Each delivery includes a structured database, individual player reports, market notes and a final priority ranking.
            </p>

            <div className="check-list">
              {proofPoints.map(p => (
                <div key={p}><CheckCircle2 /> {p}</div>
              ))}
            </div>

            <div className="actions">
              <a
                className="btn btn-solid"
                href="/sample-report.pdf"
                download
                onClick={() => trackEvent("pdf_download")}
              >
                <Download size={18} /> Get Sample Report
              </a>

              <a
                className="btn btn-outline"
                href="/sample-report.pdf"
                target="_blank"
                rel="noreferrer"
                onClick={() => trackEvent("pdf_preview_click")}
              >
                <ExternalLink size={18} /> View Report Preview
              </a>
            </div>
          </div>

          <Card>
            <div className="preview-head">
              <div>
                <p>PDF Preview</p>
                <h3>Player Report Page</h3>
              </div>
              <FileText className="green-icon" />
            </div>

            <div className="pdf-preview">
              <div className="pdf-top">
                <div>
                  <p>CONFIDENTIAL PROFILE</p>
                  <h4>Hidden Winger Profile</h4>
                  <span>RW / LW · 19 · Europe</span>
                </div>
                <div className="score">MI Score<br /><b>8.4</b></div>
              </div>

              {['Role Fit: High', 'Market Risk: Medium', 'Transfer Priority: Tier 1', 'Upside: High resale potential'].map(x => (
                <div className="metric" key={x}>{x}</div>
              ))}
            </div>
          </Card>
        </div>

        <div className="player-section">
          <div className="section-head small">
            <span>Player Cards</span>
            <h3>Recruitment shortlist carousel</h3>
          </div>

          <div className="grid3">
            {playerCards.map(player => (
              <Card key={player.name}>
                <div className="player-head">
                  <div>
                    <span>{player.tag}</span>
                    <h4>{player.name}</h4>
                  </div>
                  <div className="mini-score"><Star size={16} />{player.score}</div>
                </div>

                <div className="player-info">
                  <p><Activity size={16} />{player.role}</p>
                  <p><Calendar size={16} />Age {player.age}</p>
                  <p><MapPin size={16} />{player.market}</p>
                </div>

                <p className="green-box">{player.upside}</p>
              </Card>
            ))}
          </div>
        </div>
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

      <section id="authority" className="section container">
        <div className="two-col">
          <div>
            <span className="eyebrow">Authority</span>
            <h2>Why clubs trust MI Scout</h2>
            <p className="muted">
              MI Scout is not content, media or fan-based analysis. It is a focused recruitment intelligence service built for real club decision making.
            </p>

            <div className="check-list">
              {[
                'Independent solo scout model → fast execution & no internal noise',
                'Focused only on undervalued European markets',
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
            <Card><p>Focus</p><h3>Hidden markets only</h3><span>Belgium, Netherlands, France lower tiers, Scandinavia, Balkans.</span></Card>
            <Card><p>Outcome</p><h3>Actionable shortlist</h3><span>Every report leads to a clear next recruitment step.</span></Card>
          </div>
        </div>
      </section>

      <section id="case-study" className="section container">
        <div className="section-head">
          <span>Case Study</span>
          <h2>From longlists to signable targets</h2>
          <p>Example of how MI Scout converts broad scouting needs into clear, actionable recruitment decisions.</p>
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
      </section>

      <section id="packages" className="section container">
        <div className="section-head center">
          <span>Pricing</span>
          <h2>Simple packages for serious recruitment.</h2>
        </div>

        <div className="grid3">
          {packages.map(pkg => (
            <Card key={pkg.name} className={pkg.featured ? 'featured' : ''}>
              <div className="pkg-head">
                <h3>{pkg.name}</h3>
                {pkg.featured ? <Euro /> : <Lock />}
              </div>

              <h4>{pkg.price}</h4>
              <p>{pkg.period}</p>
              <span>{pkg.note}</span>

              <div className="pkg-features">
                {pkg.features.map(f => (
                  <div key={f}><CheckCircle2 />{f}</div>
                ))}
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
                href="https://wa.me/905363728898"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline"
                onClick={() => trackEvent("whatsapp_click")}
              >
                <MessageCircle size={18} /> WhatsApp
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
                Send Request <ArrowRight size={18} />
              </button>
            </form>
          </Card>
        </div>
      </section>
    </main>
  )
}

createRoot(document.getElementById('root')).render(<App />)
