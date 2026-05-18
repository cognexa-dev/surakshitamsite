import { c as createComponent } from './astro-component_Bsk0LsZR.mjs';
import { s as renderComponent, v as renderTemplate, r as maybeRenderHead, k as addAttribute } from './entrypoint_CPbSosTj.mjs';
import { s as surakshitamProducts, $ as $$MarketingLayout } from './MarketingLayout_riPevCB9.mjs';
import { $ as $$LeadForm } from './LeadForm_DNIwruCY.mjs';
import { s as siteConfig } from './WhatsAppButton_Cgmmkd98.mjs';

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  const site = siteConfig.surakshitam;
  const services = surakshitamProducts.map((p) => `${p.name} — ${p.title}`);
  services.unshift("General Enquiry");
  return renderTemplate`${renderComponent($$result, "MarketingLayout", $$MarketingLayout, { "title": "Contact Surakshitam — Get Free Security Assessment", "description": "Contact Surakshitam for managed firewall, vulnerability assessment, penetration testing, and other cybersecurity services. Request a free security assessment." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="py-16 md:py-24 bg-[#0a0f1a]"> <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"> <div> <p class="text-sm font-semibold text-red-400 uppercase tracking-widest mb-3">Contact</p> <h1 class="text-3xl md:text-4xl font-bold text-white mb-4">Get in Touch</h1> <p class="text-slate-300 leading-relaxed mb-8">
Tell us about your cybersecurity requirements and our team will get back to you within 24 hours.
</p> <div class="space-y-4 mb-8"> <div class="flex items-start gap-4"> <span class="text-2xl">📞</span> <div> <p class="font-semibold text-white">Phone</p> <a${addAttribute(`tel:${site.phoneRaw}`, "href")} class="text-red-400 hover:text-red-300 transition-colors" data-event="phone_click" data-location="contact">${site.phone}</a> </div> </div> <div class="flex items-start gap-4"> <span class="text-2xl">✉️</span> <div> <p class="font-semibold text-white">Email</p> <a${addAttribute(`mailto:${site.email}`, "href")} class="text-red-400 hover:text-red-300 transition-colors">${site.email}</a> </div> </div> <div class="flex items-start gap-4"> <span class="text-2xl">💬</span> <div> <p class="font-semibold text-white">WhatsApp</p> <a${addAttribute(site.whatsapp, "href")} target="_blank" rel="noopener noreferrer" class="text-red-400 hover:text-red-300 transition-colors" data-event="whatsapp_click" data-location="contact">
Message on WhatsApp
</a> </div> </div> </div> </div> <div> ${renderComponent($$result2, "LeadForm", $$LeadForm, { "title": "Send Your Enquiry", "services": services, "action": "/api/lead", "thankYouUrl": "/thank-you/", "variant": "dark" })} </div> </div> </div> </section> ` })}`;
}, "/Users/dilipparmar/projects2/cognexa/apps/surakshitam/src/pages/contact.astro", void 0);

const $$file = "/Users/dilipparmar/projects2/cognexa/apps/surakshitam/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
