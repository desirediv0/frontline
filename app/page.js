import Link from "next/link";
import { Icon } from "@/components/Icons";
import Reveal from "@/components/Reveal";
import CoverImage from "@/components/CoverImage";
import {
  ServiceStrip,
  WindowGraphics,
  CtaBand,
  PhotoBand,
} from "@/components/Sections";
import {
  SERVICE_PREVIEW,
  HERO_BADGES,
  WHY_CHOOSE,
  PROMISE,
  COMPANY,
} from "@/components/siteData";

const STEPS = [
  {
    n: 1,
    t: "Inspection",
    d: "A licensed technician surveys your site and identifies risk zones.",
  },
  {
    n: 2,
    t: "Custom Plan",
    d: "We design an Integrated Pest Management plan for your space.",
  },
  {
    n: 3,
    t: "Treatment",
    d: "Safe, low-odour application by trained, uniformed staff.",
  },
  {
    n: 4,
    t: "Monitoring",
    d: "Scheduled follow-ups and documented reporting under AMC.",
  },
];

const waLink = `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(
  "Hi Frontline Pest Control, I'd like a free inspection."
)}`;

export default function Home() {
  return (
    <>
      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative overflow-hidden bg-[#f4f8f8]">
        {/* Background decoration */}
        <div className="pointer-events-none absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-teal/10 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-lime-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-container px-5 pb-20 pt-16 md:px-8 md:pb-28 md:pt-24">
          <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
            {/* HERO CONTENT */}
            <Reveal>
              <div className="max-w-2xl">
                {/* Trust pill */}
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-teal/10 bg-white px-4 py-2 shadow-sm">
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-lime-100 text-lime-700">
                    <Icon.shield width={13} height={13} />
                  </span>

                  <span className="font-head text-[11px] font-bold uppercase tracking-[0.15em] text-teal">
                    Government Licensed Pest Control
                  </span>
                </div>

                <h1 className="font-head text-2xl md:text-4xl font-black leading-[1.05] tracking-[-0.03em] text-ink ">
                  Protecting Homes &amp; Businesses with{" "}
                  <span className="text-teal">
                    Safe, Reliable
                  </span>{" "}
                  Pest Management
                </h1>

                <p className="mt-6 max-w-xl text-base leading-7 text-body md:text-lg md:leading-8">
                  Professional pest control services for homes, offices,
                  restaurants, hotels, hospitals, schools, warehouses &
                  industries.
                </p>

                {/* Hero badges */}
                <div className="mt-7 flex flex-wrap gap-2.5">
                  {HERO_BADGES.map((b) => (
                    <span
                      key={b}
                      className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-2 text-xs font-semibold text-ink shadow-sm"
                    >
                      <Icon.checkCircle
                        width={15}
                        height={15}
                        className="text-teal"
                      />
                      {b}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <a
                    href={`tel:${COMPANY.phone}`}
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-teal px-6 py-3.5 font-head text-sm font-bold text-white shadow-xl shadow-teal/20 transition-all duration-300 hover:-translate-y-1 hover:bg-teal-700"
                  >
                    <Icon.phone width={17} height={17} />
                    Call Now: {COMPANY.phone}
                  </a>

                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-lime-500 px-6 py-3.5 font-head text-sm font-bold text-slate-950 shadow-xl shadow-lime-500/15 transition-all duration-300 hover:-translate-y-1 hover:bg-lime-400"
                  >
                    <Icon.whatsapp width={18} height={18} />
                    WhatsApp Now
                  </a>

                  <Link
                    href="/contact"
                    className="group inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3.5 font-head text-sm font-bold text-ink shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-teal hover:text-teal"
                  >
                    <Icon.calendar width={17} height={17} />
                    Book Free Inspection
                    <Icon.arrow
                      width={14}
                      height={14}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </Link>
                </div>

                {/* Small trust stats */}
                <div className="mt-10 flex flex-wrap items-center gap-6 border-t border-slate-200 pt-7">
                  <div>
                    <strong className="block font-head text-2xl font-black text-ink">
                      42+
                    </strong>
                    <span className="text-xs font-medium text-muted">
                      Years expertise
                    </span>
                  </div>

                  <div className="h-9 w-px bg-slate-200" />

                  <div>
                    <strong className="block font-head text-2xl font-black text-ink">
                      300+
                    </strong>
                    <span className="text-xs font-medium text-muted">
                      Sites protected
                    </span>
                  </div>

                  <div className="h-9 w-px bg-slate-200" />

                  <div>
                    <strong className="block font-head text-2xl font-black text-ink">
                      24/7
                    </strong>
                    <span className="text-xs font-medium text-muted">
                      Support &amp; AMC
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* HERO VISUAL */}
            <Reveal delay={120}>
              <div className="relative mx-auto w-full max-w-[620px]">
                {/* Main image */}
                <div className="relative aspect-[4/4.5] overflow-hidden rounded-[34px] shadow-[0_30px_90px_rgba(15,23,42,0.15)]">
                  <CoverImage
                    src="/images/storefront.jpg"
                    alt="Frontline Pest Control storefront"
                    sizes="(max-width: 940px) 100vw, 48vw"
                    position="50% 40%"
                    priority
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

                  {/* Top badge */}
                  <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/20 px-4 py-2 text-xs font-bold text-white backdrop-blur-md">
                    <span className="h-2 w-2 rounded-full bg-lime-400" />
                    Frontline Pest Control
                  </div>

                  {/* Bottom content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-7">
                    <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-lime-300">
                      Professional protection
                    </span>

                    <h2 className="mt-2 font-head text-2xl font-bold text-white md:text-3xl">
                      Safe solutions for every environment
                    </h2>
                  </div>
                </div>

                {/* Inset image */}
                <div className="absolute -bottom-8 -left-6 hidden w-[42%] overflow-hidden rounded-[24px] border-8 border-[#f4f8f8] shadow-[0_20px_50px_rgba(15,23,42,0.18)] sm:block">
                  <div className="aspect-[9/10]">
                    <CoverImage
                      src="/images/office-interior.jpg"
                      alt="Inside the Frontline Pest Control office"
                      sizes="22vw"
                      position="50% 45%"
                    />
                  </div>
                </div>

                {/* Floating eco card */}
                <div className="absolute -right-3 top-8 hidden w-[220px] rounded-2xl border border-white/50 bg-white/95 p-4 shadow-[0_20px_50px_rgba(15,23,42,0.15)] backdrop-blur-md sm:block md:-right-8">
                  <div className="flex items-center gap-3">
                    <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-lime-100 text-lime-700">
                      <Icon.leaf width={22} height={22} />
                    </div>

                    <div>
                      <strong className="block font-head text-sm font-bold text-ink">
                        Eco-Friendly
                      </strong>
                      <span className="mt-0.5 block text-xs text-muted">
                        Safe for family &amp; pets
                      </span>
                    </div>
                  </div>
                </div>

                {/* Licensed card */}
                <div className="absolute -bottom-5 right-4 rounded-2xl border border-white/60 bg-[#092f31] px-5 py-4 shadow-[0_20px_50px_rgba(15,47,49,0.25)] sm:right-8">
                  <div className="flex items-center gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 text-lime-300">
                      <Icon.shield width={20} height={20} />
                    </div>

                    <div>
                      <span className="block text-[9px] font-bold uppercase tracking-[0.15em] text-[#8fb7b7]">
                        Trusted
                      </span>
                      <strong className="block font-head text-sm text-white">
                        Licensed &amp; Professional
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
          SERVICE STRIP
      ====================================================== */}
      <ServiceStrip />

      {/* =====================================================
          SERVICES
      ====================================================== */}
      <section className="relative overflow-hidden bg-white py-20 md:py-28">
        <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-teal/5 blur-3xl" />

        <div className="relative mx-auto max-w-container px-5 md:px-8">
          <Reveal className="mx-auto mb-14 max-w-2xl text-center">
            <span className="inline-flex items-center rounded-full bg-teal/5 px-4 py-2 font-head text-xs font-bold uppercase tracking-[0.16em] text-teal">
              What we do
            </span>

            <h2 className="mt-5 font-head text-3xl font-bold tracking-tight text-ink md:text-5xl">
              Pest control services built for{" "}
              <span className="text-teal">every space</span>
            </h2>

            <p className="mt-4 text-base leading-7 text-muted md:text-lg">
              From single-visit treatments to fully managed annual contracts,
              we handle it all.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SERVICE_PREVIEW.map((s, i) => {
              const Ico = Icon[s.icon];

              return (
                <Reveal key={s.name} delay={i * 60}>
                  <Link
                    href="/services"
                    className="group block h-full overflow-hidden rounded-[28px] border border-slate-200/80 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-teal/20 hover:shadow-[0_25px_65px_rgba(15,23,42,0.12)]"
                  >
                    {/* Image */}
                    <div className="relative aspect-[9/10] overflow-hidden">
                      <CoverImage
                        src={s.homeImg || s.img}
                        alt={s.name}
                        sizes="(max-width: 940px) 100vw, 33vw"
                        position={s.homePos || s.pos}
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent" />

                      <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/20 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wide text-white backdrop-blur-md">
                        <Ico width={14} height={14} />
                        {s.name.split(" ")[0]}
                      </span>

                      <span className="absolute right-4 top-4 font-head text-4xl font-black text-white/20">
                        {String(i + 1).padStart(2, "0")}
                      </span>

                      <div className="absolute bottom-0 left-0 right-0 p-5">
                        <h3 className="font-head text-xl font-bold text-white">
                          {s.name}
                        </h3>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex h-full flex-col p-5">
                      {s.points ? (
                        <ul className="space-y-2">
                          {s.points.slice(0, 4).map((pt) => (
                            <li
                              key={pt}
                              className="flex items-start gap-2 text-sm text-muted"
                            >
                              <Icon.check
                                width={14}
                                height={14}
                                className="mt-0.5 shrink-0 text-teal"
                              />
                              {pt}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-sm leading-6 text-muted">
                          {s.desc}
                        </p>
                      )}

                      <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
                        <span className="font-head text-xs font-bold uppercase tracking-[0.1em] text-slate-400 transition-colors group-hover:text-teal">
                          Learn more
                        </span>

                        <span className="grid h-9 w-9 place-items-center rounded-full bg-slate-50 text-slate-400 transition-all duration-300 group-hover:bg-teal group-hover:text-white">
                          <Icon.arrow
                            width={15}
                            height={15}
                            className="transition-transform group-hover:translate-x-1"
                          />
                        </span>
                      </div>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>

          <Reveal className="mt-10 text-center">
            <Link
              href="/services"
              className="group inline-flex items-center gap-3 rounded-full bg-teal px-7 py-4 font-head text-sm font-bold text-white shadow-xl shadow-teal/20 transition-all duration-300 hover:-translate-y-1 hover:bg-teal-700"
            >
              View All Services
              <span className="grid h-7 w-7 place-items-center rounded-full bg-white/10">
                <Icon.arrow
                  width={15}
                  height={15}
                  className="transition-transform group-hover:translate-x-1"
                />
              </span>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* =====================================================
          PHOTO BAND
      ====================================================== */}
      <PhotoBand />

      {/* =====================================================
          WHY CHOOSE
      ====================================================== */}
      <section className="relative overflow-hidden bg-[#f5f8f8] py-20 md:py-28">
        <div className="relative mx-auto max-w-container px-5 md:px-8">
          <Reveal className="mx-auto mb-14 max-w-2xl text-center">
            <span className="inline-flex items-center rounded-full bg-teal/5 px-4 py-2 font-head text-xs font-bold uppercase tracking-[0.16em] text-teal">
              Why Frontline
            </span>

            <h2 className="mt-5 font-head text-3xl font-bold tracking-tight text-ink md:text-5xl">
              Why choose{" "}
              <span className="text-teal">Frontline Pest Control?</span>
            </h2>

            <p className="mt-4 text-base leading-7 text-muted md:text-lg">
              Everything you need in a pest management partner — safe,
              reliable and accountable.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {WHY_CHOOSE.map((w, i) => {
              const Ico = Icon[w.icon];

              return (
                <Reveal key={w.t} delay={i * 50}>
                  <div className="group relative h-full overflow-hidden rounded-[26px] border border-slate-200/80 bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-teal/20 hover:shadow-[0_25px_60px_rgba(15,23,42,0.10)]">
                    <span className="absolute right-5 top-4 font-head text-6xl font-black leading-none text-slate-100 transition-colors group-hover:text-teal/5">
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    <div className="relative">
                      <div className="grid h-14 w-14 place-items-center rounded-2xl bg-lime-50 text-lime-700 transition-all duration-300 group-hover:bg-teal group-hover:text-white">
                        <Ico width={24} height={24} />
                      </div>

                      <h3 className="mt-7 font-head text-lg font-bold text-ink">
                        {w.t}
                      </h3>

                      <p className="mt-3 text-sm leading-6 text-muted">
                        {w.d}
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
          COVERAGE
      ====================================================== */}
      <WindowGraphics />

      {/* =====================================================
          PROCESS
      ====================================================== */}
      <section className="relative overflow-hidden bg-white py-20 md:py-28">
        <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-teal/5 blur-3xl" />

        <div className="relative mx-auto max-w-container px-5 md:px-8">
          <Reveal className="mx-auto mb-14 max-w-2xl text-center">
            <span className="inline-flex items-center rounded-full bg-teal/5 px-4 py-2 font-head text-xs font-bold uppercase tracking-[0.16em] text-teal">
              How it works
            </span>

            <h2 className="mt-5 font-head text-3xl font-bold tracking-tight text-ink md:text-5xl">
              A simple,{" "}
              <span className="text-teal">four-step programme</span>
            </h2>
          </Reveal>

          <div className="relative grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {/* Connector */}
            <div className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-10 hidden h-px bg-slate-200 lg:block" />

            {STEPS.map((s, i) => (
              <Reveal key={s.n} delay={i * 80}>
                <div className="group relative text-center">
                  <div className="relative mx-auto grid h-20 w-20 place-items-center rounded-full border-[7px] border-white bg-teal font-head text-2xl font-black text-white shadow-[0_10px_30px_rgba(13,148,136,0.20)] transition-all duration-500 group-hover:scale-110 group-hover:bg-teal-700">
                    {s.n}
                  </div>

                  <span className="mt-5 block text-[10px] font-bold uppercase tracking-[0.16em] text-teal">
                    Step {s.n}
                  </span>

                  <h3 className="mt-2 font-head text-lg font-bold text-ink">
                    {s.t}
                  </h3>

                  <p className="mx-auto mt-2 max-w-[240px] text-sm leading-6 text-muted">
                    {s.d}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          CUSTOMER PROMISE
      ====================================================== */}
      <section className="relative overflow-hidden bg-[#092f31] py-20 md:py-28">
        <div className="absolute inset-0 opacity-20">
          <CoverImage
            src="/images/accent-eco.jpg"
            alt=""
            sizes="100vw"
            position="50% 50%"
          />
        </div>

        <div className="absolute inset-0 bg-[#092f31]/90" />

        <div className="relative mx-auto max-w-container px-5 md:px-8">
          <Reveal className="mx-auto max-w-4xl text-center">
            <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 font-head text-xs font-bold uppercase tracking-[0.16em] text-lime-300">
              Our Customer Promise
            </span>

            <h2 className="mt-6 font-head text-3xl font-bold leading-tight tracking-tight text-white md:text-5xl">
              {PROMISE.map((p, i) => (
                <span key={p} className="inline">
                  {p}
                  {i < PROMISE.length - 1 && (
                    <b className="mx-2 text-lime-300">·</b>
                  )}
                </span>
              ))}
            </h2>

            <p className="mt-5 text-base text-[#b9d1d1] md:text-lg">
              Your satisfaction is our priority.
            </p>
          </Reveal>
        </div>
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}
      <CtaBand />
    </>
  );
}