import { l as createRenderInstruction, k as addAttribute, v as renderTemplate, z as unescapeHTML, u as renderSlot, t as renderHead, s as renderComponent, r as maybeRenderHead } from './entrypoint_CPbSosTj.mjs';
import { c as createComponent } from './astro-component_Bsk0LsZR.mjs';

async function renderScript(result, id) {
  const inlined = result.inlinedScripts.get(id);
  let content = "";
  if (inlined != null) {
    if (inlined) {
      content = `<script type="module">${inlined}</script>`;
    }
  } else {
    const resolved = await result.resolve(id);
    content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"></script>`;
  }
  return createRenderInstruction({ type: "script", id, content });
}

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a;
const $$SEO = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$SEO;
  const {
    title,
    description,
    canonical,
    ogImage = "/og-default.png",
    ogType = "website",
    noindex = false,
    schema
  } = Astro2.props;
  const canonicalUrl = canonical ?? Astro2.url.href;
  const schemaArray = schema ? Array.isArray(schema) ? schema : [schema] : [];
  return renderTemplate`<title>${title}</title><meta name="description"${addAttribute(description, "content")}><link rel="canonical"${addAttribute(canonicalUrl, "href")}>${noindex && renderTemplate`<meta name="robots" content="noindex, nofollow">`}<!-- Open Graph --><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:type"${addAttribute(ogType, "content")}><meta property="og:url"${addAttribute(canonicalUrl, "content")}><meta property="og:image"${addAttribute(ogImage, "content")}><!-- Twitter Card --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"${addAttribute(title, "content")}><meta name="twitter:description"${addAttribute(description, "content")}><meta name="twitter:image"${addAttribute(ogImage, "content")}>${schemaArray.map((s) => renderTemplate(_a || (_a = __template$1(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(JSON.stringify(s))))}`;
}, "/Users/dilipparmar/projects2/cognexa/apps/surakshitam/src/components/shared/SEO.astro", void 0);

const siteConfig = {
  cognexa: {
    domain: "https://cognexa.in"},
  surakshitam: {
    name: "Surakshitam",
    domain: "https://surakshitam.com",
    phone: "+91 98989 31509",
    phoneRaw: "+919898931509",
    whatsapp: "https://wa.me/919898931509",
    email: "sales@cognexa.in",
    ga4Id: "",
    parentBrand: "CogNexa",
    parentDomain: "https://cognexa.in"
  }
};

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _b;
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { title, description, canonical, ogImage, noindex, schema } = Astro2.props;
  const site = siteConfig.surakshitam;
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.domain,
    parentOrganization: { "@type": "Organization", name: site.parentBrand, url: site.parentDomain },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: site.phone,
      contactType: "sales",
      availableLanguage: ["English", "Hindi"]
    }
  };
  return renderTemplate(_b || (_b = __template(['<html lang="en" class="scroll-smooth"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="generator"', '><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous"><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">', "", "", '</head> <body class="bg-[#0a0f1a] text-slate-100 font-sans antialiased"> ', ' <script>\n      document.addEventListener("click", function (e) {\n        const el = e.target?.closest("[data-event]");\n        if (!el) return;\n        const event = el.dataset.event;\n        const location = el.dataset.location;\n        const service = el.dataset.service;\n        if (typeof gtag === "function" && event) {\n          gtag("event", event, { event_location: location, service_name: service });\n        }\n      });\n    <\/script> </body> </html>'])), addAttribute(Astro2.generator, "content"), renderComponent($$result, "SEO", $$SEO, { "title": title, "description": description, "canonical": canonical, "ogImage": ogImage, "noindex": noindex, "schema": schema ? [orgSchema, ...Array.isArray(schema) ? schema : [schema]] : [orgSchema] }), site.ga4Id, renderHead(), renderSlot($$result, $$slots["default"]));
}, "/Users/dilipparmar/projects2/cognexa/apps/surakshitam/src/layouts/BaseLayout.astro", void 0);

const $$WhatsAppButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$WhatsAppButton;
  const { href, message = "Hello, I'd like to enquire about your services." } = Astro2.props;
  const encodedMsg = encodeURIComponent(message);
  const fullHref = `${href}?text=${encodedMsg}`;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(fullHref, "href")} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp" class="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] shadow-lg hover:bg-[#1ebe5d] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#25D366]" data-event="whatsapp_click" data-location="sticky"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-7 h-7 text-white" aria-hidden="true"> <path d="M12.001 2C6.477 2 2 6.477 2 12c0 1.9.53 3.67 1.45 5.18L2 22l4.97-1.43A9.948 9.948 0 0 0 12 22c5.523 0 10-4.477 10-10S17.524 2 12.001 2Zm0 18a7.95 7.95 0 0 1-4.06-1.11l-.29-.17-3.01.87.84-3.06-.19-.31A7.97 7.97 0 0 1 4 12c0-4.411 3.588-8 8-8s8 3.589 8 8-3.589 8-8 8Zm4.4-5.96c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.92-1.18-.71-.63-1.19-1.41-1.33-1.65-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.19-.46-.39-.4-.54-.41h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.69 2.58 4.1 3.62.57.25 1.02.4 1.37.51.58.18 1.1.16 1.52.1.46-.07 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z"></path> </svg> </a>`;
}, "/Users/dilipparmar/projects2/cognexa/apps/surakshitam/src/components/shared/WhatsAppButton.astro", void 0);

export { $$BaseLayout as $, $$WhatsAppButton as a, renderScript as r, siteConfig as s };
