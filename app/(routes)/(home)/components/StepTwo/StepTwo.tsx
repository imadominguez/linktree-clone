import React, { useState } from "react";
import { NextStepBtn } from "../NextStepBtn";
import { useStepsConfig } from "@/hooks/useStepConfig";
import { stepTwoData } from "./StepTwo.data";
import { cn } from "@/lib/utils";
import Image from "next/image";

export const StepTwo = () => {
  const { setInfoUser, infoUser } = useStepsConfig();

  const [selectedPlatforms, setSelectedPlatforms] =
    useState<string[]>(
      infoUser.platforms.map((platform) => platform.name) ||
        []
    );

  const handleSelectPlatform = (platform: string) => {
    if (selectedPlatforms.includes(platform)) {
      return setSelectedPlatforms((prevSelectedPlatforms) =>
        prevSelectedPlatforms.filter(
          (item) => item !== platform
        )
      );
    } else {
      return setSelectedPlatforms([
        ...selectedPlatforms,
        platform,
      ]);
    }
  };

  const handleContinue = () => {
    setInfoUser((prevInfoUser) => ({
      ...prevInfoUser,
      platforms: stepTwoData.filter(({ name }) =>
        selectedPlatforms.includes(name)
      ),
    }));
  };
  return (
    <div>
      <h2 className="text-center font-semibold text-2xl">
        ¿En qué plataformas está?
      </h2>
      <p>Selecciona lo que tu estes:</p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-4 mt-4">
        {stepTwoData.map(({ icon, name }) => {
          return (
            <div
              key={name}
              onClick={() => handleSelectPlatform(name)}
              className={cn(
                "flex flex-col items-center rounded-lg py-3 bg-gray-200 transition-all duration-300 gap-2 cursor-pointer",
                {
                  "bg-violet-600 text-white ":
                    selectedPlatforms.includes(name),
                }
              )}
            >
              <Image
                width={40}
                height={40}
                src={icon}
                alt={name}
                layout=""
              />
              <p className="text-center">{name}</p>
            </div>
          );
        })}
      </div>

      <div className="mt-6">
        <NextStepBtn onClick={handleContinue} />
      </div>
    </div>
  );
};
