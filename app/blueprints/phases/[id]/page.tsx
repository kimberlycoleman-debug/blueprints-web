import BlueprintsLayout from "@/components/blueprints/Layout";
import PhaseNav from "@/components/blueprints/phases/PhaseNav";
import { PhaseSection } from "@/components/blueprints/phases/PhaseSection";
import CompletePhaseButton from "@/components/blueprints/phases/CompletePhaseButton";
import "@/styles/blueprints.css";

type PhaseId = 1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20;

const PHASES: Record<PhaseId, { title: string; sections: { title: string; body: string }[] }> = {
  1: { title: "Identity", sections: [
    { title: "Mission & Authority", body: "Define the foundational mission, mandate, and authority alignment of your institution." },
    { title: "Core Values", body: "Establish the values that shape culture, behavior, and decision-making." },
  ]},
  2: { title: "Governance", sections: [
    { title: "Leadership Structure", body: "Clarify roles, responsibilities, and decision-making flow." },
    { title: "Accountability Systems", body: "Define oversight, reporting, and internal review processes." },
  ]},
  3: { title: "Formation", sections: [
    { title: "Training Pathways", body: "Develop discipleship, development, and internal growth systems." },
    { title: "Skill Development", body: "Identify competencies and training modules for your teams." },
  ]},
  4: { title: "Witness", sections: [
    { title: "Public Presence", body: "Define communication, outreach, and institutional representation." },
    { title: "Community Engagement", body: "Establish how your institution interacts with and serves the community." },
  ]},
  5: { title: "Culture", sections: [
    { title: "Institutional Culture", body: "Define the lived culture — norms, rhythms, and shared language of your institution." },
    { title: "Culture Carriers", body: "Identify who models and reinforces culture across your teams." },
  ]},
  6: { title: "Communication", sections: [
    { title: "Internal Messaging", body: "Establish how information flows through your institution." },
    { title: "External Messaging", body: "Define tone, channels, and cadence for public communication." },
  ]},
  7: { title: "Finances", sections: [
    { title: "Financial Foundations", body: "Establish stewardship practices, budgeting frameworks, and accountability." },
    { title: "Revenue & Sustainability", body: "Map revenue streams and long-term financial sustainability." },
  ]},
  8: { title: "Operations", sections: [
    { title: "Systems & Workflows", body: "Document and optimize core operational systems." },
    { title: "Tools & Technology", body: "Evaluate and align digital tools to institutional needs." },
  ]},
  9: { title: "People", sections: [
    { title: "Recruitment & Onboarding", body: "Build processes for attracting and integrating aligned people." },
    { title: "Retention & Development", body: "Invest in people through growth pathways and appreciation." },
  ]},
  10: { title: "Strategy", sections: [
    { title: "Strategic Planning", body: "Define 1, 3, and 5-year institutional goals and milestones." },
    { title: "Execution Framework", body: "Build the operational plan to achieve strategic goals." },
  ]},
  11: { title: "Partnerships", sections: [
    { title: "Strategic Alliances", body: "Identify organizations and leaders to partner with for shared mission." },
    { title: "Covenant Relationships", body: "Establish formal partnership agreements and accountability structures." },
  ]},
  12: { title: "Discipleship", sections: [
    { title: "Individual Formation", body: "Design personal discipleship tracks for individuals within the institution." },
    { title: "Collective Formation", body: "Build group-based formation practices across your community." },
  ]},
  13: { title: "Prayer", sections: [
    { title: "Prayer Culture", body: "Cultivate an institutional culture of prayer and intercession." },
    { title: "Prayer Infrastructure", body: "Build structures that sustain consistent intercession and spiritual covering." },
  ]},
  14: { title: "Legacy", sections: [
    { title: "Succession Planning", body: "Prepare the next generation of leaders for institutional continuity." },
    { title: "Institutional Memory", body: "Capture and transmit the story, learnings, and heritage of your institution." },
  ]},
  15: { title: "Justice", sections: [
    { title: "Justice Framework", body: "Define your institution's posture and commitments on justice." },
    { title: "Community Impact", body: "Build measurable programs for community restoration and advocacy." },
  ]},
  16: { title: "Health", sections: [
    { title: "Leadership Health", body: "Assess and protect the spiritual, emotional, and physical health of leaders." },
    { title: "Organizational Health", body: "Evaluate team dynamics, conflict patterns, and collective wellbeing." },
  ]},
  17: { title: "Innovation", sections: [
    { title: "Adaptive Systems", body: "Build capacity for your institution to learn, adapt, and innovate." },
    { title: "Emerging Opportunities", body: "Identify and evaluate new opportunities aligned with mission." },
  ]},
  18: { title: "Education", sections: [
    { title: "Learning Architecture", body: "Design formal and informal learning structures across the institution." },
    { title: "Curriculum & Content", body: "Develop or curate content that forms and equips your people." },
  ]},
  19: { title: "Worship", sections: [
    { title: "Worship Culture", body: "Establish the role of worship in the life and rhythms of your institution." },
    { title: "Creative Expression", body: "Nurture artistic and creative gifts in service of worship and witness." },
  ]},
  20: { title: "Completion", sections: [
    { title: "Blueprint Review", body: "Audit all 20 phases and assess completion and next steps." },
    { title: "Commissioning", body: "Formally commission your institution to walk out its Blueprint with accountability." },
  ]},
};

export function generateStaticParams() {
  return Array.from({ length: 20 }, (_, i) => ({ id: String(i + 1) }));
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
