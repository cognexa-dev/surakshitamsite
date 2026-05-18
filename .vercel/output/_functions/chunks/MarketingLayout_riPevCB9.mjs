import { c as createComponent } from './astro-component_Bsk0LsZR.mjs';
import { r as maybeRenderHead, s as renderComponent, d as Fragment, v as renderTemplate, k as addAttribute, u as renderSlot } from './entrypoint_CPbSosTj.mjs';
import { s as siteConfig, r as renderScript, $ as $$BaseLayout, a as $$WhatsAppButton } from './WhatsAppButton_Cgmmkd98.mjs';

const surakshitamNav = [
  {
    label: "Products",
    href: "/cybersecurity-suite/",
    children: [
      { label: "Kavach — Managed Firewall", href: "/kavach-managed-firewall/" },
      {
        label: "Durg — Vulnerability Scanner",
        href: "/durg-vulnerability-scanner/"
      },
      {
        label: "Shastra — Penetration Testing",
        href: "/shastra-penetration-testing/"
      },
      {
        label: "Raksha — Web Application Firewall",
        href: "/raksha-web-application-firewall/"
      },
      { label: "Setu — Enterprise VPN", href: "/setu-enterprise-vpn/" },
      { label: "Pravesh — Captive Portal", href: "/pravesh-captive-portal/" },
      {
        label: "Netra — Network Monitoring",
        href: "/netra-network-monitoring/"
      }
    ]
  },
  {
    label: "Industries",
    href: "/industries/",
    children: [
      { label: "Education", href: "/industries/education/" },
      { label: "Healthcare", href: "/industries/healthcare/" },
      { label: "Manufacturing", href: "/industries/manufacturing/" },
      { label: "Hospitality", href: "/industries/hospitality/" }
    ]
  },
  {
    label: "Pricing",
    href: "/pricing/"
  },
  {
    label: "Security Assessment",
    href: "/security-assessment/"
  },
  {
    label: "Contact",
    href: "/contact/"
  }
];
const surakshitamCta = {
  label: "Get Free Security Audit",
  href: "/security-assessment/"
};

const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Header;
  const { phone, phoneRaw } = siteConfig.surakshitam;
  const currentPath = Astro2.url.pathname;
  return renderTemplate`${maybeRenderHead()}<header class="sticky top-0 z-40 border-b border-slate-800 bg-[#0a0f1a]/95 backdrop-blur-sm"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="flex items-center justify-between h-16"> <!-- Logo --> <a href="/" class="flex items-center font-bold text-xl text-white hover:text-red-400 transition-colors" aria-label="Surakshitam — Home"> <span class="text-red-500">Sur</span>akshitam
</a> <!-- Desktop nav --> <nav class="hidden lg:flex items-center gap-1" aria-label="Main navigation"> ${surakshitamNav.map((item) => renderTemplate`<div class="relative group"> ${item.children ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <button class="flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md text-slate-300 hover:text-white hover:bg-slate-800 transition-colors" aria-haspopup="true"> ${item.label} <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4 transition-transform group-hover:rotate-180" aria-hidden="true"> <path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"></path> </svg> </button> <div class="absolute top-full left-0 mt-1 w-64 rounded-xl border border-slate-700 bg-slate-900 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all"> <ul class="py-1"> ${item.children.map((child) => renderTemplate`<li> <a${addAttribute(child.href, "href")}${addAttribute(["block px-4 py-2.5 text-sm transition-colors", currentPath === child.href ? "text-red-400 bg-slate-800" : "text-slate-300 hover:text-white hover:bg-slate-800"], "class:list")}> ${child.label} </a> </li>`)} </ul> </div> ` })}` : renderTemplate`<a${addAttribute(item.href, "href")}${addAttribute(["px-3 py-2 text-sm font-medium rounded-md transition-colors", currentPath === item.href ? "text-red-400 bg-slate-800" : "text-slate-300 hover:text-white hover:bg-slate-800"], "class:list")}> ${item.label} </a>`} </div>`)} </nav> <div class="hidden lg:flex items-center gap-3"> <a${addAttribute(`tel:${phoneRaw}`, "href")} class="text-sm text-slate-400 hover:text-white transition-colors" data-event="phone_click" data-location="header">${phone}</a> <a${addAttribute(surakshitamCta.href, "href")} class="px-4 py-2 bg-red-600 hover:bg-red-500 text-white text-sm font-semibold rounded-lg transition-colors" data-event="security_assessment_request" data-location="header"> ${surakshitamCta.label} </a> </div> <button id="mobile-menu-btn" class="lg:hidden p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 transition-colors" aria-label="Toggle menu" aria-expanded="false"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" aria-hidden="true"> <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path> </svg> </button> </div> </div> <div id="mobile-menu" class="hidden lg:hidden border-t border-slate-800 bg-[#0a0f1a]"> <nav class="px-4 py-4 space-y-1" aria-label="Mobile navigation"> ${surakshitamNav.map((item) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <a${addAttribute(item.children ? item.children[0]?.href ?? item.href : item.href, "href")} class="block px-3 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800 rounded-md"> ${item.label} </a> ${item.children && item.children.map((child) => renderTemplate`<a${addAttribute(child.href, "href")} class="block pl-6 pr-3 py-1.5 text-sm text-slate-400 hover:text-white hover:bg-slate-800 rounded-md"> ${child.label} </a>`)}` })}`)} <div class="pt-3 border-t border-slate-800 flex flex-col gap-2"> <a${addAttribute(`tel:${phoneRaw}`, "href")} class="flex items-center gap-2 px-3 py-2 text-sm text-slate-300 hover:text-white" data-event="phone_click" data-location="mobile-menu">
📞 ${phone} </a> <a${addAttribute(surakshitamCta.href, "href")} class="block text-center px-4 py-2.5 bg-red-600 hover:bg-red-500 text-white text-sm font-semibold rounded-lg transition-colors"> ${surakshitamCta.label} </a> </div> </nav> </div> </header> ${renderScript($$result, "/Users/dilipparmar/projects2/cognexa/apps/surakshitam/src/components/common/Header.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/dilipparmar/projects2/cognexa/apps/surakshitam/src/components/common/Header.astro", void 0);

const surakshitamProducts = [
  {
    slug: "kavach-managed-firewall",
    name: "Kavach",
    title: "Managed Firewall Solution",
    tagline: "Enterprise-grade network protection, fully managed for you.",
    summary: "OPNsense-based managed firewall with VPN, IDS/IPS, traffic monitoring, and policy management. Deployed and managed by CogNexa.",
    description: "Kavach is a managed firewall solution built on OPNsense — a powerful open-source firewall platform trusted by enterprises worldwide. CogNexa deploys, configures, monitors, and manages your firewall so your team can focus on your business, not your network perimeter.",
    primaryKeyword: "managed firewall services India",
    cta: "Get Firewall Assessment",
    ctaHref: "/security-assessment/",
    accentColor: "#3b82f6",
    icon: "shield-check",
    features: [
      "OPNsense-based firewall deployment",
      "VPN (IPsec, OpenVPN, WireGuard)",
      "Intrusion Detection & Prevention (IDS/IPS)",
      "Traffic monitoring and reporting",
      "Firewall rule policy management",
      "High availability and failover options",
      "DNS filtering and content control",
      "Remote management and alerts"
    ],
    benefits: [
      "Stop network intrusions before they cause damage",
      "Secure remote access for your team",
      "Full visibility into network traffic",
      "Managed 24/7 — no internal expertise needed"
    ],
    useCases: [
      "Replacing aging hardware firewalls",
      "Securing multi-site offices",
      "Remote workforce VPN access",
      "Compliance-driven network segmentation"
    ],
    deploymentOptions: [
      "On-premise hardware deployment",
      "Virtual appliance on existing servers",
      "Cloud-hosted firewall for remote offices"
    ],
    audiences: [
      "IT Managers",
      "Business Owners",
      "CISOs",
      "Manufacturing Plants",
      "Schools and Colleges"
    ],
    relatedSlugs: [
      "durg-vulnerability-scanner",
      "netra-network-monitoring",
      "setu-enterprise-vpn"
    ]
  },
  {
    slug: "durg-vulnerability-scanner",
    name: "Durg",
    title: "Vulnerability Scanner",
    tagline: "Find your security gaps before attackers do.",
    summary: "Identify security weaknesses across networks, applications, APIs, and infrastructure with automated and manual vulnerability assessments.",
    description: "Durg provides systematic vulnerability assessment across your entire digital footprint — networks, servers, web applications, APIs, and endpoints. We deliver prioritized findings with clear remediation guidance so your team knows exactly what to fix first.",
    primaryKeyword: "vulnerability assessment services India",
    cta: "Request Vulnerability Scan",
    ctaHref: "/security-assessment/",
    accentColor: "#f59e0b",
    icon: "search",
    features: [
      "Network vulnerability scanning",
      "Web application vulnerability assessment",
      "API security testing",
      "CVE-based vulnerability identification",
      "Risk-prioritized findings report",
      "Remediation guidance",
      "Scheduled recurring scans",
      "Compliance mapping (ISO 27001, PCI-DSS)"
    ],
    benefits: [
      "Know your security posture before attackers do",
      "Prioritized findings — fix critical issues first",
      "Actionable remediation, not just a report",
      "Meet compliance and audit requirements"
    ],
    useCases: [
      "Annual security audits",
      "Pre-launch application security checks",
      "Post-incident security review",
      "Compliance-driven vulnerability management"
    ],
    deploymentOptions: [
      "Remote scan (no agent needed)",
      "On-site scan for air-gapped networks",
      "Continuous monitoring subscription"
    ],
    audiences: [
      "CISOs",
      "IT Security Teams",
      "Compliance Officers",
      "Application Teams"
    ],
    relatedSlugs: [
      "shastra-penetration-testing",
      "kavach-managed-firewall",
      "raksha-web-application-firewall"
    ]
  },
  {
    slug: "shastra-penetration-testing",
    name: "Shastra",
    title: "Penetration Testing",
    tagline: "Validate your defenses with real-world attack simulation.",
    summary: "Ethical hacking and manual penetration testing to validate your real-world security posture across networks, applications, and infrastructure.",
    description: "Shastra delivers manual penetration testing by experienced security professionals — simulating real attacker techniques to validate whether your controls actually work. Unlike automated scans, penetration testing finds chained vulnerabilities that scanners miss.",
    primaryKeyword: "penetration testing services India",
    cta: "Book Penetration Test",
    ctaHref: "/security-assessment/",
    accentColor: "#ef4444",
    icon: "target",
    features: [
      "Network penetration testing (internal and external)",
      "Web application penetration testing",
      "Mobile application security testing",
      "Social engineering simulation",
      "Physical security assessment",
      "Red team exercises",
      "Detailed technical and executive reports",
      "Remediation validation retest"
    ],
    benefits: [
      "Real attacker simulation — not just automated scans",
      "Finds chained vulnerabilities and logic flaws",
      "Executive and technical reports for stakeholders",
      "Helps meet ISO 27001, PCI-DSS, and audit requirements"
    ],
    useCases: [
      "Annual mandatory penetration tests",
      "Pre-launch security validation",
      "Regulatory compliance testing",
      "Board-level security assurance"
    ],
    deploymentOptions: [
      "Black box (no prior information)",
      "Grey box (partial information)",
      "White box (full access for deep testing)"
    ],
    audiences: [
      "CISOs",
      "Compliance Teams",
      "Application Owners",
      "Enterprise IT"
    ],
    relatedSlugs: [
      "durg-vulnerability-scanner",
      "raksha-web-application-firewall",
      "kavach-managed-firewall"
    ]
  },
  {
    slug: "raksha-web-application-firewall",
    name: "Raksha",
    title: "Web Application Firewall",
    tagline: "Protect your web applications from OWASP Top 10 and beyond.",
    summary: "Managed WAF that filters malicious web traffic, blocks SQL injection, XSS, CSRF, and bot attacks — keeping your applications available and secure.",
    description: "Raksha is a managed web application firewall that sits in front of your web applications and APIs, filtering out malicious requests before they reach your servers. Based on proven WAF technology, Raksha protects against OWASP Top 10 vulnerabilities, DDoS, and bot abuse.",
    primaryKeyword: "web application firewall services India",
    cta: "Protect Your Application",
    ctaHref: "/security-assessment/",
    accentColor: "#8b5cf6",
    icon: "globe-lock",
    features: [
      "OWASP Top 10 protection",
      "SQL injection and XSS blocking",
      "Bot and scraper mitigation",
      "DDoS protection",
      "Rate limiting and IP reputation",
      "SSL/TLS termination",
      "API gateway protection",
      "Real-time threat dashboard"
    ],
    benefits: [
      "Block web attacks before they reach your servers",
      "Keep applications available under attack",
      "Zero-day protection through managed rule updates",
      "Compliance support for PCI-DSS web security requirements"
    ],
    useCases: [
      "E-commerce and payment portals",
      "Government and public-facing web services",
      "Healthcare patient portals",
      "Banking and fintech applications"
    ],
    deploymentOptions: [
      "Reverse proxy in front of existing web server",
      "Cloud-hosted WAF",
      "On-premise WAF appliance"
    ],
    audiences: [
      "Web Application Owners",
      "DevOps Teams",
      "E-commerce Businesses",
      "Government Portals"
    ],
    relatedSlugs: [
      "durg-vulnerability-scanner",
      "shastra-penetration-testing",
      "kavach-managed-firewall"
    ]
  },
  {
    slug: "setu-enterprise-vpn",
    name: "Setu",
    title: "Enterprise VPN & Secure Remote Access",
    tagline: "Give your team secure, reliable access — from anywhere.",
    summary: "Managed enterprise VPN for secure remote access, site-to-site connectivity, and zero-trust network access for distributed teams.",
    description: "Setu provides managed VPN and secure remote access solutions for organizations with remote teams, multiple offices, or partners who need controlled access to internal systems. Built on proven open-source VPN technology and managed by CogNexa.",
    primaryKeyword: "enterprise VPN solutions India",
    cta: "Set Up Secure Access",
    ctaHref: "/security-assessment/",
    accentColor: "#10b981",
    icon: "lock",
    features: [
      "OpenVPN, WireGuard, IPsec support",
      "Site-to-site VPN for multiple offices",
      "Client VPN for remote employees",
      "Multi-factor authentication integration",
      "Split tunneling configuration",
      "Access control policies per user/group",
      "VPN usage monitoring and logging",
      "Zero-trust access model support"
    ],
    benefits: [
      "Secure remote access for all team members",
      "Connect offices with encrypted tunnels",
      "Control exactly who accesses what",
      "Audit trail for remote access sessions"
    ],
    useCases: [
      "Remote workforce access to internal systems",
      "Connecting branch offices securely",
      "Vendor and partner access control",
      "Disaster recovery and business continuity"
    ],
    deploymentOptions: [
      "Integrated with Kavach managed firewall",
      "Standalone VPN gateway deployment",
      "Cloud-hosted VPN concentrator"
    ],
    audiences: [
      "IT Managers",
      "HR Teams managing remote staff",
      "Multi-location Businesses",
      "Manufacturing Plants"
    ],
    relatedSlugs: [
      "kavach-managed-firewall",
      "pravesh-captive-portal",
      "netra-network-monitoring"
    ]
  },
  {
    slug: "pravesh-captive-portal",
    name: "Pravesh",
    title: "Captive Portal & Secure Guest Access",
    tagline: "Control who gets on your network — and log it.",
    summary: "Managed captive portal for secure, controlled guest Wi-Fi access with user authentication, time limits, and usage logging.",
    description: "Pravesh provides a managed captive portal system for organizations that offer Wi-Fi access to guests, students, patients, or customers. Users authenticate before getting internet access — and every session is logged. Essential for schools, hospitals, hotels, and corporate campuses.",
    primaryKeyword: "captive portal solution India",
    cta: "Set Up Guest Access",
    ctaHref: "/security-assessment/",
    accentColor: "#f97316",
    icon: "wifi",
    features: [
      "Branded login portal (your logo and design)",
      "SMS or email OTP authentication",
      "Social login (Google, Facebook) option",
      "Voucher-based access control",
      "Session time and bandwidth limits",
      "Usage logging and reporting",
      "Separate guest and staff network enforcement",
      "Compliance with IT Act logging requirements"
    ],
    benefits: [
      "Know exactly who is on your network",
      "Prevent unauthorized internet access",
      "Meet legal logging requirements",
      "Professional branded guest experience"
    ],
    useCases: [
      "School and college campus Wi-Fi",
      "Hospital visitor and patient Wi-Fi",
      "Hotel guest internet access",
      "Corporate visitor management"
    ],
    deploymentOptions: [
      "Integrated with Kavach firewall",
      "Standalone captive portal appliance",
      "Cloud-managed portal"
    ],
    audiences: ["Schools", "Hospitals", "Hotels", "Corporate Offices"],
    relatedSlugs: [
      "kavach-managed-firewall",
      "setu-enterprise-vpn",
      "netra-network-monitoring"
    ]
  },
  {
    slug: "netra-network-monitoring",
    name: "Netra",
    title: "Network & Security Monitoring",
    tagline: "See everything happening on your network, in real time.",
    summary: "Continuous network and security monitoring with alerting, dashboards, and incident reporting — so threats are caught fast.",
    description: "Netra delivers continuous visibility into your network, servers, and security events. Using open-source monitoring tools, CogNexa sets up dashboards, alerting, and reporting so your team (or ours) can respond quickly to performance issues and security events.",
    primaryKeyword: "network security monitoring services India",
    cta: "Set Up Monitoring",
    ctaHref: "/security-assessment/",
    accentColor: "#06b6d4",
    icon: "activity",
    features: [
      "Network traffic monitoring and baselining",
      "Server and endpoint health monitoring",
      "Security event log aggregation (SIEM-lite)",
      "Real-time alerting (email, SMS, webhook)",
      "Uptime and availability monitoring",
      "Bandwidth utilization reporting",
      "Anomaly detection",
      "Monthly security summary reports"
    ],
    benefits: [
      "Catch performance problems before users do",
      "Detect security anomalies early",
      "Documented evidence for compliance audits",
      "Clear visibility without needing a full SOC"
    ],
    useCases: [
      "IT team visibility into infrastructure health",
      "Security event monitoring for compliance",
      "Lab and data center monitoring",
      "Manufacturing OT network visibility"
    ],
    deploymentOptions: [
      "Hosted monitoring with agent on your servers",
      "On-premise monitoring stack",
      "Hybrid cloud and on-premise"
    ],
    audiences: [
      "IT Teams",
      "Operations Managers",
      "CISOs",
      "Manufacturing Plants"
    ],
    relatedSlugs: [
      "kavach-managed-firewall",
      "durg-vulnerability-scanner",
      "setu-enterprise-vpn"
    ]
  }
];

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const site = siteConfig.surakshitam;
  const cognexa = siteConfig.cognexa;
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer class="bg-slate-950 border-t border-slate-800 text-slate-400 text-sm"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"> <div class="lg:col-span-1"> <a href="/" class="inline-block font-bold text-xl text-white mb-3"> <span class="text-red-500">Sur</span>akshitam
</a> <p class="text-sm text-slate-400 leading-relaxed mb-4">
A complete cybersecurity defense suite by CogNexa Technologies.
</p> <div class="space-y-1"> <a${addAttribute(`tel:${site.phoneRaw}`, "href")} class="flex items-center gap-2 hover:text-white transition-colors" data-event="phone_click" data-location="footer">
📞 ${site.phone} </a> <a${addAttribute(`mailto:${site.email}`, "href")} class="flex items-center gap-2 hover:text-white transition-colors">
✉️ ${site.email} </a> <a${addAttribute(site.whatsapp, "href")} target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 hover:text-white transition-colors" data-event="whatsapp_click" data-location="footer">
💬 WhatsApp Us
</a> </div> </div> <div> <h3 class="font-semibold text-white mb-3">Products</h3> <ul class="space-y-1.5"> ${surakshitamProducts.slice(0, 4).map((p) => renderTemplate`<li> <a${addAttribute(`/${p.slug}/`, "href")} class="hover:text-white transition-colors"> ${p.name} — ${p.title} </a> </li>`)} </ul> </div> <div> <h3 class="font-semibold text-white mb-3">More Products</h3> <ul class="space-y-1.5"> ${surakshitamProducts.slice(4).map((p) => renderTemplate`<li> <a${addAttribute(`/${p.slug}/`, "href")} class="hover:text-white transition-colors"> ${p.name} — ${p.title} </a> </li>`)} <li> <a href="/cybersecurity-suite/" class="text-red-400 hover:text-red-300 font-medium transition-colors">
Full Suite →
</a> </li> </ul> </div> <div> <h3 class="font-semibold text-white mb-3">Quick Links</h3> <ul class="space-y-1.5"> <li><a href="/security-assessment/" class="hover:text-white transition-colors">Security Assessment</a></li> <li><a href="/pricing/" class="hover:text-white transition-colors">Pricing</a></li> <li><a href="/industries/" class="hover:text-white transition-colors">Industries</a></li> <li><a href="/contact/" class="hover:text-white transition-colors">Contact</a></li> <li><a href="/privacy-policy/" class="hover:text-white transition-colors">Privacy Policy</a></li> <li> <a${addAttribute(cognexa.domain, "href")} target="_blank" rel="noopener noreferrer" class="text-cyan-400 hover:text-cyan-300 transition-colors">
CogNexa Technologies ↗
</a> </li> </ul> </div> </div> <div class="mt-10 pt-6 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-slate-600"> <p>© ${currentYear} Surakshitam · A cybersecurity suite by CogNexa Technologies.</p> <p> <a${addAttribute(cognexa.domain, "href")} target="_blank" rel="noopener noreferrer" class="hover:text-slate-400">cognexa.in</a> </p> </div> </div> </footer>`;
}, "/Users/dilipparmar/projects2/cognexa/apps/surakshitam/src/components/common/Footer.astro", void 0);

const $$MarketingLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$MarketingLayout;
  const props = Astro2.props;
  const { whatsapp } = siteConfig.surakshitam;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { ...props }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<main id="main-content"> ${renderSlot($$result2, $$slots["default"])} </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ${renderComponent($$result2, "WhatsAppButton", $$WhatsAppButton, { "href": whatsapp })} ` })}`;
}, "/Users/dilipparmar/projects2/cognexa/apps/surakshitam/src/layouts/MarketingLayout.astro", void 0);

export { $$MarketingLayout as $, surakshitamProducts as s };
