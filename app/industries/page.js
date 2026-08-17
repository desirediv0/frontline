import Link from "next/link";
import { Icon } from "@/components/Icons";
import Reveal from "@/components/Reveal";
import CoverImage from "@/components/CoverImage";
import { CtaBand, PageHero } from "@/components/Sections";
import { INDUSTRIES } from "@/components/siteData";

export const metadata = {
  title: "Industries We Serve",
  description:
    "Frontline delivers specialised pest management for commercial, residential and industrial sectors — restaurants, hotels, hospitals, warehouses and corporate AMC clients.",
};

const PILLARS = [
  {
    icon: "building",
    t: "Commercial",
    d: "Offices, malls, retail and corporate campuses protected with documented, low-disruption programmes.",
  },
  {
    icon: "home",
    t: "Residential",
    d: "Apartments, villas and housing societies served with family-safe, odour-free treatments.",
  },
  {
    icon: "factory",
    t: "Industrial",
    d: "Manufacturing and processing units secured with heavy-duty, compliance-ready protocols.",
  },
];

export default function Industries() {
  return (
    <>
      {/* =====================================================
          HERO
      ====================================================== */}
      <PageHero
        img="/images/bg-industries.jpg"
        pos="50% 55%"
        crumb={
          <>
            <Link href="/">Home</Link> / Industries
          </>
        }
        title="Specialised protection for every sector"
        intro="Different environments demand different protocols. Frontline tailors its pest management to the exact compliance, safety and hygiene needs of your industry."
        badges={[
          { icon: "building", label: "Commercial" },
          { icon: "home", label: "Residential" },
          { icon: "factory", label: "Industrial" },
        ]}
      />

      {/* =====================================================
          THREE PILLARS
      ====================================================== */}
      <section className="relative overflow-hidden bg-white py-20 md:py-28">
        {/* Decorative background */}
        <div className="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full bg-teal/5 blur-3xl" />
        <div className="pointer-events-none absolute -left-32 bottom-10 h-80 w-80 rounded-full bg-lime-500/5 blur-3xl" />

        <div className="relative mx-auto max-w-container px-5 md:px-8">
          <Reveal className="mx-auto mb-14 max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-teal/10 bg-teal/5 px-4 py-2 font-head text-xs font-bold uppercase tracking-[0.18em] text-teal">
              Our expertise
            </span>

            <h2 className="mt-5 font-head text-3xl font-semibold tracking-tight text-ink md:text-5xl">
              Protection built around{" "}
              <span className="text-teal">your environment</span>
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-body md:text-lg">
              From corporate spaces to industrial facilities, our programmes
              are designed around the unique risks of every environment.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {PILLARS.map((p, i) => {
              const Ico = Icon[p.icon];

              return (
                <Reveal key={p.t} delay={i * 90}>
                  <div className="group relative h-full overflow-hidden rounded-[28px] border border-slate-200/80 bg-white p-8 shadow-[0_10px_40px_rgba(15,23,42,0.05)] transition-all duration-500 hover:-translate-y-2 hover:border-teal/20 hover:shadow-[0_25px_70px_rgba(15,23,42,0.10)] md:p-9">
                    {/* Hover glow */}
                    <div className="pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full bg-teal/5 blur-3xl transition-all duration-500 group-hover:bg-teal/10" />

                    {/* Number */}
                    <span className="absolute right-7 top-6 font-head text-6xl font-black leading-none text-slate-100 transition-colors duration-500 group-hover:text-teal/10">
                      0{i + 1}
                    </span>

                    {/* Icon */}
                    <div className="relative mb-8 flex items-center justify-between">
                      <div className="grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-teal to-teal-700 text-white shadow-lg shadow-teal/20 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                        <Ico width={29} height={29} />
                      </div>

                      <div className="grid h-9 w-9 place-items-center rounded-full border border-slate-200 text-slate-400 transition-all duration-300 group-hover:border-teal group-hover:bg-teal group-hover:text-white">
                        <Icon.arrow width={15} height={15} />
                      </div>
                    </div>

                    <h3 className="relative font-head text-2xl font-bold text-ink">
                      {p.t}
                    </h3>

                    <p className="relative mt-3 text-[15px] leading-7 text-muted">
                      {p.d}
                    </p>

                    <div className="relative mt-7 h-1 w-10 overflow-hidden rounded-full bg-slate-100">
                      <div className="h-full w-0 rounded-full bg-teal transition-all duration-500 group-hover:w-full" />
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          SECTOR GRID
      ====================================================== */}
      <section className="relative overflow-hidden bg-[#f5f8f8] py-20 md:py-28">
        {/* Background decorations */}
        <div className="pointer-events-none absolute left-0 top-0 h-96 w-96 rounded-full bg-teal/5 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-lime-400/5 blur-3xl" />

        <div className="relative mx-auto max-w-container px-5 md:px-8">
          <Reveal className="mb-14 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <span className="inline-flex items-center rounded-full bg-teal/5 px-4 py-2 font-head text-xs font-bold uppercase tracking-[0.18em] text-teal">
                Sectors we protect
              </span>

              <h2 className="mt-5 font-head text-3xl font-bold tracking-tight text-ink md:text-5xl">
                Programmes tuned to{" "}
                <span className="text-teal">your environment</span>
              </h2>

              <p className="mt-5 max-w-xl text-base leading-7 text-body md:text-lg">
                Each sector gets a dedicated protocol, trained technicians and
                audit-ready reporting.
              </p>
            </div>

            <Link
              href="/contact"
              className="group hidden shrink-0 items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 font-head text-sm font-semibold text-ink shadow-sm transition-all duration-300 hover:border-teal hover:text-teal md:inline-flex"
            >
              Talk to our team
              <Icon.arrow
                width={16}
                height={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </Reveal>

          {/* Sector cards */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {INDUSTRIES.map((ind, i) => {
              const Ico = Icon[ind.icon];

              return (
                <Reveal key={ind.name} delay={i * 60}>
                  <article className="group relative flex h-full flex-col overflow-hidden rounded-[26px] bg-white shadow-[0_10px_35px_rgba(15,23,42,0.06)] ring-1 ring-slate-200/70 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(15,23,42,0.14)]">
                    {/* Image */}
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <CoverImage
                        src={ind.img}
                        alt={ind.name}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        position={ind.pos}
                      />

                      {/* Dark gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />

                      {/* Top number */}
                      <div className="absolute left-4 top-4 grid h-9 w-9 place-items-center rounded-full border border-white/20 bg-black/20 font-head text-xs font-bold text-white backdrop-blur-md">
                        {String(i + 1).padStart(2, "0")}
                      </div>

                      {/* Sector badge */}
                      <div className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/20 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-white backdrop-blur-md">
                        <Ico width={13} height={13} />
                        Sector
                      </div>

                      {/* Image title */}
                      <div className="absolute bottom-0 left-0 right-0 p-5">
                        <h3 className="font-head text-xl font-bold text-white">
                          {ind.name}
                        </h3>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-1 flex-col p-5">
                      <p className="text-sm leading-6 text-muted">
                        {ind.desc}
                      </p>

                      {/* Tags */}
                      <div className="mt-5 flex flex-wrap gap-2">
                        {ind.points.map((pt) => (
                          <span
                            key={pt}
                            className="inline-flex items-center gap-1.5 rounded-full border border-teal/10 bg-teal/[0.045] px-2.5 py-1.5 text-[11px] font-semibold text-teal-800 transition-colors duration-300 group-hover:border-teal/20 group-hover:bg-teal/10"
                          >
                            <span className="grid h-3.5 w-3.5 shrink-0 place-items-center rounded-full bg-lime-100 text-lime-700">
                              <Icon.check width={9} height={9} />
                            </span>
                            {pt}
                          </span>
                        ))}
                      </div>

                      {/* Bottom link */}
                      <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
                        <span className="font-head text-xs font-bold uppercase tracking-wider text-slate-400 transition-colors duration-300 group-hover:text-teal">
                          View programme
                        </span>

                        <span className="grid h-8 w-8 place-items-center rounded-full bg-slate-50 text-slate-400 transition-all duration-300 group-hover:bg-teal group-hover:text-white">
                          <Icon.arrow width={14} height={14} />
                        </span>
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>

          {/* Mobile CTA */}
          <Reveal className="mt-8 md:hidden">
            <Link
              href="/contact"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-teal px-6 py-3.5 font-head text-sm font-semibold text-white shadow-lg shadow-teal/20 transition-all hover:bg-teal-700"
            >
              Talk to our team
              <Icon.arrow width={16} height={16} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* =====================================================
          AMC HIGHLIGHT
      ====================================================== */}
      <section className="relative overflow-hidden bg-white py-20 md:py-28">
        <div className="mx-auto max-w-container px-5 md:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Image */}
            <Reveal className="relative order-2 lg:order-1">
              <div className="relative">
                <div className="relative aspect-[4/4.3] overflow-hidden rounded-[30px] shadow-[0_25px_70px_rgba(15,23,42,0.12)]">
                  <CoverImage
                    src="/images/industrial.jpg"
                    alt="Frontline AMC servicing an industrial facility"
                    sizes="(max-width: 940px) 100vw, 48vw"
                    position="50% 35%"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />

                  {/* Floating badge */}
                  <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/20 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md">
                    <span className="h-2 w-2 rounded-full bg-lime-400" />
                    AMC Services
                  </div>
                </div>

                {/* Floating card */}
                <div className="absolute -bottom-7 left-5 right-5 rounded-2xl border border-slate-100 bg-white p-5 shadow-[0_20px_50px_rgba(15,23,42,0.14)] sm:left-8 sm:right-auto sm:w-[340px]">
                  <div className="flex items-center gap-4">
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-lime-500 to-lime-700 font-head text-xl font-black text-white shadow-lg shadow-lime-600/20">
                      01
                    </div>

                    <div>
                      <span className="block text-[10px] font-bold uppercase tracking-[0.16em] text-teal">
                        Reliable coverage
                      </span>
                      <strong className="mt-1 block font-head text-sm leading-snug text-ink">
                        Contract for every site — fully documented
                      </strong>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Content */}
            <Reveal delay={120} className="order-1 lg:order-2">
              <span className="inline-flex items-center rounded-full bg-teal/5 px-4 py-2 font-head text-xs font-bold uppercase tracking-[0.18em] text-teal">
                Annual Maintenance Contracts
              </span>

              <h2 className="mt-5 font-head text-3xl font-bold tracking-tight text-ink md:text-5xl">
                Year-round cover for{" "}
                <span className="text-teal">multi-site brands</span>
              </h2>

              <p className="mt-5 text-base leading-7 text-body md:text-lg">
                Our AMC programmes give facility and operations teams a
                single, reliable pest management partner — with scheduled
                visits, priority response and consolidated reporting.
              </p>

              <ul className="mt-8 space-y-5">
                {[
                  {
                    t: "Scheduled preventive visits",
                    d: "Planned servicing that fits your operating hours.",
                  },
                  {
                    t: "Priority emergency call-outs",
                    d: "Faster response when unexpected issues arise.",
                  },
                  {
                    t: "Consolidated compliance reports",
                    d: "Audit-ready documentation across all locations.",
                  },
                ].map((item, index) => (
                  <li
                    key={item.t}
                    className="group flex items-start gap-4"
                  >
                    <span className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-lime-50 text-lime-700 transition-all duration-300 group-hover:bg-teal group-hover:text-white">
                      <Icon.check width={17} height={17} />
                    </span>

                    <div>
                      <strong className="block font-head text-base font-bold text-ink">
                        {item.t}
                      </strong>

                      <span className="mt-1 block text-sm leading-6 text-muted">
                        {item.d}
                      </span>
                    </div>

                    <span className="ml-auto hidden font-head text-xs font-bold text-slate-300 sm:block">
                      0{index + 1}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className="group mt-9 inline-flex items-center gap-3 rounded-full bg-teal px-7 py-4 font-head text-sm font-bold text-white shadow-xl shadow-teal/20 transition-all duration-300 hover:-translate-y-1 hover:bg-teal-700 hover:shadow-2xl"
              >
                Request an AMC Proposal

                <span className="grid h-7 w-7 place-items-center rounded-full bg-white/15 transition-transform duration-300 group-hover:translate-x-1">
                  <Icon.arrow width={15} height={15} />
                </span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}
      <CtaBand
        title="Let's protect your facility"
        text="Tell us about your sector and size — we'll design a pest management programme that fits."
      />
    </>
  );
}