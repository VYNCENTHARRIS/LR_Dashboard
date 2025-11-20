import './TopBar.css';

function TopBar() {
  return (
    <header className="topbar">
      <div className="topbar-left">
        <div className="topbar-title">Charlotte Mobility Dashboard</div>
        <div className="topbar-subtitle">
          Ridership recovery &amp; public support for light-rail expansion
        </div>
      </div>

      <div className="topbar-right">
        {/* These are simple placeholders for now.
            We’ll turn them into real dropdowns later. */}
        <div className="topbar-filter">
          <span className="topbar-filter-label">View</span>
          <span className="topbar-filter-value">Ridership &amp; Support</span>
        </div>
        <div className="topbar-filter">
          <span className="topbar-filter-label">Horizon</span>
          <span className="topbar-filter-value">Actuals 2018–2023</span>
        </div>
        <div className="topbar-status">
          <span className="topbar-status-dot" />
          <span className="topbar-status-text">Status: At Risk</span>
        </div>
      </div>
    </header>
  );
}

export default TopBar;
