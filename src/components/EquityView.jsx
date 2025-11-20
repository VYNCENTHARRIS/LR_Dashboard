import './EquityView.css';
import charlotteMap from '../charlotte.webp';

function EquityView() {
  return (
    <section className="map-insights-section">
      {/* Left: corridor map + quick stats */}
      <div className="map-card">
        <div className="map-header">
          <h3>Equity &amp; Corridors</h3>
          <p className="map-subtitle">
            Charlotte&apos;s original five-corridor vision and who the next phase of light rail
            is meant to serve.
          </p>
        </div>

        <div className="map-image-wrapper">
          <img
            src={charlotteMap}
            alt="Charlotte regional transit corridors from Uptown to Rock Hill, Gastonia, Lake Norman, Concord, and Monroe"
            className="map-image"
          />
        </div>

        <div className="map-stats">
          <div className="map-stat-chip">
            5 regional spokes: Rock Hill, Gastonia, Lake Norman, Concord &amp; Monroe
          </div>
          <div className="map-stat-chip">
            Inner ring ties Uptown to close-in neighborhoods around Center City
          </div>
          <div className="map-stat-chip">
            Heat zones highlight existing job and activity clusters along each corridor
          </div>
        </div>
      </div>

      {/* Right: narrative + priorities */}
      <div className="insights-card">
        <h3>Why these corridors matter</h3>
        <ul className="equity-list">
          <li>
            <strong>Access to opportunity.</strong> Each spoke links Uptown to job centers and
            retail hubs in Rock Hill, Gaston County, Lake Norman, Concord, and Monroe – places
            where many workers commute, but not everyone has reliable car access.
          </li>
          <li>
            <strong>Growth pattern.</strong> Corridors follow existing commuter highways (I-77,
            I-85, US-74) where congestion, new housing, and freight lines already concentrate
            travel. The heat spots on the map show growth nodes that high-capacity transit can
            serve.
          </li>
          <li>
            <strong>Regional balance.</strong> Extends investment beyond the existing Blue Line to
            the west, north, and southeast, so fast, reliable transit isn&apos;t limited to one
            part of Mecklenburg County.
          </li>
        </ul>

        <h4 className="equity-subheading">Near-term priorities for 2025</h4>
        <ol className="equity-priority-list">
          <li>
            Fund updated corridor studies for at least one east–west and one north–south line
            drawn on this map.
          </li>
          <li>
            Publish an equity scorecard for each corridor – jobs, zero-car households, and
            essential services within a ½-mile walk of each station area.
          </li>
          <li>
            Report progress quarterly in the same public dashboard as ridership and support, so
            residents can see how each corridor is moving from map to project.
          </li>
        </ol>
      </div>
    </section>
  );
}

export default EquityView;
