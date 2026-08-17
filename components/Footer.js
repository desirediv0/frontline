import Link from "next/link";
import Image from "next/image";
import {
  NAV,
  COMPANY,
  SERVICE_PREVIEW,
} from "./siteData";
import { Icon } from "./Icons";

export default function Footer() {
  const whatsappLink = `https://wa.me/${COMPANY.whatsapp}`;

  return (
    <footer className="relative overflow-hidden bg-[#061f21] text-white">
      {/* =====================================================
          BACKGROUND GLOW
      ====================================================== */}
      <div className="pointer-events-none absolute -left-40 top-0 h-[450px] w-[450px] rounded-full bg-teal/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 right-0 h-[450px] w-[450px] rounded-full bg-lime-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-container px-5 md:px-8">


        {/* =================================================
            MAIN FOOTER
        ================================================== */}
        <div className="grid grid-cols-1 gap-12 py-14 md:grid-cols-2 lg:grid-cols-[1.4fr_0.7fr_0.9fr_1.1fr] lg:gap-10 lg:py-16">
          {/* BRAND */}
          <div>
            <Link
              href="/"
              className="inline-flex rounded-xl bg-white px-4 py-2 transition-transform duration-300 hover:scale-[1.02]"
            >
              <Image
                src="/frontline-logo.png"
                alt="Frontline Pest Control"
                width={400}
                height={120}
                className="h-[68px] w-auto object-contain md:h-[76px]"
              />
            </Link>

            <p className="mt-5 max-w-sm font-head text-sm font-semibold text-lime-300">
              {COMPANY.tagline}
            </p>

            <p className="mt-4 max-w-md text-sm leading-7 text-[#9fbcbc]">
              Frontline Pest Control delivers safe, government-licensed pest
              management for residential, commercial and industrial clients —
              protecting people, property and business.
            </p>

            {/* Trust pills */}
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "Government Licensed",
                "GST Registered",
                "Eco-Friendly IPM",
              ].map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[10px] font-semibold text-[#bdd2d2]"
                >
                  <Icon.checkCircle
                    width={13}
                    height={13}
                    className="text-lime-300"
                  />
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* COMPANY */}
          <div>
            <h3 className="font-head text-sm font-bold uppercase tracking-[0.14em] text-white">
              Company
            </h3>

            <div className="mt-4 h-1 w-8 rounded-full bg-lime-500" />

            <ul className="mt-6 space-y-1">
              {NAV.map((n) => (
                <li key={n.href}>
                  <Link
                    href={n.href}
                    className="group flex items-center gap-2 rounded-lg py-2 text-sm text-[#9fbcbc] transition-all duration-200 hover:pl-1 hover:text-white"
                  >
                    <Icon.arrow
                      width={12}
                      height={12}
                      className="text-teal opacity-0 transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-100"
                    />
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="font-head text-sm font-bold uppercase tracking-[0.14em] text-white">
              Services
            </h3>

            <div className="mt-4 h-1 w-8 rounded-full bg-lime-500" />

            <ul className="mt-6 space-y-1">
              {SERVICE_PREVIEW.slice(0, 6).map((s) => {
                const Ico = Icon[s.icon];

                return (
                  <li key={s.name}>
                    <Link
                      href="/services"
                      className="group flex items-center gap-2.5 rounded-lg py-2 text-sm text-[#9fbcbc] transition-all duration-200 hover:pl-1 hover:text-white"
                    >
                      <span className="grid h-6 w-6 shrink-0 place-items-center rounded-md bg-white/5 text-teal transition-colors group-hover:bg-teal group-hover:text-white">
                        <Ico width={12} height={12} />
                      </span>

                      <span>{s.name}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>

            <Link
              href="/services"
              className="mt-5 inline-flex items-center gap-2 font-head text-xs font-bold text-lime-300 transition-colors hover:text-lime-200"
            >
              View all services
              <Icon.arrow width={13} height={13} />
            </Link>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="font-head text-sm font-bold uppercase tracking-[0.14em] text-white">
              Get in Touch
            </h3>

            <div className="mt-4 h-1 w-8 rounded-full bg-lime-500" />

            <div className="mt-6 space-y-4">
              {/* Address */}
              <a
                href={COMPANY.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3"
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-white/5 text-teal transition-colors group-hover:bg-teal group-hover:text-white">
                  <Icon.pin width={17} height={17} />
                </span>

                <span className="pt-1 text-sm leading-6 text-[#9fbcbc] transition-colors group-hover:text-white">
                  {COMPANY.address}
                </span>
              </a>

              {/* Phones */}
              {COMPANY.phones.map((p) => (
                <a
                  key={p.tel}
                  href={`tel:${p.tel}`}
                  className="group flex items-center gap-3"
                >
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-white/5 text-teal transition-colors group-hover:bg-teal group-hover:text-white">
                    <Icon.phone width={17} height={17} />
                  </span>

                  <span className="text-sm text-[#9fbcbc] transition-colors group-hover:text-white">
                    {p.number}
                    {p.label !== "Mobile" && (
                      <span className="text-[#6f9999]">
                        {" "}
                        · {p.label}
                      </span>
                    )}
                  </span>
                </a>
              ))}

              {/* WhatsApp */}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3"
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-white/5 text-teal transition-colors group-hover:bg-lime-500 group-hover:text-slate-950">
                  <Icon.whatsapp width={18} height={18} />
                </span>

                <span className="text-sm font-semibold text-[#9fbcbc] transition-colors group-hover:text-white">
                  WhatsApp us
                </span>
              </a>

              {/* Emails */}
              {COMPANY.emails.map((e) => (
                <a
                  key={e}
                  href={`mailto:${e}`}
                  className="group flex items-center gap-3"
                >
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-white/5 text-teal transition-colors group-hover:bg-teal group-hover:text-white">
                    <Icon.mail width={17} height={17} />
                  </span>

                  <span className="break-all text-sm text-[#9fbcbc] transition-colors group-hover:text-white">
                    {e}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* =================================================
            BOTTOM BAR
        ================================================== */}
        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col gap-4 text-xs text-[#6f9999] md:flex-row md:items-center md:justify-between">
            <span>
              © {new Date().getFullYear()} Frontline Pest Control. All rights
              reserved.
            </span>

            <div className="flex flex-wrap gap-x-4 gap-y-2">
              <span className="inline-flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-lime-400" />
                Government Licensed
              </span>

              <span className="hidden text-white/20 sm:inline">·</span>

              <span>GST Registered</span>

              <span className="hidden text-white/20 sm:inline">·</span>

              <span>Eco-Friendly IPM</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}