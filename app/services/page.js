import Link from "next/link";
import { Icon } from "@/components/Icons";
import Reveal from "@/components/Reveal";
import Faq from "@/components/Faq";
import CoverImage from "@/components/CoverImage";
import { CtaBand, PhotoBand, PageHero } from "@/components/Sections";
import {
  SERVICE_GROUPS,
  SERVICE_PREVIEW,
  AMC_FOR,
} from "@/components/siteData";

export const metadata = {
  title: "Services",
  description:
    "Explore Frontline pest control services: anti-termite, cockroach, rodent, bed bug, mosquito, fly, wood borer, bird control, commercial & industrial pest management and AMC.",
};

const FAQS = [
  {
    q: "Are your treatments safe for children and pets?",
    a: "Yes. Frontline uses low-toxicity, approved formulations and low-odour application methods designed for occupied homes, offices and healthcare spaces. We advise simple precautions where needed and confirm safe re-entry times.",
  },
  {
    q: "Do you offer Annual Maintenance Contracts (AMC)?",
    a: "Absolutely. Our AMC programmes provide scheduled visits, priority call-outs and documented reporting — ideal for restaurants, hotels, hospitals, warehouses and corporate offices.",
  },
  {
    q: "How soon can you attend a site?",
    a: "We offer same-day response on enquiries and rapid call-outs across our service areas. Emergency treatments can usually be arranged the same or next working day.",
  },
  {
    q: "What is the difference between pre and post-construction termite treatment?",
    a: "Pre-construction treatment is applied to soil and foundations during building work to create a lasting barrier. Post-construction uses a drill-fill-seal method to protect existing structures.",
  },
  {
    q: "Do you serve commercial and industrial clients?",
    a: "Yes — commercial and industrial pest management is a core specialism. We provide audit-ready, HACCP-aligned programmes for compliance-driven environments.",
  },
];

export default function Services() {
  return (
    <>
      {/* =====================================================
          HERO
      ====================================================== */}
      <PageHero
        img="/images/bg-services.jpg"
        pos="50% 45%"
        crumb={
          <>
            <Link href="/">Home</Link> / Services
          </>
        }
        title="Complete pest control services"
        intro="One partner for every pest challenge — from single-visit treatments to fully managed annual contracts, all delivered to ISO-standard protocols."
        badges={[
          { icon: "shield", label: "Government Licensed" },
          { icon: "leaf", label: "Eco-Friendly Solutions" },
          { icon: "headset", label: "Fast Response" },
        ]}
      />

      {/* =====================================================
          FEATURED SERVICES
      ====================================================== */}
      {/* =====================================================
    FEATURED / POPULAR SERVICES
====================================================== */}
      <section className="relative overflow-hidden bg-white py-16 md:py-24">
        <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-teal/5 blur-3xl" />
        <div className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-lime-500/5 blur-3xl" />

        <div className="relative mx-auto max-w-container px-5 md:px-8">

          {/* SECTION HEADER */}
          <Reveal className="mx-auto mb-12 max-w-2xl text-center">
            <span className="inline-flex items-center rounded-full bg-teal/5 px-4 py-2 font-head text-[11px] font-bold uppercase tracking-[0.16em] text-teal">
              Popular services
            </span>

            <h2 className="mt-4 font-head text-3xl font-bold tracking-tight text-ink md:text-4xl lg:text-5xl">
              Pest control for{" "}
              <span className="text-teal">every space</span>
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-muted md:text-lg">
              Targeted pest management solutions for homes, businesses and
              commercial facilities.
            </p>
          </Reveal>

          {/* SERVICE GRID */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICE_PREVIEW.map((s, i) => {
              const Ico = Icon[s.icon];

              return (
                <Reveal
                  key={s.name}
                  delay={i * 60}
                >
                  <Link
                    href="/contact"
                    className="
                group
                block
                h-full
                overflow-hidden
                rounded-xl
                border
                border-slate-200
                bg-white
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-teal/20
                hover:shadow-xl
              "
                  >

                    {/* =========================================
                  9:16 IMAGE
              ========================================== */}
                    <div className="relative aspect-[9/16] overflow-hidden bg-slate-100">

                      <CoverImage
                        src={s.img}
                        alt={s.name}
                        sizes="
                    (max-width: 640px) 100vw,
                    (max-width: 1024px) 50vw,
                    33vw
                  "
                        position={s.pos}
                      />

                      {/* subtle overlay */}
                      <div
                        className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-slate-950/75
                    via-slate-950/10
                    to-transparent
                    opacity-70
                    transition-opacity
                    duration-300
                    group-hover:opacity-90
                  "
                      />

                      {/* Icon */}
                      <div
                        className="
                    absolute
                    left-4
                    top-4
                    grid
                    h-10
                    w-10
                    place-items-center
                    rounded-lg
                    bg-white/90
                    text-teal
                    shadow-md
                    backdrop-blur-sm
                    transition-all
                    duration-300
                    group-hover:bg-teal
                    group-hover:text-white
                  "
                      >
                        <Ico width={19} height={19} />
                      </div>

                      {/* Image title */}
                      <div className="absolute bottom-0 left-0 right-0 p-5">
                        <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.14em] text-lime-300">
                          Professional treatment
                        </span>

                        <h3 className="font-head text-xl font-bold leading-tight text-white">
                          {s.name}
                        </h3>
                      </div>
                    </div>

                    {/* =========================================
                  CARD CONTENT
              ========================================== */}
                    <div className="p-5">

                      <p className="text-sm leading-6 text-muted">
                        {s.desc}
                      </p>

                      {/* Points */}
                      {s.points && s.points.length > 0 && (
                        <div className="mt-4 flex flex-wrap gap-1.5">
                          {s.points.slice(0, 3).map((pt) => (
                            <span
                              key={pt}
                              className="
                          inline-flex
                          items-center
                          gap-1.5
                          rounded-md
                          bg-slate-50
                          px-2.5
                          py-1.5
                          text-[10px]
                          font-semibold
                          text-slate-600
                          transition-colors
                          group-hover:bg-teal/5
                          group-hover:text-teal-800
                        "
                            >
                              <Icon.check
                                width={10}
                                height={10}
                                className="shrink-0 text-teal"
                              />
                              {pt}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Bottom */}
                      <div
                        className="
                    mt-5
                    flex
                    items-center
                    justify-between
                    border-t
                    border-slate-100
                    pt-4
                  "
                      >
                        <span
                          className="
                      font-head
                      text-xs
                      font-bold
                      uppercase
                      tracking-[0.1em]
                      text-slate-400
                      transition-colors
                      group-hover:text-teal
                    "
                        >
                          View service
                        </span>

                        <span
                          className="
                      grid
                      h-8
                      w-8
                      place-items-center
                      rounded-full
                      bg-slate-100
                      text-slate-500
                      transition-all
                      duration-300
                      group-hover:bg-teal
                      group-hover:text-white
                    "
                        >
                          <Icon.arrow
                            width={14}
                            height={14}
                            className="transition-transform duration-300 group-hover:translate-x-0.5"
                          />
                        </span>
                      </div>

                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          SERVICE GROUPS
      ====================================================== */}
      {SERVICE_GROUPS.map((grp, gi) => {
        const Ico = Icon[grp.icon];
        const reverse = gi % 2 === 1;

        return (
          <section
            key={grp.group}
            id={grp.slug}
            className={`relative scroll-mt-24 overflow-hidden py-20 md:py-28 md:scroll-mt-28 ${reverse ? "bg-[#f5f8f8]" : "bg-white"
              }`}
          >
            {/* Decorative glow */}
            <div
              className={`pointer-events-none absolute h-96 w-96 rounded-full blur-3xl ${reverse
                ? "left-0 top-0 bg-teal/5"
                : "right-0 bottom-0 bg-lime-500/5"
                }`}
            />

            <div className="relative mx-auto max-w-container px-5 md:px-8">
              {/* Category heading */}
              <div
                className={`grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16 ${reverse ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
              >
                {/* Image */}
                <Reveal
                  className={`relative ${reverse ? "lg:order-2" : "lg:order-1"
                    }`}
                >
                  <div className="relative">
                    {/* Number */}
                    <span className="absolute -left-2 -top-8 z-20 font-head text-7xl font-black leading-none text-teal/5 md:-left-5 md:-top-10 md:text-9xl">
                      {String(gi + 1).padStart(2, "0")}
                    </span>

                    <div className="relative aspect-[9/12] overflow-hidden rounded-[30px] shadow-[0_25px_70px_rgba(15,23,42,0.12)]">
                      <CoverImage
                        src={grp.img}
                        alt={grp.group}
                        sizes="(max-width: 940px) 100vw, 50vw"
                        position={grp.pos}
                      />

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

                      {/* Category badge */}
                      <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/20 px-4 py-2 text-xs font-bold text-white backdrop-blur-md">
                        <Ico width={16} height={16} />
                        {grp.group}
                      </div>

                      {/* Bottom text */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-7">
                        <span className="text-xs font-medium uppercase tracking-[0.15em] text-white/60">
                          Complete category
                        </span>

                        <h3 className="mt-1 font-head text-2xl font-bold text-white md:text-3xl">
                          {grp.group}
                        </h3>
                      </div>
                    </div>
                  </div>
                </Reveal>

                {/* Content */}
                <Reveal
                  delay={120}
                  className={`${reverse ? "lg:order-1" : "lg:order-2"
                    }`}
                >
                  <span className="inline-flex items-center gap-2 rounded-full bg-teal/5 px-4 py-2 font-head text-xs font-bold uppercase tracking-[0.16em] text-teal">
                    <Ico width={16} height={16} />
                    {grp.group}
                  </span>

                  <h2 className="mt-5 font-head text-3xl font-bold tracking-tight text-ink md:text-5xl">
                    {grp.group}{" "}
                    <span className="text-teal">solutions</span>
                  </h2>

                  <p className="mt-5 max-w-xl text-base leading-7 text-body md:text-lg">
                    {grp.blurb}
                  </p>

                  {/* Service count */}
                  <div className="mt-7 inline-flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
                    <span className="grid h-9 w-9 place-items-center rounded-xl bg-teal text-sm font-bold text-white">
                      {grp.items.length}
                    </span>

                    <div>
                      <span className="block text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">
                        Available
                      </span>
                      <strong className="font-head text-sm text-ink">
                        Services in this category
                      </strong>
                    </div>
                  </div>
                </Reveal>
              </div>

              {/* Service cards */}
              <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {grp.items.map((s, i) => (
                  <Reveal key={s.name} delay={i * 55}>
                    <Link
                      href="/contact"
                      className="group block h-full overflow-hidden rounded-[24px] border border-slate-200/80 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-teal/20 hover:shadow-[0_20px_50px_rgba(15,23,42,0.10)]"
                    >
                      {/* Image */}
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <CoverImage
                          src={s.img}
                          alt={s.name}
                          sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
                          position={s.pos}
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent opacity-70" />

                        {/* Icon */}
                        <div className="absolute left-4 top-4 grid h-11 w-11 place-items-center rounded-xl border border-white/20 bg-black/20 text-white backdrop-blur-md transition-all duration-300 group-hover:bg-teal">
                          <Ico width={19} height={19} />
                        </div>

                        {/* Index */}
                        <span className="absolute right-4 top-4 font-head text-sm font-bold text-white/70">
                          {String(i + 1).padStart(2, "0")}
                        </span>

                        {/* Title */}
                        <div className="absolute bottom-0 left-0 right-0 p-5">
                          <h3 className="font-head text-lg font-bold text-white">
                            {s.name}
                          </h3>
                        </div>
                      </div>

                      {/* Card body */}
                      <div className="p-5">
                        <p className="text-sm leading-6 text-muted">
                          {s.desc}
                        </p>

                        <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
                          <span className="font-head text-xs font-bold uppercase tracking-[0.1em] text-slate-400 transition-colors group-hover:text-teal">
                            Learn more
                          </span>

                          <span className="grid h-8 w-8 place-items-center rounded-full bg-slate-50 text-slate-400 transition-all duration-300 group-hover:bg-teal group-hover:text-white">
                            <Icon.arrow width={14} height={14} />
                          </span>
                        </div>
                      </div>
                    </Link>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* =====================================================
          BEEHIVE REMOVAL
      ====================================================== */}
      <section className="relative overflow-hidden bg-[#f5f8f8] py-20 md:py-28">
        <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-teal/5 blur-3xl" />

        <div className="relative mx-auto max-w-container px-5 md:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Image */}
            <Reveal className="relative order-2 lg:order-1">
              <div className="relative">
                <div className="relative aspect-[4/4.2] overflow-hidden rounded-[30px] shadow-[0_25px_70px_rgba(15,23,42,0.12)]">
                  <CoverImage
                    src="/images/beehive.jpg"
                    alt="Frontline technician in protective gear removing a beehive at height"
                    sizes="(max-width: 940px) 100vw, 48vw"
                    position="50% 35%"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent" />

                  <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/20 px-4 py-2 text-xs font-bold text-white backdrop-blur-md">
                    <Icon.bee width={15} height={15} />
                    Specialist Service
                  </div>
                </div>

                {/* Floating card */}
                <div className="absolute -bottom-7 left-5 right-5 rounded-2xl border border-slate-100 bg-white p-5 shadow-[0_20px_50px_rgba(15,23,42,0.14)] sm:left-8 sm:right-auto sm:w-[330px]">
                  <div className="flex items-center gap-4">
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-teal text-white shadow-lg shadow-teal/20">
                      <Icon.bee width={25} height={25} />
                    </div>

                    <div>
                      <span className="block text-[10px] font-bold uppercase tracking-[0.15em] text-teal">
                        Safety first
                      </span>

                      <strong className="mt-1 block font-head text-sm leading-snug text-ink">
                        Trained & fully protected technicians
                      </strong>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Content */}
            <Reveal delay={120} className="order-1 lg:order-2">
              <span className="inline-flex items-center gap-2 rounded-full bg-teal/5 px-4 py-2 font-head text-xs font-bold uppercase tracking-[0.16em] text-teal">
                <Icon.bee width={16} height={16} />
                Beehive Removal
              </span>

              <h2 className="mt-5 font-head text-3xl font-bold tracking-tight text-ink md:text-5xl">
                Safe beehive &{" "}
                <span className="text-teal">wasp nest removal</span>
              </h2>

              <p className="mt-5 text-base leading-7 text-body md:text-lg">
                Beehives on balconies, ledges, shafts and high ceilings are
                best left to professionals. Our technicians remove hives and
                wasp nests safely — in full protective gear, at any height.
              </p>

              <ul className="mt-8 space-y-5">
                {[
                  {
                    title: "Height & ladder-safe removal",
                    desc: "Equipped to reach hives on tall walls and ceilings.",
                  },
                  {
                    title: "Protective bee-suit gear",
                    desc: "Trained, fully-protected technicians on every job.",
                  },
                  {
                    title: "Homes & commercial sites",
                    desc: "Apartments, offices, malls, warehouses and more.",
                  },
                ].map((item, i) => (
                  <li
                    key={item.title}
                    className="group flex items-start gap-4"
                  >
                    <span className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-lime-50 text-lime-700 transition-all duration-300 group-hover:bg-teal group-hover:text-white">
                      <Icon.check width={16} height={16} />
                    </span>

                    <div>
                      <strong className="block font-head text-base font-bold text-ink">
                        {item.title}
                      </strong>

                      <span className="mt-1 block text-sm leading-6 text-muted">
                        {item.desc}
                      </span>
                    </div>

                    <span className="ml-auto hidden font-head text-xs font-bold text-slate-300 sm:block">
                      0{i + 1}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className="group mt-9 inline-flex items-center gap-3 rounded-full bg-teal px-7 py-4 font-head text-sm font-bold text-white shadow-xl shadow-teal/20 transition-all duration-300 hover:-translate-y-1 hover:bg-teal-700 hover:shadow-2xl"
              >
                Request Beehive Removal

                <span className="grid h-7 w-7 place-items-center rounded-full bg-white/15 transition-transform duration-300 group-hover:translate-x-1">
                  <Icon.arrow width={15} height={15} />
                </span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =====================================================
          AMC
      ====================================================== */}
      <section className="relative overflow-hidden bg-[#092f31] py-20 md:py-28">
        {/* Background decoration */}
        <div className="pointer-events-none absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-teal/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-lime-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-container px-5 md:px-8">
          <Reveal className="mx-auto mb-14 max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 font-head text-xs font-bold uppercase tracking-[0.16em] text-lime-300">
              <Icon.handshake width={16} height={16} />
              Annual Maintenance Contracts
            </span>

            <h2 className="mt-5 font-head text-3xl font-bold tracking-tight text-white md:text-5xl">
              Customized{" "}
              <span className="text-lime-300">AMC packages</span>
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-[#cfe6e6] md:text-lg">
              Year-round protection with scheduled visits, priority call-outs
              and documented reporting — tailored to your premises.
            </p>
          </Reveal>

          {/* AMC cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {AMC_FOR.map((a, i) => {
              const Ico = Icon[a.icon];

              return (
                <Reveal key={a.name} delay={i * 55}>
                  <div className="group relative flex h-full items-center gap-4 overflow-hidden rounded-[22px] border border-white/10 bg-white/[0.06] p-5 backdrop-blur-sm transition-all duration-400 hover:-translate-y-1 hover:border-lime-300/30 hover:bg-white/[0.10]">
                    {/* Number */}
                    <span className="absolute right-4 top-2 font-head text-5xl font-black leading-none text-white/[0.035]">
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    <span className="relative grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-white/10 text-lime-300 transition-all duration-300 group-hover:bg-lime-500 group-hover:text-slate-950">
                      <Ico width={23} height={23} />
                    </span>

                    <span className="relative flex-1 font-head text-sm font-bold leading-5 text-white">
                      {a.name}
                    </span>

                    <span className="relative grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white/5 text-white/40 transition-all duration-300 group-hover:bg-lime-500 group-hover:text-slate-950">
                      <Icon.arrow width={13} height={13} />
                    </span>
                  </div>
                </Reveal>
              );
            })}
          </div>

          {/* CTA */}
          <Reveal className="mt-10 text-center">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 rounded-full bg-lime-500 px-7 py-4 font-head text-sm font-bold text-slate-950 shadow-xl shadow-lime-500/10 transition-all duration-300 hover:-translate-y-1 hover:bg-lime-400"
            >
              Request an AMC Quote

              <span className="grid h-7 w-7 place-items-center rounded-full bg-slate-950/10 transition-transform duration-300 group-hover:translate-x-1">
                <Icon.arrow width={15} height={15} />
              </span>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* =====================================================
          PHOTO BAND
      ====================================================== */}
      <PhotoBand
        img="/images/terrace.jpg"
        pos="50% 35%"
        eyebrow="No corner left untreated"
        title="Perimeter to plant room, we cover it all"
        text="Terraces, drains, ducts, basements and landscaping — Frontline treats the hard-to-reach spaces where pests actually breed, not just the visible surfaces."
        stats={[
          { num: "20+", lbl: "Service types" },
          { num: "9", lbl: "Sectors served" },
          { num: "24/7", lbl: "Emergency cover" },
        ]}
      />

      {/* =====================================================
          FAQ
      ====================================================== */}
      <section className="relative overflow-hidden bg-white py-20 md:py-28">
        <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-teal/5 blur-3xl" />

        <div className="relative mx-auto max-w-[860px] px-5 md:px-8">
          <Reveal className="mx-auto mb-12 max-w-2xl text-center">
            <span className="inline-flex items-center rounded-full bg-teal/5 px-4 py-2 font-head text-xs font-bold uppercase tracking-[0.16em] text-teal">
              Good to know
            </span>

            <h2 className="mt-5 font-head text-3xl font-bold tracking-tight text-ink md:text-5xl">
              Frequently asked{" "}
              <span className="text-teal">questions</span>
            </h2>

            <p className="mt-4 text-base leading-7 text-muted">
              Quick answers to common questions about our treatments,
              response times and maintenance programmes.
            </p>
          </Reveal>

          <Reveal>
            <div className="overflow-hidden rounded-[28px] border border-slate-200/80 bg-white p-2 shadow-[0_15px_50px_rgba(15,23,42,0.06)]">
              <Faq items={FAQS} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}
      <CtaBand
        title="Not sure which service you need?"
        text="Book a free inspection and our licensed team will recommend the right programme for your space — no obligation."
      />
    </>
  );
}