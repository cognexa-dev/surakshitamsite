import { c as createComponent } from './astro-component_Bsk0LsZR.mjs';
import { s as renderComponent, v as renderTemplate, r as maybeRenderHead, k as addAttribute } from './entrypoint_CPbSosTj.mjs';
import { $ as $$MarketingLayout } from './MarketingLayout_riPevCB9.mjs';
import { $ as $$CTASection } from './CTASection_DHQhdjLZ.mjs';
import { $ as $$Breadcrumbs } from './Breadcrumbs_C-wpofMc.mjs';

const industries = [
  {
    slug: "education",
    name: "Education",
    summary: "Schools, colleges, and universities managing student data, guest Wi-Fi, and compliance requirements.",
    challenges: [
      "Uncontrolled student and visitor Wi-Fi access",
      "Ransomware targeting educational institutions",
      "Student and staff data protection requirements",
      "IT teams stretched thin across campuses"
    ],
    cognexa: [
      { serviceSlug: "cybersecurity", label: "Cybersecurity Solutions" },
      { serviceSlug: "data-management", label: "Student Data Management" },
      { serviceSlug: "vidya-ai", label: "Vidya AI for Policy & SOP Access" },
      { serviceSlug: "it-consulting", label: "Campus IT Infrastructure" }
    ],
    surakshitam: [
      { productSlug: "kavach-managed-firewall", label: "Campus Firewall" },
      { productSlug: "pravesh-captive-portal", label: "Student Wi-Fi Portal" },
      { productSlug: "setu-enterprise-vpn", label: "Staff Remote Access" },
      { productSlug: "netra-network-monitoring", label: "Network Monitoring" }
    ]
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    summary: "Hospitals, clinics, and healthcare providers protecting patient data and maintaining uptime.",
    challenges: [
      "Patient data privacy and HIPAA-equivalent compliance",
      "Medical device and network security",
      "Ransomware and downtime risk",
      "Visitor and staff Wi-Fi segmentation"
    ],
    cognexa: [
      { serviceSlug: "cybersecurity", label: "Healthcare Cybersecurity" },
      { serviceSlug: "data-management", label: "Patient Data Management" },
      {
        serviceSlug: "ai-automation",
        label: "Process Automation for Healthcare"
      }
    ],
    surakshitam: [
      {
        productSlug: "kavach-managed-firewall",
        label: "Hospital Network Firewall"
      },
      {
        productSlug: "raksha-web-application-firewall",
        label: "Patient Portal WAF"
      },
      { productSlug: "setu-enterprise-vpn", label: "Staff Remote Access" },
      {
        productSlug: "pravesh-captive-portal",
        label: "Patient & Visitor Wi-Fi"
      },
      {
        productSlug: "durg-vulnerability-scanner",
        label: "Security Assessment"
      }
    ]
  },
  {
    slug: "manufacturing",
    name: "Manufacturing",
    summary: "Manufacturing plants securing OT networks, ERP data, and multi-site connectivity.",
    challenges: [
      "OT and IT network segmentation",
      "ERP data quality and duplication",
      "Multi-plant network connectivity",
      "Supply chain partner access control"
    ],
    cognexa: [
      { serviceSlug: "cybersecurity", label: "OT/IT Security" },
      { serviceSlug: "data-management", label: "ERP Data Cleansing" },
      {
        serviceSlug: "ai-automation",
        label: "Production Process Automation"
      },
      { serviceSlug: "it-consulting", label: "Multi-plant IT Infrastructure" }
    ],
    surakshitam: [
      {
        productSlug: "kavach-managed-firewall",
        label: "Plant Network Firewall"
      },
      {
        productSlug: "durg-vulnerability-scanner",
        label: "OT Vulnerability Assessment"
      },
      { productSlug: "setu-enterprise-vpn", label: "Inter-plant VPN" },
      {
        productSlug: "netra-network-monitoring",
        label: "OT Network Monitoring"
      }
    ]
  },
  {
    slug: "government",
    name: "Government & PSUs",
    summary: "Government departments and public sector units meeting compliance and data security mandates.",
    challenges: [
      "CERT-In compliance and reporting requirements",
      "Secure inter-department connectivity",
      "Public-facing portal security",
      "Citizen data protection"
    ],
    cognexa: [
      { serviceSlug: "cybersecurity", label: "Government Cybersecurity" },
      { serviceSlug: "data-management", label: "Citizen Data Management" },
      {
        serviceSlug: "custom-software-development",
        label: "Custom Government Portals"
      }
    ],
    surakshitam: [
      {
        productSlug: "kavach-managed-firewall",
        label: "Department Firewall"
      },
      {
        productSlug: "shastra-penetration-testing",
        label: "Mandatory Pen Testing"
      },
      {
        productSlug: "raksha-web-application-firewall",
        label: "Citizen Portal WAF"
      },
      {
        productSlug: "durg-vulnerability-scanner",
        label: "Compliance Vulnerability Scan"
      }
    ]
  },
  {
    slug: "hospitality",
    name: "Hospitality",
    summary: "Hotels, resorts, and hospitality businesses managing guest Wi-Fi, POS security, and payment compliance.",
    challenges: [
      "Guest Wi-Fi abuse and legal liability",
      "POS and payment system security",
      "PCI-DSS compliance requirements",
      "Multiple properties and network isolation"
    ],
    cognexa: [
      { serviceSlug: "cybersecurity", label: "Hospitality Cybersecurity" },
      { serviceSlug: "it-consulting", label: "Property IT Management" }
    ],
    surakshitam: [
      { productSlug: "kavach-managed-firewall", label: "Hotel Firewall" },
      {
        productSlug: "pravesh-captive-portal",
        label: "Branded Guest Wi-Fi Portal"
      },
      {
        productSlug: "raksha-web-application-firewall",
        label: "Booking Portal WAF"
      },
      {
        productSlug: "durg-vulnerability-scanner",
        label: "PCI-DSS Security Scan"
      }
    ]
  }
];

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MarketingLayout", $$MarketingLayout, { "title": "Industries | Surakshitam Cybersecurity", "description": "Surakshitam provides cybersecurity solutions for education, healthcare, manufacturing, and hospitality sectors. See industry-specific security products." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="bg-[#0a0f1a]"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6"> ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "crumbs": [{ label: "Home", href: "/" }, { label: "Industries" }], "variant": "dark" })} </div> <section class="pt-8 pb-20"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="text-center mb-12"> <h1 class="text-4xl font-extrabold text-white mb-4">Industries We Serve</h1> <p class="text-slate-400 max-w-2xl mx-auto">
Cybersecurity requirements differ across industries. See how Surakshitam addresses the specific security challenges of your sector.
</p> </div> <div class="grid grid-cols-1 sm:grid-cols-2 gap-5"> ${industries.filter((i) => ["education", "healthcare", "manufacturing", "hospitality"].includes(i.slug)).map((ind) => renderTemplate`<a${addAttribute(`/industries/${ind.slug}/`, "href")} class="group block rounded-2xl border border-slate-800 bg-slate-900 p-6 hover:border-red-600 transition-all"> <h2 class="text-lg font-bold text-white mb-2 group-hover:text-red-400 transition-colors">${ind.name}</h2> <p class="text-sm text-slate-400 leading-relaxed mb-4">${ind.summary}</p> <p class="text-sm text-red-400">View security solutions →</p> </a>`)} </div> </div> </section> ${renderComponent($$result2, "CTASection", $$CTASection, { "title": "Not seeing your industry?", "description": "We work with many types of organizations. Tell us your requirements.", "primaryLabel": "Contact Us", "primaryHref": "/contact/", "variant": "dark" })} </div> ` })}`;
}, "/Users/dilipparmar/projects2/cognexa/apps/surakshitam/src/pages/industries/index.astro", void 0);

const $$file = "/Users/dilipparmar/projects2/cognexa/apps/surakshitam/src/pages/industries/index.astro";
const $$url = "/industries";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
