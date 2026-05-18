import { c as createComponent } from './astro-component_Bsk0LsZR.mjs';
import { v as renderTemplate, z as unescapeHTML, k as addAttribute, r as maybeRenderHead } from './entrypoint_CPbSosTj.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Breadcrumbs = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Breadcrumbs;
  const { crumbs, variant = "light" } = Astro2.props;
  const isDark = variant === "dark";
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      ...c.href ? { item: c.href } : {}
    }))
  };
  return renderTemplate(_a || (_a = __template(["", '<nav aria-label="Breadcrumb" class="py-3"> <ol', ' itemscope itemtype="https://schema.org/BreadcrumbList"> ', ' </ol> </nav> <script type="application/ld+json">', "<\/script>"])), maybeRenderHead(), addAttribute([
    "flex flex-wrap items-center gap-1 text-sm",
    isDark ? "text-slate-400" : "text-slate-500"
  ], "class:list"), crumbs.map((crumb, i) => renderTemplate`<li class="flex items-center gap-1"> ${i > 0 && renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-3.5 h-3.5 shrink-0" aria-hidden="true"> <path fill-rule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"></path> </svg>`} ${crumb.href && i < crumbs.length - 1 ? renderTemplate`<a${addAttribute(crumb.href, "href")}${addAttribute([
    "hover:underline",
    isDark ? "hover:text-white" : "hover:text-slate-900"
  ], "class:list")}> ${crumb.label} </a>` : renderTemplate`<span${addAttribute([
    "font-medium",
    isDark ? "text-white" : "text-slate-900"
  ], "class:list")} aria-current="page"> ${crumb.label} </span>`} </li>`), unescapeHTML(JSON.stringify(schema)));
}, "/Users/dilipparmar/projects2/cognexa/apps/surakshitam/src/components/shared/Breadcrumbs.astro", void 0);

export { $$Breadcrumbs as $ };
