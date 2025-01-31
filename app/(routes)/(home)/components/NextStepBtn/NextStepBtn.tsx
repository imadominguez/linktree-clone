import { Button } from "@/components/ui/button";
import { useStepsConfig } from "@/hooks/useStepConfig";
import React from "react";

export const NextStepBtn = ({
  onClick,
}: {
  onClick?: () => void;
}) => {
  const { nextStep } = useStepsConfig();
  return (
    <Button
      onClick={() => {
        if (onClick) {
          onClick();
        }
        nextStep();
      }}
      className="w-full bg-purple-600"
    >
      Continue
    </Button>
  );
};
