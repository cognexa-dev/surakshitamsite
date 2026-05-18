import { c as createComponent } from './astro-component_Bsk0LsZR.mjs';
import { s as renderComponent, v as renderTemplate, r as maybeRenderHead } from './entrypoint_CPbSosTj.mjs';
import { $ as $$MarketingLayout, s as surakshitamProducts } from './MarketingLayout_riPevCB9.mjs';
import { $ as $$ProductCard } from './ProductCard_Dq5uUtmG.mjs';
import { $ as $$CTASection } from './CTASection_DHQhdjLZ.mjs';
import { $ as $$Breadcrumbs } from './Breadcrumbs_C-wpofMc.mjs';

const $$CybersecuritySuite = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MarketingLayout", $$MarketingLayout, { "title": "Complete Cybersecurity Suite | Surakshitam", "description": "Surakshitam offers 7 cybersecurity products: Kavach (Firewall), Durg (VA), Shastra (Pen Testing), Raksha (WAF), Setu (VPN), Pravesh (Captive Portal), Netra (Monitoring)." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="bg-[#0a0f1a]"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6"> ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "crumbs": [{ label: "Home", href: "/" }, { label: "Cybersecurity Suite" }], "variant": "dark" })} </div> <section class="pt-8 pb-20"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="text-center mb-12"> <p class="text-sm font-semibold text-red-400 uppercase tracking-widest mb-2">Full Suite</p> <h1 class="text-4xl md:text-5xl font-extrabold text-white mb-4">
The Surakshitam Cybersecurity Suite
</h1> <p class="text-lg text-slate-400 max-w-2xl mx-auto">
Seven integrated products covering every layer of your organization's security — network, application, access, and monitoring.
</p> </div> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10"> ${surakshitamProducts.map((product) => renderTemplate`${renderComponent($$result2, "ProductCard", $$ProductCard, { "name": product.name, "title": product.title, "summary": product.summary, "href": `/${product.slug}/`, "cta": product.cta, "accentColor": product.accentColor, "variant": "dark" })}`)} </div> <div class="text-center"> <a href="/security-assessment/" class="inline-flex items-center justify-center px-8 py-3.5 bg-red-600 hover:bg-red-500 text-white font-semibold rounded-lg transition-colors" data-event="security_assessment_request" data-location="suite-overview">
Get Free Security Assessment
</a> </div> </div> </section> ${renderComponent($$result2, "CTASection", $$CTASection, { "title": "Need complete protection?", "description": "Request a security assessment. We will design the right combination of products for your organization's risk profile and budget.", "primaryLabel": "Request Assessment", "primaryHref": "/security-assessment/", "variant": "dark" })} </div> ` })}`;
}, "/Users/dilipparmar/projects2/cognexa/apps/surakshitam/src/pages/cybersecurity-suite.astro", void 0);

const $$file = "/Users/dilipparmar/projects2/cognexa/apps/surakshitam/src/pages/cybersecurity-suite.astro";
const $$url = "/cybersecurity-suite";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$CybersecuritySuite,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
