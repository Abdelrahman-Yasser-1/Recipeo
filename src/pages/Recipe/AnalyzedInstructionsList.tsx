import { PiListNumbersBold } from "react-icons/pi";
import { Section } from "../../components";
import React from "react";
import { AnalyzedInstruction } from "../../core/Api/entities/Helpers";
import Balancer from "react-wrap-balancer";

interface AnalyzedInstructionsListProps {
  analyzedInstructions: AnalyzedInstruction[];
}

export default React.memo((props: AnalyzedInstructionsListProps) => {
  const { analyzedInstructions } = props;
  return (
    <Section
    icon={<PiListNumbersBold size={20} />}
    title="Steps"
    subtitle={"Let's follow the steps for cooking it"}
  >
    {analyzedInstructions?.map(
      (instruction: AnalyzedInstruction) =>
        instruction.steps.map((step: any) => (
          <div
            key={step.number}
            className="rounded-lg border p-2 flex items-center gap-2 mb-2"
          >
            <div className="border-e aspect-square w-8 flex items-center justify-center">
              <span className="font-semibold">{step.number}</span>
            </div>
            <Balancer>{step.step}</Balancer>
          </div>
        ))
    )}
  </Section>
  );
});
