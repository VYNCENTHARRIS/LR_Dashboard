// src/components/BackgroundGlow.jsx
// Uses the .animated-bg and .gradient-orb classes from App.css

function BackgroundGlow() {
  return (
    <div className="animated-bg">
      <div className="gradient-orb orb-1" />
      <div className="gradient-orb orb-2" />
      <div className="gradient-orb orb-3" />
    </div>
  );
}

export default BackgroundGlow;
