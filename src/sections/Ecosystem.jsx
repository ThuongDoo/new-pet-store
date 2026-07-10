import { useEffect, useRef } from "react";
import "./Ecosystem.css";
import Reveal from "./Reveal";
import { CLIENT_DATA } from "../data/clientData";

export default function Ecosystem({ data = CLIENT_DATA }) {
  const { story } = data;
  const sectionRef = useRef(null);
  const layerRefs = useRef([]);

  const particles = Array.from({ length: 16 }, (_, i) => ({
    left: (4 + ((i * 53.7) % 92)).toFixed(1),
    delay: ((i * 3.7) % 8).toFixed(2),
    dur: (7 + ((i * 2.9) % 6)).toFixed(2),
    size: (2 + ((i * 1.3) % 3)).toFixed(1),
  }));

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;
    const handleMove = (e) => {
      const rect = node.getBoundingClientRect();
      const cx = (e.clientX - rect.left) / rect.width - 0.5;
      const cy = (e.clientY - rect.top) / rect.height - 0.5;
      layerRefs.current.forEach((el, i) => {
        if (!el) return;
        const f = 0.6 + i * 0.5;
        el.style.transform = `translate(${cx * f * 16}px, ${cy * f * 12}px)`;
      });
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <section className="eco" id="gioi-thieu" ref={sectionRef}>
      <div
        className="eco-glow eco-glow1"
        ref={(el) => (layerRefs.current[0] = el)}
      ></div>
      <div
        className="eco-glow eco-glow2"
        ref={(el) => (layerRefs.current[1] = el)}
      ></div>
      <div
        className="eco-glow eco-glow3"
        ref={(el) => (layerRefs.current[2] = el)}
      ></div>

      <div className="eco-particles" aria-hidden="true">
        {particles.map((p, i) => (
          <span
            key={i}
            style={{
              left: `${p.left}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.dur}s`,
            }}
          />
        ))}
      </div>

      <div className="section-wrap eco-wrap">
        <Reveal className="eco-copy">
          <div className="eco-eyebrow">✦ {story.eyebrow}</div>
          <h2 className="eco-h2">
            {story.h2Line1}
            <br />
            <em>{story.h2Em}</em>
          </h2>
          <p className="eco-p">{story.p}</p>
        </Reveal>
      </div>
    </section>
  );
}
