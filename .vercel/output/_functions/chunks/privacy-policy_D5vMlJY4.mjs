import { c as createComponent } from './astro-component_Bsk0LsZR.mjs';
import { s as renderComponent, v as renderTemplate, r as maybeRenderHead, k as addAttribute } from './entrypoint_CPbSosTj.mjs';
import { $ as $$MarketingLayout } from './MarketingLayout_riPevCB9.mjs';
import { s as siteConfig } from './WhatsAppButton_Cgmmkd98.mjs';

const $$PrivacyPolicy = createComponent(($$result, $$props, $$slots) => {
  const site = siteConfig.surakshitam;
  return renderTemplate`${renderComponent($$result, "MarketingLayout", $$MarketingLayout, { "title": "Privacy Policy | Surakshitam", "description": "Surakshitam privacy policy." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-slate-300"> <h1 class="text-3xl font-bold text-white mb-6">Privacy Policy</h1> <p class="text-sm text-slate-500 mb-8">Last updated: May 2026</p> <div class="space-y-8 text-sm leading-relaxed"> <section> <h2 class="text-lg font-semibold text-white mb-2">Information We Collect</h2> <p>When you submit a form, we collect your name, phone, email, company, and message. We also collect web analytics data and UTM parameters for marketing attribution.</p> </section> <section> <h2 class="text-lg font-semibold text-white mb-2">How We Use It</h2> <p>Submitted information is used solely to respond to your enquiry. We do not sell personal information to third parties.</p> </section> <section> <h2 class="text-lg font-semibold text-white mb-2">Analytics</h2> <p>We use Google Analytics 4 to understand website usage. This collects anonymised data.</p> </section> <section> <h2 class="text-lg font-semibold text-white mb-2">Contact</h2> <p>For privacy queries, contact <a${addAttribute(`mailto:${site.email}`, "href")} class="text-red-400 hover:underline">${site.email}</a>.</p> </section> </div> </div> ` })}`;
}, "/Users/dilipparmar/projects2/cognexa/apps/surakshitam/src/pages/privacy-policy.astro", void 0);

const $$file = "/Users/dilipparmar/projects2/cognexa/apps/surakshitam/src/pages/privacy-policy.astro";
const $$url = "/privacy-policy";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$PrivacyPolicy,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
