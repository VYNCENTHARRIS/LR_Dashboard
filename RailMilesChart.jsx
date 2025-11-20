// src/components/RidershipChart.jsx
import {
  ResponsiveContainer,
  ComposedChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Area,
  Line,
} from 'recharts';
import './RidershipChart.css';
import { ridershipActuals, ridershipProjections } from '../data/ridership';

// Merge actuals + projections into one array for Recharts
const buildChartData = () => {
  const actualMap = new Map(ridershipActuals.map((d) => [d.year, d.value]));
  const projMap = new Map(ridershipProjections.map((d) => [d.year, d.projected]));

  const allYears = [
    ...new Set([...actualMap.keys(), ...projMap.keys()]),
  ].sort((a, b) => a - b);

  return allYears.map((year) => ({
    year,
    actual: actualMap.get(year) ?? null,
    projected: projMap.get(year) ?? null,
  }));
};

const chartData = buildChartData();

function RidershipChart() {
  return (
    <section className="charts-section">
      <div className="chart-card full-width">
        <div className="chart-header">
          <h3>Ridership Trend &amp; Projection</h3>
          <div className="prediction-badge">
            <span className="prediction-label">Model</span>
            <span className="prediction-value">
              Simple linear-style projection (2018–2023 baseline)
            </span>
          </div>
        </div>

        <div className="chart-container">
          <ResponsiveContainer width="100%" height={320}>
            <ComposedChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#2a3f5f" />
              <XAxis
                dataKey="year"
                stroke="#8b9dc3"
                tickLine={false}
                axisLine={{ stroke: '#2a3f5f' }}
              />
              <YAxis
                stroke="#8b9dc3"
                tickLine={false}
                axisLine={{ stroke: '#2a3f5f' }}
                label={{
                  value: 'Index (2018 = 100)',
                  angle: -90,
                  position: 'insideLeft',
                  fill: '#8b9dc3',
                }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#1a2332',
                  border: '1px solid #2a3f5f',
                  borderRadius: 8,
                }}
                labelStyle={{ color: '#e5e7eb' }}
                formatter={(value, name) => {
                  if (value == null) return ['—', name];
                  return [value, name === 'actual' ? 'Actual index' : 'Projected index'];
                }}
                labelFormatter={(value) => `Year ${value}`}
              />

              {/* Area for actuals */}
              <Area
                type="monotone"
                dataKey="actual"
                fill="url(#ridershipGradient)"
                stroke="none"
                fillOpacity={1}
              />

              {/* Solid line for actuals */}
              <Line
                type="monotone"
                dataKey="actual"
                stroke="#00d4ff"
                strokeWidth={2.4}
                dot={false}
              />

              {/* Dashed line for projections */}
              <Line
                type="monotone"
                dataKey="projected"
                stroke="#ffffff"
                strokeWidth={2}
                strokeDasharray="6 8"
                dot={false}
              />

              <defs>
                <linearGradient id="ridershipGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#00d4ff" stopOpacity={0.9} />
                  <stop offset="95%" stopColor="#00d4ff" stopOpacity={0} />
                </linearGradient>
              </defs>
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
}

export default RidershipChart;
