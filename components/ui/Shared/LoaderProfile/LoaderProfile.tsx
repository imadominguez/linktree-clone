import { LoaderCircle } from "lucide-react";
import React from "react";

export const LoaderProfile = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-2">
      <LoaderCircle className="animate-spin size-10" />{" "}
      Cargando TreeClone
    </div>
  );
};
