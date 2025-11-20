import './App.css';
import BackgroundGlow from './components/BackgroundGlow.jsx';
import ExecutiveSummary from './components/ExecutiveSummary.jsx';
import MetricsRow from './components/MetricsRow.jsx';
import RidershipChart from './components/RidershipChart.jsx';
import NeuralBackground from './components/NeuralBackground.jsx';
import EquityView from './components/EquityView.jsx';



function App() {
  return (
    <div className="dashboard">
      <NeuralBackground />
      <BackgroundGlow />

      <header className="dashboard-header">
        <div className="header-content">
          <div className="header-left">
            <div className="header-title">
              <h1>Charlotte Mobility Dashboard</h1>
              <p className="subtitle">
                Ridership recovery &amp; public support for light-rail expansion
              </p>
            </div>
          </div>
          <div className="header-right">
            <div className="status-indicator">
              <div className="status-dot" />
              <span>Static demo</span>
            </div>
            <div className="last-update">
              Data: FTA, City of Charlotte, ACCC (2018–2023)
            </div>
          </div>
        </div>
      </header>

      <main className="dashboard-content">
        <ExecutiveSummary />
        <MetricsRow />
        <RidershipChart />
        <EquityView />
      </main>
    </div>
  );
}

export default App;
