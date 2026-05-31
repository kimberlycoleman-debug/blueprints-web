import BlueprintsLayout from "@/components/blueprints/Layout";
import PhaseNav from "@/components/blueprints/phases/PhaseNav";
import { PhaseSection } from "@/components/blueprints/phases/PhaseSection";
import CompletePhaseButton from "@/components/blueprints/phases/CompletePhaseButton";
import "@/styles/blueprints.css";

type PhaseId = 1 | 2 | 3 | 4;

const PHASES: Record<PhaseId, { title: string; sections: { title: string; body: string }[] }> = {
  1: {
    title: "Identity",
    sections: [
      {
        title: "Mission & Authority",
        body: "Define the foundational mission, mandate, and authority alignment of your institution.",
      },
      {
        title: "Core Values",
        body: "Establish the values that shape culture, behavior, and decision-making.",
      },
    ],
  },
  2: {
    title: "Governance",
    sections: [
      {
        title: "Leadership Structure",
        body: "Clarify roles, responsibilities, and decision-making flow.",
      },
      {
        title: "Accountability Systems",
        body: "Define oversight, reporting, and internal review processes.",
      },
    ],
  },
  3: {
    title: "Formation",
    sections: [
      {
        title: "Training Pathways",
        body: "Develop discipleship, development, and internal growth systems.",
      },
      {
        title: "Skill Development",
        body: "Identify competencies and training modules for your teams.",
      },
    ],
  },
  4: {
    title: "Witness",
    sections: [
      {
        title: "Public Presence",
        body: "Define communication, outreach, and institutional representation.",
      },
      {
        title: "Community Engagement",
        body: "Establish how your institution interacts with and serves the community.",
      },
    ],
  },
};

export function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }, { id: "4" }];
}

export default async function PhasePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id: idStr } = await params;
  const id = Number(idStr) as PhaseId;
  const phase = PHASES[id];

  if (!phase) {
    return (
      <BlueprintsLayout>
        <div className="text-center py-20">
          <h1 className="bp-h1 mb-4">Phase Not Found</h1>
          <p className="bp-muted">Invalid phase number.</p>
        </div>
      </BlueprintsLayout>
    );
  }

  return (
    <BlueprintsLayout>
      <div className="max-w-3xl mx-auto">

        <h1 className="bp-h1 mb-4">Phase {id}: {phase.title}</h1>
        <p className="bp-muted mb-10 max-w-xl">
          Complete each section to advance your Blueprint.
        </p>

        <PhaseNav current={id} />

        {phase.sections.map((s, index) => (
          <PhaseSection key={index} title={s.title}>
            <p>{s.body}</p>
          </PhaseSection>
        ))}

        <CompletePhaseButton phase={id} />

      </div>
    </BlueprintsLayout>
  );
}
