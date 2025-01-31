import { StepConfigUserContext } from "@/contexts";
import { useContext } from "react";

export const useStepsConfig = () =>
  useContext(StepConfigUserContext);
