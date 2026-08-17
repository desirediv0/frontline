// Central content source — single place to edit brand contact details & services.

export const COMPANY = {
  name: "Frontline Pest Control",
  short: "Frontline",
  tagline: "Protecting Homes. Securing Businesses.",
  strip: "Residential · Commercial · Industrial Pest Management",
  phone: "9717008173", // primary — used for main Call/WhatsApp CTAs
  whatsapp: "919717008173", // used for wa.me link
  // All contact numbers (label + display + tel-safe value)
  phones: [
    { label: "Mobile", number: "9717008173", tel: "9717008173" },
    { label: "Amarjeet Dabas", number: "09818124418", tel: "09818124418" },
    { label: "Office", number: "+91 98109 56701", tel: "+919810956701" },
  ],
  email: "info@frontline.ind.in", // primary
  emails: ["info@frontline.ind.in", "frontlinepestc@gmail.com"],
  address: "R4/133, M3M Mall, 65th Avenue, Sector 65, Golf Course Extension Road, Gurugram, Haryana – 122001",
  addressShort: "R4/133, M3M Mall, Sector 65, Gurugram",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=M3M+Mall+65th+Avenue+Sector+65+Gurugram",
};

export const NAV = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Contact", href: "/contact" },
];

// Four hero trust markers (as supplied by the client)
export const HERO_BADGES = [
  "Government Licensed",
  "Eco-Friendly Solutions",
  "Experienced Professionals",
  "Fast Response",
];

export const TRUST_BADGES = [
  { label: "Government Licensed", icon: "shield" },
  { label: "Eco-Friendly Solutions", icon: "leaf" },
  { label: "Experienced Professionals", icon: "users" },
  { label: "Integrated Pest Management", icon: "spray" },
  { label: "Fast Response", icon: "headset" },
];

// "Why Choose Frontline" — 8 points from the client
export const WHY_CHOOSE = [
  { icon: "shield", t: "Government Licensed", d: "A fully licensed, compliant pest control company you can trust." },
  { icon: "users", t: "Experienced & Trained", d: "Skilled, professional technicians on every single job." },
  { icon: "leaf", t: "Eco-Friendly & Safe", d: "Approved, low-toxicity treatments safe for people and pets." },
  { icon: "spray", t: "Integrated Pest Management", d: "Science-led IPM that prevents pests, not just treats them." },
  { icon: "gauge", t: "Customized Programs", d: "Pest control plans tailored to your exact space and needs." },
  { icon: "chart", t: "Transparent Pricing", d: "Clear, honest quotes with no hidden costs." },
  { icon: "headset", t: "Prompt Service", d: "Fast response and reliable, on-time servicing." },
  { icon: "award", t: "Satisfaction Focused", d: "Your satisfaction is our top priority on every visit." },
];

// Frosted window-graphic highlights (home coverage grid)
export const WINDOW_GRAPHICS = [
  { title: "Termite Control", icon: "shield" },
  { title: "Rodent Control", icon: "rodent" },
  { title: "Cockroach Control", icon: "roach" },
  { title: "Mosquito & Fly Control", icon: "mosquito" },
  { title: "Bed Bug Control", icon: "bed" },
  { title: "Ant Control", icon: "ant" },
  { title: "Beehive Removal", icon: "bee" },
  { title: "Commercial AMC", icon: "building" },
];

// Full service catalogue, grouped for the Services page
export const SERVICE_GROUPS = [
  {
    group: "Residential Pest Control",
    slug: "residential-pest-control",
    icon: "home",
    img: "/images/lobby.jpg",
    pos: "50% 25%",
    blurb: "Everyday protection for homes and families using safe, low-odour formulations.",
    items: [
      { name: "General Pest Control", desc: "Integrated cover for common household pests.", img: "/images/services/general-pest-item.jpg", pos: "50% 40%" },
      { name: "Cockroach Control", desc: "Gel baiting & residual treatment for kitchens and drains.", img: "/images/services/cockroach.jpg", pos: "50% 50%" },
      { name: "Rodent Control", desc: "Baiting, trapping and rodent-proofing programmes.", img: "/images/services/rodent-item.jpg", pos: "50% 40%" },
      { name: "Bed Bug Control", desc: "Multi-cycle treatment for complete eradication.", img: "/images/services/bedbug.jpg", pos: "50% 50%" },
      { name: "Mosquito & Fly Control", desc: "Fogging and larval management to break the breeding cycle.", img: "/images/services/mosquito-item.jpg", pos: "50% 40%" },
      { name: "Ant Control", desc: "Targeted treatment for ant trails and nests.", img: "/images/services/ant.jpg", pos: "50% 50%" },
      { name: "Beehive Removal", desc: "Safe removal of beehives and wasp nests by protected technicians.", img: "/images/services/beehive-item.jpg", pos: "50% 45%" },
    ],
  },
  {
    group: "Termite Solutions",
    slug: "termite-solutions",
    icon: "shield",
    img: "/images/termite.jpg",
    pos: "50% 15%",
    blurb: "Long-lasting barrier treatments that protect your structure from foundation to finish.",
    items: [
      { name: "Pre-Construction Anti-Termite Treatment", desc: "Soil & foundation treatment applied during building work.", img: "/images/services/construction.jpg", pos: "50% 45%" },
      { name: "Post-Construction Anti-Termite Treatment", desc: "Drill-fill-seal treatment for existing structures.", img: "/images/services/termite-mound.jpg", pos: "50% 40%" },
      { name: "Wood Borer Treatment", desc: "Targeted control for furniture and timber borers.", img: "/images/services/woodborer.jpg", pos: "50% 35%" },
    ],
  },
  {
    group: "Commercial Pest Management",
    slug: "commercial-pest-management",
    icon: "building",
    img: "/images/commercial.jpg",
    pos: "50% 25%",
    blurb: "Documented, compliance-ready pest programmes for every kind of business.",
    items: [
      { name: "Restaurants & Cafés", desc: "HACCP-aligned kitchen and dining protection.", img: "/images/services/restaurant-item.jpg", pos: "50% 35%" },
      { name: "Hotels & Resorts", desc: "Discreet treatments for guest rooms and back-of-house.", img: "/images/services/hotel-item.jpg", pos: "50% 40%" },
      { name: "Hospitals & Healthcare", desc: "Sterile-safe, low-toxicity healthcare programmes.", img: "/images/services/hospital-item.jpg", pos: "50% 40%" },
      { name: "Schools & Colleges", desc: "Safe, scheduled cover for education campuses.", img: "/images/services/school-item.jpg", pos: "50% 35%" },
      { name: "Offices", desc: "Low-disruption IPM for corporate workplaces.", img: "/images/services/office-item.jpg", pos: "50% 40%" },
      { name: "Warehouses", desc: "Perimeter defence and monitoring for storage.", img: "/images/services/warehouse-item.jpg", pos: "50% 40%" },
      { name: "Shopping Malls", desc: "Large-format pest management for retail spaces.", img: "/images/services/mall-item.jpg", pos: "50% 40%" },
      { name: "Factories", desc: "Heavy-duty protocols for manufacturing units.", img: "/images/services/factory-item.jpg", pos: "50% 40%" },
    ],
  },
];

// AMC packages
export const AMC_FOR = [
  { name: "Homes", icon: "home" },
  { name: "Offices", icon: "building" },
  { name: "Restaurants", icon: "restaurant" },
  { name: "Hotels", icon: "hotel" },
  { name: "Hospitals", icon: "hospital" },
  { name: "Schools", icon: "school" },
  { name: "Commercial Buildings", icon: "shop" },
];

// Flat list used for previews (each mapped to a real service photo)
export const SERVICE_PREVIEW = [
  { name: "Anti-Termite Treatment", icon: "shield", img: "/images/termite.jpg", pos: "50% 15%", desc: "Pre & post-construction barrier protection against termites.", points: ["Pre & post-construction barrier treatment", "Drill-fill-seal for existing structures", "Long-lasting termiticide protection"] },
  { name: "General Pest Control", icon: "spray", img: "/images/general-pest.jpg", pos: "50% 9%", desc: "Cockroach, ant & crawling-insect treatment for homes and offices.", points: ["Cockroach & ant treatment", "Crawling-insect control", "Homes & office coverage"] },
  // img/pos = default (Services page); homeImg/homePos = override used on the Home page only
  { name: "Rodent Control", icon: "rodent", img: "/images/rodent.jpg", pos: "50% 40%", homeImg: "/images/rodent-baitbox.jpg", homePos: "50% 42%", desc: "Baiting, trapping and rodent-proofing for homes & warehouses.", points: ["Baiting & trapping programmes", "Rodent-proofing for entry points", "Homes & warehouse coverage"] },
  { name: "Mosquito & Fly Control", icon: "mosquito", img: "/images/mosquito.jpg", pos: "30% 50%", desc: "Fogging and larval management to stop the breeding cycle.", points: ["Fogging treatment", "Larval source management", "Breeding-cycle control"] },
  // img/pos = default (Services page); homeImg/homePos = override used on the Home page only
  { name: "Beehive Removal", icon: "bee", img: "/images/beehive.jpg", pos: "50% 35%", homeImg: "/images/mall-highwork.jpg", homePos: "50% 15%", desc: "Safe removal of beehives & wasp nests by protected technicians.", points: ["Safe beehive & wasp nest removal", "Protected, trained technicians", "No-harm relocation practices"] },
  { name: "Commercial Pest Management", icon: "building", img: "/images/commercial.jpg", pos: "50% 25%", desc: "Documented IPM programmes for offices, malls and retail.", points: ["Documented IPM programmes", "Offices, malls & retail coverage", "Scheduled reporting"] },
  { name: "Industrial Pest Management", icon: "factory", img: "/images/industrial.jpg", pos: "50% 35%", desc: "Heavy-duty, compliance-ready protection for plants & facilities.", points: ["Heavy-duty treatment protocols", "Compliance-ready documentation", "Plant & facility coverage"] },
];

// Industries we serve (client-supplied list of 9)
export const INDUSTRIES = [
  { name: "Residential Apartments & Villas", icon: "home", img: "/images/lobby.jpg", pos: "50% 25%", desc: "Homes, apartments and gated communities.", points: ["Family & pet-safe chemicals", "Odour-free application", "Emergency call-outs"] },
  { name: "Restaurants & Cafés", icon: "restaurant", img: "/images/terrace.jpg", pos: "50% 40%", desc: "Kitchens, cafés and cloud kitchens.", points: ["HACCP-aligned", "Night servicing", "Grease-trap focus"] },
  { name: "Hotels & Resorts", icon: "hotel", img: "/images/lobby.jpg", pos: "50% 30%", desc: "Hospitality and guest accommodation.", points: ["Discreet treatments", "Guest-safe schedules", "Room-ready sign-off"] },
  { name: "Hospitals & Healthcare", icon: "hospital", img: "/images/hvac.jpg", pos: "50% 35%", desc: "Hospitals, clinics and diagnostic centres.", points: ["Low-toxicity methods", "Sterile-safe protocols", "24×7 monitoring"] },
  { name: "Educational Institutions", icon: "school", img: "/images/hero-outdoor.jpg", pos: "50% 30%", desc: "Schools, colleges and campuses.", points: ["Child-safe treatments", "Holiday scheduling", "Documented reports"] },
  { name: "Corporate Offices", icon: "building", img: "/images/office-interior.jpg", pos: "50% 40%", desc: "Workplaces and business parks.", points: ["Low-disruption IPM", "Flexible windows", "Single-point AMC"] },
  { name: "Warehouses & Logistics", icon: "warehouse", img: "/images/industrial.jpg", pos: "50% 35%", desc: "Storage, logistics and distribution.", points: ["Rodent monitoring grid", "Inbound goods checks", "Bird-proofing"] },
  { name: "Manufacturing Units", icon: "factory", img: "/images/industrial.jpg", pos: "50% 45%", desc: "Factories and processing plants.", points: ["Heavy-duty protocols", "Compliance reporting", "Perimeter defence"] },
  { name: "Retail Stores & Shopping Malls", icon: "shop", img: "/images/mall-highwork.jpg", pos: "50% 25%", desc: "Retail outlets and large malls.", points: ["Large-format IPM", "Public-safe timing", "Height & atrium work"] },
];

// Customer promise
export const PROMISE = ["Safe Treatments", "Reliable Service", "Lasting Protection"];
