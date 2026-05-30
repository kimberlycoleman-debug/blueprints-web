import BlueprintsLayout from "@/components/blueprints/Layout";
import { BPCard } from "@/components/blueprints/ui/Card";
import { BPButton } from "@/components/blueprints/ui/Button";

export default function BlueprintsHome() {
  return (
    <BlueprintsLayout>
      <main style={{ maxWidth: "900px", margin: "0 auto", padding: "4rem 2rem" }}>
        <p className="bp-eyebrow" style={{ marginBottom: "1rem" }}>
          Blueprints Foundation App
        </p>
        <h1 className="bp-h1" style={{ marginBottom: "1rem" }}>
          Build with clarity.
          <br />
          Grow with structure.
        </h1>
        <p className="bp-muted" style={{ fontSize: "1.1rem", marginBottom: "2.5rem" }}>
          Blueprints is your guided, formation-first pathway into the Solavian ecosystem.
        </p>
      </main>

      <section
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "0 2rem 4rem",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "1.5rem",
        }}
      >
        <BPCard eyebrow="Get started" title="Start a Blueprint">
          <p className="bp-muted" style={{ fontSize: "0.9rem", marginBottom: "1.25rem" }}>
            A structured, step-by-step foundation builder designed for clarity and momentum.
          </p>
          <BPButton>Start Blueprint</BPButton>
        </BPCard>

        <BPCard eyebrow="Learn more" title="About Blueprints">
          <p className="bp-muted" style={{ fontSize: "0.9rem" }}>
            A public-facing formation tool that helps individuals and institutions build with
            intention, identity, and long-horizon clarity.
          </p>
        </BPCard>
      </section>
    </BlueprintsLayout>
  );
}
