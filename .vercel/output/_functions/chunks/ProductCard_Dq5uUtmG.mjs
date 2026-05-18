import { c as createComponent } from './astro-component_Bsk0LsZR.mjs';
import { r as maybeRenderHead, k as addAttribute, v as renderTemplate } from './entrypoint_CPbSosTj.mjs';

const $$ProductCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$ProductCard;
  const {
    name,
    title,
    summary,
    href,
    cta = "Learn More",
    accentColor = "#3b82f6",
    variant = "dark"
  } = Astro2.props;
  const isDark = variant === "dark";
  return renderTemplate`${maybeRenderHead()}<article${addAttribute([
    "group rounded-2xl border-l-4 p-6 flex flex-col transition-all hover:shadow-lg",
    isDark ? "bg-slate-800 border-slate-700 hover:bg-slate-750" : "bg-white border-slate-200 hover:shadow-md"
  ], "class:list")}${addAttribute(`border-left-color: ${accentColor}`, "style")}> <div class="mb-3"> <span class="text-xs font-bold uppercase tracking-widest"${addAttribute(`color: ${accentColor}`, "style")}> ${name} </span> <h3${addAttribute(["text-lg font-bold mt-0.5", isDark ? "text-white" : "text-slate-900"], "class:list")}> ${title} </h3> </div> <p${addAttribute(["text-sm leading-relaxed flex-1", isDark ? "text-slate-400" : "text-slate-600"], "class:list")}> ${summary} </p> <a${addAttribute(href, "href")}${addAttribute([
    "mt-5 inline-flex items-center gap-1 text-sm font-semibold transition-colors"
  ], "class:list")}${addAttribute(`color: ${accentColor}`, "style")} data-event="service_card_click" data-location="card"${addAttribute(name, "data-service")}> ${cta} <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true"> <path fill-rule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clip-rule="evenodd"></path> </svg> </a> </article>`;
}, "/Users/dilipparmar/projects2/cognexa/apps/surakshitam/src/components/shared/ProductCard.astro", void 0);

export { $$ProductCard as $ };
