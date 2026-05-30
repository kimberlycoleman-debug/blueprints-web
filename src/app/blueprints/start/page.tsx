import BlueprintsLayout from "@/components/blueprints/Layout";

export default function BlueprintsStart() {
  return (
    <BlueprintsLayout>
      <main style={{ maxWidth: "900px", margin: "0 auto", padding: "4rem 2rem" }}>
        <p className="bp-eyebrow" style={{ marginBottom: "1rem" }}>Start</p>
        <h1 className="bp-h1" style={{ marginBottom: "1rem" }}>Begin your Blueprint</h1>
        <p className="bp-muted">Coming soon.</p>
      </main>
    </BlueprintsLayout>
  );
}
