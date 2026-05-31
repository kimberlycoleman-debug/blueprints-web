import BlueprintsLayout from "@/components/blueprints/Layout";
import OSSyncClient from "@/components/blueprints/os/OSSyncClient";

export default function OSIntegrationPage() {
  return (
    <BlueprintsLayout>
      <div className="max-w-4xl mx-auto">
        <div className="mb-10">
          <p className="text-[var(--bp-accent)] text-xs font-semibold tracking-widest uppercase mb-3">
            Solavian OS
          </p>
          <h1 className="bp-h1 mb-3">OS Integration Layer</h1>
          <p className="bp-muted max-w-2xl">
            Sync your Blueprint journey into the Solavian OS — your institutional identity, formation state,
            and growth history become part of the persistent OS identity engine.
          </p>
        </div>

        {/* Architecture Overview */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            { title: "Identity Layer", body: "Every phase, reflection, and decision is anchored to your institutional identity in the OS." },
            { title: "Formation Engine", body: "Longitudinal formation snapshots track how your institution evolves over time." },
            { title: "Sync Bridge", body: "On-demand or event-driven sync between Blueprints and the Solavian OS core." },
          ].map((card) => (
            <div key={card.title} className="bp-card border border-[var(--bp-border)]">
              <h3 className="font-bold mb-2">{card.title}</h3>
              <p className="text-sm text-[var(--bp-text-muted)] leading-relaxed">{card.body}</p>
            </div>
          ))}
        </div>

        <OSSyncClient />
      </div>
    </BlueprintsLayout>
  );
}
