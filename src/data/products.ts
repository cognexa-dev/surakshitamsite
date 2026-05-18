export interface Product {
  slug: string;
  name: string;
  title: string;
  tagline: string;
  summary: string;
  description: string;
  primaryKeyword: string;
  cta: string;
  ctaHref: string;
  accentColor: string;
  icon: string;
  features: string[];
  benefits: string[];
  useCases: string[];
  deploymentOptions: string[];
  audiences: string[];
  relatedSlugs: string[];
}

export const surakshitamProducts: Product[] = [
  {
    slug: "kavach-managed-firewall",
    name: "Kavach",
    title: "Managed Firewall Solution",
    tagline: "Enterprise-grade network protection, fully managed for you.",
    summary:
      "OPNsense-based managed firewall with VPN, IDS/IPS, traffic monitoring, and policy management. Deployed and managed by CogNexa.",
    description:
      "Kavach is a managed firewall solution built on OPNsense — a powerful open-source firewall platform trusted by enterprises worldwide. CogNexa deploys, configures, monitors, and manages your firewall so your team can focus on your business, not your network perimeter.",
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
      "Remote management and alerts",
    ],
    benefits: [
      "Stop network intrusions before they cause damage",
      "Secure remote access for your team",
      "Full visibility into network traffic",
      "Managed 24/7 — no internal expertise needed",
    ],
    useCases: [
      "Replacing aging hardware firewalls",
      "Securing multi-site offices",
      "Remote workforce VPN access",
      "Compliance-driven network segmentation",
    ],
    deploymentOptions: [
      "On-premise hardware deployment",
      "Virtual appliance on existing servers",
      "Cloud-hosted firewall for remote offices",
    ],
    audiences: [
      "IT Managers",
      "Business Owners",
      "CISOs",
      "Manufacturing Plants",
      "Schools and Colleges",
    ],
    relatedSlugs: [
      "durg-vulnerability-scanner",
      "netra-network-monitoring",
      "setu-enterprise-vpn",
    ],
  },
  {
    slug: "durg-vulnerability-scanner",
    name: "Durg",
    title: "Vulnerability Scanner",
    tagline: "Find your security gaps before attackers do.",
    summary:
      "Identify security weaknesses across networks, applications, APIs, and infrastructure with automated and manual vulnerability assessments.",
    description:
      "Durg provides systematic vulnerability assessment across your entire digital footprint — networks, servers, web applications, APIs, and endpoints. We deliver prioritized findings with clear remediation guidance so your team knows exactly what to fix first.",
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
      "Compliance mapping (ISO 27001, PCI-DSS)",
    ],
    benefits: [
      "Know your security posture before attackers do",
      "Prioritized findings — fix critical issues first",
      "Actionable remediation, not just a report",
      "Meet compliance and audit requirements",
    ],
    useCases: [
      "Annual security audits",
      "Pre-launch application security checks",
      "Post-incident security review",
      "Compliance-driven vulnerability management",
    ],
    deploymentOptions: [
      "Remote scan (no agent needed)",
      "On-site scan for air-gapped networks",
      "Continuous monitoring subscription",
    ],
    audiences: [
      "CISOs",
      "IT Security Teams",
      "Compliance Officers",
      "Application Teams",
    ],
    relatedSlugs: [
      "shastra-penetration-testing",
      "kavach-managed-firewall",
      "raksha-web-application-firewall",
    ],
  },
  {
    slug: "shastra-penetration-testing",
    name: "Shastra",
    title: "Penetration Testing",
    tagline: "Validate your defenses with real-world attack simulation.",
    summary:
      "Ethical hacking and manual penetration testing to validate your real-world security posture across networks, applications, and infrastructure.",
    description:
      "Shastra delivers manual penetration testing by experienced security professionals — simulating real attacker techniques to validate whether your controls actually work. Unlike automated scans, penetration testing finds chained vulnerabilities that scanners miss.",
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
      "Remediation validation retest",
    ],
    benefits: [
      "Real attacker simulation — not just automated scans",
      "Finds chained vulnerabilities and logic flaws",
      "Executive and technical reports for stakeholders",
      "Helps meet ISO 27001, PCI-DSS, and audit requirements",
    ],
    useCases: [
      "Annual mandatory penetration tests",
      "Pre-launch security validation",
      "Regulatory compliance testing",
      "Board-level security assurance",
    ],
    deploymentOptions: [
      "Black box (no prior information)",
      "Grey box (partial information)",
      "White box (full access for deep testing)",
    ],
    audiences: [
      "CISOs",
      "Compliance Teams",
      "Application Owners",
      "Enterprise IT",
    ],
    relatedSlugs: [
      "durg-vulnerability-scanner",
      "raksha-web-application-firewall",
      "kavach-managed-firewall",
    ],
  },
  {
    slug: "raksha-web-application-firewall",
    name: "Raksha",
    title: "Web Application Firewall",
    tagline: "Protect your web applications from OWASP Top 10 and beyond.",
    summary:
      "Managed WAF that filters malicious web traffic, blocks SQL injection, XSS, CSRF, and bot attacks — keeping your applications available and secure.",
    description:
      "Raksha is a managed web application firewall that sits in front of your web applications and APIs, filtering out malicious requests before they reach your servers. Based on proven WAF technology, Raksha protects against OWASP Top 10 vulnerabilities, DDoS, and bot abuse.",
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
      "Real-time threat dashboard",
    ],
    benefits: [
      "Block web attacks before they reach your servers",
      "Keep applications available under attack",
      "Zero-day protection through managed rule updates",
      "Compliance support for PCI-DSS web security requirements",
    ],
    useCases: [
      "E-commerce and payment portals",
      "Government and public-facing web services",
      "Healthcare patient portals",
      "Banking and fintech applications",
    ],
    deploymentOptions: [
      "Reverse proxy in front of existing web server",
      "Cloud-hosted WAF",
      "On-premise WAF appliance",
    ],
    audiences: [
      "Web Application Owners",
      "DevOps Teams",
      "E-commerce Businesses",
      "Government Portals",
    ],
    relatedSlugs: [
      "durg-vulnerability-scanner",
      "shastra-penetration-testing",
      "kavach-managed-firewall",
    ],
  },
  {
    slug: "setu-enterprise-vpn",
    name: "Setu",
    title: "Enterprise VPN & Secure Remote Access",
    tagline: "Give your team secure, reliable access — from anywhere.",
    summary:
      "Managed enterprise VPN for secure remote access, site-to-site connectivity, and zero-trust network access for distributed teams.",
    description:
      "Setu provides managed VPN and secure remote access solutions for organizations with remote teams, multiple offices, or partners who need controlled access to internal systems. Built on proven open-source VPN technology and managed by CogNexa.",
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
      "Zero-trust access model support",
    ],
    benefits: [
      "Secure remote access for all team members",
      "Connect offices with encrypted tunnels",
      "Control exactly who accesses what",
      "Audit trail for remote access sessions",
    ],
    useCases: [
      "Remote workforce access to internal systems",
      "Connecting branch offices securely",
      "Vendor and partner access control",
      "Disaster recovery and business continuity",
    ],
    deploymentOptions: [
      "Integrated with Kavach managed firewall",
      "Standalone VPN gateway deployment",
      "Cloud-hosted VPN concentrator",
    ],
    audiences: [
      "IT Managers",
      "HR Teams managing remote staff",
      "Multi-location Businesses",
      "Manufacturing Plants",
    ],
    relatedSlugs: [
      "kavach-managed-firewall",
      "pravesh-captive-portal",
      "netra-network-monitoring",
    ],
  },
  {
    slug: "pravesh-captive-portal",
    name: "Pravesh",
    title: "Captive Portal & Secure Guest Access",
    tagline: "Control who gets on your network — and log it.",
    summary:
      "Managed captive portal for secure, controlled guest Wi-Fi access with user authentication, time limits, and usage logging.",
    description:
      "Pravesh provides a managed captive portal system for organizations that offer Wi-Fi access to guests, students, patients, or customers. Users authenticate before getting internet access — and every session is logged. Essential for schools, hospitals, hotels, and corporate campuses.",
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
      "Compliance with IT Act logging requirements",
    ],
    benefits: [
      "Know exactly who is on your network",
      "Prevent unauthorized internet access",
      "Meet legal logging requirements",
      "Professional branded guest experience",
    ],
    useCases: [
      "School and college campus Wi-Fi",
      "Hospital visitor and patient Wi-Fi",
      "Hotel guest internet access",
      "Corporate visitor management",
    ],
    deploymentOptions: [
      "Integrated with Kavach firewall",
      "Standalone captive portal appliance",
      "Cloud-managed portal",
    ],
    audiences: ["Schools", "Hospitals", "Hotels", "Corporate Offices"],
    relatedSlugs: [
      "kavach-managed-firewall",
      "setu-enterprise-vpn",
      "netra-network-monitoring",
    ],
  },
  {
    slug: "netra-network-monitoring",
    name: "Netra",
    title: "Network & Security Monitoring",
    tagline: "See everything happening on your network, in real time.",
    summary:
      "Continuous network and security monitoring with alerting, dashboards, and incident reporting — so threats are caught fast.",
    description:
      "Netra delivers continuous visibility into your network, servers, and security events. Using open-source monitoring tools, CogNexa sets up dashboards, alerting, and reporting so your team (or ours) can respond quickly to performance issues and security events.",
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
      "Monthly security summary reports",
    ],
    benefits: [
      "Catch performance problems before users do",
      "Detect security anomalies early",
      "Documented evidence for compliance audits",
      "Clear visibility without needing a full SOC",
    ],
    useCases: [
      "IT team visibility into infrastructure health",
      "Security event monitoring for compliance",
      "Lab and data center monitoring",
      "Manufacturing OT network visibility",
    ],
    deploymentOptions: [
      "Hosted monitoring with agent on your servers",
      "On-premise monitoring stack",
      "Hybrid cloud and on-premise",
    ],
    audiences: [
      "IT Teams",
      "Operations Managers",
      "CISOs",
      "Manufacturing Plants",
    ],
    relatedSlugs: [
      "kavach-managed-firewall",
      "durg-vulnerability-scanner",
      "setu-enterprise-vpn",
    ],
  },
];
