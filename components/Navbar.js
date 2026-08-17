"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NAV, SERVICE_GROUPS } from "./siteData";
import { Icon } from "./Icons";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 shadow-sm backdrop-blur-xl">
      <div className="mx-auto flex h-[82px] max-w-container items-center justify-between px-5 md:h-[92px] md:px-8">
        {/* LOGO */}
        <Link
          href="/"
          aria-label="Frontline Pest Control home"
          className="group flex shrink-0 items-center"
        >
          <Image
            src="/frontline-logo.png"
            alt="Frontline Pest Control"
            width={400}
            height={120}
            priority
            className="
              h-[62px]
              w-auto
              object-contain
              transition-transform
              duration-300
              group-hover:scale-[1.02]
              md:h-[72px]
            "
          />
        </Link>

        {/* DESKTOP NAV */}
        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Primary"
        >
          {NAV.map((n) => {
            const active =
              pathname === n.href ||
              (n.href !== "/" && pathname.startsWith(n.href));

            if (n.href === "/services") {
              return (
                <div
                  key={n.href}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <Link
                    href={n.href}
                    className={`
                      relative flex items-center gap-1.5 rounded-full px-4 py-2.5
                      font-head text-sm font-semibold
                      transition-all duration-300
                      ${active
                        ? "bg-teal/5 text-teal"
                        : "text-slate-600 hover:bg-slate-50 hover:text-teal"
                      }
                    `}
                  >
                    {n.label}
                    <Icon.chevronDown
                      width={14}
                      height={14}
                      className={`transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`}
                    />

                    {active && (
                      <span className="absolute bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-lime-500" />
                    )}
                  </Link>

                  <div
                    className={`
                      absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 pt-3
                      transition-all duration-200
                      ${servicesOpen
                        ? "pointer-events-auto translate-y-0 opacity-100"
                        : "pointer-events-none -translate-y-1 opacity-0"
                      }
                    `}
                  >
                    <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-xl shadow-teal-900/10">
                      <ul className="flex flex-col p-2">
                        {SERVICE_GROUPS.map((grp) => (
                          <li key={grp.group}>
                            <Link
                              href={`/services#${grp.slug}`}
                              className="flex items-center gap-3 rounded-xl px-3 py-2.5 font-head text-sm font-semibold text-slate-600 transition-colors hover:bg-teal/5 hover:text-teal"
                            >
                              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-teal/8 text-teal">
                                {Icon[grp.icon] && (() => { const Ico = Icon[grp.icon]; return <Ico width={16} height={16} />; })()}
                              </span>
                              {grp.group}
                            </Link>
                          </li>
                        ))}
                      </ul>

                      <Link
                        href="/services"
                        className="flex items-center justify-between border-t border-slate-100 bg-slate-50 px-5 py-3 font-head text-sm font-bold text-teal transition-colors hover:bg-teal/5"
                      >
                        View all services
                        <Icon.arrow width={15} height={15} />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={n.href}
                href={n.href}
                className={`
                  relative rounded-full px-4 py-2.5
                  font-head text-sm font-semibold
                  transition-all duration-300
                  ${active
                    ? "bg-teal/5 text-teal"
                    : "text-slate-600 hover:bg-slate-50 hover:text-teal"
                  }
                `}
              >
                {n.label}

                {active && (
                  <span className="absolute bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-lime-500" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* DESKTOP CTA */}
        <Link
          href="/contact"
          className="
            hidden items-center gap-2
            rounded-full bg-teal
            px-5 py-3
            font-head text-sm font-bold text-white
            shadow-lg shadow-teal/20
            transition-all duration-300
            hover:-translate-y-0.5
            hover:bg-teal-700
            hover:shadow-xl
            lg:inline-flex
          "
        >
          <Icon.phone width={17} height={17} />
          Get a Free Quote
        </Link>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          className={`
            relative grid h-11 w-11 place-items-center
            rounded-xl border border-slate-200
            bg-white
            transition-all duration-300
            hover:border-teal/30
            hover:bg-teal/5
            lg:hidden
            ${open ? "border-teal/30 bg-teal/5" : ""}
          `}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="absolute flex flex-col gap-[5px]">
            <span
              className={`
                block h-[2px] w-5 rounded-full bg-slate-700
                transition-all duration-300
                ${open ? "translate-y-[7px] rotate-45" : ""}
              `}
            />

            <span
              className={`
                block h-[2px] w-5 rounded-full bg-slate-700
                transition-all duration-300
                ${open ? "opacity-0" : ""}
              `}
            />

            <span
              className={`
                block h-[2px] w-5 rounded-full bg-slate-700
                transition-all duration-300
                ${open ? "-translate-y-[7px] -rotate-45" : ""}
              `}
            />
          </span>
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`
          overflow-hidden border-t border-slate-100 bg-white
          transition-all duration-300
          lg:hidden
          ${open
            ? "max-h-[500px] opacity-100"
            : "pointer-events-none max-h-0 opacity-0"
          }
        `}
      >
        <div className="mx-auto max-w-container px-5 py-5 md:px-8">
          <nav className="flex flex-col gap-1">
            {NAV.map((n) => {
              const active =
                pathname === n.href ||
                (n.href !== "/" && pathname.startsWith(n.href));

              if (n.href === "/services") {
                return (
                  <div key={n.href}>
                    <div
                      className={`
                        flex items-center justify-between
                        rounded-xl px-4 py-3.5
                        font-head text-sm font-semibold
                        transition-all
                        ${active
                          ? "bg-teal/5 text-teal"
                          : "text-slate-600 hover:bg-slate-50 hover:text-teal"
                        }
                      `}
                    >
                      <Link href={n.href} className="flex-1">
                        {n.label}
                      </Link>

                      <button
                        type="button"
                        aria-label="Toggle services list"
                        aria-expanded={mobileServicesOpen}
                        onClick={() => setMobileServicesOpen((v) => !v)}
                        className="grid h-8 w-8 place-items-center rounded-lg hover:bg-teal/10"
                      >
                        <Icon.chevronDown
                          width={16}
                          height={16}
                          className={`transition-transform duration-300 ${mobileServicesOpen ? "rotate-180" : ""} ${active ? "text-teal" : "text-slate-400"}`}
                        />
                      </button>
                    </div>

                    <div
                      className={`
                        overflow-hidden pl-3
                        transition-all duration-300
                        ${mobileServicesOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
                      `}
                    >
                      <div className="flex flex-col gap-0.5 py-1">
                        {SERVICE_GROUPS.map((grp) => (
                          <Link
                            key={grp.group}
                            href={`/services#${grp.slug}`}
                            className="flex items-center gap-3 rounded-lg px-4 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-teal"
                          >
                            <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-teal/8 text-teal">
                              {Icon[grp.icon] && (() => { const Ico = Icon[grp.icon]; return <Ico width={14} height={14} />; })()}
                            </span>
                            {grp.group}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={n.href}
                  href={n.href}
                  className={`
                    flex items-center justify-between
                    rounded-xl px-4 py-3.5
                    font-head text-sm font-semibold
                    transition-all
                    ${active
                      ? "bg-teal/5 text-teal"
                      : "text-slate-600 hover:bg-slate-50 hover:text-teal"
                    }
                  `}
                >
                  <span>{n.label}</span>

                  <Icon.arrow
                    width={15}
                    height={15}
                    className={active ? "text-teal" : "text-slate-300"}
                  />
                </Link>
              );
            })}
          </nav>

          <Link
            href="/contact"
            className="
              mt-4 flex items-center justify-center gap-2
              rounded-xl bg-teal
              px-5 py-3.5
              font-head text-sm font-bold text-white
              shadow-lg shadow-teal/20
            "
          >
            <Icon.phone width={17} height={17} />
            Get a Free Quote
          </Link>
        </div>
      </div>
    </header>
  );
}