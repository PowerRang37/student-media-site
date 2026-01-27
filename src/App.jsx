import { useMemo } from "react";
import "./App.css";
import content from "./data/content.json";

function Badge() {
  return (
    <div className="badge">
      🐆 Snow Leopards • Student Portal
    </div>
  );
}

function SectionTitle({ children }) {
  return <h2 className="sectionTitle">{children}</h2>;
}

function Panel({ className = "", children, onClick, href }) {
  const Tag = href ? "a" : "div";
  const props = href
    ? { href, target: "_blank", rel: "noreferrer", className: `panel ${className}` }
    : { className: `panel ${className}`, onClick };

  return <Tag {...props}>{children}</Tag>;
}

function LinkButton({ href, children }) {
  return (
    <a className="arcadeBtn" href={href} target="_blank" rel="noreferrer">
      {children} <span className="arrow">→</span>
    </a>
  );
}

export default function App() {
  const videos = useMemo(
    () => (Array.isArray(content) ? content.filter((x) => x.type === "video") : []),
    []
  );

  const links = useMemo(
    () => (Array.isArray(content) ? content.filter((x) => x.type === "link") : []),
    []
  );

  // Галерея — твои файлы в public/school/
  const gallery = useMemo(() => {
    return [
      { src: "/school/gallery1.jpg", alt: "School gallery 1" },
      { src: "/school/gallery2.jpg", alt: "School gallery 2" },
      { src: "/school/gallery3.jpg", alt: "School gallery 3" },
      { src: "/school/gallery4.jpg", alt: "School gallery 4" },
      { src: "/school/gallery5.jpg", alt: "School gallery 5" },
      { src: "/school/gallery6.jpg", alt: "School gallery 6" },
    ];
  }, []);

  const mainVideo = videos[0];

  return (
    <div className="page">
      <header className="hero">
        <div className="heroInner">
          <Badge />
          <h1 className="heroTitle">Student Resources</h1>
          <p className="heroSubtitle">
            Useful links, short videos, and school information in one place.
          </p>
        </div>
      </header>

      <main className="container">
        <section>
          <SectionTitle>Videos</SectionTitle>

          <div className="videoWrap">
            <div className="videoCard">
              {mainVideo ? (
                <>
                  <div className="videoTop">
                    <div>
                      <div className="videoName">{mainVideo.title ?? "Video"}</div>
                      <div className="videoHint">Tap to watch</div>
                    </div>
                  </div>

                  <div className="videoFrame">
                    <iframe
                      src={mainVideo.url}
                      title={mainVideo.title ?? "Video"}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </>
              ) : (
                <div className="emptyState">
                  Add a video in <code>src/data/content.json</code> (type: "video")
                </div>
              )}
            </div>
          </div>
        </section>

        <section>
          <SectionTitle>Useful Links</SectionTitle>

          <div className="grid">
            {links.length ? (
              links.map((item) =>м => (
                <Panel key={item.id} className="panelLink" href={item.url}>
                  <div className="panelRow">
                    <div>
                      <h3 className="panelTitle">{item.title}</h3>
                      <p className="panelDesc">{item.description ?? "Open resource"}</p>
                    </div>
                    <div className="panelAction">
                      <span className="miniChip">Open</span>
                    </div>
                  </div>
                  <div className="panelBottom">
                    <LinkButton href={item.url}>Open</LinkButton>
                  </div>
                </Panel>
              ))
            ) : (
              <div className="emptyState">
                Add links in <code>src/data/content.json</code> (type: "link")
              </div>
            )}
          </div>
        </section>

        <section>
          <SectionTitle>Donations</SectionTitle>

          <Panel className="donation">
            <div className="panelRow">
              <div>
                <h3 className="panelTitle">Thank you for supporting our school</h3>
                <p className="panelDesc">
                  If you would like to make a donation, please visit the school reception and
                  leave your donation there. Thank you for supporting our school!
                </p>
              </div>
              <div className="panelAction">
                <span className="heart">💙</span>
              </div>
            </div>
          </Panel>
        </section>

        <section>
          <SectionTitle>School Gallery</SectionTitle>

          <div className="gallery">
            {gallery.map((g) => (
              <div className="galleryItem" key={g.src}>
                <img src={g.src} alt={g.alt} loading="lazy" />
              </div>
            ))}
          </div>
        </section>

        <footer className="footer">
          <div className="footerInner">
            <span>Almaty International School</span>
            <span className="dot">•</span>
            <span>Snow Leopards</span>
          </div>
        </footer>
      </main>
    </div>
  );
}
