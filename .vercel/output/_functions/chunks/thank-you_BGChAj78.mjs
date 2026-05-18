import { c as createComponent } from './astro-component_Bsk0LsZR.mjs';
import { s as renderComponent, v as renderTemplate, r as maybeRenderHead, k as addAttribute } from './entrypoint_CPbSosTj.mjs';
import { $ as $$MarketingLayout } from './MarketingLayout_riPevCB9.mjs';
import { s as siteConfig } from './WhatsAppButton_Cgmmkd98.mjs';

const $$ThankYou = createComponent(($$result, $$props, $$slots) => {
  const site = siteConfig.surakshitam;
  return renderTemplate`${renderComponent($$result, "MarketingLayout", $$MarketingLayout, { "title": "Thank You | Surakshitam", "description": "Your security assessment request has been received.", "noindex": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="min-h-[70vh] flex items-center justify-center py-20 bg-[#0a0f1a]"> <div class="max-w-xl mx-auto px-4 text-center"> <div class="w-16 h-16 rounded-full bg-emerald-400/10 border border-emerald-400/30 flex items-center justify-center mx-auto mb-6"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8 text-emerald-400" aria-hidden="true"> <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd"></path> </svg> </div> <h1 class="text-3xl font-bold text-white mb-3">Thank you — request received</h1> <p class="text-slate-300 mb-8">Our security team will review your requirements and get back to you within 24 hours.</p> <div class="flex flex-col sm:flex-row gap-3 justify-center mb-10"> <a${addAttribute(`tel:${site.phoneRaw}`, "href")} class="inline-flex items-center justify-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-500 text-white font-semibold rounded-lg transition-colors" data-event="phone_click" data-location="thank-you">📞 Call Now</a> <a${addAttribute(site.whatsapp, "href")} target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold rounded-lg transition-colors" data-event="whatsapp_click" data-location="thank-you">💬 WhatsApp</a> </div> <a href="/" class="text-sm text-slate-400 hover:text-white">← Back to home</a> </div> </section> ` })}`;
}, "/Users/dilipparmar/projects2/cognexa/apps/surakshitam/src/pages/thank-you.astro", void 0);

const $$file = "/Users/dilipparmar/projects2/cognexa/apps/surakshitam/src/pages/thank-you.astro";
const $$url = "/thank-you";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ThankYou,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
