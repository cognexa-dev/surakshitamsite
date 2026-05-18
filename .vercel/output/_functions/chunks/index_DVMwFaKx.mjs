import { c as createComponent } from './astro-component_Bsk0LsZR.mjs';
import { r as maybeRenderHead, k as addAttribute, v as renderTemplate, s as renderComponent } from './entrypoint_CPbSosTj.mjs';
import { $ as $$MarketingLayout, s as surakshitamProducts } from './MarketingLayout_riPevCB9.mjs';
import { $ as $$ProductCard } from './ProductCard_Dq5uUtmG.mjs';
import { $ as $$CTASection } from './CTASection_DHQhdjLZ.mjs';
import { $ as $$FAQ, c as cybersecurityFaqs } from './faqs_wiKicjjE.mjs';
import { s as siteConfig } from './WhatsAppButton_Cgmmkd98.mjs';

const $$TrustBar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$TrustBar;
  const { items, variant = "dark" } = Astro2.props;
  const isDark = variant === "dark";
  return renderTemplate`${maybeRenderHead()}<div${addAttribute([
    "py-10 border-y",
    isDark ? "bg-slate-800 border-slate-700" : "bg-slate-50 border-slate-200"
  ], "class:list")}> <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"> <dl${addAttribute([
    "grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x",
    isDark ? "divide-slate-700" : "divide-slate-200"
  ], "class:list")}> ${items.map((item) => renderTemplate`<div class="px-4"> <dt${addAttribute(["text-3xl font-bold", isDark ? "text-cyan-400" : "text-blue-600"], "class:list")}> ${item.value} </dt> <dd${addAttribute(["mt-1 text-sm", isDark ? "text-slate-400" : "text-slate-600"], "class:list")}> ${item.label} </dd> </div>`)} </dl> </div> </div>`;
}, "/Users/dilipparmar/projects2/cognexa/apps/surakshitam/src/components/shared/TrustBar.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const site = siteConfig.surakshitam;
  const cognexa = siteConfig.cognexa;
  const trustItems = [
    { value: "7", label: "Security Products" },
    { value: "10+", label: "Years Experience" },
    { value: "24/7", label: "Monitoring & Support" },
    { value: "Free", label: "Initial Assessment" }
  ];
  return renderTemplate`${renderComponent($$result, "MarketingLayout", $$MarketingLayout, { "title": "Surakshitam — Complete Cybersecurity Defense Suite", "description": "Surakshitam provides managed firewall, vulnerability assessment, penetration testing, WAF, VPN, captive portal, and network monitoring for organizations in India." }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="relative pt-20 pb-24 overflow-hidden bg-[#0a0f1a]"> <div class="absolute inset-0 bg-gradient-to-br from-red-950/20 via-[#0a0f1a] to-slate-900/50 pointer-events-none" aria-hidden="true"></div> <div class="absolute top-0 right-0 w-[600px] h-[600px] bg-red-900/5 rounded-full blur-3xl pointer-events-none" aria-hidden="true"></div> <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="max-w-3xl"> <p class="text-sm font-semibold text-red-400 uppercase tracking-widest mb-4">
Cybersecurity Suite by CogNexa
</p> <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight text-balance mb-6">
Complete Cybersecurity Defense for Your Business
</h1> <p class="text-lg md:text-xl text-slate-300 leading-relaxed mb-8 max-w-2xl">
Surakshitam helps protect your network, applications, users, and infrastructure with managed firewall, vulnerability assessment, penetration testing, WAF, VPN, captive portal, and monitoring solutions.
</p> <div class="flex flex-col sm:flex-row gap-4"> <a href="/security-assessment/" class="inline-flex items-center justify-center px-8 py-3.5 bg-red-600 hover:bg-red-500 text-white font-semibold rounded-lg transition-colors text-base" data-event="security_assessment_request" data-location="hero">
Get Free Security Assessment
</a> <a href="/cybersecurity-suite/" class="inline-flex items-center justify-center px-8 py-3.5 border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white font-medium rounded-lg transition-colors text-base">
Explore Security Suite
</a> </div> <div class="mt-6 flex flex-wrap items-center gap-4 text-sm text-slate-400"> <a${addAttribute(`tel:${site.phoneRaw}`, "href")} class="flex items-center gap-2 hover:text-white transition-colors" data-event="phone_click" data-location="hero">
📞 ${site.phone} </a> <a${addAttribute(site.whatsapp, "href")} target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 hover:text-white transition-colors" data-event="whatsapp_click" data-location="hero">
💬 WhatsApp Us
</a> </div> </div> </div> </section> ${renderComponent($$result2, "TrustBar", $$TrustBar, { "items": trustItems, "variant": "dark" })}  <section id="products" class="py-20 bg-[#0a0f1a]"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="text-center mb-12"> <p class="text-sm font-semibold text-red-400 uppercase tracking-widest mb-2">
Security Products
</p> <h2 class="text-3xl md:text-4xl font-bold text-white">
Seven Products. Complete Coverage.
</h2> <p class="mt-3 text-slate-400 max-w-2xl mx-auto">
From network perimeter to web applications to monitoring — Surakshitam covers every layer of your security needs.
</p> </div> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"> ${surakshitamProducts.map((product) => renderTemplate`${renderComponent($$result2, "ProductCard", $$ProductCard, { "name": product.name, "title": product.title, "summary": product.summary, "href": `/${product.slug}/`, "cta": product.cta, "accentColor": product.accentColor, "variant": "dark" })}`)} </div> </div> </section>  <section class="py-20 bg-slate-950"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"> <div> <p class="text-sm font-semibold text-red-400 uppercase tracking-widest mb-3">The Reality</p> <h2 class="text-3xl font-bold text-white mb-5">
Most organizations are one attack away from a serious incident
</h2> <ul class="space-y-3"> ${[
    "Firewall not updated or misconfigured since installation",
    "No visibility into what is happening on the network",
    "Web applications with OWASP Top 10 vulnerabilities",
    "Staff working remotely without proper VPN controls",
    "No formal vulnerability assessment ever conducted"
  ].map((item) => renderTemplate`<li class="flex items-start gap-3 text-slate-300"> <span class="text-red-400 mt-0.5 shrink-0">✗</span>${item} </li>`)} </ul> </div> <div> <p class="text-sm font-semibold text-emerald-400 uppercase tracking-widest mb-3">The Surakshitam Approach</p> <h2 class="text-3xl font-bold text-white mb-5">
Comprehensive defense, managed for you
</h2> <ul class="space-y-3"> ${[
    "Managed firewall with continuous monitoring and alerting",
    "Regular vulnerability scans across networks and applications",
    "Web application firewall protecting your public-facing systems",
    "Secure VPN for remote teams and site-to-site connectivity",
    "Network monitoring with real-time threat detection"
  ].map((item) => renderTemplate`<li class="flex items-start gap-3 text-slate-300"> <span class="text-emerald-400 mt-0.5 shrink-0">✓</span>${item} </li>`)} </ul> <a href="/security-assessment/" class="mt-8 inline-flex items-center px-6 py-3 bg-red-600 hover:bg-red-500 text-white font-semibold rounded-lg transition-colors" data-event="security_assessment_request" data-location="problem-section">
Get Free Assessment
</a> </div> </div> </div> </section>  <section class="py-20 bg-[#0a0f1a]"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="text-center mb-10"> <p class="text-sm font-semibold text-red-400 uppercase tracking-widest mb-2">Industries</p> <h2 class="text-3xl font-bold text-white">Built for organizations that cannot afford a breach</h2> </div> <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"> ${[
    { name: "Education", href: "/industries/education/", emoji: "🎓" },
    { name: "Healthcare", href: "/industries/healthcare/", emoji: "🏥" },
    { name: "Manufacturing", href: "/industries/manufacturing/", emoji: "🏭" },
    { name: "Hospitality", href: "/industries/hospitality/", emoji: "🏨" },
    { name: "Government", href: `${cognexa.domain}/industries/government/`, emoji: "🏛️" },
    { name: "E-commerce", href: "/security-assessment/", emoji: "🛒" },
    { name: "Banking & Finance", href: "/security-assessment/", emoji: "🏦" },
    { name: "SME Businesses", href: "/security-assessment/", emoji: "🏢" }
  ].map((ind) => renderTemplate`<a${addAttribute(ind.href, "href")} class="flex flex-col items-center gap-2 p-4 rounded-xl border border-slate-800 hover:border-red-600 bg-slate-900/50 hover:bg-slate-900 transition-all text-center"> <span class="text-2xl">${ind.emoji}</span> <span class="text-sm font-medium text-slate-300">${ind.name}</span> </a>`)} </div> </div> </section>  <section class="py-12 bg-slate-950 border-y border-slate-800"> <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"> <p class="text-slate-400 text-sm">
Surakshitam is a cybersecurity suite by${" "} <a${addAttribute(cognexa.domain, "href")} target="_blank" rel="noopener noreferrer" class="text-cyan-400 hover:underline font-medium">
CogNexa Technologies
</a> ${" "}— also providing AI automation, data management, and custom software development.
</p> </div> </section> ${renderComponent($$result2, "FAQ", $$FAQ, { "items": cybersecurityFaqs, "variant": "dark" })} ${renderComponent($$result2, "CTASection", $$CTASection, { "eyebrow": "Get Started", "title": "Not sure where your security gaps are?", "description": "Book a free initial assessment. Our team will review your current setup, identify high-risk areas, and suggest practical next steps.", "primaryLabel": "Get Free Security Assessment", "primaryHref": "/security-assessment/", "primaryEvent": "security_assessment_request", "secondaryLabel": "Call Us Now", "secondaryHref": `tel:${site.phoneRaw}`, "variant": "dark" })} ` })}`;
}, "/Users/dilipparmar/projects2/cognexa/apps/surakshitam/src/pages/index.astro", void 0);

const $$file = "/Users/dilipparmar/projects2/cognexa/apps/surakshitam/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
