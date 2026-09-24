// V20 — "The Dispatch"
// Academic-site layout in the classic research-profile mold: sticky top nav,
// left author rail (portrait, title, follow links), right content column with a
// news timeline and research-interest chips.

const DISPATCH_PALETTES = {
  ttuRed: {
    name: "Double T Red", paper: "#ffffff", ink: "#1b1b1d", muted: "#5f6368",
    navBg: "#1d1d20", navInk: "#f3f2ef", accent: "#c8102e", accentInk: "#ffffff",
    sidebarBg: "#f6f5f2", panel: "#f2f0ec", rule: "#e2e0da", chipBg: "#f4e9eb",
    portraitFilter: "none",
  },
  slate: {
    name: "Slate Blue", paper: "#ffffff", ink: "#16202b", muted: "#5b6a78",
    navBg: "#16202b", navInk: "#eef3f7", accent: "#1f6f8b", accentInk: "#ffffff",
    sidebarBg: "#f4f7f9", panel: "#eef3f6", rule: "#dde5ea", chipBg: "#e7f0f4",
    portraitFilter: "none",
  },
  forest: {
    name: "Forest", paper: "#fffefb", ink: "#1a231c", muted: "#59685c",
    navBg: "#1c2a20", navInk: "#eff4ef", accent: "#2f6b45", accentInk: "#ffffff",
    sidebarBg: "#f4f7f3", panel: "#eef3ee", rule: "#dde5dd", chipBg: "#e8f0e9",
    portraitFilter: "none",
  },
  graphite: {
    name: "Graphite", paper: "#fcfcfc", ink: "#1a1a1a", muted: "#5e5e5e",
    navBg: "#111111", navInk: "#f5f5f5", accent: "#b45309", accentInk: "#ffffff",
    sidebarBg: "#f5f4f2", panel: "#f0efec", rule: "#e0dfdb", chipBg: "#f6ece0",
    portraitFilter: "grayscale(0.15)",
  },
  ocean: {
    name: "Deep Ocean", paper: "#ffffff", ink: "#0f1f2e", muted: "#546c80",
    navBg: "#0d1b2a", navInk: "#e8f1f8", accent: "#0b6ea8", accentInk: "#ffffff",
    sidebarBg: "#f2f7fb", panel: "#ebf3f9", rule: "#d9e6ef", chipBg: "#e4eff7",
    portraitFilter: "none",
  },
  plum: {
    name: "Plum", paper: "#fffdfe", ink: "#231825", muted: "#6a5a6d",
    navBg: "#2a1c2d", navInk: "#f5eef6", accent: "#8a3468", accentInk: "#ffffff",
    sidebarBg: "#f8f4f7", panel: "#f3edf2", rule: "#e6dce5", chipBg: "#f4e8f0",
    portraitFilter: "none",
  },
  ivory: {
    name: "Ivory & Bordeaux", paper: "#fbf7ed", ink: "#221a14", muted: "#6f6555",
    navBg: "#2b211a", navInk: "#fbf7ed", accent: "#9c3b28", accentInk: "#ffffff",
    sidebarBg: "#f5ecda", panel: "#f1e8d5", rule: "#e0d3ba", chipBg: "#f6e7de",
    portraitFilter: "sepia(0.14) contrast(1.03)",
  },
  midnight: {
    name: "Midnight (dark)", paper: "#14161a", ink: "#e9ecf1", muted: "#9aa4b2",
    navBg: "#0b0d10", navInk: "#e9ecf1", accent: "#57a6e0", accentInk: "#081019",
    sidebarBg: "#1b1f26", panel: "#1b1f26", rule: "#2d333d", chipBg: "#212832",
    portraitFilter: "contrast(1.05) brightness(0.97)",
  },
  terracotta: {
    name: "Terracotta", paper: "#fffaf6", ink: "#2c1d16", muted: "#7a6156",
    navBg: "#3a2620", navInk: "#fdf3ec", accent: "#c2542f", accentInk: "#ffffff",
    sidebarBg: "#fbf0e8", panel: "#f7ebe2", rule: "#ecd9cc", chipBg: "#fae5da",
    portraitFilter: "sepia(0.12) contrast(1.03)",
  },
  aubergine: {
    name: "Aubergine", paper: "#fdfbfe", ink: "#1f1826", muted: "#665c73",
    navBg: "#241a2e", navInk: "#f3eef8", accent: "#6d4a9c", accentInk: "#ffffff",
    sidebarBg: "#f6f2fa", panel: "#f1ecf7", rule: "#e2daec", chipBg: "#ece4f5",
    portraitFilter: "none",
  },
  moss: {
    name: "Moss & Straw", paper: "#faf9f1", ink: "#1f2419", muted: "#636b56",
    navBg: "#23291f", navInk: "#f3f4ea", accent: "#6a7f3f", accentInk: "#ffffff",
    sidebarBg: "#f2f2e4", panel: "#edeede", rule: "#dcdec8", chipBg: "#e8ecd8",
    portraitFilter: "grayscale(0.2) contrast(1.04)",
  },
  maroon: {
    name: "Maroon & Gold", paper: "#fdfaf6", ink: "#241417", muted: "#6f5a5c",
    navBg: "#2a1216", navInk: "#fbf0ea", accent: "#a8842c", accentInk: "#ffffff",
    sidebarBg: "#f8efe9", panel: "#f4eae3", rule: "#e7d6c9", chipBg: "#f5e9d6",
    portraitFilter: "sepia(0.1) contrast(1.04)",
  },
};

const DISPATCH_PAGES = [
  { id: "home", label: "Home" },
  { id: "bio", label: "About Me", title: "About Me" },
  { id: "research", label: "Research", title: "Research" },
  { id: "publications", label: "Publications", title: "Publications" },
  { id: "teaching", label: "Teaching", title: "Teaching & Service" },
  { id: "awards", label: "Awards", title: "Awards & Honors" },
  { id: "contact", label: "Contact", title: "Contact" },
];

function V20Portfolio({ theme = {} }) {
  const P = window.PORTFOLIO;
  const pal = DISPATCH_PALETTES[theme.palette] || DISPATCH_PALETTES.ttuRed;
  const fonts = (window.LEDGER_FONTS || {})[theme.font] || { body: 'Georgia, serif', display: 'Georgia, serif' };
  const t = { ...pal, fontBody: fonts.body, fontDisplay: fonts.display };
  const [page, setPage] = React.useState("home");
  const [figState, setFigState] = React.useState({});
  const [lightbox, setLightbox] = React.useState(null);
  const [showAllNews, setShowAllNews] = React.useState(false);
  const scrollRef = React.useRef(null);
  const progRef = React.useRef(null);
  const onePage = (theme.nav || 'scroll') === 'scroll';

  // Tab mode: jump to top on page change. Scroll mode: smooth-scroll to the section.
  React.useEffect(() => { if (!onePage && scrollRef.current) scrollRef.current.scrollTop = 0; }, [page, onePage]);

  const go = React.useCallback((id) => {
    if (!onePage) { setPage(id); return; }
    const box = scrollRef.current; if (!box) return;
    const el = box.querySelector('#dsp-sec-' + id); if (!el) return;
    const top = box.scrollTop + el.getBoundingClientRect().top - box.getBoundingClientRect().top - 20;
    box.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
  }, [onePage]);

  React.useEffect(() => {
    const box = scrollRef.current; if (!box || !onePage) return;
    const on = () => { const m = box.scrollHeight - box.clientHeight; if (progRef.current) progRef.current.style.width = (m > 0 ? (box.scrollTop / m) * 100 : 0) + '%'; };
    box.addEventListener('scroll', on, { passive: true }); on();
    return () => box.removeEventListener('scroll', on);
  }, [onePage]);

  // Scroll-spy + reveal-on-scroll for one-page mode.
  React.useEffect(() => {
    if (!onePage) return;
    const box = scrollRef.current; if (!box) return;
    const secs = Array.from(box.querySelectorAll('[data-sec]'));
    const spy = new IntersectionObserver((es) => {
      const vis = es.filter(e => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
      if (vis) setPage(vis.target.dataset.sec);
    }, { root: box, rootMargin: '-15% 0px -70% 0px', threshold: 0 });
    secs.forEach(s => spy.observe(s));
    const reveal = new IntersectionObserver((es) => {
      es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('dsp-in'); reveal.unobserve(e.target); } });
    }, { root: box, rootMargin: '0px 0px -8% 0px', threshold: 0.03 });
    secs.forEach(s => reveal.observe(s));
    return () => { spy.disconnect(); reveal.disconnect(); };
  }, [onePage, P]);

  const news = React.useMemo(() => {
    const items = [];
    P.achievements.forEach(a => items.push({ date: a.year, kind: "Award", text: a.title, detail: a.body }));
    P.publications.forEach(p => items.push({
      date: p.year, kind: p.status === "Book chapter" ? "Book chapter" : "Paper",
      text: p.title.replace(/\.$/, ""), detail: p.venue,
    }));
    const key = (d) => parseInt(String(d).match(/\d{4}/)?.[0] || "0", 10);
    return items.sort((a, b) => key(b.date) - key(a.date));
  }, [P]);

  const SubH = ({ children }) => (
    <div style={{ marginBottom: 16 }}>
      <h3 style={{ fontFamily: t.fontDisplay, fontSize: 27, fontWeight: 600, color: t.ink, margin: 0, letterSpacing: '-0.01em' }}>{children}</h3>
      <div style={{ width: 44, height: 3, background: t.accent, marginTop: 8 }}></div>
    </div>
  );

  const H = ({ children, sub }) => (
    <div className="dsp-h" style={{ marginBottom: 20 }}>
      <h2 style={{ fontFamily: t.fontDisplay, fontSize: 30, fontWeight: 600, margin: 0, color: t.ink, letterSpacing: '-0.01em' }}>{children}</h2>
      <div className="dsp-hrule" style={{ width: 54, height: 3, background: t.accent, marginTop: 9 }}></div>
      {sub ? <p style={{ fontFamily: t.fontBody, fontSize: 16, color: t.muted, margin: '12px 0 0' }}>{sub}</p> : null}
    </div>
  );

  const Para = ({ children }) => (
    <p style={{ fontFamily: t.fontBody, fontSize: 17.5, lineHeight: 1.6, color: t.ink, margin: '0 0 15px', textWrap: 'pretty' }}>{children}</p>
  );

  const Chip = ({ children }) => (
    <span style={{ fontFamily: t.fontBody, fontSize: 14.5, color: t.ink, background: t.chipBg, border: `1px solid ${t.rule}`, borderRadius: 3, padding: '4px 10px' }}>{children}</span>
  );

  const Card = ({ children, style }) => (
    <div style={{ background: t.panel, border: `1px solid ${t.rule}`, padding: '20px 22px', ...style }}>{children}</div>
  );

  const Row = ({ left, title, org, children }) => (
    <div style={{ display: 'grid', gridTemplateColumns: '150px 1fr', gap: 22, padding: '10px 0', borderTop: `1px solid ${t.rule}` }}>
      <div style={{ fontFamily: t.fontBody, fontSize: 14, color: t.accent, fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase', paddingTop: 3 }}>{left}</div>
      <div>
        <div style={{ fontFamily: t.fontDisplay, fontSize: 19.5, fontWeight: 600, color: t.ink, lineHeight: 1.3, marginBottom: org ? 2 : 4 }}>{title}</div>
        {org ? <div style={{ fontFamily: t.fontBody, fontSize: 15.5, color: t.muted, marginBottom: 4 }}>{org}</div> : null}
        {children}
      </div>
    </div>
  );

  const Detail = ({ children }) => (
    <div style={{ fontFamily: t.fontBody, fontSize: 16, lineHeight: 1.5, color: t.ink, textWrap: 'pretty' }}>{children}</div>
  );

  const Figure = ({ id, height, placeholder, caption, src }) => {
    if (!src && window.HIDE_EMPTY_FIGURES) return null;
    return (
      <figure style={{ margin: '18px 0 0' }}>
        {src
          ? <img src={src} alt={caption || ''} style={{ display: 'block', width: '100%', height: height, objectFit: 'cover', border: `1px solid ${t.rule}` }} />
          : <image-slot id={id} placeholder={placeholder} style={{ display: 'block', width: '100%', height: height, border: `1px solid ${t.rule}` }}></image-slot>}
        <figcaption style={{ fontFamily: t.fontBody, fontSize: 14.5, color: t.muted, marginTop: 9, fontStyle: 'italic' }}>{caption}</figcaption>
      </figure>
    );
  };

  const pages = {
    home: (
      <React.Fragment>
        <h1 style={{ fontFamily: t.fontDisplay, fontSize: 40, fontWeight: 600, margin: '0 0 6px', color: t.ink, letterSpacing: '-0.02em' }}>{P.name}</h1>
        <div style={{ fontFamily: t.fontBody, fontSize: 18, color: t.accent, marginBottom: 20, fontWeight: 500 }}>{P.role}</div>
        {(onePage ? P.longBio.slice(0, 1) : P.longBio).map((para, i) => <Para key={i}>{para}</Para>)}
        <Card style={{ borderLeft: `4px solid ${t.accent}`, marginTop: 6 }}>
          <div style={{ fontFamily: t.fontBody, fontSize: 14, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: t.accent, marginBottom: 8 }}>Open to research collaborations</div>
          <div style={{ fontFamily: t.fontBody, fontSize: 16.5, lineHeight: 1.55, color: t.ink, textWrap: 'pretty' }}>
            Interested in collaborations across architected materials, computational mechanics, additive manufacturing, and machine learning for materials design.{' '}
            <a href="#" onClick={(e) => { e.preventDefault(); go('contact'); }} style={{ color: t.accent, fontWeight: 600 }}>Get in touch →</a>
          </div>
        </Card>

        <div style={{ height: 26 }}></div>
        <H>Recent News</H>
        <div>
          {(onePage ? news.slice(0, 4) : (showAllNews ? news : news.slice(0, 6))).map((n, i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '110px 1fr', gap: 20, padding: '10px 0', borderTop: `1px solid ${t.rule}` }}>
              <div style={{ fontFamily: t.fontBody, fontSize: 15, color: t.muted, paddingTop: 2 }}>{n.date}</div>
              <div>
                <span style={{ fontFamily: t.fontBody, fontSize: 11.5, fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: t.accentInk, background: t.accent, padding: '3px 7px', marginRight: 9 }}>{n.kind}</span>
                <span style={{ fontFamily: t.fontBody, fontSize: 16.5, lineHeight: 1.5, color: t.ink }}>{n.text}</span>
                <div style={{ fontFamily: t.fontBody, fontSize: 15, color: t.muted, marginTop: 4, lineHeight: 1.48 }}>{n.detail}</div>
              </div>
            </div>
          ))}
        </div>
        <button onClick={() => onePage ? go('publications') : setShowAllNews(v => !v)} style={{ marginTop: 18, fontFamily: t.fontBody, fontSize: 15, color: t.accent, background: 'none', border: `1px solid ${t.rule}`, padding: '9px 16px', cursor: 'pointer' }}>
          {onePage ? "▼ All publications & awards below" : (showAllNews ? "▲ Show less" : "▼ See more recent news")}
        </button>

        <div style={{ height: 34 }}></div>
        {onePage ? null : (
          <React.Fragment>
            <H>Research Interests</H>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 9 }}>
              {P.interests.map(i => <Chip key={i}>{i}</Chip>)}
            </div>
          </React.Fragment>
        )}
      </React.Fragment>
    ),
    bio: (
      <React.Fragment>
        <H sub={P.tagline}>About Me</H>
        {(onePage ? P.longBio.slice(1) : P.longBio).map((para, i) => <Para key={i}>{para}</Para>)}
        <Figure id="dsp-lab-group" height={340} placeholder="Lab group photo — drag an image here" caption="M3D Lab, Texas Tech University" src="assets/lab-group.png" />
        <div style={{ height: 26 }}></div>
        <SubH>Education</SubH>
        {P.education.map((e, i) => (
          <Row key={i} left={e.years} title={e.degree} org={e.school}><Detail>{e.detail}</Detail></Row>
        ))}
        <div style={{ height: 28 }}></div>
        <SubH>Experience</SubH>
        {P.experience.map((e, i) => (
          <Row key={i} left={e.years} title={e.role} org={e.org}><Detail>{e.detail}</Detail></Row>
        ))}
        <div style={{ height: 28 }}></div>
        <SubH>Technical Skills</SubH>
        <div style={{ display: 'grid', gap: 10 }}>
          {Object.entries(P.skills).map(([group, items]) => (
            <div key={group}>
              <div style={{ fontFamily: t.fontBody, fontSize: 13.5, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: t.accent, marginBottom: 6 }}>{group}</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>{items.map(s => <Chip key={s}>{s}</Chip>)}</div>
            </div>
          ))}
        </div>
      </React.Fragment>
    ),
    research: (
      <React.Fragment>
        <H sub="Selected projects in architected materials, additive manufacturing, and machine learning for materials design.">Research</H>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7, marginBottom: 20 }}>
          {P.interests.map(i => <Chip key={i}>{i}</Chip>)}
        </div>        <style>{`
          @keyframes dspRise{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}}
          .dsp-proj{animation:dspRise .6s cubic-bezier(.2,.7,.2,1) both}
          .dsp-wrap{container-type:inline-size}
          .dsp-media{overflow:hidden;position:relative}
          .dsp-media img,.dsp-media video{display:block;width:100%;height:100%;object-fit:cover;transition:transform .7s cubic-bezier(.2,.7,.2,1)}
          .dsp-media.dsp-fig img{object-fit:contain;padding:14px;box-sizing:border-box}
          .dsp-proj:hover .dsp-media.dsp-fig img{transform:none}
          @container (max-width:700px){.dsp-media.dsp-fig{height:240px !important}}
          .dsp-proj:hover .dsp-media img,.dsp-proj:hover .dsp-media video{transform:scale(1.04)}
          .dsp-media canvas{position:absolute;inset:0}
          .dsp-media[data-fallback] .dsp-fallback{z-index:0}
          @container (max-width:700px){.dsp-media{height:240px !important}}
          @media (prefers-reduced-motion:reduce){.dsp-proj{animation:none}.dsp-media img,.dsp-media video{transition:none}}
        `}</style>
        <div className="dsp-wrap" style={{ display: 'grid', gap: 18, '--dsp-rule': t.rule }}>
          {P.projects.map((p, i) => {
            const isVideo = p.media && /\.(mp4|webm|mov)$/i.test(p.media);
            const showMedia = p.media || p.viz || !window.HIDE_EMPTY_FIGURES;
            const figs = p.figures && p.figures.length > 1 ? p.figures : null;
            const figIdx = (figState[i] || 0) % (figs ? figs.length : 1);
            const curSrc = figs ? figs[figIdx].src : p.media;
            const curCap = figs ? figs[figIdx].caption : p.caption;
            const onImgErr = (e) => { const img = e.currentTarget; img.style.display = 'none'; img.parentNode.setAttribute('data-fallback', '1'); setPage(pg => pg); };
            return (
              <div key={i} className="dsp-proj" style={{ animationDelay: (i * 90) + 'ms', display: 'grid', gridTemplateColumns: '1fr', background: t.panel, border: `1px solid ${t.rule}` }}>
                {showMedia ? (
                  <div className={figs || (p.media && /^https?:/.test(p.media)) ? "dsp-media dsp-fig" : "dsp-media"} onClick={curSrc && !isVideo ? () => setLightbox({ src: curSrc, caption: curCap || p.caption }) : undefined} style={{ height: 320, borderBottom: `1px solid ${t.rule}`, cursor: curSrc && !isVideo ? 'zoom-in' : 'default' }}>
                    {p.media
                      ? (isVideo
                          ? <video src={p.media} autoPlay muted loop playsInline></video>
                          : <React.Fragment><img key={curSrc} src={curSrc} alt={curCap || p.title} onError={onImgErr} style={{ background: t.chipBg }} />{p.viz && window.DispatchViz ? <div className="dsp-fallback" style={{ position: 'absolute', inset: 0, zIndex: -1 }}><DispatchViz kind={p.viz} accent={t.accent} ink={t.ink} bg={t.chipBg} /></div> : null}</React.Fragment>)
                      : p.viz && window.DispatchViz
                        ? <DispatchViz kind={p.viz} accent={t.accent} ink={t.ink} bg={t.chipBg} />
                        : <image-slot id={`dsp-proj-${i}`} placeholder={`Figure, GIF, or short video for "${p.title.slice(0, 36)}…"`} style={{ display: 'block', width: '100%', height: '100%', minHeight: 230 }}></image-slot>}
                  </div>
                ) : null}
                {(curCap || p.caption) && (p.media || p.viz) ? (
                  <div style={{ fontFamily: t.fontBody, fontSize: 14, color: t.muted, fontStyle: 'italic', lineHeight: 1.5, padding: '12px 26px 0' }}>{figs ? `Fig. ${figIdx + 1}/${figs.length} — ${curCap} ` : ''}{p.caption}{curSrc && !isVideo ? <span style={{ fontStyle: 'normal', color: t.accent, fontWeight: 600, marginLeft: 8, whiteSpace: 'nowrap' }}>Click to enlarge</span> : null}</div>
                ) : null}
                {figs ? (
                  <div style={{ display: 'flex', gap: 7, padding: '12px 26px 0', flexWrap: 'wrap', background: t.panel }}>
                    {figs.map((f, k) => (
                      <button key={k} type="button" onClick={() => setFigState(s => ({ ...s, [i]: k }))} aria-label={f.caption} style={{ width: 56, height: 42, padding: 0, border: k === figIdx ? `2px solid ${t.accent}` : `1px solid ${t.rule}`, background: '#fff', cursor: 'pointer', overflow: 'hidden', opacity: k === figIdx ? 1 : 0.7 }}>
                        <img src={f.src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                      </button>
                    ))}
                  </div>
                ) : null}
                <div style={{ padding: '16px 24px 18px', minWidth: 0 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', gap: 16, alignItems: 'baseline', marginBottom: 7 }}>
                    <div style={{ fontFamily: t.fontBody, fontSize: 12.5, fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: t.accent }}>{p.tag}</div>
                    <div style={{ fontFamily: t.fontBody, fontSize: 14.5, color: t.muted, whiteSpace: 'nowrap' }}>{p.year}</div>
                  </div>
                  <div style={{ fontFamily: t.fontDisplay, fontSize: 22, fontWeight: 600, color: t.ink, marginBottom: 8, lineHeight: 1.25, textWrap: 'pretty' }}>{p.title}</div>
                  <Detail>{p.blurb}</Detail>
                  {p.doi ? <a href={`https://doi.org/${p.doi}`} target="_blank" style={{ display: 'inline-flex', gap: 7, alignItems: 'center', marginTop: 10, fontFamily: t.fontBody, fontSize: 14.5, fontWeight: 600, color: t.accent, textDecoration: 'none' }}><i className="fa-solid fa-file-lines"></i>Read the paper</a> : null}
                </div>
              </div>
            );
          })}
        </div>
      </React.Fragment>
    ),
    publications: (
      <React.Fragment>
        <H sub={`${P.publications.length} peer-reviewed papers, proceedings, and book chapters. Full list on Google Scholar.`}>Publications</H>
        {Object.entries(P.publications.reduce((acc, p) => { (acc[p.year] = acc[p.year] || []).push(p); return acc; }, {}))
          .sort((a, b) => b[0].localeCompare(a[0]))
          .map(([year, items]) => (
            <div key={year} style={{ marginBottom: 22 }}>
              <div style={{ fontFamily: t.fontDisplay, fontSize: 26, fontWeight: 700, color: t.ink, marginBottom: 8 }}>{year}</div>
              <ul style={{ margin: 0, paddingLeft: 22, display: 'flex', flexDirection: 'column', gap: 10 }}>
                {items.map((p, i) => {
                  const me = 'Habib, A. K. M. A.';
                  const [pre, post] = p.authors.includes(me) ? p.authors.split(me) : [p.authors, null];
                  const dm = p.venue.match(/^(.*?)\.?\s*DOI:\s*(\S+)$/);
                  const src = dm ? dm[1] : p.venue, doi = dm ? dm[2].replace(/\.$/, '') : null;
                  const ci = src.indexOf(','), jn = ci > -1 ? src.slice(0, ci) : src, rest = ci > -1 ? src.slice(ci) : '';
                  return (
                    <li key={i} style={{ fontFamily: t.fontBody, fontSize: 16.5, color: t.ink, lineHeight: 1.55, textWrap: 'pretty' }}>
                      {post === null ? pre : <React.Fragment>{pre}<b>{me}</b>{post}</React.Fragment>}{' '}“{p.title.replace(/\.$/, '')}”, <i>{jn}</i>{rest}.{doi && <React.Fragment> DOI: <a href={`https://doi.org/${doi}`} target="_blank" style={{ color: t.accent, textDecoration: 'underline', wordBreak: 'break-word' }}>https://doi.org/{doi}</a></React.Fragment>}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        <a href={P.contact.scholar.url} target="_blank" style={{ fontFamily: t.fontBody, fontSize: 16, color: t.accent, fontWeight: 600 }}>View full list on Google Scholar →</a>
      </React.Fragment>
    ),
    teaching: (
      <React.Fragment>
        <H sub="Instruction, mentoring, and service roles.">Teaching &amp; Service</H>
        {P.experience.filter(e => /instructor|teaching/i.test(e.role)).map((e, i) => (
          <Row key={i} left={e.years} title={e.role} org={e.org}><Detail>{e.detail}</Detail></Row>
        ))}
        <div style={{ height: 28 }}></div>
        <SubH>Leadership &amp; Outreach</SubH>
        {P.leadership.map((l, i) => (
          <Row key={i} left={l.years} title={l.role} org={l.org} />
        ))}
      </React.Fragment>
    ),
    awards: (
      <React.Fragment>
        <H sub="Fellowships, competitions, and recognitions.">Awards &amp; Honors</H>
        {P.achievements.map((a, i) => (
          <Row key={i} left={a.year} title={a.title}>
            <Detail>{a.body}</Detail>
            {a.images ? (
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 18, marginTop: 6 }}>
                {a.images.map((im, k) => (
                  <button key={k} type="button" onClick={() => setLightbox({ src: im.src, caption: a.title + (im.caption ? ' — ' + im.caption : '') })} className="dsp-certlink" title={im.caption || ''}>
                    <i className="fa-solid fa-award"></i>View certificate{im.label ? ' (' + im.label + ')' : ''}
                  </button>
                ))}
              </div>
            ) : null}
            {a.image || a.pdf ? (
              <div style={{ marginTop: 6 }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 18, alignItems: 'center' }}>
                  {a.image ? <button type="button" onClick={() => setLightbox({ src: a.image, caption: a.title })} className="dsp-certlink"><i className="fa-solid fa-award"></i>View certificate</button> : null}
                  {a.pdf ? <a href={a.pdf} target="_blank" style={{ display: 'inline-flex', gap: 8, alignItems: 'center', fontFamily: t.fontBody, fontSize: 14.5, fontWeight: 600, color: t.accent, textDecoration: 'none' }}><i className="fa-solid fa-file-pdf"></i>Award letter (PDF)</a> : null}
                </div>
              </div>
            ) : null}
          </Row>
        ))}
        {P.certificates && P.certificates.length ? (
          <React.Fragment>
            <div style={{ height: 28 }}></div>
            <SubH>Certifications</SubH>
            <div>
              {P.certificates.map((c, i) => (
                <div key={i} className="dsp-certrow" style={{ borderTop: `1px solid ${t.rule}` }}>
                  <div style={{ minWidth: 0 }}>
                    <div style={{ fontFamily: t.fontDisplay, fontSize: 18, fontWeight: 600, color: t.ink, lineHeight: 1.3 }}>{c.name}</div>
                    <div style={{ fontFamily: t.fontBody, fontSize: 14.5, color: t.muted, marginTop: 2, lineHeight: 1.45 }}>{c.issuer}{c.year && c.year !== "—" ? ` · ${c.year}` : ''}{c.detail ? ` · ${c.detail}` : ''}</div>
                  </div>
                  {c.url ? (
                    <a href={c.url} target="_blank" rel="noopener" className="dsp-certlink"><i className="fa-solid fa-arrow-up-right-from-square"></i>View certificate</a>
                  ) : c.src ? (
                    <button type="button" onClick={() => setLightbox({ src: c.src, caption: c.name + ' — ' + c.issuer })} className="dsp-certlink"><i className="fa-solid fa-award"></i>View certificate</button>
                  ) : <span></span>}
                </div>
              ))}
            </div>
          </React.Fragment>
        ) : null}
      </React.Fragment>
    ),
    contact: (
      <React.Fragment>
        <H sub="Open to research collaborations, questions about my work, and opportunities.">Contact</H>
        <style>{`
          .dsp-ct{container-type:inline-size}
          .dsp-ct-grid{display:grid;grid-template-columns:minmax(0,1.15fr) minmax(0,1fr);gap:18px}
          @container (max-width:640px){.dsp-ct-grid{grid-template-columns:1fr}}
          .dsp-ct-row{display:flex;gap:14px;align-items:center;padding:9px 0;border-top:1px solid ${t.rule};text-decoration:none}
          .dsp-ct-row:first-of-type{border-top:none}
          .dsp-ct-row:hover .dsp-ct-lbl{text-decoration:underline}
        `}</style>
        <div className="dsp-ct">
          <a href={P.contact.email.url} style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 16, background: t.navBg, color: t.navInk, padding: '26px 30px', textDecoration: 'none', marginBottom: 18 }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: 18, minWidth: 0 }}>
              <span style={{ width: 48, height: 48, borderRadius: '50%', background: t.accent, color: t.accentInk, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, flexShrink: 0 }}><i className="fa-solid fa-envelope"></i></span>
              <span style={{ minWidth: 0 }}>
                <span style={{ display: 'block', fontFamily: t.fontBody, fontSize: 12, fontWeight: 700, letterSpacing: '0.09em', textTransform: 'uppercase', color: t.navInk, opacity: 0.8, marginBottom: 4 }}>Email — the best way to reach me</span>
                <span style={{ display: 'block', fontFamily: t.fontDisplay, fontSize: 26, fontWeight: 600, color: t.navInk, lineHeight: 1.15, overflowWrap: 'anywhere' }}>{P.contact.email.label}</span>
              </span>
            </span>
            <span style={{ fontFamily: t.fontBody, fontSize: 14.5, fontWeight: 600, color: t.navInk, border: `1px solid ${t.navInk}`, padding: '9px 16px', whiteSpace: 'nowrap' }}>Write to me →</span>
          </a>
          <div className="dsp-ct-grid">
            <div style={{ background: t.panel, border: `1px solid ${t.rule}`, padding: '20px 24px' }}>
              <div style={{ fontFamily: t.fontBody, fontSize: 12.5, fontWeight: 700, letterSpacing: '0.09em', textTransform: 'uppercase', color: t.accent, marginBottom: 6 }}>Find me online</div>
              {P.socials.filter(s => !/^mailto:/.test(s.url)).map(s => (
                <a key={s.label} href={s.url} target="_blank" className="dsp-ct-row">
                  <span style={{ width: 30, height: 30, borderRadius: 6, background: s.color, color: '#fff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, flexShrink: 0 }}>{s.fa ? <i className={s.fa}></i> : s.icon}</span>
                  <span style={{ flex: 1, minWidth: 0 }}>
                    <span className="dsp-ct-lbl" style={{ display: 'block', fontFamily: t.fontBody, fontSize: 16.5, color: t.ink }}>{s.label}</span>
                    <span style={{ display: 'block', fontFamily: t.fontBody, fontSize: 13.5, color: t.muted, overflowWrap: 'anywhere' }}>{s.url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')}</span>
                  </span>
                  <span style={{ color: t.muted, fontSize: 12 }}><i className="fa-solid fa-arrow-up-right-from-square"></i></span>
                </a>
              ))}
            </div>
            <div style={{ display: 'grid', gap: 18, alignContent: 'start' }}>
              <div style={{ background: t.panel, border: `1px solid ${t.rule}`, padding: '20px 24px' }}>
                <div style={{ fontFamily: t.fontBody, fontSize: 12.5, fontWeight: 700, letterSpacing: '0.09em', textTransform: 'uppercase', color: t.accent, marginBottom: 10 }}>Where to find me</div>
                <div style={{ fontFamily: t.fontDisplay, fontSize: 19, fontWeight: 600, color: t.ink, lineHeight: 1.3, marginBottom: 4 }}>M3D Lab</div>
                <div style={{ fontFamily: t.fontBody, fontSize: 16, color: t.ink, lineHeight: 1.55 }}>Department of Mechanical &amp; Aerospace Engineering<br />Texas Tech University<br />Lubbock, Texas, USA</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 14 }}>
                  <a href={P.contact.affiliation.url} target="_blank" style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontFamily: t.fontBody, fontSize: 14, fontWeight: 600, border: `1px solid ${t.rule}`, padding: '6px 11px', background: t.paper }}><i className="fa-solid fa-building-columns"></i>Department</a>
                  <a href={P.contact.address.url} target="_blank" style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontFamily: t.fontBody, fontSize: 14, fontWeight: 600, border: `1px solid ${t.rule}`, padding: '6px 11px', background: t.paper }}><i className="fa-solid fa-location-dot" style={{ color: '#ea4335' }}></i>Map</a>
                </div>
                <div style={{ fontFamily: t.fontBody, fontSize: 14, color: t.muted, marginTop: 12, lineHeight: 1.5 }}>Mailing: {P.contact.address.label}</div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    ),
  };

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: t.paper, overflow: 'hidden' }}>
      <style>{`
        .dsp a{color:${t.accent};text-decoration:none}
        .dsp a:hover{color:${t.ink};text-decoration:underline}
        .dsp-nav a{color:${t.navInk}}
        .dsp-nav a:hover{color:${t.accentInk};text-decoration:none}
        .dsp-scroll::-webkit-scrollbar{width:10px}
        .dsp-scroll::-webkit-scrollbar-thumb{background:${t.rule}}
        .dsp-sec{scroll-margin-top:20px}
        .dsp-sec+.dsp-sec{margin-top:44px}
        .dsp-open{display:flex;align-items:stretch;margin-bottom:22px;border:1px solid ${t.rule};border-left:6px solid ${t.accent};background:${t.panel}}
        .dsp-open-t{flex:1;min-width:0;padding:18px 26px;display:flex;align-items:center}
        .dsp-open-h{font-family:${t.fontDisplay};font-size:42px;font-weight:600;line-height:1.05;letter-spacing:-0.02em;color:${t.ink}}
        .dsp-titled>.dsp-open+.dsp-h>h2,.dsp-titled>.dsp-open+.dsp-h>.dsp-hrule{display:none}
        .dsp-titled>.dsp-open+.dsp-h{margin-top:-8px}
        .dsp-titled>.dsp-open+.dsp-h>p{margin-top:0}
        .dsp-rev{opacity:0;transform:translateY(22px);transition:opacity .7s cubic-bezier(.2,.7,.2,1),transform .7s cubic-bezier(.2,.7,.2,1)}
        .dsp-rev.dsp-in{opacity:1;transform:none}
        .dsp-prog{height:3px;background:${t.accent};width:0;transition:width .12s linear}
        .dsp-certlink{display:inline-flex;gap:9px;align-items:center;font-family:${t.fontBody};font-size:15px;font-weight:600;color:${t.accent};background:none;border:none;padding:0;cursor:pointer;text-align:left}
        .dsp-certlink:hover{text-decoration:underline}
        .dsp-certrow{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:4px 20px;align-items:baseline;padding:9px 0}
        @media (prefers-reduced-motion:reduce){.dsp-rev{opacity:1;transform:none;transition:none}}
      `}</style>

      <header className="dsp-nav" style={{ background: t.navBg, flexShrink: 0 }}>
        <div style={{ maxWidth: 1220, margin: '0 auto', padding: '0 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, height: 62 }}>
          <a href="#" onClick={(e) => { e.preventDefault(); go('home'); }} style={{ fontFamily: t.fontDisplay, fontSize: 20, fontWeight: 600, color: t.navInk, textDecoration: 'none', letterSpacing: '-0.01em', whiteSpace: 'nowrap' }}>{P.name}</a>
          <nav style={{ display: 'flex', gap: 4, flexWrap: 'wrap', justifyContent: 'flex-end' }}>
            {DISPATCH_PAGES.map(pg => (
              <button key={pg.id} onClick={() => go(pg.id)} style={{
                fontFamily: t.fontBody, fontSize: 15, cursor: 'pointer', border: 'none', background: page === pg.id ? t.accent : 'transparent',
                color: page === pg.id ? t.accentInk : t.navInk, padding: '8px 11px', borderRadius: 2, whiteSpace: 'nowrap',
              }}>{pg.label}</button>
            ))}
          </nav>
        </div>
        {onePage ? <div ref={progRef} className="dsp-prog"></div> : null}
      </header>

      <div ref={scrollRef} className="dsp dsp-scroll" style={{ flex: 1, overflowY: 'auto' }}>
        <div style={{ maxWidth: 1220, margin: '0 auto', padding: '38px 32px 70px', display: 'grid', gridTemplateColumns: '272px 1fr', gap: 46, alignItems: 'start' }}>

          <aside style={{ position: 'sticky', top: 0, background: t.sidebarBg, border: `1px solid ${t.rule}`, padding: 22, textAlign: 'center' }}>
            <img src="assets/portrait.png" alt={P.name} style={{ width: 152, height: 152, objectFit: 'cover', borderRadius: '50%', border: `4px solid ${t.paper}`, boxShadow: `0 3px 14px rgba(0,0,0,0.13)`, filter: t.portraitFilter, display: 'block', margin: '0 auto 16px' }} />
            <div style={{ fontFamily: t.fontDisplay, fontSize: 21, fontWeight: 600, color: t.ink, lineHeight: 1.25, marginBottom: 8 }}>{P.name}</div>
            <div style={{ fontFamily: t.fontBody, fontSize: 15, color: t.muted, lineHeight: 1.55, marginBottom: 12 }}>
              Graduate Research Assistant<br />M3D Lab · Mechanical & Aerospace Engineering<br />Texas Tech University, USA
            </div>
            <a href="https://www.google.com/maps/place/Lubbock,+TX" target="_blank" style={{ display: 'inline-flex', gap: 7, alignItems: 'center', fontFamily: t.fontBody, fontSize: 15, textDecoration: 'none', marginBottom: 18 }}>
              <i className="fa-solid fa-location-dot" style={{ color: '#ea4335', fontSize: 14 }}></i>Lubbock, Texas, USA
            </a>
            <div style={{ fontFamily: t.fontBody, fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: t.ink, borderTop: `1px solid ${t.rule}`, paddingTop: 14, marginBottom: 12 }}>Follow</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 9, textAlign: 'left' }}>
              {P.socials.map(s => (
                <a key={s.label} href={s.url} target={s.url.startsWith('http') ? '_blank' : undefined} style={{ display: 'flex', gap: 10, alignItems: 'center', fontFamily: t.fontBody, fontSize: 15, textDecoration: 'none' }}>
                  <span style={{ width: 20, height: 20, borderRadius: 4, background: s.color, color: '#fff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 10.5, fontWeight: 700, flexShrink: 0, fontFamily: 'system-ui, sans-serif' }}>{s.fa ? <i className={s.fa}></i> : s.icon}</span>
                  {s.label}
                </a>
              ))}
            </div>
          </aside>

          <main style={{ minWidth: 0 }}>
            {onePage
              ? DISPATCH_PAGES.map((pg, i) => (
                  <section key={pg.id} id={'dsp-sec-' + pg.id} data-sec={pg.id} className={i > 0 ? "dsp-sec dsp-rev dsp-titled" : "dsp-sec dsp-rev"}>
                    {i > 0 ? (
                      <div className="dsp-open">
                        <div className="dsp-open-t">
                          <div className="dsp-open-h">{pg.title || pg.label}</div>
                        </div>
                      </div>
                    ) : null}
                    {pages[pg.id]}
                  </section>
                ))
              : pages[page]}
          </main>
        </div>

        <footer style={{ background: t.navBg, color: t.navInk, padding: '26px 32px' }}>
          <div className="dsp-nav" style={{ maxWidth: 1220, margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: 18, alignItems: 'center', justifyContent: 'space-between', fontFamily: t.fontBody, fontSize: 14.5 }}>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <span style={{ opacity: 0.7 }}>Follow:</span>
              {P.socials.map(s => (
                <a key={s.label} href={s.url} target={s.url.startsWith('http') ? '_blank' : undefined} style={{ textDecoration: 'none' }}>{s.label}</a>
              ))}
            </div>
            <div style={{ opacity: 0.6 }}>© 2026 {P.name} · Lubbock, Texas</div>
          </div>
        </footer>
      </div>
      {lightbox ? (
        <div onClick={() => setLightbox(null)} style={{ position: 'fixed', inset: 0, zIndex: 9000, background: 'rgba(12,12,14,0.9)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 16, padding: '4vh 4vw', cursor: 'zoom-out' }}>
          <img src={lightbox.src} alt={lightbox.caption || ''} style={{ maxWidth: '100%', maxHeight: '82vh', objectFit: 'contain', background: '#fff', border: '1px solid rgba(255,255,255,0.2)' }} />
          {lightbox.caption ? <div style={{ fontFamily: t.fontBody, fontSize: 15, color: '#f2efe9', maxWidth: 900, textAlign: 'center', lineHeight: 1.5 }}>{lightbox.caption}</div> : null}
          <button type="button" onClick={() => setLightbox(null)} style={{ position: 'fixed', top: 18, right: 22, width: 40, height: 40, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.35)', background: 'rgba(0,0,0,0.4)', color: '#fff', fontSize: 20, cursor: 'pointer', lineHeight: 1 }} aria-label="Close">×</button>
        </div>
      ) : null}
    </div>
  );
}

Object.assign(window, { V20Portfolio, DISPATCH_PALETTES });
