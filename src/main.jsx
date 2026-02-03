import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  const BASE = import.meta.env.BASE_URL; // важно для GitHub Pages

  const featuredVideo = {
    title: "Almaty Impact Challenge",
    subtitle: "Tap to watch",
    embedUrl:
      "https://qsinet-my.sharepoint.com/personal/aliaskar-tuzubekov_almaty_qsi_org/_layouts/15/embed.aspx?UniqueId=69473ab5-057e-478f-b9bd-a1ca2db69298&embed=%7B%22ust%22%3Atrue%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create",
  };

  const links = [
    { title: "Library Resources", desc: "Reading materials and library info.", url: "https://example.com" },
    { title: "Math Practice", desc: "Extra practice and learning materials.", url: "https://example.com" },
    { title: "Student Handbook", desc: "Key rules, schedules, and expectations.", url: "https://example.com" },
    { title: "Counselor Office", desc: "Support, forms, and helpful contacts.", url: "https://example.com" },
  ];
  const base = import.meta.env.BASE_URL;

  const gallery = [
<<<<<<< HEAD
    { src: `${base}school/gallery1.jpg`, alt: "School photo 1" },
    { src: `${base}school/gallery2.jpg`, alt: "School photo 2" },
    { src: `${base}school/gallery3.jpg`, alt: "School photo 3" },
    { src: `${base}school/gallery4.jpg`, alt: "School photo 4" },
    { src: `${base}school/gallery5.jpg`, alt: "School photo 5" },
    { src: `${base}school/gallery6.jpg`, alt: "School photo 6" },
=======
    { src: `${BASE}school/gallery1.jpg`, alt: "School photo 1" },
    { src: `${BASE}school/gallery2.jpg`, alt: "School photo 2" },
    { src: `${BASE}school/gallery3.jpg`, alt: "School photo 3" },
    { src: `${BASE}school/gallery4.jpg`, alt: "School photo 4" },
    { src: `${BASE}school/gallery5.jpg`, alt: "School photo 5" },
    { src: `${BASE}school/gallery6.jpg`, alt: "School photo 6" },
>>>>>>> 11e9e33c87f5a8b9bc2e6571c689af8389230469
  ];

  return (
    <div className="page">
      <div className="bg-photo"
      style={{ backgroundImage: `url(${base}school/bg.jpg)` }}
      />
      <div className="bg-gradient" />
      <div className="bg-noise" />

      <div className="container">
        <div className="header">
          <div className="brand">
            <div style={{ display: "grid", gap: 6 }}>
              <span className="badge">
                🐾 <span className="mono">Snow Leopards</span> • Student Portal
              </span>
              <div>
                <h1>Student Resources</h1>
                <p>Useful links, short videos, and school information in one place.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="hero">
<<<<<<< HEAD
          <img src={`${base}school/hero.jpg`} alt="School hero" />
=======
          <img src={`${BASE}school/hero.jpg`} alt="School hero" />
>>>>>>> 11e9e33c87f5a8b9bc2e6571c689af8389230469
          <div className="heroText">
            <h2 className="heroTitle">Almaty International School</h2>
            <p className="heroSub">Quick access to school resources, announcements, and helpful links.</p>
          </div>
        </div>

        <div className="section">
          <h2>Videos</h2>
          <div className="videoWrap">
            <iframe
              className="videoFrame"
              src={featuredVideo.embedUrl}
              title={featuredVideo.title}
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />
            <div className="videoOverlay" />
          </div>

          <div style={{ marginTop: 10 }} className="smallNote">
            <strong>{featuredVideo.title}.</strong> {featuredVideo.subtitle}
          </div>
        </div>

        <div className="section">
          <h2>Useful Links</h2>
          <div className="grid2">
            {links.map((x) => (
              <a key={x.title} href={x.url} target="_blank" rel="noreferrer" className="arcadeCard">
                <div className="arcadeTop">
                  <div>
                    <h3 className="arcadeTitle">{x.title}</h3>
                    <p className="arcadeDesc">{x.desc}</p>
                    <span className="arcadeBtn">
                      Open <span className="arrow">→</span>
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="section">
          <h2>Donations</h2>
          <div className="card">
            <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
              <div
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: 14,
                  display: "grid",
                  placeItems: "center",
                  background: "linear-gradient(180deg, rgba(67,214,255,.22), rgba(107,102,255,.12))",
                  border: "1px solid rgba(255,255,255,.16)",
                  boxShadow: "0 12px 30px rgba(0,0,0,.25), inset 0 1px 0 rgba(255,255,255,.18)",
                  flex: "0 0 auto",
                }}
              >
                💙
              </div>
              <div>
                <div style={{ fontWeight: 900, marginBottom: 6 }}>Thank you for supporting our school</div>
                <div className="smallNote">
                  If you would like to make a donation, please visit the school reception and leave your donation there.
                  Thank you for supporting our school!
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section">
          <h2>School Gallery</h2>
          <div className="galleryGrid">
            {gallery.map((g) => (
              <div key={g.src} className="photo">
                <img src={g.src} alt={g.alt} />
              </div>
            ))}
          </div>
        </div>

        <div className="footer">AIS Student Portal • built with ❤️ • update links anytime</div>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
