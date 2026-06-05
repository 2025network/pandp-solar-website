import {
  BatteryCharging,
  Camera,
  ClipboardCheck,
  Factory,
  Home,
  PlugZap,
  ShieldCheck,
  SlidersHorizontal,
  SunMedium,
  Wrench,
} from "lucide-react";

export const brand = {
  name: "P&P ADVANCE TECH BRANDS LIMITED",
  shortName: "P&P Advance Tech",
  slogan: "Renewable energy, security, and smart technology solutions.",
  tagline:
    "Solar inverter materials, solar installation, battery backup, CCTV, and smart automation for Nigerian homes and businesses.",
  phone: "09036526870, 09041189484",
  primaryPhone: "09036526870",
  whatsapp: "2349036526870",
  email: "pandpadvancetech@gmail.com",
  address:
    "A15 Owa Shopping Complex, opposite City Map Plaza, along Abuja-Keffi Expressway",
  rcNumber: "9558604",
  companyType: "Private Company Limited by Shares",
};

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export const services = [
  {
    title: "Sales of solar inverter materials",
    description:
      "Supply of quality solar panels, inverters, batteries, charge controllers, breakers, cables, and accessories for reliable power systems.",
    icon: PlugZap,
  },
  {
    title: "Solar inverter system design, installation and maintenance",
    description:
      "Complete load assessment, system design, installation, testing, handover, maintenance, and performance support.",
    icon: SlidersHorizontal,
  },
  {
    title: "CCTV and security systems",
    description:
      "Design, installation, and maintenance of CCTV/security systems for homes, offices, estates, schools, stores, and industrial sites.",
    icon: Camera,
  },
  {
    title: "Smart home technology and automation",
    description:
      "Smart lighting, controls, monitoring, automation, and connected technology that improves comfort, security, and efficiency.",
    icon: Home,
  },
  {
    title: "Battery backup systems",
    description:
      "Battery banks and inverter backup systems sized for practical runtime during grid outages and fuel-saving operation.",
    icon: BatteryCharging,
  },
  {
    title: "Solar panel installation",
    description:
      "Professional rooftop, ground-mounted, residential, commercial, and industrial solar panel installation with neat workmanship.",
    icon: SunMedium,
  },
  {
    title: "Residential, commercial and industrial solar solutions",
    description:
      "Scalable renewable energy solutions for private homes, offices, retail outlets, clinics, schools, warehouses, and production sites.",
    icon: Factory,
  },
];

export const trustPoints = [
  { value: "CAC", label: "Registered Company" },
  { value: `RC ${brand.rcNumber}`, label: "Registration Number" },
  { value: "Ltd", label: brand.companyType },
  { value: "Nigeria", label: "Renewable energy and smart technology company" },
];

export const strengthStats = [
  { value: "56", label: "Staff" },
  { value: "250kVA", label: "Installed inverter capacity" },
  { value: "350kW", label: "Battery bank capacity" },
  { value: "185kW", label: "PV arrays capacity" },
];

export const reasons = [
  {
    title: "Registered and accountable",
    description:
      "P&P Advance Tech is a CAC registered Nigerian company with RC Number 9558604.",
    icon: ShieldCheck,
  },
  {
    title: "Technical capacity",
    description:
      "Our team supports projects across inverter systems, PV arrays, battery banks, CCTV, and automation.",
    icon: Wrench,
  },
  {
    title: "End-to-end service",
    description:
      "We supply materials, design systems, install professionally, maintain assets, and advise clients clearly.",
    icon: ClipboardCheck,
  },
];

export const partners = [
  "Felicity Solar",
  "Growatt",
  "Victron Energy",
  "Africell Energy Solar",
  "Firman",
  "Powermax Solar",
  "Jinko Solar",
  "Deye",
  "Solis",
];

export const projectPhotos = [
  {
    title: "Solar panel installation",
    category: "Solar panel installation",
    description:
      "Clean PV array installation for reliable daytime generation and reduced generator dependence.",
    location: "Nigeria",
    systemType: "PV array",
    image: "/projects/solar-installation-1.jpg",
  },
  {
    title: "Solar array commissioning",
    category: "Solar panel installation",
    description:
      "Solar panel setup, connection checks, and commissioning for steady system performance.",
    location: "Nigeria",
    systemType: "Solar installation",
    image: "/projects/solar-installation-2.jpg",
  },
  {
    title: "Inverter installation",
    category: "Inverter installation",
    description:
      "Neat inverter installation for stable backup power during grid interruptions.",
    location: "Nigeria",
    systemType: "Inverter system",
    image: "/projects/inverter-installation-1.jpg",
  },
  {
    title: "Battery backup setup",
    category: "Battery backup setup",
    description:
      "Battery bank setup for longer runtime, better load support, and safer storage.",
    location: "Nigeria",
    systemType: "Battery backup",
    image: "/projects/battery-backup-1.jpg",
  },
  {
    title: "Technicians at work",
    category: "Technicians at work",
    description:
      "Field technicians carrying out installation, testing, and maintenance work.",
    location: "Nigeria",
    systemType: "Installation support",
    image: "/projects/technicians-working-1.jpg",
  },
  {
    title: "Commercial solar work",
    category: "Commercial solar work",
    description:
      "Commercial solar and inverter solution for businesses that need dependable uptime.",
    location: "Nigeria",
    systemType: "Commercial solar",
    image: "/projects/commercial-solar-1.jpg",
  },
  {
    title: "Residential solar work",
    category: "Residential solar work",
    description:
      "Residential solar solution for lighting, appliances, internet, and daily comfort.",
    location: "Nigeria",
    systemType: "Residential solar",
    image: "/projects/residential-solar-1.jpg",
  },
];

export const documents = [
  {
    title: "Certificate of Incorporation",
    href: "/documents/certificate-of-incorporation.pdf",
  },
  {
    title: "Company Profile / Brand Document",
    href: "/documents/company-profile.pdf",
  },
  {
    title: "Memorandum and Articles",
    href: "/documents/memorandum-and-articles.pdf",
  },
];

export const videos = [
  {
    title: "Solar project walkthrough",
    src: "/videos/project-video-1.mp4",
    description: "A field look at project work, installation details, and site activity.",
  },
  {
    title: "Installation and system proof",
    src: "/videos/project-video-2.mp4",
    description: "Solar, inverter, and battery backup work captured for client confidence.",
  },
];

export const testimonials = [
  {
    name: "Residential client",
    role: "Solar and battery backup",
    quote:
      "The team assessed our power needs, supplied the right materials, and delivered a neat inverter and solar installation.",
  },
  {
    name: "Business client",
    role: "Commercial power solution",
    quote:
      "P&P Advance Tech helped reduce generator use and gave our office a more reliable backup power setup.",
  },
  {
    name: "Security systems client",
    role: "CCTV installation",
    quote:
      "Their CCTV installation and support improved visibility around our premises and the work was professionally handled.",
  },
];

export const customerTypes = ["Homes", "Offices", "Retail shops", "Schools", "Clinics", "Industrial sites"];
export const warrantySupport = [
  "Site inspection and load assessment",
  "Quality solar, inverter, battery, and CCTV materials",
  "Professional installation and commissioning",
  "Maintenance support and system upgrades",
];

