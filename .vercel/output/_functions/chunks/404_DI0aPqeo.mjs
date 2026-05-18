import { c as createComponent } from './astro-component_Bsk0LsZR.mjs';
import { s as renderComponent, v as renderTemplate, r as maybeRenderHead } from './entrypoint_CPbSosTj.mjs';
import { $ as $$MarketingLayout } from './MarketingLayout_riPevCB9.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MarketingLayout", $$MarketingLayout, { "title": "Page Not Found | Surakshitam", "description": "Page not found.", "noindex": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="min-h-[70vh] flex items-center justify-center py-20 bg-[#0a0f1a]"> <div class="text-center px-4"> <p class="text-6xl font-extrabold text-slate-800 mb-4">404</p> <h1 class="text-2xl font-bold text-white mb-3">Page not found</h1> <p class="text-slate-400 mb-8">The page you are looking for does not exist.</p> <div class="flex flex-col sm:flex-row gap-3 justify-center"> <a href="/" class="px-6 py-2.5 bg-red-600 hover:bg-red-500 text-white font-semibold rounded-lg transition-colors">Back to Home</a> <a href="/contact/" class="px-6 py-2.5 border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white rounded-lg transition-colors">Contact Us</a> </div> </div> </section> ` })}`;
}, "/Users/dilipparmar/projects2/cognexa/apps/surakshitam/src/pages/404.astro", void 0);

const $$file = "/Users/dilipparmar/projects2/cognexa/apps/surakshitam/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
