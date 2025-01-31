import React from "react";
import { dataCreator } from "./StepOne.data";
import { Button } from "@/components/ui/button";
import { useStepsConfig } from "@/hooks/useStepConfig";
import { cn } from "@/lib/utils";

export const StepOne = () => {
  const { setInfoUser, nextStep, infoUser } =
    useStepsConfig();

  const handleClick = (value: string) => {
    setInfoUser((prevInfoUser) => ({
      ...prevInfoUser,
      typeUser: value,
    }));
  };

  return (
    <div className="text-center">
      <h2 className=" font-semibold text-2xl">
        Cuentanos sobre vos
      </h2>
      <p className="">Es para mejorar tu experiencia.</p>
      <div className="grid grid-cols-1 gap-2 mt-4">
        {dataCreator.map((data, index) => (
          <div
            key={index}
            className={cn(
              "flex flex-col text-black font-semibold border items-center rounded-full py-2 hover:bg-violet-400/80  transition-all duration-300 cursor-pointer",
              {
                " bg-violet-600/70 hover:bg-violet-600/70 text-white":
                  infoUser.typeUser === data.value,
              }
            )}
            onClick={() => {
              // setear el tipo de usuario en el contexto
              handleClick(data.value);
            }}
          >
            {data.title}
          </div>
        ))}
      </div>

      <div className="mt-6">
        <Button
          onClick={() => nextStep()}
          className="w-full bg-purple-600"
        >
          Continue
        </Button>
      </div>
    </div>
  );
};
