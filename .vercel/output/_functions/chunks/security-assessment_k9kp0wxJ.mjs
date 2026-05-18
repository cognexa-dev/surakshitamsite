import { c as createComponent } from './astro-component_Bsk0LsZR.mjs';
import { s as renderComponent, v as renderTemplate, r as maybeRenderHead, k as addAttribute } from './entrypoint_CPbSosTj.mjs';
import { s as surakshitamProducts, $ as $$MarketingLayout } from './MarketingLayout_riPevCB9.mjs';
import { $ as $$LeadForm } from './LeadForm_DNIwruCY.mjs';
import { $ as $$FAQ, c as cybersecurityFaqs } from './faqs_wiKicjjE.mjs';
import { s as siteConfig } from './WhatsAppButton_Cgmmkd98.mjs';

const $$SecurityAssessment = createComponent(($$result, $$props, $$slots) => {
  const site = siteConfig.surakshitam;
  const services = surakshitamProducts.map((p) => `${p.name} — ${p.title}`);
  services.unshift("Full Security Assessment");
  return renderTemplate`${renderComponent($$result, "MarketingLayout", $$MarketingLayout, { "title": "Free Security Assessment | Surakshitam", "description": "Book a free initial security assessment with Surakshitam. We review your current security setup, identify high-risk areas, and suggest practical next steps." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="py-16 md:py-24 bg-[#0a0f1a]"> <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"> <div> <p class="text-sm font-semibold text-red-400 uppercase tracking-widest mb-3">Free Offer</p> <h1 class="text-3xl md:text-4xl font-bold text-white mb-5 text-balance">
Get a Free Security Assessment
</h1> <p class="text-slate-300 leading-relaxed mb-8">
Not sure where your security gaps are? Our team will review your current setup, identify the highest-risk areas, and recommend practical next steps — at no cost, no commitment.
</p> <div class="space-y-4 mb-8"> ${[
    { title: "Network & Firewall Review", desc: "We assess your current firewall configuration and network perimeter." },
    { title: "Risk-Prioritized Findings", desc: "You receive a clear report of findings sorted by severity and impact." },
    { title: "Practical Recommendations", desc: "Actionable steps your team can start on immediately." },
    { title: "No Hard Sell", desc: "Honest advice. We tell you what you actually need, not everything we sell." }
  ].map((item) => renderTemplate`<div class="flex items-start gap-3"> <span class="text-emerald-400 mt-0.5 shrink-0">✓</span> <div> <p class="font-semibold text-white text-sm">${item.title}</p> <p class="text-slate-400 text-sm">${item.desc}</p> </div> </div>`)} </div> <div class="flex flex-col sm:flex-row gap-3 text-sm"> <a${addAttribute(`tel:${site.phoneRaw}`, "href")} class="flex items-center gap-2 text-slate-400 hover:text-white" data-event="phone_click" data-location="security-assessment">
📞 ${site.phone} </a> <a${addAttribute(site.whatsapp, "href")} target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 text-slate-400 hover:text-white" data-event="whatsapp_click" data-location="security-assessment">
💬 WhatsApp Us
</a> </div> </div> <div> ${renderComponent($$result2, "LeadForm", $$LeadForm, { "title": "Book Free Security Assessment", "subtitle": "We will get back to you within 24 hours.", "services": services, "variant": "dark" })} </div> </div> </div> </section> ${renderComponent($$result2, "FAQ", $$FAQ, { "items": cybersecurityFaqs, "variant": "dark", "title": "Common Questions About Our Assessment" })} ` })}`;
}, "/Users/dilipparmar/projects2/cognexa/apps/surakshitam/src/pages/security-assessment.astro", void 0);

const $$file = "/Users/dilipparmar/projects2/cognexa/apps/surakshitam/src/pages/security-assessment.astro";
const $$url = "/security-assessment";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$SecurityAssessment,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
