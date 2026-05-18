import { c as createComponent } from './astro-component_Bsk0LsZR.mjs';
import { v as renderTemplate, z as unescapeHTML, k as addAttribute, r as maybeRenderHead } from './entrypoint_CPbSosTj.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$FAQ = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$FAQ;
  const { items, title = "Frequently Asked Questions", variant = "light" } = Astro2.props;
  const isDark = variant === "dark";
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };
  return renderTemplate(_a || (_a = __template(["", "<section", '> <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8"> <h2', "> ", ' </h2> <div class="space-y-4"> ', ' </div> </div> </section> <script type="application/ld+json">', "<\/script>"])), maybeRenderHead(), addAttribute(["py-16", isDark ? "bg-slate-900" : "bg-slate-50"], "class:list"), addAttribute([
    "text-2xl md:text-3xl font-bold mb-10 text-center",
    isDark ? "text-white" : "text-slate-900"
  ], "class:list"), title, items.map((item, i) => renderTemplate`<details${addAttribute([
    "group rounded-xl border p-5 cursor-pointer",
    isDark ? "border-slate-700 bg-slate-800" : "border-slate-200 bg-white"
  ], "class:list")}> <summary${addAttribute(["flex items-center justify-between gap-4 font-semibold list-none select-none", isDark ? "text-white" : "text-slate-900"], "class:list")}> <span>${item.question}</span> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 shrink-0 transition-transform group-open:rotate-180" aria-hidden="true"> <path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"></path> </svg> </summary> <p${addAttribute([
    "mt-3 text-sm leading-relaxed",
    isDark ? "text-slate-400" : "text-slate-600"
  ], "class:list")}> ${item.answer} </p> </details>`), unescapeHTML(JSON.stringify(faqSchema)));
}, "/Users/dilipparmar/projects2/cognexa/apps/surakshitam/src/components/shared/FAQ.astro", void 0);

const cybersecurityFaqs = [
  {
    question: "What is Surakshitam?",
    answer: "Surakshitam is CogNexa's cybersecurity product suite, covering managed firewall (Kavach), vulnerability assessment (Durg), penetration testing (Shastra), WAF (Raksha), VPN (Setu), captive portal (Pravesh), and network monitoring (Netra)."
  },
  {
    question: "Do I need all seven products?",
    answer: "No. Most organizations start with firewall and vulnerability assessment, then add products as their security maturity grows. We help you choose what's right for your current risk profile and budget."
  },
  {
    question: "Is penetration testing the same as vulnerability scanning?",
    answer: "No. Vulnerability scanning (Durg) is automated and identifies known weaknesses. Penetration testing (Shastra) is manual — security professionals actively try to exploit vulnerabilities to see how far an attacker could go."
  }
];

export { $$FAQ as $, cybersecurityFaqs as c };
