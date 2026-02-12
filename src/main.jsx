import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

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

  // Новая ссылка на видео (прямая для просмотра)
  const videoUrl = "https://qsinet-my.sharepoint.com/personal/aliaskar-tuzubekov_almaty_qsi_org/_layouts/15/stream.aspx?id=%2Fpersonal%2Faliaskar%2Dtuzubekov%5Falmaty%5Fqsi%5Forg%2FDocuments%2FAlmaty%20Impact%20Challenge%2Emp4&ga=1&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2E287dce93%2Ddf3e%2D4ec7%2D9b05%2D254debe366ba";

  // Попытка embed (может потребовать логина — протестируй в инкогнито)
  const embedUrl = "https://qsinet-my.sharepoint.com/personal/aliaskar-tuzubekov_almaty_qsi_org/_layouts/15/embed.aspx?id=%2Fpersonal%2Faliaskar%2Dtuzubekov%5Falmaty%5Fqsi%5Forg%2FDocuments%2FAlmaty%20Impact%20Challenge%2Emp4&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create";

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

        {/* Видео сразу после заголовка */}
        <div className="section">
          <h2>Watch the Introduction</h2>
          <div className="videoWrap">
            <iframe
              className="videoFrame"
              src={embedUrl}  // ← если не работает, замени на videoUrl (но тогда iframe не подойдёт — используй <a href={videoUrl} target="_blank">Watch Video</a>)
              title="Almaty Impact Challenge"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div style={{ marginTop: 12 }} className="smallNote">
            <strong>Almaty Impact Challenge</strong> — click to play (may require school account in some browsers; try incognito or direct link below if blocked)
            <br />
            <a href={videoUrl} target="_blank" rel="noreferrer" style={{ color: "var(--neon-cyan)", fontWeight: 600 }}>
              Open video in new tab →
            </a>
          </div>
        </div>

        {/* Основной текст описания */}
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
              “Diversity is having a seat at the table, inclusion is having a voice, and belonging is having that voice be heard.”
            </blockquote>
          </div>
        </div>

        {/* Donations блок */}
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

        {/* Галерея (оставил, если нужно — удали секцию целиком, если не актуально) */}
        <div className="section">
          <h2>School Gallery</h2>
          <div className="galleryGrid">
            {gallery.map((g) => (
              <div key={g.src} className="photo">
                <img src={g.src} alt={g.alt} loading="lazy" />
              </div>
            ))}
          </div>
        </div>

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