import { createContext, useState } from "react";
import {
  StepConfigUserContextType,
  StepConfigUserProviderProps,
} from "./StepConfigUser.types";

export const StepConfigUserContext =
  createContext<StepConfigUserContextType>({
    step: 0,
    setStep: () => {},
    infoUser: {
      name: "",
      avatarUrl: "",
      platforms: [],
      typeUser: "",
      username: "",
    },
    setInfoUser: () => {},
    totalSteps: 0,
    nextStep: () => {},
    prevStep: () => {},
  });

export function StepConfigUserProvider({
  children,
}: StepConfigUserProviderProps) {
  const [step, setIsStep] = useState(1);
  const [infoUser, setInfoUser] = useState<
    StepConfigUserContextType["infoUser"]
  >({
    typeUser: "",
    name: "",
    platforms: [],
    avatarUrl: "",
    username: "",
  });

  const nextStep = () => {
    setIsStep(step + 1);
  };

  const prevStep = () => {
    setIsStep(step - 1);
  };

  const totalSteps = 5;

  const data = {
    step,
    setStep: setIsStep,
    infoUser,
    setInfoUser,
    totalSteps,
    nextStep,
    prevStep,
  };

  return (
    <StepConfigUserContext.Provider value={data}>
      {children}
    </StepConfigUserContext.Provider>
  );
}
