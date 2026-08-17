import Link from "next/link";
import { Icon } from "./Icons";
import Reveal from "./Reveal";
import CoverImage from "./CoverImage";
import {
  TRUST_BADGES,
  WINDOW_GRAPHICS,
  COMPANY,
} from "./siteData";

/* =========================================================
   PAGE HERO
========================================================= */

export function PageHero({
  img,
  pos = "50% 50%",
  crumb,
  title,
  intro,
  badges,
}) {
  return (
    <section className="relative min-h-[520px] overflow-hidden bg-[#092f31] md:min-h-[570px]">
      {/* Background */}
      <div className="absolute inset-0">
        <CoverImage
          src={img}
          alt=""
          sizes="100vw"
          position={pos}
          priority
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#031f21]/95 via-[#062e30]/75 to-[#062e30]/25" />

      <div className="absolute inset-0 bg-gradient-to-t from-[#031f21]/90 via-transparent to-transparent" />

      {/* Decorative glow */}
      <div className="pointer-events-none absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-teal/30 blur-3xl" />

      <div className="relative mx-auto flex min-h-[520px] max-w-container items-center px-5 py-24 md:min-h-[570px] md:px-8">
        <div className="max-w-4xl">
          {/* Breadcrumb */}
          {crumb && (
            <div className="mb-7 flex items-center gap-2 font-head text-xs font-semibold text-white/60">
              {crumb}
            </div>
          )}

          <Reveal>
            {/* Label */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.17em] text-lime-300 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-lime-400" />
              Frontline Pest Control
            </div>

            <h1 className="max-w-4xl font-head text-4xl font-black leading-[1.04] tracking-[-0.025em] text-white sm:text-5xl">
              {title}
            </h1>

            {intro && (
              <p className="mt-6 max-w-2xl text-base leading-7 text-white/75 md:text-lg md:leading-8">
                {intro}
              </p>
            )}

            {badges && badges.length > 0 && (
              <ul className="mt-8 flex flex-wrap gap-2.5">
                {badges.map((b) => {
                  const Ico = Icon[b.icon] || Icon.checkCircle;

                  return (
                    <li
                      key={b.label}
                      className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-2 text-xs font-semibold text-white backdrop-blur-md"
                    >
                      <Ico
                        width={16}
                        height={16}
                        className="text-lime-300"
                      />
                      {b.label}
                    </li>
                  );
                })}
              </ul>
            )}
          </Reveal>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#092f31]/30 to-transparent" />
    </section>
  );
}

/* =========================================================
   PHOTO BAND
========================================================= */

export function PhotoBand({
  img = "/images/fogging.jpg",
  pos = "50% 40%",
  eyebrow = "Proven on-site",
  title = "Real technicians. Real results.",
  text = "From high-rise terraces to basement plant rooms, our trained, uniformed teams treat every corner of your property with professional-grade equipment.",
  stats = [
    { num: "300+", lbl: "Sites serviced" },
    { num: "98%", lbl: "Client retention" },
    { num: "24/7", lbl: "Support & AMC" },
  ],
}) {
  return (
    <section className="relative overflow-hidden bg-[#092f31] py-20 md:py-28">
      {/* Image */}
      <div className="absolute inset-0">
        <CoverImage
          src={img}
          alt="Frontline pest control in action"
          sizes="100vw"
          position={pos}
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#031f21]/85" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#031f21]/95 via-[#031f21]/75 to-[#031f21]/50" />

      <div className="relative mx-auto max-w-container px-5 md:px-8">
        <Reveal className="max-w-3xl">
          <span className="inline-flex rounded-full border border-lime-300/20 bg-lime-300/10 px-4 py-2 font-head text-xs font-bold uppercase tracking-[0.17em] text-lime-300">
            {eyebrow}
          </span>

          <h2 className="mt-5 font-head text-3xl font-bold tracking-tight text-white md:text-5xl">
            {title}
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-[#c7dddd] md:text-lg">
            {text}
          </p>

          {/* Stats */}
          <div className="mt-10 grid max-w-2xl grid-cols-3 gap-3">
            {stats.map((s) => {
              const suffixMatch = s.num.match(/[+%]/);
              const suffix = suffixMatch ? suffixMatch[0] : "";

              const number = s.num.replace(/[+%]/, "");

              return (
                <div
                  className="rounded-2xl border border-white/10 bg-white/[0.06] p-4 backdrop-blur-sm md:p-5"
                  key={s.lbl}
                >
                  <div className="font-head text-2xl font-black text-lime-300 md:text-3xl">
                    {number}
                    {suffix && <b>{suffix}</b>}
                  </div>

                  <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-white/50 md:text-xs">
                    {s.lbl}
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* =========================================================
   SERVICE STRIP
========================================================= */

export function ServiceStrip() {
  return (
    <section className="relative z-20 -mt-1 bg-[#092f31]">
      <div className="mx-auto max-w-container px-5 md:px-8">
        <div className="grid grid-cols-1 divide-y divide-white/10 py-2 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {[
            {
              icon: "building",
              title: "Commercial",
              desc: "Offices & facilities",
            },
            {
              icon: "home",
              title: "Residential",
              desc: "Homes & societies",
            },
            {
              icon: "factory",
              title: "Industrial",
              desc: "Plants & warehouses",
            },
          ].map((item) => {
            const Ico = Icon[item.icon];

            return (
              <div
                key={item.title}
                className="group flex items-center gap-4 px-4 py-5 sm:justify-center sm:px-6"
              >
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/10 text-lime-300 transition-colors group-hover:bg-lime-500 group-hover:text-slate-950">
                  <Ico width={20} height={20} />
                </div>

                <div>
                  <strong className="block font-head text-sm font-bold text-white">
                    {item.title}
                  </strong>

                  <span className="text-xs text-white/50">
                    {item.desc}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   TRUST BADGES
========================================================= */

export function TrustBadges({ heading = true }) {
  return (
    <section className="relative overflow-hidden bg-[#092f31] py-20 md:py-24">
      <div className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-teal/30 blur-3xl" />

      <div className="relative mx-auto max-w-container px-5 md:px-8">
        {heading && (
          <Reveal className="mx-auto mb-12 max-w-2xl text-center">
            <span className="font-head text-xs font-bold uppercase tracking-[0.17em] text-lime-300">
              Why clients trust us
            </span>

            <h2 className="mt-4 font-head text-3xl font-bold text-white md:text-5xl">
              Credentials that mean business
            </h2>
          </Reveal>
        )}

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {TRUST_BADGES.map((b, i) => {
            const Ico = Icon[b.icon] || Icon.checkCircle;

            return (
              <Reveal key={b.label} delay={i * 70}>
                <div className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.05] p-5 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.08]">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-lime-500 text-slate-950">
                    <Ico width={20} height={20} />
                  </span>

                  <span className="font-head text-sm font-bold text-white">
                    {b.label}
                  </span>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   WINDOW GRAPHICS / COVERAGE
========================================================= */

export function WindowGraphics() {
  return (
    <section className="relative overflow-hidden bg-[#f5f8f8] py-20 md:py-28">
      <div className="pointer-events-none absolute -right-40 top-0 h-96 w-96 rounded-full bg-teal/5 blur-3xl" />

      <div className="relative mx-auto max-w-container px-5 md:px-8">
        <Reveal className="mx-auto mb-14 max-w-2xl text-center">
          <span className="inline-flex rounded-full bg-teal/5 px-4 py-2 font-head text-xs font-bold uppercase tracking-[0.17em] text-teal">
            Our Coverage
          </span>

          <h2 className="mt-5 font-head text-3xl font-bold tracking-tight text-ink md:text-5xl">
            Complete pest protection{" "}
            <span className="text-teal">under one shield</span>
          </h2>

          <p className="mt-4 text-base leading-7 text-muted md:text-lg">
            Premium, icon-led programmes covering every common threat to your
            home, office or facility.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {WINDOW_GRAPHICS.map((w, i) => {
            const Ico = Icon[w.icon];

            return (
              <Reveal key={w.title} delay={i * 55}>
                <div className="group relative h-full overflow-hidden rounded-[24px] border border-slate-200/80 bg-white p-6 text-center shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-teal/20 hover:shadow-[0_20px_50px_rgba(15,23,42,0.10)]">
                  <span className="absolute right-3 top-2 font-head text-5xl font-black text-slate-100 transition-colors group-hover:text-teal/5">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div className="relative mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-teal/5 text-teal transition-all duration-300 group-hover:bg-teal group-hover:text-white">
                    <Ico width={28} height={28} />
                  </div>

                  <h4 className="relative mt-5 font-head text-sm font-bold text-ink md:text-base">
                    {w.title}
                  </h4>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   CTA BAND
========================================================= */

export function CtaBand({
  title = "Ready to secure your space?",
  text = "Get a free site inspection and a no-obligation quote from our government-licensed team. Same-day response on all enquiries.",
}) {
  return (
    <section className="relative overflow-hidden bg-white py-10 md:py-14">
      <div className="mx-auto max-w-container px-5 md:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[30px] bg-[#092f31] px-6 py-10 shadow-[0_25px_70px_rgba(15,47,49,0.18)] md:px-12 md:py-14">
            {/* Glow */}
            <div className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-teal/40 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-lime-500/10 blur-3xl" />

            <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
              <div className="max-w-2xl">
                <span className="inline-flex rounded-full border border-lime-300/20 bg-lime-300/10 px-4 py-2 font-head text-[10px] font-bold uppercase tracking-[0.17em] text-lime-300">
                  Free inspection
                </span>

                <h2 className="mt-5 font-head text-3xl font-bold tracking-tight text-white md:text-4xl">
                  {title}
                </h2>

                <p className="mt-3 text-sm leading-6 text-[#c7dddd] md:text-base">
                  {text}
                </p>
              </div>

              <div className="flex w-full shrink-0 flex-col gap-3 sm:flex-row lg:w-auto lg:flex-col xl:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-lime-500 px-6 py-3.5 font-head text-sm font-bold text-slate-950 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-lime-400"
                >
                  <Icon.mail width={17} height={17} />
                  Book Free Inspection
                </Link>

                <a
                  href={`tel:${COMPANY.phone}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 font-head text-sm font-bold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
                >
                  <Icon.phone width={17} height={17} />
                  Call {COMPANY.phone}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}