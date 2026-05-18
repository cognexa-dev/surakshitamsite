import { c as createComponent } from './astro-component_Bsk0LsZR.mjs';
import { r as maybeRenderHead, k as addAttribute, v as renderTemplate, s as renderComponent, u as renderSlot } from './entrypoint_CPbSosTj.mjs';
import { $ as $$BaseLayout, s as siteConfig, a as $$WhatsAppButton } from './WhatsAppButton_Cgmmkd98.mjs';
import { $ as $$LeadForm } from './LeadForm_DNIwruCY.mjs';
import { $ as $$FAQ, c as cybersecurityFaqs } from './faqs_wiKicjjE.mjs';

const $$PhoneCTA = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$PhoneCTA;
  const {
    phone,
    phoneRaw,
    label,
    variant = "inline",
    class: className
  } = Astro2.props;
  return renderTemplate`${variant === "button" ? renderTemplate`${maybeRenderHead()}<a${addAttribute(`tel:${phoneRaw}`, "href")}${addAttribute([
    "inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold transition-colors border border-current",
    className
  ], "class:list")} data-event="phone_click" data-location="cta"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4" aria-hidden="true"><path fill-rule="evenodd" d="M2 3.5A1.5 1.5 0 0 1 3.5 2h1.148a1.5 1.5 0 0 1 1.465 1.175l.716 3.223a1.5 1.5 0 0 1-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 0 0 6.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 0 1 1.767-1.052l3.223.716A1.5 1.5 0 0 1 18 15.352V16.5a1.5 1.5 0 0 1-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 0 1 2.43 8.326 13.019 13.019 0 0 1 2 5V3.5Z" clip-rule="evenodd"></path></svg>${label ?? phone}</a>` : renderTemplate`<a${addAttribute(`tel:${phoneRaw}`, "href")}${addAttribute(["inline-flex items-center gap-1.5 hover:underline", className], "class:list")} data-event="phone_click" data-location="inline"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4 shrink-0" aria-hidden="true"><path fill-rule="evenodd" d="M2 3.5A1.5 1.5 0 0 1 3.5 2h1.148a1.5 1.5 0 0 1 1.465 1.175l.716 3.223a1.5 1.5 0 0 1-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 0 0 6.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 0 1 1.767-1.052l3.223.716A1.5 1.5 0 0 1 18 15.352V16.5a1.5 1.5 0 0 1-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 0 1 2.43 8.326 13.019 13.019 0 0 1 2 5V3.5Z" clip-rule="evenodd"></path></svg>${label ?? phone}</a>`}`;
}, "/Users/dilipparmar/projects2/cognexa/apps/surakshitam/src/components/shared/PhoneCTA.astro", void 0);

const $$LandingPageLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$LandingPageLayout;
  const props = Astro2.props;
  const { whatsapp, phone, phoneRaw, email, name } = siteConfig.surakshitam;
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { ...props, "noindex": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<header class="border-b border-slate-800 bg-[#0a0f1a]"> <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between"> <a href="/" class="font-bold text-lg text-white" aria-label="Surakshitam — Home"> <span class="text-red-500">Sur</span>akshitam
</a> ${renderComponent($$result2, "PhoneCTA", $$PhoneCTA, { "phone": phone, "phoneRaw": phoneRaw, "variant": "button", "class": "text-red-400 border-red-500 hover:bg-red-500 hover:text-white text-sm" })} </div> </header> <main id="main-content"> ${renderSlot($$result2, $$slots["default"])} </main> <footer class="bg-slate-950 border-t border-slate-800 py-6 text-center text-xs text-slate-600"> <p>
© ${currentYear} ${name} by CogNexa Technologies ·
<a${addAttribute(`mailto:${email}`, "href")} class="hover:text-slate-400">${email}</a> ·
<a href="/privacy-policy/" class="hover:text-slate-400">Privacy Policy</a> </p> </footer> ${renderComponent($$result2, "WhatsAppButton", $$WhatsAppButton, { "href": whatsapp })} ` })}`;
}, "/Users/dilipparmar/projects2/cognexa/apps/surakshitam/src/layouts/LandingPageLayout.astro", void 0);

const $$FreeSecurityAudit = createComponent(($$result, $$props, $$slots) => {
  const site = siteConfig.surakshitam;
  return renderTemplate`${renderComponent($$result, "LandingPageLayout", $$LandingPageLayout, { "title": "Free Security Audit — Surakshitam", "description": "Get a free security audit from Surakshitam. We identify your highest-risk areas and provide practical recommendations." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="py-12 md:py-20 bg-[#0a0f1a]"> <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"> <div> <p class="text-sm font-semibold text-red-400 uppercase tracking-widest mb-3">Free Offer</p> <h1 class="text-3xl md:text-4xl font-extrabold text-white mb-5 text-balance">
Free Security Audit for Your Organization
</h1> <p class="text-slate-300 leading-relaxed mb-6">
We review your current security setup — firewall, network, web applications, and access controls — and tell you exactly where your highest risks are. No cost, no commitment.
</p> <ul class="space-y-3 mb-8"> ${["Network and firewall review", "Identification of high-risk vulnerabilities", "Written findings summary", "Practical next-step recommendations"].map((b) => renderTemplate`<li class="flex items-start gap-3 text-slate-300 text-sm"> <span class="text-emerald-400 mt-0.5 shrink-0">✓</span>${b} </li>`)} </ul> <div class="flex flex-col sm:flex-row gap-3 text-sm"> <a${addAttribute(`tel:${site.phoneRaw}`, "href")} class="flex items-center gap-2 text-slate-400 hover:text-white" data-event="phone_click" data-location="landing-audit">📞 ${site.phone}</a> <a${addAttribute(site.whatsapp, "href")} target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 text-slate-400 hover:text-white" data-event="whatsapp_click" data-location="landing-audit">💬 WhatsApp</a> </div> </div> <div> ${renderComponent($$result2, "LeadForm", $$LeadForm, { "title": "Request Free Security Audit", "subtitle": "We will get back to you within 24 hours.", "services": ["Full Security Audit", "Managed Firewall Assessment", "Vulnerability Scan", "Penetration Test", "WAF Assessment"], "action": "/api/lead", "thankYouUrl": "/thank-you/", "variant": "dark" })} </div> </div> </div> </section> ${renderComponent($$result2, "FAQ", $$FAQ, { "items": cybersecurityFaqs.slice(0, 3), "variant": "dark", "title": "Common Questions" })} ` })}`;
}, "/Users/dilipparmar/projects2/cognexa/apps/surakshitam/src/pages/landing/free-security-audit.astro", void 0);

const $$file = "/Users/dilipparmar/projects2/cognexa/apps/surakshitam/src/pages/landing/free-security-audit.astro";
const $$url = "/landing/free-security-audit";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$FreeSecurityAudit,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
