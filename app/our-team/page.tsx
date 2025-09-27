// app/our-team/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Mail, Linkedin, Globe } from "lucide-react";

// ---------- page meta ----------
export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the team behind Samawada. We partner with communities to expand clean water access and the opportunity it unlocks.",
};

// ---------- types ----------
type TeamMember = {
  name: string;
  role: string;
  bio?: string;
  image?: string; // path in /public or full URL
  email?: string;
  linkedin?: string;
  website?: string;
};

// ---------- data (edit freely) ----------
const leadership: TeamMember[] = [
  {
    name: "Ayan Dualeh",
    role: "Founder and President",
    bio:
      "CEO of Digital Connections Inc., founder of the Harmony Iftar Dinner and Women’s Power Lunch, and mentor through Gateways to Success, empowering youth and women in Ottawa.",
    image: "/team/ayan.jpg",
    email: "info@samawada.org",
    linkedin: "https://www.linkedin.com",
  },
  {
    name: "Alan Riddel",
    role: "Vise President",
    bio:
      "Partner at Soloway Wright LLP, expert in employment, administrative, and human rights law, with work cited by the Supreme Court of Canada. Passionate cross-country skier, canoeist, and outdoor enthusiast.",
    image: "/team/alan.jpg",
    linkedin: "https://www.linkedin.com",
  },
  {
    name: "Blandine Stringer",
    role: "Treasurer",
    bio:
      "Human resources specialist with experience at Health Canada and PHAC, and former manager in international development. Active board member in interfaith and women’s organizations.",
    image: "/team/blandine.jpg",
    linkedin: "https://www.linkedin.com",
  },
  {
    name: "Fatima Suleiman",
    role: "Communication",
    bio:
      "Law student with experience in legal research, policy, and advocacy, committed to social justice and international development.",
    image: "/team/fatima.jpg",
    linkedin: "https://www.linkedin.com",
  },
  {
    name: "Anisa Shafea",
    role: "Secretary",
    bio:
      "Regulatory Business Coordinator at Environment and Climate Change Canada, Public Service Award of Excellence recipient, and dedicated Samawada Board member.",
    image: "/team/anisa.jpg",
    linkedin: "https://www.linkedin.com",
  },
];

// ---------- components ----------
function SocialIcon({
  label,
  href,
  children,
}: {
  label: string;
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      aria-label={label}
      className="inline-flex h-9 w-9 items-center justify-center border border-border text-foreground/80 hover:text-primary hover:border-primary/60 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded-none"
    >
      {children}
    </a>
  );
}

function TeamCard({ m }: { m: TeamMember }) {
  return (
    <article
      className="group overflow-hidden border border-border bg-card shadow-sm transition hover:-translate-y-1 hover:shadow-lg rounded-none"
    >
      {/* Top accent */}
      <div className="h-[3px] w-full bg-gradient-to-r from-primary via-emerald-400 to-primary" />

      {/* Image (consistent aspect for a neat grid) */}
      <div className="relative aspect-[4/3] w-full bg-muted">
        <Image
          src={m.image ?? "/team/placeholder.jpg"}
          alt={m.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
          priority={false}
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="mb-2 flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold leading-tight">{m.name}</h3>
        </div>

        {/* Role pill (square) */}
        <div className="mb-3">
          <span className="inline-block border border-border px-2 py-1 text-xs font-medium text-muted-foreground tracking-wide uppercase rounded-none">
            {m.role}
          </span>
        </div>

        {m.bio && (
          <p className="text-sm text-muted-foreground">
            {m.bio}
          </p>
        )}

        {/* socials */}
        {(m.email || m.linkedin || m.website) && (
          <div className="mt-4 flex items-center gap-2">
            {m.email && (
              <SocialIcon label={`Email ${m.name}`} href={`mailto:${m.email}`}>
                <Mail className="h-4 w-4" />
              </SocialIcon>
            )}
            {m.linkedin && (
              <SocialIcon label={`LinkedIn — ${m.name}`} href={m.linkedin}>
                <Linkedin className="h-4 w-4" />
              </SocialIcon>
            )}
            {m.website && (
              <SocialIcon label={`Website — ${m.name}`} href={m.website}>
                <Globe className="h-4 w-4" />
              </SocialIcon>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

function Section({
  title,
  subtitle,
  people,
}: {
  title?: string;
  subtitle?: string;
  people: TeamMember[];
}) {
  return (
    <section className="mt-14">
      {(title || subtitle) && (
        <div className="mb-6 text-center">
          {title && <h2 className="text-2xl font-bold">{title}</h2>}
          {subtitle && <p className="mt-1 text-muted-foreground">{subtitle}</p>}
        </div>
      )}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {people.map((m) => (
          <TeamCard key={m.name} m={m} />
        ))}
      </div>
    </section>
  );
}

// ---------- page ----------
export default function TeamPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Header */}
      <div className="mx-auto max-w-3xl text-center">
        <span className="text-xs tracking-widest text-primary/80 btn-caps">
          WHO WE ARE
        </span>
        <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight">
          Meet the Team
        </h1>
        <p className="mt-3 text-muted-foreground">
          We’re a small, committed team working alongside local partners to
          build and maintain clean water systems, strengthen sanitation, and
          grow resilient communities.
        </p>
      </div>

      {/* Leadership */}
      <Section people={leadership} />

      {/* CTA */}
      <div className="mt-16 border border-border bg-card/60 p-6 text-center rounded-none">
        <h3 className="text-xl font-semibold">Want to support the mission?</h3>
        <p className="mt-2 text-muted-foreground">
          We collaborate with engineers, health practitioners, educators, and
          community organizers.
        </p>
        <div className="mt-4 flex items-center justify-center gap-3">
          <Link
            href="/#contact"
            className="btn-caps inline-flex items-center bg-primary px-5 py-2.5 text-primary-foreground
                       font-semibold tracking-wide hover:bg-primary/90 focus-visible:outline-none
                       focus-visible:ring-2 focus-visible:ring-primary/50 rounded-none"
          >
            Get in touch
          </Link>
          <Link
            href="/#donate"
            className="btn-caps inline-flex items-center border border-primary/40 px-5 py-2.5
                       text-foreground font-semibold tracking-wide hover:border-primary/70
                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded-none"
          >
            Donate
          </Link>
        </div>
      </div>
    </div>
  );
}
