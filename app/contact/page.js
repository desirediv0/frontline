import Link from "next/link";
import { Icon } from "@/components/Icons";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import CoverImage from "@/components/CoverImage";
import { PageHero } from "@/components/Sections";
import { COMPANY } from "@/components/siteData";

export const metadata = {
  title: "Contact Us",
  description:
    "Contact Frontline Pest Control. Call 9717008173, WhatsApp us, or email info@frontline.ind.in. Visit our office at M3M Mall, Sector 65, Gurugram.",
};

const waLink = `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(
  "Hi Frontline Pest Control, I'd like a free inspection."
)}`;

const QUICK = [
  {
    icon: "phone",
    lbl: "Call Us",
    val: COMPANY.phone,
    href: `tel:${COMPANY.phone}`,
  },
  {
    icon: "whatsapp",
    lbl: "WhatsApp",
    val: "Chat with us",
    href: waLink,
  },
  {
    icon: "mail",
    lbl: "Email",
    val: COMPANY.email,
    href: `mailto:${COMPANY.email}`,
  },
];

export default function Contact() {
  return (
    <>
      {/* =====================================================
          HERO
      ====================================================== */}
      <PageHero
        img="/images/bg-contact.jpg"
        pos="50% 50%"
        crumb={
          <>
            <Link href="/">Home</Link> / Contact
          </>
        }
        title="Let's talk pest protection"
        intro="Book a free inspection or ask us anything. Call, WhatsApp or email us — our team responds quickly for homes, offices and facilities alike."
        badges={[
          { icon: "phone", label: "Same-day Response" },
          { icon: "pin", label: "M3M Mall, Sector 65, Gurugram" },
        ]}
      />

      {/* =====================================================
          CONTACT MAIN
      ====================================================== */}
      <section className="relative overflow-hidden bg-white py-20 md:py-28">
        {/* Background decoration */}
        <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-teal/5 blur-3xl" />
        <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-lime-500/5 blur-3xl" />

        <div className="relative mx-auto max-w-container px-5 md:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
            {/* =================================================
                LEFT SIDE
            ================================================== */}
            <Reveal>
              <div className="space-y-6">
                {/* Image */}
                <div className="group relative overflow-hidden rounded-[28px] shadow-[0_20px_60px_rgba(15,23,42,0.12)]">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <CoverImage
                      src="/images/storefront.jpg"
                      alt="Frontline Pest Control office storefront"
                      sizes="(max-width: 940px) 100vw, 42vw"
                      position="50% 45%"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />

                    {/* Badge */}
                    <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/20 px-4 py-2 text-xs font-bold text-white backdrop-blur-md">
                      <span className="h-2 w-2 rounded-full bg-lime-400" />
                      Frontline Pest Control
                    </div>

                    {/* Bottom text */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <p className="font-head text-sm font-medium text-white/75">
                        Visit our office
                      </p>
                      <h3 className="mt-1 font-head text-xl font-bold text-white md:text-2xl">
                        M3M Mall, Sector 65, Gurugram
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Information card */}
                <div className="relative overflow-hidden rounded-[28px] bg-[#092f31] p-7 shadow-[0_20px_60px_rgba(4,47,48,0.15)] md:p-8">
                  {/* Decorative circle */}
                  <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-teal/30 blur-3xl" />

                  <div className="relative">
                    <div className="mb-7">
                      <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1.5 font-head text-[10px] font-bold uppercase tracking-[0.18em] text-lime-300">
                        Get in touch
                      </span>

                      <h3 className="mt-4 font-head text-2xl font-bold text-white">
                        Frontline Pest Control
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-[#cfe6e6]">
                        Reach us through any of the channels below — we're here
                        to help.
                      </p>
                    </div>

                    <div className="space-y-5">
                      {/* Address */}
                      <div className="group flex gap-4">
                        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/10 text-lime-300 transition-colors duration-300 group-hover:bg-lime-500 group-hover:text-white">
                          <Icon.pin width={20} height={20} />
                        </span>

                        <div className="min-w-0">
                          <div className="mb-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[#8fb7b7]">
                            Address
                          </div>

                          <a
                            href={COMPANY.mapsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm leading-6 text-white transition-colors hover:text-lime-300"
                          >
                            {COMPANY.address}
                          </a>
                        </div>
                      </div>

                      {/* Phone */}
                      <div className="group flex gap-4">
                        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/10 text-lime-300 transition-colors duration-300 group-hover:bg-lime-500 group-hover:text-white">
                          <Icon.phone width={20} height={20} />
                        </span>

                        <div className="min-w-0">
                          <div className="mb-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[#8fb7b7]">
                            Phone
                          </div>

                          <div className="space-y-1">
                            {COMPANY.phones.map((p) => (
                              <a
                                key={p.tel}
                                href={`tel:${p.tel}`}
                                className="block text-sm text-white transition-colors hover:text-lime-300"
                              >
                                {p.number}

                                {p.label !== "Mobile" && (
                                  <span className="text-[#8fb7b7]">
                                    {" "}
                                    · {p.label}
                                  </span>
                                )}
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* WhatsApp */}
                      <div className="group flex gap-4">
                        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/10 text-lime-300 transition-colors duration-300 group-hover:bg-lime-500 group-hover:text-white">
                          <Icon.whatsapp width={20} height={20} />
                        </span>

                        <div>
                          <div className="mb-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[#8fb7b7]">
                            WhatsApp
                          </div>

                          <a
                            href={waLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-white transition-colors hover:text-lime-300"
                          >
                            Message us on WhatsApp
                          </a>
                        </div>
                      </div>

                      {/* Email */}
                      <div className="group flex gap-4">
                        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/10 text-lime-300 transition-colors duration-300 group-hover:bg-lime-500 group-hover:text-white">
                          <Icon.mail width={20} height={20} />
                        </span>

                        <div className="min-w-0">
                          <div className="mb-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[#8fb7b7]">
                            Email
                          </div>

                          <div className="space-y-1">
                            {COMPANY.emails.map((e) => (
                              <a
                                key={e}
                                href={`mailto:${e}`}
                                className="block break-all text-sm text-white transition-colors hover:text-lime-300"
                              >
                                {e}
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Availability */}
                      <div className="group flex gap-4">
                        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/10 text-lime-300 transition-colors duration-300 group-hover:bg-lime-500 group-hover:text-white">
                          <Icon.clock width={20} height={20} />
                        </span>

                        <div>
                          <div className="mb-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[#8fb7b7]">
                            Availability
                          </div>

                          <span className="text-sm text-white">
                            Mon–Sun · Fast response
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Buttons */}
                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                      <a
                        href={`tel:${COMPANY.phone}`}
                        className="group inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-lime-500 px-5 py-3.5 font-head text-sm font-bold text-slate-950 shadow-lg shadow-lime-500/10 transition-all duration-300 hover:-translate-y-1 hover:bg-lime-400"
                      >
                        <Icon.phone width={17} height={17} />
                        Call Now
                        <Icon.arrow
                          width={14}
                          height={14}
                          className="transition-transform group-hover:translate-x-1"
                        />
                      </a>

                      <a
                        href={waLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-3.5 font-head text-sm font-bold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/40 hover:bg-white/10"
                      >
                        <Icon.whatsapp width={17} height={17} />
                        WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* =================================================
                RIGHT SIDE — FORM
            ================================================== */}
            <Reveal delay={120}>
              <div className="relative h-full overflow-hidden rounded-[30px] border border-slate-200/80 bg-white p-6 shadow-[0_20px_70px_rgba(15,23,42,0.08)] md:p-9 lg:p-10">
                {/* Top decoration */}
                <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-teal/5 blur-3xl" />

                <div className="relative">
                  <div className="mb-8">
                    <span className="inline-flex items-center rounded-full bg-teal/5 px-4 py-2 font-head text-[10px] font-bold uppercase tracking-[0.18em] text-teal">
                      Free inspection
                    </span>

                    <h2 className="mt-4 font-head text-3xl font-bold tracking-tight text-ink md:text-4xl">
                      Tell us what you{" "}
                      <span className="text-teal">need help with</span>
                    </h2>

                    <p className="mt-3 max-w-lg text-sm leading-6 text-muted md:text-base">
                      Fill in the details and our team will get back to you
                      quickly with the right pest management solution.
                    </p>
                  </div>

                  {/* Existing form */}
                  <ContactForm />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =====================================================
          QUICK CONTACT
      ====================================================== */}
      <section className="relative overflow-hidden bg-[#f5f8f8] py-16 md:py-20">
        <div className="mx-auto max-w-container px-5 md:px-8">
          <Reveal className="mx-auto mb-10 max-w-2xl text-center">
            <span className="font-head text-xs font-bold uppercase tracking-[0.18em] text-teal">
              Prefer a direct conversation?
            </span>

            <h2 className="mt-3 font-head text-3xl font-bold text-ink md:text-4xl">
              Reach us your way
            </h2>

            <p className="mt-3 text-sm leading-6 text-muted md:text-base">
              Choose the channel that works best for you. Our team is ready to
              assist.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {QUICK.map((q, i) => {
              const Ico = Icon[q.icon];
              const ext = q.href.startsWith("http");

              return (
                <Reveal key={q.lbl} delay={i * 80}>
                  <a
                    href={q.href}
                    {...(ext
                      ? {
                        target: "_blank",
                        rel: "noopener noreferrer",
                      }
                      : {})}
                    className="group relative flex items-center gap-5 overflow-hidden rounded-[24px] border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-400 hover:-translate-y-1.5 hover:border-teal/20 hover:shadow-[0_20px_45px_rgba(15,23,42,0.09)]"
                  >
                    {/* Hover background */}
                    <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-teal/5 blur-2xl transition-all duration-500 group-hover:bg-teal/10" />

                    <div className="relative grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-teal/5 text-teal transition-all duration-300 group-hover:bg-teal group-hover:text-white">
                      <Ico width={25} height={25} />
                    </div>

                    <div className="relative min-w-0 flex-1">
                      <div className="mb-1 text-[10px] font-bold uppercase tracking-[0.16em] text-muted">
                        {q.lbl}
                      </div>

                      <strong className="block truncate font-head text-base font-bold text-ink transition-colors group-hover:text-teal md:text-lg">
                        {q.val}
                      </strong>
                    </div>

                    <span className="relative grid h-9 w-9 shrink-0 place-items-center rounded-full bg-slate-50 text-slate-400 transition-all duration-300 group-hover:bg-teal group-hover:text-white">
                      <Icon.arrow
                        width={15}
                        height={15}
                        className="transition-transform duration-300 group-hover:translate-x-0.5"
                      />
                    </span>
                  </a>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}