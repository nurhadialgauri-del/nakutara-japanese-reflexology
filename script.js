const SITE_CONFIG = {
  whatsapp: "https://wa.me/6281234567890?text=Halo%20Nakutara%2C%20saya%20ingin%20booking%20terapi%20dan%20home%20service.",
  cashier: "https://your-cashier-link.example",
  calendar: "https://calendly.com/your-name",
  maps: "https://maps.app.goo.gl/BauWnm2gHet2T6GcA",
  reviews: "https://www.google.com/search?q=Nakutara+Japanese+Reflexology+and+Massage"
};

const setLink = (selector, value) => {
  const el = document.querySelector(selector);
  if (el) el.href = value;
};

const initLinks = () => {
  setLink("#whatsappBtn", SITE_CONFIG.whatsapp);
  setLink("#whatsappBtn2", SITE_CONFIG.whatsapp);
  setLink("#bookingBtn", SITE_CONFIG.whatsapp);
  setLink("#calendarBtn", SITE_CONFIG.calendar);
  setLink("#cashierLink", SITE_CONFIG.cashier);
  setLink("#calendarLink", SITE_CONFIG.calendar);
  setLink("#mapsLink", SITE_CONFIG.maps);
  setLink("#reviewsLink", SITE_CONFIG.reviews);
  setLink("#footerWhatsApp", SITE_CONFIG.whatsapp);
  setLink("#footerMaps", SITE_CONFIG.maps);
  setLink("#footerReviews", SITE_CONFIG.reviews);
};

const setYear = () => {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
};

document.addEventListener("DOMContentLoaded", () => {
  initLinks();
  setYear();
});


:root {
  --bg: #f7f0ea;
  --bg-strong: #f1e2d2;
  --card: #fffaf6;
  --primary: #bb7a4a;
  --primary-dark: #8a5535;
  --accent: #efc7a4;
  --text: #1f1a17;
  --muted: #655d57;
  --line: rgba(118, 88, 62, 0.12);
  --shadow: 0 20px 50px rgba(55, 29, 15, 0.1);
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: "Plus Jakarta Sans", sans-serif;
  background: var(--bg);
  color: var(--text);
  line-height: 1.6;
}

a {
  color: inherit;
  text-decoration: none;
}

img {
  max-width: 100%;
  display: block;
}

.container {
  width: min(1120px, calc(100% - 32px));
  margin: 0 auto;
}

.topbar {
  position: sticky;
  top: 0;
  z-index: 10;
  backdrop-filter: blur(12px);
  background: rgba(247, 240, 234, 0.8);
  border-bottom: 1px solid var(--line);
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 80px;
  gap: 18px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
}

.brand-mark {
  width: 42px;
  height: 42px;
  border-radius: 14px;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, var(--primary), var(--primary-dark));
  color: #fff;
  font-weight: 800;
  font-size: 1.2rem;
  box-shadow: var(--shadow);
}

.brand h1,
.brand small {
  margin: 0;
}

.brand h1 {
  font-size: 1.15rem;
}

.brand small {
  display: block;
  color: var(--muted);
  font-size: 0.72rem;
}

.menu {
  display: flex;
  align-items: center;
  gap: 18px;
  font-size: 0.96rem;
  color: var(--muted);
}

.menu a {
  transition: color 0.2s ease;
}

.menu a:hover {
  color: var(--text);
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 46px;
  padding: 0 22px;
  border-radius: 999px;
  font-weight: 700;
  transition: transform 0.18s ease, box-shadow 0.18s ease;
}

.btn:hover {
  transform: translateY(-1px);
}

.btn.primary {
  background: linear-gradient(135deg, var(--primary), var(--primary-dark));
  color: #fff;
  box-shadow: 0 16px 30px rgba(138, 85, 53, 0.24);
}

.btn.secondary {
  background: rgba(187, 122, 74, 0.12);
  color: var(--primary-dark);
  border: 1px solid rgba(138, 85, 53, 0.18);
}

.block {
  width: 100%;
}

.hero {
  padding: 72px 0 40px;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 42px;
  align-items: center;
}

.eyebrow {
  display: inline-block;
  margin-bottom: 18px;
  font-size: 0.78rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--primary-dark);
  font-weight: 700;
}

.hero-copy h2 {
  margin: 0;
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  line-height: 1.06;
  letter-spacing: -0.06em;
}

.hero-copy p {
  max-width: 620px;
  margin: 20px 0 26px;
  color: var(--muted);
  font-size: 1.06rem;
}

.cta-row {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-bottom: 26px;
}

.hero-points {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  color: var(--muted);
}

.hero-points li {
  position: relative;
  padding-left: 18px;
}

.hero-points li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: var(--primary-dark);
}

.hero-card {
  display: flex;
  justify-content: center;
}

.card-glass {
  width: min(100%, 430px);
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.72), rgba(255, 255, 255, 0.38));
  border: 1px solid rgba(120, 90, 64, 0.18);
  border-radius: 28px;
  box-shadow: var(--shadow);
  padding: 26px;
}

.mini-label {
  display: inline-flex;
  padding: 6px 10px;
  border-radius: 999px;
  background: rgba(187, 122, 74, 0.12);
  color: var(--primary-dark);
  font-size: 0.74rem;
  font-weight: 700;
}

.card-glass h3 {
  margin: 18px 0 14px;
  font-size: 2rem;
}

.price-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 10px 0 18px;
  border-bottom: 1px solid rgba(118, 88, 62, 0.12);
}

.price-row strong {
  font-size: 1.8rem;
  color: var(--primary-dark);
}

.service-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 18px 0 22px;
  color: var(--muted);
}

.stats {
  padding: 12px 0 32px;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 14px;
}

.stats-grid > div {
  background: rgba(255, 255, 255, 0.48);
  border: 1px solid var(--line);
  border-radius: 20px;
  padding: 24px 18px;
  text-align: center;
}

.stats-grid strong {
  display: block;
  font-size: clamp(1.3rem, 2vw, 2rem);
}

.stats-grid span {
  color: var(--muted);
}

.section {
  padding: 90px 0;
}

.alt-bg {
  background: rgba(255, 255, 255, 0.32);
}

.split-layout {
  display: grid;
  grid-template-columns: 0.92fr 1.08fr;
  gap: 42px;
  align-items: center;
}

.image-wrapper {
  border-radius: 28px;
  overflow: hidden;
  box-shadow: var(--shadow);
}

.image-wrapper img {
  width: 100%;
  height: 100%;
  min-height: 520px;
  object-fit: cover;
}

.content-panel h3,
.section-head h3 {
  margin: 0 0 16px;
  font-size: clamp(2rem, 3vw, 3rem);
  line-height: 1.1;
  letter-spacing: -0.05em;
}

.content-panel p,
.section-head p {
  color: var(--muted);
  margin: 0 0 18px;
}

.feature-list {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px 22px;
  margin-top: 22px;
  color: var(--text);
  font-weight: 600;
}

.section-head {
  margin-bottom: 34px;
}

.section-head.narrow {
  max-width: 720px;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 22px;
}

.service-card {
  background: rgba(255, 255, 255, 0.54);
  border: 1px solid var(--line);
  border-radius: 24px;
  padding: 24px 22px;
  box-shadow: 0 16px 28px rgba(59, 35, 22, 0.04);
}

.icon {
  width: 52px;
  height: 52px;
  display: grid;
  place-items: center;
  border-radius: 14px;
  background: rgba(187, 122, 74, 0.12);
  color: var(--primary-dark);
  font-size: 1.4rem;
  font-weight: 800;
}

.service-card h4 {
  margin: 18px 0 10px;
  font-size: 1.35rem;
}

.service-card p {
  color: var(--muted);
  margin: 0 0 16px;
}

.service-card strong {
  color: var(--primary-dark);
}

.benefit-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 22px;
}

.benefit-item {
  background: rgba(255, 255, 255, 0.42);
  border: 1px solid var(--line);
  border-radius: 22px;
  padding: 24px 20px;
}

.benefit-item h4 {
  margin: 0 0 12px;
  font-size: 1.08rem;
}

.benefit-item p {
  margin: 0;
  color: var(--muted);
}

.booking-section {
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.18), rgba(255, 255, 255, 0.45));
}

.booking-grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 26px;
  align-items: center;
}

.booking-copy p {
  color: var(--muted);
  max-width: 560px;
}

.booking-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 24px;
}

.panel-box {
  background: linear-gradient(180deg, #fffaf7, #f7eadf);
  border: 1px solid var(--line);
  border-radius: 24px;
  padding: 28px 22px;
  box-shadow: var(--shadow);
}

.panel-box h4 {
  margin: 0 0 18px;
  font-size: 1.4rem;
}

.panel-box ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 12px;
}

.panel-box a {
  display: inline-block;
  width: 100%;
  padding: 12px 14px;
  border-radius: 12px;
  background: rgba(187, 122, 74, 0.08);
  color: var(--primary-dark);
  font-weight: 700;
}

.testimonial-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 22px;
}

blockquote {
  margin: 0;
  padding: 26px 22px;
  background: rgba(255, 255, 255, 0.5);
  border: 1px solid var(--line);
  border-radius: 22px;
  color: var(--text);
  font-size: 1.02rem;
}

blockquote footer {
  margin-top: 18px;
  color: var(--muted);
  font-weight: 700;
}

.footer {
  background: #1c1714;
  color: rgba(255, 255, 255, 0.8);
  padding-top: 40px;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr 0.8fr;
  gap: 22px;
  padding-bottom: 22px;
}

.footer-brand {
  margin-bottom: 8px;
}

.footer p,
.footer li {
  color: rgba(255, 255, 255, 0.72);
}

.footer h4 {
  margin: 8px 0 12px;
  color: #ffffff;
}

.footer ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 8px;
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  padding: 16px 0 20px;
}

@media (max-width: 900px) {
  .menu {
    display: none;
  }

  .hero-grid,
  .split-layout,
  .booking-grid,
  .cards-grid,
  .testimonial-grid,
  .benefit-grid,
  .stats-grid,
  .footer-grid {
    grid-template-columns: 1fr;
  }

  .stats-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .hero {
    padding-top: 36px;
  }
}

@media (max-width: 540px) {
  .nav {
    justify-content: space-between;
  }

  .btn {
    width: 100%;
  }

  .cta-row,
  .booking-actions {
    flex-direction: column;
  }

  .hero-copy h2 {
    font-size: 2.5rem;
  }

  .stats-grid {
    grid-template-columns: 1fr;
  }

  .feature-list {
    grid-template-columns: 1fr;
  }
}

