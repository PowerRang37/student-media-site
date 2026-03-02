import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

/* ── Fundraising Progress Bar ── */
function FundraisingBar({ raised, goal }) {
  const pct = Math.min(100, Math.round((raised / goal) * 100));
  const barRef = useRef(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const el = barRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setAnimated(true); obs.disconnect(); } },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const fmt = (n) => n.toLocaleString("en-US");

  return (
    <div className="fundraiseWrap" ref={barRef}>
      <div className="fundraiseHeader">
        <div className="fundraiseLabel">Community Fundraising Goal</div>
        <div className="fundraisePct">{pct}%</div>
      </div>
      <div className="fundraiseAmounts">
        <span className="fundraiseRaised">
          <span className="fundraiseCurrency">KZT</span>
          {fmt(raised)}
        </span>
        <span className="fundraiseGoalText">of {fmt(goal)} goal</span>
      </div>
      <div className="fundraiseTrack">
        <div
          className="fundraiseFill"
          style={{ width: animated ? `${pct}%` : "0%" }}
        >
          <div className="fundraiseGlow" />
          <div className="fundraisePulse" />
        </div>
        <div className="fundraiseMilestone" style={{ left: "50%" }}>
          <div className="fundraiseMilestoneLine" />
          <div className="fundraiseMilestoneLabel">50%</div>
        </div>
      </div>
      <div className="fundraiseFooter">
        <span className="fundraiseHeart">💙</span>
        Every donation brings us closer to supporting inclusive education for all.
      </div>
    </div>
  );
}

/* ── Student Outreach Slider ── */
function OutreachSlider({ base, openLightbox }) {
  const slides = [
    {
      src: `${base}school/Students1.png`,
      caption: "Our Secondary Student Council members have been going into classrooms to read to our younger students about inclusivity and diversity.",
      date: "February 2026",
    },
    {
      src: `${base}school/Students2.JPG`,
      caption: "Our Secondary Student Council members have been going into classrooms to read to our younger students about inclusivity and diversity.",
      date: "February 2026",
    },
    // Добавляй новые фотки сюда:
    // { src: `${base}school/Students3.jpg`, caption: "...", date: "February 2026" },
  ];

  const [idx, setIdx] = useState(0);
  const prev = () => setIdx((i) => (i === 0 ? slides.length - 1 : i - 1));
  const next = () => setIdx((i) => (i === slides.length - 1 ? 0 : i + 1));
  const slide = slides[idx];

  return (
    <div className="outreachCard">
      <div
        className="outreachImgWrap"
        onClick={() => openLightbox(slide.src, slides.map(s => s.src))}
        style={{ cursor: "pointer" }}
      >
        <img src={slide.src} alt={slide.caption} loading="lazy" />
        <div className="outreachOverlay">
          <span className="outreachZoom">🔍</span>
        </div>
      </div>
      <div className="outreachBody">
        <div className="outreachMeta">
          <span className="outreachTag">📚 Student Action</span>
          <span className="outreachDate">{slide.date}</span>
        </div>
        <p className="outreachCaption">{slide.caption}</p>
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginTop: 16 }}>
          <button
            onClick={prev}
            style={{
              background: "rgba(0,250,255,.15)",
              border: "1px solid rgba(0,250,255,.3)",
              color: "white",
              borderRadius: 10,
              padding: "8px 18px",
              cursor: "pointer",
              fontSize: 20,
              fontWeight: 700,
              lineHeight: 1,
            }}
          >‹</button>
          <span style={{ color: "rgba(240,250,255,.55)", fontSize: 13 }}>
            {idx + 1} / {slides.length}
          </span>
          <button
            onClick={next}
            style={{
              background: "rgba(0,250,255,.15)",
              border: "1px solid rgba(0,250,255,.3)",
              color: "white",
              borderRadius: 10,
              padding: "8px 18px",
              cursor: "pointer",
              fontSize: 20,
              fontWeight: 700,
              lineHeight: 1,
            }}
          >›</button>
        </div>
      </div>
    </div>
  );
}

/* ── Main App ── */
function App() {
  const base = import.meta.env.BASE_URL;

  const gallery = [
    { src: `${base}school/gallery1.jpg`, alt: "School photo 1" },
    { src: `${base}school/gallery2.jpg`, alt: "School photo 2" },
    { src: `${base}school/gallery3.jpg`, alt: "School photo 3" },
    { src: `${base}school/gallery4.jpg`, alt: "School photo 4" },
    { src: `${base}school/gallery5.jpg`, alt: "School photo 5" },
    { src: `${base}school/gallery6.jpg`, alt: "School photo 6" },
  ];

  const [lightbox, setLightbox] = useState(null); // { srcs: [...], idx: 0 }
  const openLightbox = (src, srcs) => {
    const list = srcs || [src];
    setLightbox({ srcs: list, idx: list.indexOf(src) });
  };
  const closeLightbox = () => setLightbox(null);
  const lightboxPrev = () => setLightbox((l) => ({ ...l, idx: l.idx === 0 ? l.srcs.length - 1 : l.idx - 1 }));
  const lightboxNext = () => setLightbox((l) => ({ ...l, idx: l.idx === l.srcs.length - 1 ? 0 : l.idx + 1 }));
  const selectedImage = lightbox ? lightbox.srcs[lightbox.idx] : null;

  const youtubeEmbed = "https://www.youtube.com/embed/Wcboh-5oa1k";

  return (
    <div className="page">
      <div
        className="bg-photo"
        style={{ backgroundImage: `url(${base}school/bg.jpg)` }}
      />
      <div className="bg-gradient" />
      <div className="bg-noise" />

      <div className="container">
        <div className="header">
          <div className="brand">
            <div style={{ display: "grid", gap: 6 }}>
              <span className="badge">
                🐾 <span className="mono">Snow Leopards</span> • Almaty Impact Challenge
              </span>
              <div>
                <h1>Almaty Impact Challenge</h1>
                <p>Building a future where every student belongs</p>
              </div>
            </div>
          </div>
        </div>

        {/* Видео — YouTube iframe */}
        <div className="section">
          <h2>Watch the Introduction</h2>
          <div className="videoWrap">
            <iframe
              className="videoFrame"
              src={youtubeEmbed}
              title="Almaty Impact Challenge"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div style={{ marginTop: 10 }} className="smallNote">
            <strong>Almaty Impact Challenge</strong> — tap to watch
          </div>
          <div style={{ marginTop: 24, textAlign: "center" }}>
            <p style={{ fontSize: "16px", marginBottom: 12, color: "var(--muted)" }}>
              Learn more about the Rabia Basri Foundation
            </p>
            <a
              href="https://www.rbf.education/"
              target="_blank"
              rel="noreferrer"
              className="arcadeBtn"
              style={{ fontSize: "17px", padding: "14px 28px" }}
            >
              Visit rbf.education <span className="arrow">→</span>
            </a>
          </div>
        </div>

        {/* Основной текст */}
        <div className="section">
          <div className="card" style={{ padding: "20px 24px", fontSize: "15px", lineHeight: 1.48 }}>
            <p>
              In December our Secondary Student Council (StuCo) had an idea to come together as a whole school community to learn about people with disabilities and challenge the other international schools in Almaty to a fundraising challenge – to see who could raise the most money to support inclusive education through the <strong>Rabia Basri Foundation</strong>.
            </p>
            <p>
              For the past two months, we have worked tirelessly with other organizations on campus – the National Honor Society (NHS), the Rights and Voices Club, and the Elementary StuCo to find ways to engage our school in understanding, activism, and raising money for the Rabia Basri Foundation.
            </p>
            <p>
              After spending the month of January organizing our advocacy efforts, we have now entered the month of giving (February). We hope that you will read the attached flyer to learn more about the different ways our school is coming together to support inclusive education for people with disabilities and look for ways that you can also get involved.
            </p>
            <blockquote style={{ margin: "24px 0", paddingLeft: "20px", borderLeft: "4px solid var(--neon-cyan)", fontStyle: "italic", color: "var(--muted)" }}>
              "Diversity is having a seat at the table, inclusion is having a voice, and belonging is having that voice be heard."
            </blockquote>
          </div>
        </div>

        {/* Fundraising Progress */}
        <div className="section">
          <h2>Fundraising Progress</h2>
          <FundraisingBar raised={703500} goal={750000} />
        </div>

        {/* Donations & Questions */}
        <div className="section">
          <h2>Donations & Questions</h2>
          <div className="card">
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div style={{ fontWeight: 700, fontSize: "17px" }}>
                Support the Almaty Impact Challenge
              </div>
              <p style={{ fontSize: "15px", lineHeight: 1.5 }}>
                Donations are being accepted throughout the month of February.<br />
                Please bring cash donations to Mrs. Fleming's classroom <strong>#104</strong>.
              </p>
              <div style={{ marginTop: 12 }}>
                <div style={{ fontWeight: 700, marginBottom: 8 }}>Questions?</div>
                <p style={{ margin: "8px 0", fontSize: "15px" }}>
                  About the <strong>Almaty Impact Challenge</strong>:{" "}
                  <a href="mailto:kerrie-fleming@almaty.qsi.org" style={{ color: "var(--neon-cyan)" }}>
                    kerrie-fleming@almaty.qsi.org
                  </a>
                </p>
                <p style={{ margin: "8px 0", fontSize: "15px" }}>
                  About <strong>Learning Support</strong>:{" "}
                  <a href="mailto:dilnar-makhmut@almaty.qsi.org" style={{ color: "var(--neon-cyan)" }}>
                    dilnar-makhmut@almaty.qsi.org
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Student Outreach Slider */}
        <div className="section">
          <h2>Student Outreach</h2>
          <OutreachSlider base={base} openLightbox={openLightbox} />
        </div>

        {/* Галерея */}
        <div className="section">
          <h2>School Gallery</h2>
          <div className="galleryGrid">
            {gallery.map((g) => (
              <div
                key={g.src}
                className="photo"
                onClick={() => openLightbox(g.src)}
                style={{ cursor: "pointer" }}
              >
                <img src={g.src} alt={g.alt} loading="lazy" />
              </div>
            ))}
          </div>
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,0.92)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 9999,
              padding: "20px",
              backdropFilter: "blur(8px)",
            }}
            onClick={closeLightbox}
          >
            {/* Стрелка влево */}
            {lightbox.srcs.length > 1 && (
              <button
                onClick={(e) => { e.stopPropagation(); lightboxPrev(); }}
                style={{
                  position: "fixed",
                  left: 16,
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "rgba(255,255,255,0.12)",
                  border: "1px solid rgba(255,255,255,0.25)",
                  color: "white",
                  borderRadius: 14,
                  width: 52,
                  height: 52,
                  fontSize: 28,
                  fontWeight: 700,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backdropFilter: "blur(8px)",
                  zIndex: 10000,
                }}
              >‹</button>
            )}

            <div
              style={{ position: "relative", maxWidth: "95%", maxHeight: "95vh" }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Enlarged"
                style={{
                  maxWidth: "100%",
                  maxHeight: "90vh",
                  borderRadius: "12px",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
                  objectFit: "contain",
                }}
              />
              {/* Счётчик */}
              {lightbox.srcs.length > 1 && (
                <div style={{
                  position: "absolute",
                  bottom: -32,
                  left: "50%",
                  transform: "translateX(-50%)",
                  color: "rgba(255,255,255,0.5)",
                  fontSize: 13,
                  whiteSpace: "nowrap",
                }}>
                  {lightbox.idx + 1} / {lightbox.srcs.length}
                </div>
              )}
              <button
                onClick={closeLightbox}
                style={{
                  position: "absolute",
                  top: "-40px",
                  right: "0",
                  background: "rgba(0,0,0,0.6)",
                  color: "white",
                  border: "none",
                  borderRadius: "50%",
                  width: "40px",
                  height: "40px",
                  fontSize: "24px",
                  cursor: "pointer",
                }}
              >×</button>
            </div>

            {/* Стрелка вправо */}
            {lightbox.srcs.length > 1 && (
              <button
                onClick={(e) => { e.stopPropagation(); lightboxNext(); }}
                style={{
                  position: "fixed",
                  right: 16,
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "rgba(255,255,255,0.12)",
                  border: "1px solid rgba(255,255,255,0.25)",
                  color: "white",
                  borderRadius: 14,
                  width: 52,
                  height: 52,
                  fontSize: 28,
                  fontWeight: 700,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backdropFilter: "blur(8px)",
                  zIndex: 10000,
                }}
              >›</button>
            )}
          </div>
        )}

        <div className="footer">
          Almaty International School • Almaty Impact Challenge • built with ❤️
        </div>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
