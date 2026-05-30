import BlueprintsLayout from "@/components/blueprints/Layout";

export default function BlueprintsLearn() {
  return (
    <BlueprintsLayout>
      <main style={{ maxWidth: "900px", margin: "0 auto", padding: "4rem 2rem" }}>
        <p className="bp-eyebrow" style={{ marginBottom: "1rem" }}>Learn</p>
        <h1 className="bp-h1" style={{ marginBottom: "1rem" }}>About Blueprints</h1>
        <p className="bp-muted">Coming soon.</p>
      </main>
    </BlueprintsLayout>
  );
}
