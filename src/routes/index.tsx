import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { BriefcaseBusiness, Github, Linkedin, Mail, MapPin, Palette, Phone } from "lucide-react";
import heroVideo from "@/assets/hero-intro.mp4";
import imgWp from "@/assets/project-wordpress.jpg";
import imgWoo from "@/assets/project-woocommerce.jpg";
import imgSeo from "@/assets/project-seo.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rafique — WordPress, Others CMS & Frontend Web Developer" },
      { name: "description", content: "Rafique builds fast, scalable, SEO-friendly websites with WordPress, CMS platforms and modern frontend. 5+ years experience." },
      { property: "og:title", content: "Rafique — Web Developer" },
      { property: "og:description", content: "Fast, scalable and user-focused websites. WordPress, CMS, frontend, troubleshooting and SEO." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const nav = ["About", "Skills", "Services", "Experience", "Projects", "Contact"];

const stats = [
  ["5+", "Years Experience"],
  ["WP", "WordPress Specialist"],
  ["CMS", "& Frontend"],
  ["SEO", "Friendly Builds"],
  ["Fast", "Performance Focused"],
];

const skills: [string, string[]][] = [
  ["WordPress", ["Elementor", "Gutenberg", "WooCommerce", "ACF", "Crocoblock", "Theme customization", "Plugin customization"]],
  ["Frontend", ["HTML5", "CSS3", "JavaScript", "React", "Tailwind", "Responsive design"]],
  ["Others CMS", ["Shopify", "Squarespace", "Wix", "Kajabi", "Webflow"]],
  ["Troubleshooting", ["Debugging", "Plugin conflicts", "Malware cleanup", "Migrations", "Server errors", "Performance optimization", "Broken Layout Fixes"]],
  ["SEO", ["Technical SEO", "Core Web Vitals", "Schema", "On-page SEO", "Local SEO", "Site speed"]],
];

const services = [
  ["WordPress Development", "Custom themes and sites built to be easy to manage and quick to load."],
  ["Website Design & Redesign", "Clean, modern layouts that make your content and offer clear."],
  ["CMS Website Development", "Responsive, easy-to-manage websites built with leading CMS platforms."],
  ["Website Troubleshooting", "Broken layouts, errors, conflicts and slow pages — found and fixed."],
  ["Frontend Development", "Pixel-accurate, responsive interfaces from your designs."],
  ["SEO & Performance", "Technical SEO and speed work that helps pages rank and convert."],
];

const process = ["Reproduce", "Diagnose", "Isolate", "Fix", "Test", "Optimize"];

const cats = ["All", "WordPress", "WooCommerce", "Elementor", "Frontend", "SEO", "Custom Development"];
const projects = [
  { t: "Corporate WordPress Site", c: "WordPress", img: imgWp, d: "Custom theme with flexible page builder blocks." },
  { t: "Fashion WooCommerce Store", c: "WooCommerce", img: imgWoo, d: "Store rebuild with faster checkout." },
  { t: "SEO & Speed Overhaul", c: "SEO", img: imgSeo, d: "Core Web Vitals moved from red to green." },
  { t: "Agency Landing Pages", c: "Elementor", img: imgWp, d: "Reusable Elementor templates for campaigns." },
  { t: "React Marketing Site", c: "Frontend", img: imgSeo, d: "Responsive frontend from Figma designs." },
  { t: "Booking Plugin", c: "Custom Development", img: imgWoo, d: "Custom plugin for appointment booking." },
];

const experience = [
  ["2025 — Present", "WordPress & Frontend Developer - Roxnor", "Developing, customizing, and troubleshooting WordPress websites with modern frontend technologies."],
  ["2022 — present", "Freelance Web Designer & Developer - Upwork", "Building responsive websites and custom web solutions using WordPress, Shopify, Kajabi, and other CMS platforms."],
  ["2021 — 2025", "Wordpress Developer - Softvence Agency", "Developing and customizing responsive WordPress websites, themes, plugins, and WooCommerce solutions."],
];

const steps = [
  ["Discover", "Understand your goals, audience and requirements."],
  ["Plan", "Define structure, scope, and timeline."],
  ["Build", "Develop with clean, maintainable code."],
  ["Test", "Check across devices, browsers and speed."],
  ["Launch & Support", "Go live and keep things running smoothly."],
];

const why = [
  ["Clear communication", "Regular updates, no jargon, no surprises."],
  ["Clean, maintainable code", "Easy to update and hand over later."],
  ["Performance first", "Fast sites keep visitors and rank better."],
  ["Problem solver", "Methodical debugging, not guesswork."],
];

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/rafique-hasan/", icon: Linkedin },
  { label: "GitHub", href: "https://github.com/Dev-Rafique", icon: Github },
  { label: "Upwork", href: "https://www.upwork.com/freelancers/~0164c3d0401346c8", icon: BriefcaseBusiness },
  { label: "Behance", href: "https://www.behance.net/rafique", icon: Palette },
];

const contactDetails = [
  { label: "Phone", value: "+880 1788040911", href: "tel:+8801788040911", icon: Phone },
  { label: "Email", value: "devrafiquehasan@gmail.com", href: "mailto:devrafiquehasan@gmail.com", icon: Mail },
  { label: "Address", value: "123 Example Street, Dhaka, Bangladesh", href: "https://maps.google.com/?q=123+Example+Street+Dhaka+Bangladesh", icon: MapPin },
];

function Section({ id, eyebrow, title, children, className = "" }: { id?: string; eyebrow: string; title: string; children: React.ReactNode; className?: string }) {
  return (
    <section id={id} className={`scroll-mt-20 border-t border-border py-20 md:py-28 ${className}`}>
      <div className="mx-auto max-w-6xl px-5">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{eyebrow}</p>
        <h2 className="mt-3 max-w-2xl text-3xl font-semibold md:text-4xl">{title}</h2>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}

function Index() {
  const [cat, setCat] = useState("All");
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const shown = cat === "All" ? projects : projects.filter((p) => p.c === cat);
  const submit = (e: FormEvent) => { e.preventDefault(); setSent(true); };

  return (
    <div className="min-h-screen overflow-x-hidden bg-background font-sans text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
          <a href="#" className="font-display text-lg font-semibold">Rafique<span className="text-accent">.</span></a>
          <nav className="hidden gap-7 text-sm text-muted-foreground lg:flex">
            {nav.map((n) => <a key={n} href={`#${n.toLowerCase()}`} className="transition-colors hover:text-foreground">{n}</a>)}
          </nav>
          <a href="#contact" className="hidden rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground lg:inline-block">Let's Work Together</a>
          <button className="lg:hidden text-sm font-medium" onClick={() => setOpen(!open)} aria-label="Menu">{open ? "Close" : "Menu"}</button>
        </div>
        {open && (
          <nav className="flex flex-col gap-4 border-t border-border bg-background px-5 py-5 lg:hidden">
            {nav.map((n) => <a key={n} href={`#${n.toLowerCase()}`} onClick={() => setOpen(false)}>{n}</a>)}
          </nav>
        )}
      </header>

      {/* Hero */}
      <section className="relative flex min-h-[92vh] items-end overflow-hidden">
        <video src={heroVideo} autoPlay muted loop playsInline className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/10" />
        <div className="relative mx-auto w-full max-w-6xl px-5 pb-20 pt-32">
          <p className="text-sm font-medium text-[oklch(0.4_0.18_28.35)]">Hi, I'm Rafique — Web Developer</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-[1.08] md:text-6xl">
            Web Developer Building Fast, Scalable & User-Focused Websites
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            5 years building WordPress and others CMS websites, clean frontends, fixing tricky issues and improving SEO.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground">View My Work</a>
            <a href="#contact" className="rounded-md border border-foreground/20 bg-background/60 px-6 py-3 text-sm font-medium backdrop-blur">Let's Work Together</a>
          </div>
        </div>
      </section>

      <div className="border-y border-border bg-card">
        <div className="mx-auto grid max-w-6xl grid-cols-2 px-5 md:grid-cols-5">
          {stats.map(([a, b]) => (
            <div key={b} className="border-border py-6 md:border-l md:pl-6 first:md:border-l-0 first:md:pl-0">
              <div className="font-display text-2xl font-semibold">{a}</div>
              <div className="text-sm text-muted-foreground">{b}</div>
            </div>
          ))}
        </div>
      </div>

      <Section id="about" eyebrow="About" title="A developer who cares about how websites work- and how they feel.">
        <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-5 text-lg text-muted-foreground">
            <p>
              I'm Rafique, a web developer with around five years of experience building and maintaining
              websites for businesses, agencies and individuals. Most of my work is in WordPress and other CMS platforms.
            </p>
            <p>
              I focus on clean code, reliable performance and search-friendly structure- and I enjoy the
              detective work of fixing broken or slow websites.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <a href="#projects" className="rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground">See My Work</a>
              <a href="https://drive.google.com/file/d/1kKEEyHj0qnUTAbyVeDzivLlpuhAuH1RV/view?usp=sharing" className="rounded-md border border-foreground/15 bg-background px-5 py-2.5 text-sm font-medium">Resume</a>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-[0_24px_70px_-30px_rgba(15,23,42,0.35)]">
            <div className="relative aspect-video overflow-hidden">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/kpeZtAI5uQA?rel=0&modestbranding=1"
                title="Rafique intro video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </Section>

      <Section id="skills" eyebrow="Skills" title="Tools and areas I work with every day.">
        <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-5">
          {skills.map(([h, list]) => (
            <div key={h} className="bg-card p-6">
              <h3 className="font-semibold">{h}</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">{list.map((l) => <li key={l}>{l}</li>)}</ul>
            </div>
          ))}
        </div>
      </Section>

      <Section id="services" eyebrow="Services" title="How I can help your website.">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(([h, d], i) => (
            <div key={h} className="rounded-lg border border-border bg-card p-7 transition-colors hover:border-accent">
              <span className="font-display text-sm text-accent">0{i + 1}</span>
              <h3 className="mt-4 text-lg font-semibold">{h}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Troubleshooting" title="A calm, step-by-step way to fix problems.">
        <ol className="grid gap-5 sm:grid-cols-3 lg:grid-cols-6">
          {process.map((p, i) => (
            <li key={p} className="border-t-2 border-accent pt-4">
              <span className="font-display text-2xl font-semibold text-muted-foreground">0{i + 1}</span>
              <p className="mt-1 font-semibold">{p}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section id="seo" eyebrow="Development + SEO" title="Build Better. Perform Better. Rank Better." className="bg-primary text-primary-foreground [&_h2]:text-primary-foreground">
        <div className="grid gap-8 md:grid-cols-3">
          {[["Build Better", "Semantic, clean markup that search engines and people understand."], ["Perform Better", "Optimized images, caching and Core Web Vitals for speed."], ["Rank Better", "Technical SEO, schema and on-page structure built in from day one."]].map(([h, d]) => (
            <div key={h} className="border-l border-primary-foreground/20 pl-6">
              <h3 className="text-xl font-semibold">{h}</h3>
              <p className="mt-2 text-primary-foreground/70">{d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="projects" eyebrow="Projects" title="Selected work.">
        <div className="mb-8 flex flex-wrap gap-2">
          {cats.map((c) => (
            <button key={c} onClick={() => setCat(c)} className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${cat === c ? "border-primary bg-primary text-primary-foreground" : "border-border hover:border-foreground"}`}>{c}</button>
          ))}
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((p) => (
            <article key={p.t} className="group overflow-hidden rounded-lg border border-border bg-card">
              <div className="aspect-[4/3] overflow-hidden"><img src={p.img} alt={p.t} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" /></div>
              <div className="p-5">
                <p className="text-xs uppercase tracking-wider text-accent">{p.c}</p>
                <h3 className="mt-1 font-semibold">{p.t}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.d}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section id="experience" eyebrow="Experience" title="Where I've been working.">
        <div className="space-y-10 border-l border-border pl-8">
          {experience.map(([y, r, d]) => (
            <div key={r} className="relative">
              <span className="absolute -left-[37px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent" />
              <p className="text-sm text-muted-foreground">{y}</p>
              <h3 className="mt-1 text-lg font-semibold">{r}</h3>
              <p className="mt-1 max-w-2xl text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="How I Work" title="A simple, transparent process.">
        <div className="grid gap-6 md:grid-cols-5">
          {steps.map(([h, d], i) => (
            <div key={h}><span className="text-sm text-accent">Step {i + 1}</span><h3 className="mt-2 font-semibold">{h}</h3><p className="mt-1 text-sm text-muted-foreground">{d}</p></div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Why Work With Me" title="Reliable work, honest communication.">
        <div className="grid gap-5 sm:grid-cols-2">
          {why.map(([h, d]) => (
            <div key={h} className="rounded-lg border border-border bg-card p-6"><h3 className="font-semibold">{h}</h3><p className="mt-1 text-sm text-muted-foreground">{d}</p></div>
          ))}
        </div>
      </Section>

      <Section id="contact" eyebrow="Contact" title="Have a Website Project in Mind?">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground">Tell me a little about your project and I'll get back to you within a day or two.</p>
            <div className="grid gap-3">
              {contactDetails.map(({ label, value, href, icon: Icon }) => (
                <a key={label} href={href} className="flex min-w-0 items-center gap-4 rounded-md border border-border bg-card p-4 transition-colors hover:border-accent">
                  <span className="grid size-10 shrink-0 place-items-center rounded-md border border-border text-accent">
                    <Icon size={18} aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</span>
                    <span className="mt-1 block break-words text-sm font-medium">{value}</span>
                  </span>
                </a>
              ))}
            </div>
            <div className="flex items-center gap-5">
              {socials.map(({ label, href, icon: Icon }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} title={label} className="text-muted-foreground transition-colors hover:text-accent">
                  <Icon size={20} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          {sent ? (
            <p className="rounded-lg border border-accent p-6">Thanks! Your message has been noted — I'll be in touch soon.</p>
          ) : (
            <form onSubmit={submit} className="space-y-4">
              <input required placeholder="Name" className="w-full rounded-md border border-input bg-card px-4 py-3 outline-none focus:border-ring" />
              <input required type="email" placeholder="Email" className="w-full rounded-md border border-input bg-card px-4 py-3 outline-none focus:border-ring" />
              <select className="w-full rounded-md border border-input bg-card px-4 py-3 outline-none focus:border-ring">
                {cats.slice(1).map((c) => <option key={c}>{c}</option>)}<option>Troubleshooting</option>
              </select>
              <textarea required rows={5} placeholder="Message" className="w-full rounded-md border border-input bg-card px-4 py-3 outline-none focus:border-ring" />
              <button className="rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground">Send Message</button>
            </form>
          )}
        </div>
      </Section>

      <footer className="border-t border-border py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 text-sm text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} Rafique. All rights reserved.</p>
          <div className="flex gap-6">
            {socials.map(({ label, href }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" className="transition-colors hover:text-foreground">{label}</a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
