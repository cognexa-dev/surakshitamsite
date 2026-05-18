export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
  external?: boolean;
}

export const surakshitamNav: NavItem[] = [
  {
    label: "Products",
    href: "/cybersecurity-suite/",
    children: [
      { label: "Kavach — Managed Firewall", href: "/kavach-managed-firewall/" },
      {
        label: "Durg — Vulnerability Scanner",
        href: "/durg-vulnerability-scanner/",
      },
      {
        label: "Shastra — Penetration Testing",
        href: "/shastra-penetration-testing/",
      },
      {
        label: "Raksha — Web Application Firewall",
        href: "/raksha-web-application-firewall/",
      },
      { label: "Setu — Enterprise VPN", href: "/setu-enterprise-vpn/" },
      { label: "Pravesh — Captive Portal", href: "/pravesh-captive-portal/" },
      {
        label: "Netra — Network Monitoring",
        href: "/netra-network-monitoring/",
      },
    ],
  },
  {
    label: "Industries",
    href: "/industries/",
    children: [
      { label: "Education", href: "/industries/education/" },
      { label: "Healthcare", href: "/industries/healthcare/" },
      { label: "Manufacturing", href: "/industries/manufacturing/" },
      { label: "Hospitality", href: "/industries/hospitality/" },
    ],
  },
  {
    label: "Pricing",
    href: "/pricing/",
  },
  {
    label: "Security Assessment",
    href: "/security-assessment/",
  },
  {
    label: "Contact",
    href: "/contact/",
  },
];

export const surakshitamCta = {
  label: "Get Free Security Audit",
  href: "/security-assessment/",
};
