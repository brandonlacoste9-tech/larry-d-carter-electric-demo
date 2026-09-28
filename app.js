/* EN-only i18n for Larry D Carter Electric demo */
const i18n = {
  en: {
    "services.s1t": "Breaker &amp; panel work",
    "services.s1d": "Breaker installation and panel upgrades.",
    "services.s2t": "Switches &amp; outlets",
    "services.s2d": "Light switches and outlets installed right.",
    "services.s3t": "Lighting installation",
    "services.s3d": "Accent, indoor and outdoor lighting.",
    "services.s4t": "Appliance installation",
    "services.s4d": "Safe hookups for major appliances.",
    "services.s5t": "Backup generators",
    "services.s5d": "Generator installation for storm-ready homes.",
    "services.s6t": "Emergency service",
    "services.s6d": "Fast help when electrical trouble strikes.",
    "nav.call": "(904) 389-0846",
    "hero.kicker": "Jacksonville, Florida · Electrical contractor · Mon–Fri 9 AM–6 PM",
    "hero.title": "Jacksonville&#8217;s electricians<br>— since the 1980s.",
    "hero.sub": "Rated 4.5 out of 5 from 11 reviews: panels, wiring, lighting and generators across Jacksonville. Free estimates.",
    "hero.cta1": "Call __PHONE__",
    "trust.t1t": "39 years in business",
    "trust.t1d": "Serving Jacksonville since the 1980s",
    "trust.t2t": "Free estimates",
    "trust.t2d": "Know the price before we start",
    "trust.t3t": "Emergency service",
    "trust.t3d": "Here when you need us",
    "stats.s1n": "4.5\\u2605",
    "stats.s1l": "from 11 reviews",
    "stats.s2n": "39 years",
    "stats.s2l": "in business",
    "stats.s3n": "Jacksonville",
    "stats.s3l": "&amp; nearby areas",
    "stats.s4n": "Mon–Fri",
    "stats.s4l": "9:00 AM – 6:00 PM",
    "services.title": "Full-service electrical contracting",
    "why.title": "Why Jacksonville trusts Larry D Carter",
    "why.intro": "A family electrical contractor serving Jacksonville since the 1980s — four decades of careful, code-correct work.",
    "why.l1t": "Decades of experience",
    "why.l1d": "In business since the 1980s.",
    "why.l2t": "Free estimates",
    "why.l2d": "Upfront pricing on every job.",
    "why.l3t": "Licensed contractor",
    "why.l3d": "Florida certified electrical contractor.",
    "why.l4t": "Clean, safe work",
    "why.l4d": "Done right the first time.",
    "gallery.kicker": "On the job",
    "gallery.title": "Real work, real results",
    "gallery.c1": "Wiring done right, the first time",
    "gallery.c2": "Generator installs for storm-ready homes",
    "reviews.title": "Rated 4.5 out of 5 by Jacksonville homeowners",
    "reviews.more": "See what customers say about us — 4.5 stars from 11 reviews",
    "faq.q1": "Do you give free estimates?",
    "faq.a1": "Yes — call (904) 389-0846 for a free estimate on your project.",
    "faq.q2": "Do you install backup generators?",
    "faq.a2": "Yes — we install home standby generators.",
    "faq.q3": "Do you handle emergencies?",
    "faq.a3": "Yes — call us when electrical trouble can&#8217;t wait.",
    "faq.q4": "What are your hours?",
    "faq.a4": "Monday to Friday, 9:00 AM to 6:00 PM. We&#8217;re closed Saturday and Sunday.",
    "contact.hoursVal": "Mon – Fri: 9:00 AM – 6:00 PM<br>Sat – Sun: Closed",
    "footer.tag": "Electrician · Jacksonville, Florida",
    "nav.services": "Services",
    "nav.why": "Why us",
    "nav.gallery": "Gallery",
    "nav.faq": "FAQ",
    "nav.reviews": "Reviews",
    "nav.contact": "Contact",
    "hero.cta2": "See services",
    "services.kicker": "What we do",
    "why.kicker": "Why choose us",
    "reviews.kicker": "Word on the street",
    "faq.kicker": "Good to know",
    "faq.title": "Frequently asked questions",
    "contact.kicker": "Come see us",
    "contact.title": "Get in touch",
    "contact.addr": "Address",
    "contact.phone": "Phone",
    "contact.hours": "Hours",
    "contact.cta": "Call now",
  }
};

function applyLang(lang) {
  const dict = i18n[lang] || i18n.en;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });
  document.documentElement.lang = lang;
}

document.addEventListener("DOMContentLoaded", () => {
  applyLang("en");

  const menuBtn = document.getElementById("menuBtn");
  const nav = document.getElementById("mainNav");
  if (menuBtn && nav) {
    menuBtn.addEventListener("click", () => nav.classList.toggle("open"));
    nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => nav.classList.remove("open")));
  }

  const header = document.querySelector(".site-header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) header.classList.add("scrolled");
    else header.classList.remove("scrolled");
  }, { passive: true });
});
