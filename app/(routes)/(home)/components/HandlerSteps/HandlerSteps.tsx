import React, { useEffect, useState } from "react";
import { HandlerStepsTypes } from "./HandlerSteps.types";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { useStepsConfig } from "@/hooks/useStepConfig";
import { ArrowLeft } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { StepOne } from "../StepOne";

export const HandlerSteps = (props: HandlerStepsTypes) => {
  const { onReload } = props;
  const [openDialog, setOpenDialog] = useState(false);
  const {
    totalSteps,
    step,
    setStep,
    infoUser,
    nextStep,
    prevStep,
    setInfoUser,
  } = useStepsConfig();

  const progressValue = (step / totalSteps) * 100; // Calculate the progress value for the progress bar

  const onCloseDialog = () => {
    onReload(true);
    setOpenDialog(false);
  };
  useEffect(() => {
    if (step < 5) {
      setOpenDialog(true);
    }
  }, [step]);
  return (
    <AlertDialog
      open={openDialog}
      onOpenChange={setOpenDialog}
    >
      <AlertDialogContent className="min-h-[500px]  ">
        <AlertDialogHeader className="flex flex-col items-center justify-start w-full">
          <AlertDialogTitle className="mb-3 w-full">
            {step > 1 && step < 5 && (
              <Button
                variant={"outline"}
                onClick={() => prevStep()}
              >
                Regresar <ArrowLeft className="size-4" />
              </Button>
            )}

            <div>
              Paso {step} de {totalSteps}
            </div>
            <Progress value={progressValue} />
          </AlertDialogTitle>
          <AlertDialogDescription
            asChild
            className="w-full"
          >
            <div>
              {step === 1 && <StepOne />}
              {step === 2 && <div></div>}
              {step === 3 && <div></div>}
              {step === 4 && <div></div>}
              {step === 5 && <div></div>}
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        {/* <AlertDialogFooter>
          <AlertDialogCancel
            onClick={() => setOpenDialog(false)}
          >
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={() => onCloseDialog()}
          >
            Continue
          </AlertDialogAction>
        </AlertDialogFooter> */}
      </AlertDialogContent>
    </AlertDialog>
  );
};
