// src/components/MetricsRow.jsx
import { Activity, TrendingUp, Users, CheckCircle, Globe } from 'lucide-react';


function MetricsRow() {
  return (
    <section className="hero-metrics">
      {/* 2023 Ridership */}
      <div className="hero-metric-card primary">
        <div className="metric-icon">
          <Activity size={32} />
        </div>
        <div className="metric-content">
          <div className="metric-label">Ridership (2023)</div>
          <div className="metric-value">5.08M</div>
          <div className="metric-subtitle">
            Unlinked passenger trips (CATS light rail)
          </div>
        </div>
      </div>

      {/* Recovery since 2021 */}
      <div className="hero-metric-card success">
        <div className="metric-icon">
          <TrendingUp size={32} />
        </div>
        <div className="metric-content">
          <div className="metric-label">Recovery Since 2021</div>
          <div className="metric-value">+96%</div>
          <div className="metric-subtitle">
            Ridership growth from pandemic low (2021 → 2023)
          </div>
        </div>
      </div>

      {/* Public support for more transit */}
      <div className="hero-metric-card info">
        <div className="metric-icon">
          <Users size={32} />
        </div>
        <div className="metric-content">
          <div className="metric-label">Want More Transit Options</div>
          <div className="metric-value">93%</div>
          <div className="metric-subtitle">
            Residents signaling desire for more transit (TSP 2025 engagement)
          </div>
        </div>
      </div>

      {/* Support for funding */}
      <div className="hero-metric-card warning">
        <div className="metric-icon">
          <CheckCircle size={32} />
        </div>
        <div className="metric-content">
          <div className="metric-label">Open to Transit Funding</div>
          <div className="metric-value">62%</div>
          <div className="metric-subtitle">
            Mecklenburg voters supporting transit funding (ACCC 2021 survey)
          </div>
        </div>
      </div>

      {/* Planned rail miles */}
      <div className="hero-metric-card info">
        <div className="metric-icon">
          <Globe size={32} />
        </div>
        <div className="metric-content">
          <div className="metric-label">Planned Rail Expansion</div>
          <div className="metric-value">+43 mi</div>
          <div className="metric-subtitle">
            Additional light-rail miles in Transit System Plan future modes
          </div>
        </div>
      </div>
    </section>
  );
}

export default MetricsRow;
