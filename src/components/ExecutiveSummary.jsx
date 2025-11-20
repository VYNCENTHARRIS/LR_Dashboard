// src/components/ExecutiveSummary.jsx
import './ExecutiveSummary.css';

function ExecutiveSummary() {
  return (
    <section className="ai-executive">
      <div className="chart-card full-width exec-card">
        <div className="chart-header">
          <h3>Executive Summary</h3>
        </div>

        <p className="exec-summary-text">
          <strong>Performance.</strong> In 2018 CATS light-rail carried about <strong>7.1 million</strong>{' '}
  unlinked passenger trips. COVID pushed that down to a low of <strong>2.6 million</strong> in
  2021 – roughly a 63% drop. Since then ridership has rebounded <strong>96%</strong>, back up to
  about <strong>5.1 million</strong> trips in 2023, or roughly 72% of the 2018 baseline.
</p>
<p className="exec-summary-text">
  <strong>Mandate &amp; timing.</strong> In the Transit System Plan engagement,
  <strong> 93%</strong> of participants said Mecklenburg County needs more transit options, and
  the plan outlines <strong>43 additional miles of light rail</strong>. An ACCC survey of
  non-Charlotte voters found <strong>62%</strong> open to increased transit funding. Together
  those signals make <strong>2025</strong> a narrow window to advance corridor studies and fund
  a first phase while ridership and public support are both trending up.
</p>
        </div>
    </section>
  );
}

export default ExecutiveSummary;
