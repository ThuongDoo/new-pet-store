import { useEffect, useRef } from "react";
import "./Ecosystem.css";
import Reveal from "./Reveal";

export default function Ecosystem() {
  const stageRef = useRef(null);
  const layerRefs = useRef([]);

  const particles = Array.from({ length: 16 }, (_, i) => ({
    left: (4 + ((i * 53.7) % 92)).toFixed(1),
    delay: ((i * 3.7) % 8).toFixed(2),
    dur: (7 + ((i * 2.9) % 6)).toFixed(2),
    size: (2 + ((i * 1.3) % 3)).toFixed(1),
  }));

  useEffect(() => {
    const node = stageRef.current;
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
    <section className="eco" id="gioi-thieu">
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
          <div className="eco-eyebrow">✦ Câu chuyện của chúng tôi</div>
          <h2 className="eco-h2">
            Một sợi chỉ ánh sáng,
            <br />
            <em>nối những trái tim.</em>
          </h2>
          <p className="eco-p">
            Mỗi thú cưng là một thế giới nhỏ. Mỗi người chủ là một mái nhà. Và ở
            giữa, PawHarmony là nơi những bàn tay chữa lành thắp lên sợi dây kết
            nối ấy — bằng chuyên môn, và bằng sự dịu dàng.
          </p>
        </Reveal>

        <div className="eco-stage" ref={stageRef}>
          <svg
            className="eco-threads"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="ecoGradA" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#F07250" stopOpacity=".75" />
                <stop offset="100%" stopColor="#F5C840" stopOpacity=".9" />
              </linearGradient>
              <linearGradient id="ecoGradB" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#A8D8CC" stopOpacity=".8" />
                <stop offset="100%" stopColor="#F5C840" stopOpacity=".9" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </section>
  );
}
