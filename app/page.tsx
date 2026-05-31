import Link from "next/link";
import FallbackImage from "@/components/blueprints/ui/FallbackImage";
import "@/styles/blueprints.css";

export default function PublicHomePage() {
  return (
    <div className="min-h-screen bg-[var(--bp-bg)] text-[var(--bp-text)]">

      {/* NAV */}
      <nav className="w-full border-b border-[var(--bp-border)] bg-[var(--bp-surface)]">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <FallbackImage
              src="/blueprints-banner.png"
              className="h-8 w-auto max-w-[140px] object-contain"
            />
            <span className="font-bold tracking-tight hidden sm:block">Blueprints</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-[var(--bp-text-muted)]">
            <a href="#mission" className="hover:text-white transition-colors">Mission</a>
            <a href="#impact" className="hover:text-white transition-colors">Impact</a>
            <a href="#grant" className="hover:text-white transition-colors">For Funders</a>
            <Link href="/blueprints/login" className="hover:text-white transition-colors">Sign In</Link>
            <Link href="/blueprints/signup" className="bg-[var(--bp-accent)] text-[var(--bp-bg)] px-4 py-1.5 rounded-full font-semibold text-sm hover:opacity-90 transition">
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-28 text-center">
        <p className="text-[var(--bp-accent)] text-sm font-semibold tracking-widest uppercase mb-6">
          Blueprints Foundation App
        </p>
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-8">
          Build Your Institution<br />
          <span className="text-[var(--bp-accent)]">Phase by Phase.</span>
        </h1>
        <p className="text-xl text-[var(--bp-text-muted)] max-w-2xl mx-auto mb-12 leading-relaxed">
          A structured 20-phase framework for churches, nonprofits, and mission-driven institutions
          to establish identity, governance, culture, and lasting impact.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/blueprints/signup" className="bg-[var(--bp-accent)] text-[var(--bp-bg)] px-8 py-4 rounded-full font-bold text-lg hover:opacity-90 transition">
            Start Your Blueprint
          </Link>
          <a href="#mission" className="border border-[var(--bp-border)] px-8 py-4 rounded-full font-semibold text-lg hover:border-[var(--bp-accent)] hover:text-white transition">
            Learn More
          </a>
        </div>
      </section>

      {/* MISSION */}
      <section id="mission" className="bg-[var(--bp-surface)] py-24">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[var(--bp-accent)] text-sm font-semibold tracking-widest uppercase mb-4 text-center">Our Mission</p>
          <h2 className="text-4xl font-bold text-center mb-6">Every Institution Deserves a Foundation</h2>
          <p className="text-[var(--bp-text-muted)] text-lg text-center max-w-3xl mx-auto mb-16 leading-relaxed">
            Blueprints equips churches, nonprofits, and social enterprises with a proven framework
            for institutional formation — from mission clarity to financial stewardship to community impact.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "⛪", title: "Churches & Ministries", body: "Navigate governance, discipleship, and community formation with clarity." },
              { icon: "🌱", title: "Nonprofits & Foundations", body: "Build operational systems and stewardship practices that sustain mission." },
              { icon: "🏢", title: "Social Enterprises", body: "Align culture, strategy, and people around values-driven impact." },
            ].map((card) => (
              <div key={card.title} className="bp-card text-center">
                <p className="text-4xl mb-4">{card.icon}</p>
                <h3 className="text-xl font-bold mb-3">{card.title}</h3>
                <p className="text-[var(--bp-text-muted)] text-sm leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMPACT */}
      <section id="impact" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[var(--bp-accent)] text-sm font-semibold tracking-widest uppercase mb-4 text-center">Impact</p>
          <h2 className="text-4xl font-bold text-center mb-16">Institutions Built to Last</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h3 className="text-2xl font-bold mb-4">20 Phases. One Complete Institution.</h3>
              <p className="text-[var(--bp-text-muted)] leading-relaxed mb-6">
                From Identity and Governance to Worship and Legacy, the Blueprints framework walks institutions
                through every dimension of formation — not just operations, but culture, prayer, justice, and succession.
              </p>
              <p className="text-[var(--bp-text-muted)] leading-relaxed">
                Each phase builds on the last, creating a living record of your institution&apos;s development
                that grows with you over years — not just quarters.
              </p>
            </div>
            <div className="grid grid-cols-5 gap-3">
              {Array.from({ length: 20 }, (_, i) => (
                <div key={i} className="aspect-square rounded-lg bg-[var(--bp-surface)] border border-[var(--bp-border)] flex items-center justify-center text-sm font-bold text-[var(--bp-accent)]">
                  {i + 1}
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-3 gap-8 text-center">
            {[
              { num: "20", label: "Formation Phases" },
              { num: "3", label: "Institution Types" },
              { num: "∞", label: "Institutional Generations" },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-5xl font-extrabold text-[var(--bp-accent)] mb-2">{s.num}</p>
                <p className="text-[var(--bp-text-muted)]">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GRANT */}
      <section id="grant" className="bg-[var(--bp-surface)] py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-[var(--bp-accent)] text-sm font-semibold tracking-widest uppercase mb-4">For Funders</p>
          <h2 className="text-4xl font-bold mb-6">Invest in Institutional Formation</h2>
          <p className="text-[var(--bp-text-muted)] text-lg leading-relaxed mb-8">
            Blueprints gives funders transparent, data-driven insight into institutional development.
            Every phase completed is a measurable milestone. Every reflection is a documented narrative.
          </p>
          <p className="text-[var(--bp-text-muted)] leading-relaxed mb-12 max-w-2xl mx-auto">
            We partner with foundations committed to strengthening the civic and faith infrastructure of
            underserved communities — providing the tools, framework, and accountability institutions need.
          </p>
          <a href="mailto:info@solavianinc.com" className="bg-[var(--bp-accent)] text-[var(--bp-bg)] px-8 py-4 rounded-full font-bold text-lg hover:opacity-90 transition inline-block">
            Contact Us About Partnership
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Build?</h2>
          <p className="text-[var(--bp-text-muted)] text-lg mb-10">
            Start your institution&apos;s Blueprint journey today — free, structured, and built to last.
          </p>
          <Link href="/blueprints/signup" className="bg-[var(--bp-accent)] text-[var(--bp-bg)] px-10 py-4 rounded-full font-bold text-xl hover:opacity-90 transition inline-block">
            Begin Your Blueprint
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[var(--bp-border)] py-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-[var(--bp-text-muted)]">
          <p>© {new Date().getFullYear()} Solavian, Inc. — Blueprints Foundation App</p>
          <div className="flex gap-6">
            <Link href="/blueprints" className="hover:text-white transition-colors">App</Link>
            <Link href="/blueprints/login" className="hover:text-white transition-colors">Sign In</Link>
            <a href="mailto:info@solavianinc.com" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
