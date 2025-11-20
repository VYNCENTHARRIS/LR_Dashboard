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
  BarChart,
  Bar,
} from 'recharts';
import './RidershipChart.css';
import { ridershipActuals, ridershipProjections } from '../data/ridership';
import { supportData } from '../data/support';
import { railMilesData } from '../data/railMiles';
import { metroPopulationData } from '../data/population';

// Merge actuals + projections into one array for Recharts (ridership)
const buildChartData = () => {
  const actualMap = new Map(ridershipActuals.map((d) => [d.year, d.value]));
  const projMap = new Map(ridershipProjections.map((d) => [d.year, d.projected]));

  const allYears = [...new Set([...actualMap.keys(), ...projMap.keys()])].sort(
    (a, b) => a - b,
  );

  return allYears.map((year) => ({
    year,
    actual: actualMap.get(year) ?? null,
    projected: projMap.get(year) ?? null,
  }));
};

const ridershipChartData = buildChartData();
const maxRailMiles = Math.max(...railMilesData.map((d) => d.miles));

function RidershipChart() {
  return (
    <section className="charts-section">
      {/* Full-width ridership chart */}
      <div className="chart-card full-width">
        <div className="chart-header">
          <h3>Ridership Trend &amp; Projection</h3>
          <div className="prediction-badge">
            <span className="prediction-label">Model</span>
            <span className="prediction-value">
              Linear-style projection based on 2021–2023 recovery (millions of trips)
            </span>
          </div>
        </div>

        <div className="chart-container">
          <ResponsiveContainer width="100%" height={320}>
            <ComposedChart
              data={ridershipChartData}
              margin={{ top: 20, right: 24, bottom: 0, left: 64 }}
            >
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
                  value: 'Unlinked trips (M)',
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
                  const label =
                    name === 'actual'
                      ? 'Actual ridership (M)'
                      : 'Projected ridership (M)';
                  return [value.toFixed(2), label];
                }}
                labelFormatter={(value) => `Year ${value}`}
              />

              {/* Area & line for actuals */}
              <Area
                type="monotone"
                dataKey="actual"
                fill="url(#ridershipGradient)"
                stroke="none"
                fillOpacity={1}
                connectNulls={false}
              />
              <Line
                type="monotone"
                dataKey="actual"
                stroke="#00d4ff"
                strokeWidth={2.4}
                dot={false}
                connectNulls={false}
              />

              {/* Glow line on top of actuals */}
              <Line
                type="monotone"
                dataKey="actual"
                stroke="#ffffff"
                strokeWidth={1.6}
                dot={false}
                connectNulls={false}
                className="ridership-glow-line"
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

        <p className="chart-footnote">
          Ridership shown as unlinked passenger trips in millions (CATS light rail, FTA annual
          reports).
        </p>
      </div>

      {/* Public Support chart */}
      <div className="chart-card">
        <div className="chart-header">
          <h3>Public Support for Transit</h3>
        </div>
        <div className="chart-container small">
          <ResponsiveContainer width="100%" height={220}>
            <BarChart
              data={supportData}
              margin={{ top: 16, right: 24, bottom: 0, left: 44 }}
              barSize={200}
              barCategoryGap="20%"
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#2a3f5f" vertical={false} />
              <XAxis
                dataKey="key"
                stroke="#8b9dc3"
                tickLine={false}
                axisLine={{ stroke: '#2a3f5f' }}
              />
              <YAxis
                stroke="#8b9dc3"
                tickLine={false}
                axisLine={{ stroke: '#2a3f5f' }}
                domain={[50, 100]}
                ticks={[50, 60, 70, 80, 90, 100]}
                label={{
                  value: 'Support (%)',
                  angle: -90,
                  position: 'insideLeft',
                  fill: '#8b9dc3',
                }}
              />
              <Tooltip
                cursor={false}
                contentStyle={{
                  backgroundColor: '#1a2332',
                  border: '1px solid #2a3f5f',
                  borderRadius: 8,
                }}
                labelStyle={{ color: '#e5e7eb' }}
                formatter={(value) => [`${value}%`, 'Support']}
                labelFormatter={(value) =>
                  value === 'ACCC 2021'
                    ? 'Funding support (ACCC 2021)'
                    : 'Want more transit (TSP engagement)'
                }
              />
              <Bar dataKey="percent" fill="#00d4ff" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
          <p className="chart-footnote">
            ACCC 2021 survey of non-Charlotte Mecklenburg; City of Charlotte TSP engagement
            (2025).
          </p>
        </div>
      </div>

      {/* Rail miles chart */}
      <div className="chart-card">
        <div className="chart-header">
          <h3>Rail Network: Today vs Future Plan</h3>
        </div>
        <div className="chart-container small">
          <ResponsiveContainer width="100%" height={220}>
            <BarChart
              data={railMilesData}
              margin={{ top: 16, right: 24, bottom: 0, left: 44 }}
              barSize={200}
              barCategoryGap="50%"
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#2a3f5f" vertical={false} />
              <XAxis
                dataKey="scenario"
                stroke="#8b9dc3"
                tickLine={false}
                axisLine={{ stroke: '#2a3f5f' }}
              />
              <YAxis
                stroke="#8b9dc3"
                tickLine={false}
                axisLine={{ stroke: '#2a3f5f' }}
                domain={[0, maxRailMiles + 10]}
                ticks={[0, 10, 20, 30, 40, 50, 60]}
                label={{
                  value: 'Miles of rail',
                  angle: -90,
                  position: 'insideLeft',
                  fill: '#8b9dc3',
                }}
              />
              <Tooltip
                cursor={false}
                contentStyle={{
                  backgroundColor: '#1a2332',
                  border: '1px solid #2a3f5f',
                  borderRadius: 8,
                }}
                labelStyle={{ color: '#e5e7eb' }}
                formatter={(value) => [`${value.toFixed(1)} mi`, 'Miles of rail']}
              />
              <Bar dataKey="miles" fill="#22c55e" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
          <p className="chart-footnote">
            Future miles assume +43 mi from Transit System Plan future modes.
          </p>
        </div>
      </div>

            {/* Metro population chart */}
      <div className="chart-card chart-card-wide">
        <div className="chart-header">
          <h3>Metro Population: Past &amp; Projection</h3>
          <div className="prediction-badge">
            <span className="prediction-label">Model</span>
            <span className="prediction-value">
              Charlotte–Concord–Gastonia MSA
            </span>
          </div>
        </div>
        <div className="chart-container small">
          <ResponsiveContainer width="100%" height={220}>
            <ComposedChart
              data={metroPopulationData}
              margin={{ top: 16, right: 24, bottom: 0, left: 44 }}
            >
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
                domain={[1, 5]}
                ticks={[1, 2, 3, 4, 5]}
                label={{
                  value: 'Population (M)',
                  angle: -90,
                  position: 'insideLeft',
                  fill: '#8b9dc3',
                }}
              />
              <Tooltip
                cursor={false}
                contentStyle={{
                  backgroundColor: '#1a2332',
                  border: '1px solid #2a3f5f',
                  borderRadius: 8,
                }}
                labelStyle={{ color: '#e5e7eb' }}
                formatter={(value, name) => {
                  if (value == null) return ['—', name];
                  const label =
                    name === 'actual'
                      ? 'Actual population (M)'
                      : 'Projected population (M)';
                  return [value.toFixed(2), label];
                }}
                labelFormatter={(year) =>
                  year === 2050
                    ? '2050: CLT metro projected to grow ~60% vs 2024'
                    : `Year ${year}`
                }
              />

              {/* Actual population area + purple line */}
              <Area
                type="monotone"
                dataKey="actual"
                fill="url(#metroPopGradient)"
                stroke="none"
                fillOpacity={1}
                connectNulls={false}
              />
              <Line
                type="monotone"
                dataKey="actual"
                stroke="#a855f7"          // purple main line
                strokeWidth={2}
                dot={{ r: 3 }}
                connectNulls={false}
              />

              {/* White animated glow line over actuals */}
              <Line
                type="monotone"
                dataKey="actual"
                stroke="#ffffff"
                strokeWidth={1.6}
                dot={false}
                connectNulls={false}
                className="metro-glow-line"
              />

              {/* Projected population dashed line */}
              <Line
                type="monotone"
                dataKey="projected"
                stroke="#e5e7eb"
                strokeWidth={2}
                strokeDasharray="6 8"
                dot={{ r: 3 }}
                connectNulls={false}
              />

              <defs>
                <linearGradient id="metroPopGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#c084fc" stopOpacity={0.9} />
                  <stop offset="95%" stopColor="#c084fc" stopOpacity={0} />
                </linearGradient>
              </defs>
            </ComposedChart>
          </ResponsiveContainer>
          <p className="chart-footnote">
            As the Charlotte–Concord–Gastonia metro grows to 4.6 million by 2050. The need for light rail transit is paramount.
          
          </p>
        </div>
      </div>

    </section>
  );
}

export default RidershipChart;
