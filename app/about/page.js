import Link from "next/link";
import { Icon } from "@/components/Icons";
import Reveal from "@/components/Reveal";
import CoverImage from "@/components/CoverImage";
import { CtaBand, PhotoBand, PageHero } from "@/components/Sections";

export const metadata = {
  title: "About Us",
  description:
    "Learn about Frontline Pest Control — a government-licensed, ISO-standard company delivering safe, documented pest control across India.",
};

const VALUES = [
  {
    icon: "leaf",
    t: "Safety First",
    d: "We use low-toxicity, approved formulations that are safe for families, staff and pets.",
  },
  {
    icon: "award",
    t: "Proven Standards",
    d: "Government licensed, GST registered and aligned to ISO service standards.",
  },
  {
    icon: "chart",
    t: "Full Transparency",
    d: "Documented reporting and honest pricing on every job, every visit.",
  },
  {
    icon: "headset",
    t: "Always Available",
    d: "Responsive support and rapid call-outs whenever pests strike.",
  },
];

const FOUNDER_COMPANIES = [
  "Hoechst",
  "Coromandel",
  "PPL",
  "Dow Chemicals",
  "DuPont",
  "FMC",
  "Corteva",
  "T Stanes",
  "PBI",
];

const MILESTONES = [
  {
    y: "Licensed",
    t: "Government Licensed",
    d: "Fully authorised to carry out professional pest management.",
  },
  {
    y: "GST",
    t: "GST Registered",
    d: "A compliant, invoice-ready business partner for corporates.",
  },
  {
    y: "IPM",
    t: "Eco-Friendly IPM",
    d: "Integrated Pest Management with approved, low-toxicity products.",
  },
  {
    y: "AMC",
    t: "Corporate Specialists",
    d: "Trusted for multi-site annual maintenance contracts.",
  },
];

export default function About() {
  return (
    <>
      {/* =====================================================
          HERO
      ====================================================== */}
      <PageHero
        img="/images/bg-about.jpg"
        pos="50% 45%"
        crumb={
          <>
            <Link href="/">Home</Link> / About
          </>
        }
        title="Your Trusted Pest Management Partner"
        intro="Frontline Pest Control is committed to delivering safe, effective and professional pest management for residential, commercial and industrial clients."
        badges={[
          { icon: "award", label: "42+ Years of Expertise" },
          { icon: "shield", label: "Government Licensed" },
          { icon: "chart", label: "GST Registered" },
        ]}
      />

      {/* =====================================================
          OUR STORY
      ====================================================== */}
      <section className="relative overflow-hidden bg-white py-20 md:py-28">
        <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-teal/5 blur-3xl" />
        <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-lime-500/5 blur-3xl" />

        <div className="relative mx-auto max-w-container px-5 md:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Content */}
            <Reveal className="order-1">
              <span className="inline-flex items-center rounded-full bg-teal/5 px-4 py-2 font-head text-xs font-bold uppercase tracking-[0.16em] text-teal">
                Our Story
              </span>

              <h2 className="mt-5 font-head text-3xl font-bold tracking-tight text-ink md:text-5xl">
                Experience you can{" "}
                <span className="text-teal">trust</span>
              </h2>

              <p className="mt-5 text-base leading-7 text-body md:text-lg">
                Frontline Pest Control is committed to delivering safe,
                effective and professional pest management for residential,
                commercial and industrial clients. Our focus is on protecting
                people, property and businesses through scientifically proven
                methods and integrated pest management (IPM) practices.
              </p>

              <p className="mt-4 text-sm leading-7 text-muted md:text-base">
                We provide customized treatment plans using approved products
                and trained technicians to ensure long-lasting protection
                against pests.
              </p>

              {/* Highlights */}
              <div className="mt-8 space-y-4">
                {[
                  {
                    title: "Integrated Pest Management",
                    desc: "Prevention-led programmes, not one-off spraying.",
                  },
                  {
                    title: "Trained, uniformed technicians",
                    desc: "Courteous professionals who respect your space.",
                  },
                  {
                    title: "Corporate AMC expertise",
                    desc: "Reliable, scheduled cover for demanding facilities.",
                  },
                ].map((item, i) => (
                  <div
                    key={item.title}
                    className="group flex items-start gap-4 rounded-2xl border border-slate-100 bg-slate-50/50 p-4 transition-all duration-300 hover:border-teal/10 hover:bg-teal/[0.03]"
                  >
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-lime-50 text-lime-700 transition-all duration-300 group-hover:bg-teal group-hover:text-white">
                      <Icon.check width={16} height={16} />
                    </span>

                    <div className="flex-1">
                      <strong className="block font-head text-sm font-bold text-ink md:text-base">
                        {item.title}
                      </strong>

                      <span className="mt-1 block text-sm leading-6 text-muted">
                        {item.desc}
                      </span>
                    </div>

                    <span className="hidden font-head text-xs font-bold text-slate-300 sm:block">
                      0{i + 1}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Image */}
            <Reveal delay={120} className="relative order-2">
              <div className="relative">
                <div className="relative aspect-[4/4.3] overflow-hidden rounded-[30px] shadow-[0_25px_70px_rgba(15,23,42,0.12)]">
                  <CoverImage
                    src="/images/office-interior.jpg"
                    alt="Inside the Frontline Pest Control office"
                    sizes="(max-width: 940px) 100vw, 48vw"
                    position="50% 40%"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent" />

                  {/* Top badge */}
                  <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/20 px-4 py-2 text-xs font-bold text-white backdrop-blur-md">
                    <span className="h-2 w-2 rounded-full bg-lime-400" />
                    Frontline Pest Control
                  </div>
                </div>

                {/* Floating stats */}
                <div className="absolute -bottom-7 left-5 right-5 rounded-2xl border border-slate-100 bg-white p-5 shadow-[0_20px_50px_rgba(15,23,42,0.14)] sm:left-8 sm:right-auto sm:w-[330px]">
                  <div className="flex items-center gap-4">
                    <div className="font-head text-4xl font-black tracking-tight text-teal">
                      300<span className="text-lime-600">+</span>
                    </div>

                    <div className="h-10 w-px bg-slate-200" />

                    <div>
                      <span className="block text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">
                        Protected
                      </span>

                      <strong className="mt-1 block font-head text-sm leading-snug text-ink">
                        Homes, offices & facilities
                      </strong>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =====================================================
          LEADERSHIP / FOUNDER
      ====================================================== */}
      <section className="relative overflow-hidden bg-[#092f31] py-20 md:py-28">
        <div className="pointer-events-none absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-teal/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-lime-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-container px-5 md:px-8">
          <Reveal className="mx-auto mb-14 max-w-2xl text-center">
            <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 font-head text-xs font-bold uppercase tracking-[0.16em] text-lime-300">
              Leadership
            </span>

            <h2 className="mt-5 font-head text-3xl font-bold tracking-tight text-white md:text-5xl">
              Guided by four decades of{" "}
              <span className="text-lime-300">industry expertise</span>
            </h2>

            <p className="mt-5 text-base leading-7 text-[#cfe6e6] md:text-lg">
              Technical experience, industry knowledge and a commitment to
              professional pest management.
            </p>
          </Reveal>

          <Reveal>
            <div className="overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.06] shadow-2xl backdrop-blur-sm">
              <div className="grid grid-cols-1 lg:grid-cols-[0.32fr_0.68fr]">
                {/* Founder aside */}
                <div className="relative overflow-hidden border-b border-white/10 p-7 lg:border-b-0 lg:border-r md:p-10">
                  <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-teal/30 blur-3xl" />

                  <div className="relative">
                    <div className="grid h-24 w-24 place-items-center rounded-[26px] bg-gradient-to-br from-teal to-teal-700 text-white shadow-xl shadow-teal/20">
                      <Icon.person width={52} height={52} />
                    </div>

                    <div className="mt-6">
                      <span className="inline-flex rounded-full bg-lime-500/10 px-3 py-1.5 font-head text-[10px] font-bold uppercase tracking-[0.15em] text-lime-300">
                        Founder
                      </span>

                      <h3 className="mt-3 font-head text-2xl font-bold text-white">
                        Samay Dabas
                      </h3>

                      <p className="mt-1 text-sm text-[#9fc0c0]">
                        Founder, Frontline Pest Control
                      </p>
                    </div>

                    <div className="mt-8 rounded-2xl border border-white/10 bg-black/10 p-5">
                      <span className="block font-head text-4xl font-black text-lime-300">
                        42<span className="text-2xl">+</span>
                      </span>

                      <span className="mt-1 block text-xs font-medium uppercase tracking-[0.12em] text-[#9fc0c0]">
                        Years in pesticides industry
                      </span>
                    </div>
                  </div>
                </div>

                {/* Founder body */}
                <div className="p-7 md:p-10 lg:p-12">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="font-head text-2xl font-bold text-white md:text-3xl">
                      Mr. Samay Singh Dabas
                    </h3>

                    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-lime-300">
                      <Icon.award width={14} height={14} />
                      MSc. Entomology
                    </span>
                  </div>

                  <div className="mt-2 font-head text-sm font-semibold text-teal-300">
                    Founder, Frontline Pest Control
                  </div>

                  <div className="mt-7 space-y-5 text-sm leading-7 text-[#cfe6e6] md:text-base">
                    <p>
                      Frontline is led by a founder with rare depth of
                      experience. Mr. Samay Singh Dabas,{" "}
                      <strong className="text-white">MSc. Entomology</strong>,
                      brings{" "}
                      <strong className="text-white">
                        over 42 years in the pesticides industry
                      </strong>
                      , having worked with some of the world's most respected
                      multinationals in crop protection and pest management.
                    </p>

                    <p>
                      That legacy of technical knowledge, safety and best
                      practice is built into every Frontline treatment — giving
                      our clients the assurance of a young, agile company
                      backed by a lifetime of proven expertise.
                    </p>
                  </div>

                  <div className="mt-9">
                    <span className="block text-[10px] font-bold uppercase tracking-[0.17em] text-[#7fa8a8]">
                      Industry experience with
                    </span>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {FOUNDER_COMPANIES.map((company) => (
                        <span
                          key={company}
                          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-2 text-xs font-semibold text-white transition-all duration-300 hover:border-lime-300/20 hover:bg-lime-300/10"
                        >
                          <Icon.checkCircle
                            width={14}
                            height={14}
                            className="text-lime-300"
                          />
                          {company}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =====================================================
          OFFICE / PRESENCE
      ====================================================== */}
      <section className="relative overflow-hidden bg-white py-20 md:py-28">
        <div className="relative mx-auto max-w-container px-5 md:px-8">
          <Reveal className="mx-auto mb-14 max-w-2xl text-center">
            <span className="inline-flex items-center rounded-full bg-teal/5 px-4 py-2 font-head text-xs font-bold uppercase tracking-[0.16em] text-teal">
              Our presence
            </span>

            <h2 className="mt-5 font-head text-3xl font-bold tracking-tight text-ink md:text-5xl">
              An established,{" "}
              <span className="text-teal">on-ground business</span>
            </h2>

            <p className="mt-4 text-base leading-7 text-muted md:text-lg">
              Visit our office and licensed stock room — a real,
              GST-registered pest management company you can walk into.
            </p>
          </Reveal>

          {/* Gallery */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-12">
            {/* Main */}
            <Reveal className="md:col-span-6">
              <div className="group relative h-full min-h-[360px] overflow-hidden rounded-[28px] shadow-[0_20px_60px_rgba(15,23,42,0.10)]">
                <CoverImage
                  src="/images/storefront.jpg"
                  alt="Frontline Pest Control storefront"
                  sizes="(max-width: 760px) 100vw, 50vw"
                  position="50% 35%"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/20 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
                    <Icon.pin width={15} height={15} />
                    Our storefront
                  </div>

                  <h3 className="mt-3 font-head text-2xl font-bold text-white">
                    A real local presence
                  </h3>
                </div>
              </div>
            </Reveal>

            {/* Right top */}
            <Reveal delay={90} className="md:col-span-6">
              <div className="group relative h-full min-h-[260px] overflow-hidden rounded-[28px] shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
                <CoverImage
                  src="/images/reception.jpg"
                  alt="Frontline Pest Control reception and office"
                  sizes="(max-width: 760px) 100vw, 50vw"
                  position="50% 40%"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/20 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
                    <Icon.building width={15} height={15} />
                    Reception & office
                  </span>
                </div>
              </div>
            </Reveal>

            {/* Right bottom */}
            <Reveal delay={180} className="md:col-span-6">
              <div className="group relative h-full min-h-[260px] overflow-hidden rounded-[28px] shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
                <CoverImage
                  src="/images/storefront-sign.jpg"
                  alt="Frontline Pest Control branded signage"
                  sizes="(max-width: 760px) 100vw, 50vw"
                  position="50% 20%"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/20 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
                    <Icon.shield width={15} height={15} />
                    Licensed & GST registered
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =====================================================
          MISSION / VISION
      ====================================================== */}
      <section className="relative overflow-hidden bg-[#f5f8f8] py-20 md:py-28">
        <div className="pointer-events-none absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-teal/5 blur-3xl" />

        <div className="relative mx-auto max-w-container px-5 md:px-8">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {/* Mission */}
            <Reveal>
              <div className="group relative h-full overflow-hidden rounded-[28px] border border-slate-200/80 bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(15,23,42,0.10)] md:p-10">
                <div className="pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full bg-teal/5 blur-3xl" />

                <div className="relative">
                  <div className="flex items-center justify-between">
                    <div className="grid h-16 w-16 place-items-center rounded-2xl bg-teal text-white shadow-lg shadow-teal/20 transition-transform duration-500 group-hover:scale-110">
                      <Icon.gauge width={28} height={28} />
                    </div>

                    <span className="font-head text-6xl font-black leading-none text-slate-100">
                      01
                    </span>
                  </div>

                  <span className="mt-8 block font-head text-xs font-bold uppercase tracking-[0.16em] text-teal">
                    What we believe
                  </span>

                  <h3 className="mt-2 font-head text-2xl font-bold text-ink md:text-3xl">
                    Our Mission
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-muted md:text-base">
                    To make every space we service safer and healthier through
                    science-led, environmentally responsible pest management —
                    delivered with the reliability of a national brand.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Vision */}
            <Reveal delay={100}>
              <div className="group relative h-full overflow-hidden rounded-[28px] border border-slate-200/80 bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(15,23,42,0.10)] md:p-10">
                <div className="pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full bg-lime-500/5 blur-3xl" />

                <div className="relative">
                  <div className="flex items-center justify-between">
                    <div className="grid h-16 w-16 place-items-center rounded-2xl bg-lime-500 text-slate-950 shadow-lg shadow-lime-500/20 transition-transform duration-500 group-hover:scale-110">
                      <Icon.award width={28} height={28} />
                    </div>

                    <span className="font-head text-6xl font-black leading-none text-slate-100">
                      02
                    </span>
                  </div>

                  <span className="mt-8 block font-head text-xs font-bold uppercase tracking-[0.16em] text-teal">
                    Where we're going
                  </span>

                  <h3 className="mt-2 font-head text-2xl font-bold text-ink md:text-3xl">
                    Our Vision
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-muted md:text-base">
                    To be India's most trusted pest management partner for
                    corporates, institutions and families — recognised for
                    safety, transparency and results.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =====================================================
          VALUES
      ====================================================== */}
      <section className="relative overflow-hidden bg-white py-20 md:py-28">
        <div className="mx-auto max-w-container px-5 md:px-8">
          <Reveal className="mx-auto mb-14 max-w-2xl text-center">
            <span className="inline-flex items-center rounded-full bg-teal/5 px-4 py-2 font-head text-xs font-bold uppercase tracking-[0.16em] text-teal">
              What drives us
            </span>

            <h2 className="mt-5 font-head text-3xl font-bold tracking-tight text-ink md:text-5xl">
              The values behind{" "}
              <span className="text-teal">every treatment</span>
            </h2>

            <p className="mt-4 text-base leading-7 text-muted md:text-lg">
              Professional standards are not just policies — they shape how
              every Frontline team member works.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v, i) => {
              const Ico = Icon[v.icon];

              return (
                <Reveal key={v.t} delay={i * 70}>
                  <div className="group relative h-full overflow-hidden rounded-[26px] border border-slate-200/80 bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-teal/20 hover:shadow-[0_25px_60px_rgba(15,23,42,0.10)]">
                    <span className="absolute right-5 top-4 font-head text-6xl font-black leading-none text-slate-100 transition-colors group-hover:text-teal/5">
                      0{i + 1}
                    </span>

                    <div className="relative">
                      <div className="grid h-14 w-14 place-items-center rounded-2xl bg-teal/5 text-teal transition-all duration-300 group-hover:bg-teal group-hover:text-white group-hover:shadow-lg group-hover:shadow-teal/20">
                        <Ico width={26} height={26} />
                      </div>

                      <h3 className="mt-7 font-head text-lg font-bold text-ink">
                        {v.t}
                      </h3>

                      <p className="mt-3 text-sm leading-6 text-muted">
                        {v.d}
                      </p>

                      <div className="mt-6 h-1 w-8 overflow-hidden rounded-full bg-slate-100">
                        <div className="h-full w-0 rounded-full bg-teal transition-all duration-500 group-hover:w-full" />
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          CREDENTIALS
      ====================================================== */}
      <section className="relative overflow-hidden bg-[#f5f8f8] py-20 md:py-28">
        <div className="relative mx-auto max-w-container px-5 md:px-8">
          <Reveal className="mx-auto mb-14 max-w-2xl text-center">
            <span className="inline-flex items-center rounded-full bg-teal/5 px-4 py-2 font-head text-xs font-bold uppercase tracking-[0.16em] text-teal">
              Credentials
            </span>

            <h2 className="mt-5 font-head text-3xl font-bold tracking-tight text-ink md:text-5xl">
              Built on{" "}
              <span className="text-teal">compliance and trust</span>
            </h2>

            <p className="mt-4 text-base leading-7 text-muted md:text-lg">
              Professional pest management backed by licensing, documentation
              and corporate experience.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {MILESTONES.map((m, i) => (
              <Reveal key={m.t} delay={i * 70}>
                <div className="group relative h-full rounded-[26px] border border-slate-200/80 bg-white p-7 text-center shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(15,23,42,0.10)]">
                  <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-teal text-sm font-black text-white shadow-lg shadow-teal/15 transition-transform duration-500 group-hover:scale-110">
                    {m.y.slice(0, 2)}
                  </div>

                  <span className="mt-5 inline-flex rounded-full bg-lime-50 px-3 py-1.5 font-head text-[10px] font-bold uppercase tracking-[0.14em] text-lime-700">
                    {m.y}
                  </span>

                  <h3 className="mt-4 font-head text-lg font-bold text-ink">
                    {m.t}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-muted">
                    {m.d}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          PHOTO BAND
      ====================================================== */}
      <PhotoBand
        img="/images/hvac.jpg"
        pos="50% 30%"
        eyebrow="On the ground"
        title="Trained technicians, professional equipment"
        text="Our uniformed teams are equipped for every environment — from marble lobbies to industrial plant rooms — and follow documented, safety-first protocols on every visit."
      />

      {/* =====================================================
          FINAL CTA
      ====================================================== */}
      <CtaBand title="Partner with a team that takes protection seriously" />
    </>
  );
}