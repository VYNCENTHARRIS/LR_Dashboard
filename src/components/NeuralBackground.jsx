// src/components/NeuralBackground.jsx
import { useEffect, useRef } from 'react';
import './NeuralBackground.css';

const NeuralBackground = () => {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const DPR = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = width * DPR;
    canvas.height = height * DPR;
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';
    ctx.scale(DPR, DPR);

    const NODE_COUNT = Math.min(120, Math.floor((width * height) / 18000));
    const MAX_DIST = Math.min(180, Math.max(100, Math.sqrt(width * height) / 12));

    const nodes = Array.from({ length: NODE_COUNT }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
      r: 1.2 + Math.random() * 1.8,
    }));

    function step() {
      ctx.clearRect(0, 0, width, height);

      ctx.shadowBlur = 10;
      ctx.shadowColor = 'rgba(0,212,255,0.6)';

      // edges
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const d2 = dx * dx + dy * dy;
          if (d2 < MAX_DIST * MAX_DIST) {
            const alpha = 1 - Math.sqrt(d2) / MAX_DIST;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0,212,255,${0.12 * alpha})`;
            ctx.lineWidth = 1;
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // nodes
      for (const n of nodes) {
        ctx.beginPath();
        ctx.fillStyle = 'rgba(0,212,255,0.9)';
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
      }

      // motion
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < -50) n.x = width + 50;
        if (n.x > width + 50) n.x = -50;
        if (n.y < -50) n.y = height + 50;
        if (n.y > height + 50) n.y = -50;
      }

      rafRef.current = requestAnimationFrame(step);
    }

    rafRef.current = requestAnimationFrame(step);

    const onResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * DPR;
      canvas.height = height * DPR;
      canvas.style.width = width + 'px';
      canvas.style.height = height + 'px';
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    };

    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return <canvas className="neural-bg-canvas" ref={canvasRef} />;
};

export default NeuralBackground;
