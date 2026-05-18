import { c as createComponent } from './astro-component_Bsk0LsZR.mjs';
import { r as maybeRenderHead, k as addAttribute, v as renderTemplate } from './entrypoint_CPbSosTj.mjs';
import { r as renderScript } from './WhatsAppButton_Cgmmkd98.mjs';

const $$LeadForm = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$LeadForm;
  const {
    title = "Request Free Consultation",
    subtitle = "Our team will get back to you within 24 hours.",
    services,
    action = "/api/lead",
    thankYouUrl = "/thank-you/",
    variant = "light",
    compact = false
  } = Astro2.props;
  const isDark = variant === "dark";
  return renderTemplate`${maybeRenderHead()}<div${addAttribute([
    "lead-form-wrapper rounded-2xl p-6 md:p-8",
    isDark ? "bg-slate-800 border border-slate-700" : "bg-white shadow-lg border border-slate-100"
  ], "class:list")}> ${title && renderTemplate`<h3${addAttribute(["text-xl font-bold mb-1", isDark ? "text-white" : "text-slate-900"], "class:list")}> ${title} </h3>`} ${subtitle && renderTemplate`<p${addAttribute(["text-sm mb-6", isDark ? "text-slate-400" : "text-slate-500"], "class:list")}> ${subtitle} </p>`} <form id="lead-form" method="POST"${addAttribute(action, "action")}${addAttribute(thankYouUrl, "data-thank-you")} class="space-y-4" novalidate> <!-- Hidden tracking fields - populated by JS --> <input type="hidden" name="source" id="field_source"> <input type="hidden" name="medium" id="field_medium"> <input type="hidden" name="campaign" id="field_campaign"> <input type="hidden" name="term" id="field_term"> <input type="hidden" name="content" id="field_content"> <input type="hidden" name="gclid" id="field_gclid"> <input type="hidden" name="pageUrl" id="field_pageUrl"> <input type="hidden" name="referrer" id="field_referrer"> <input type="hidden" name="timestamp" id="field_timestamp"> <!-- Honeypot --> <input type="text" name="website" class="hidden" tabindex="-1" autocomplete="off"> <div${addAttribute([compact ? "grid grid-cols-1 gap-4 sm:grid-cols-2" : "space-y-4"], "class:list")}> <div> <label for="field_name"${addAttribute(["block text-sm font-medium mb-1", isDark ? "text-slate-300" : "text-slate-700"], "class:list")}>
Full Name <span class="text-red-500">*</span> </label> <input id="field_name" name="name" type="text" required autocomplete="name" placeholder="Your full name"${addAttribute([
    "w-full rounded-lg px-4 py-2.5 text-sm border transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500",
    isDark ? "bg-slate-700 border-slate-600 text-white placeholder-slate-400" : "bg-white border-slate-300 text-slate-900 placeholder-slate-400"
  ], "class:list")}> </div> <div> <label for="field_phone"${addAttribute(["block text-sm font-medium mb-1", isDark ? "text-slate-300" : "text-slate-700"], "class:list")}>
Phone Number <span class="text-red-500">*</span> </label> <input id="field_phone" name="phone" type="tel" required autocomplete="tel" placeholder="+91 98989 31509"${addAttribute([
    "w-full rounded-lg px-4 py-2.5 text-sm border transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500",
    isDark ? "bg-slate-700 border-slate-600 text-white placeholder-slate-400" : "bg-white border-slate-300 text-slate-900 placeholder-slate-400"
  ], "class:list")}> </div> <div> <label for="field_email"${addAttribute(["block text-sm font-medium mb-1", isDark ? "text-slate-300" : "text-slate-700"], "class:list")}>
Email Address <span class="text-red-500">*</span> </label> <input id="field_email" name="email" type="email" required autocomplete="email" placeholder="you@company.com"${addAttribute([
    "w-full rounded-lg px-4 py-2.5 text-sm border transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500",
    isDark ? "bg-slate-700 border-slate-600 text-white placeholder-slate-400" : "bg-white border-slate-300 text-slate-900 placeholder-slate-400"
  ], "class:list")}> </div> <div> <label for="field_company"${addAttribute(["block text-sm font-medium mb-1", isDark ? "text-slate-300" : "text-slate-700"], "class:list")}>
Company / Organization
</label> <input id="field_company" name="company" type="text" autocomplete="organization" placeholder="Your company name"${addAttribute([
    "w-full rounded-lg px-4 py-2.5 text-sm border transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500",
    isDark ? "bg-slate-700 border-slate-600 text-white placeholder-slate-400" : "bg-white border-slate-300 text-slate-900 placeholder-slate-400"
  ], "class:list")}> </div> </div> <div> <label for="field_service"${addAttribute(["block text-sm font-medium mb-1", isDark ? "text-slate-300" : "text-slate-700"], "class:list")}>
Service Interested In <span class="text-red-500">*</span> </label> <select id="field_service" name="service" required${addAttribute([
    "w-full rounded-lg px-4 py-2.5 text-sm border transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500",
    isDark ? "bg-slate-700 border-slate-600 text-white" : "bg-white border-slate-300 text-slate-900"
  ], "class:list")}> <option value="">Select a service...</option> ${services.map((s) => renderTemplate`<option${addAttribute(s, "value")}>${s}</option>`)} </select> </div> ${!compact && renderTemplate`<div> <label for="field_message"${addAttribute(["block text-sm font-medium mb-1", isDark ? "text-slate-300" : "text-slate-700"], "class:list")}>
Message (optional)
</label> <textarea id="field_message" name="message" rows="3" placeholder="Tell us briefly about your requirements..."${addAttribute([
    "w-full rounded-lg px-4 py-2.5 text-sm border transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none",
    isDark ? "bg-slate-700 border-slate-600 text-white placeholder-slate-400" : "bg-white border-slate-300 text-slate-900 placeholder-slate-400"
  ], "class:list")}></textarea> </div>`} <div id="form-error" class="hidden text-sm text-red-500 bg-red-50 border border-red-200 rounded-lg p-3"></div> <button type="submit" id="form-submit-btn" class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" data-event="lead_form_submit" data-location="form">
Send Request
</button> <p${addAttribute(["text-xs text-center", isDark ? "text-slate-500" : "text-slate-400"], "class:list")}>
We respect your privacy. Your information is never shared with third parties.
</p> </form> </div> ${renderScript($$result, "/Users/dilipparmar/projects2/cognexa/apps/surakshitam/src/components/shared/LeadForm.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/dilipparmar/projects2/cognexa/apps/surakshitam/src/components/shared/LeadForm.astro", void 0);

export { $$LeadForm as $ };
