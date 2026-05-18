import { c as createComponent } from './astro-component_Bsk0LsZR.mjs';
import { s as renderComponent, v as renderTemplate, r as maybeRenderHead, k as addAttribute } from './entrypoint_CPbSosTj.mjs';
import { $ as $$MarketingLayout } from './MarketingLayout_riPevCB9.mjs';
import { s as siteConfig } from './WhatsAppButton_Cgmmkd98.mjs';

const $$Terms = createComponent(($$result, $$props, $$slots) => {
  const site = siteConfig.surakshitam;
  return renderTemplate`${renderComponent($$result, "MarketingLayout", $$MarketingLayout, { "title": "Terms of Service | Surakshitam", "description": "Surakshitam terms of service." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-slate-300"> <h1 class="text-3xl font-bold text-white mb-6">Terms of Service</h1> <p class="text-sm text-slate-500 mb-8">Last updated: May 2026</p> <div class="space-y-8 text-sm leading-relaxed"> <section> <h2 class="text-lg font-semibold text-white mb-2">Use of This Website</h2> <p>By accessing surakshitam.com you agree to use it only for lawful purposes.</p> </section> <section> <h2 class="text-lg font-semibold text-white mb-2">Intellectual Property</h2> <p>All content is the property of CogNexa Technologies / Surakshitam. Reproduction requires written permission.</p> </section> <section> <h2 class="text-lg font-semibold text-white mb-2">Contact</h2> <p>Questions? Contact <a${addAttribute(`mailto:${site.email}`, "href")} class="text-red-400 hover:underline">${site.email}</a>.</p> </section> </div> </div> ` })}`;
}, "/Users/dilipparmar/projects2/cognexa/apps/surakshitam/src/pages/terms.astro", void 0);

const $$file = "/Users/dilipparmar/projects2/cognexa/apps/surakshitam/src/pages/terms.astro";
const $$url = "/terms";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Terms,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
