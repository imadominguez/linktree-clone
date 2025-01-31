"use client";

import { TreePalm } from "lucide-react";
import { LinkProfile } from "./components";
import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { Link, User } from "@prisma/client";
import { LoaderProfile } from "@/components/ui/Shared";
import { StepConfigUserProvider } from "@/contexts";
import { HandlerSteps } from "./components/HandlerSteps";

export default function HomePage() {
  const { user } = useUser();

  const [isFirstVisit, setIsFirstVisit] = useState(false);
  const [reload, setReload] = useState(false);
  const [infoUser, setInfoUser] = useState<
    (User & { links: Link[] }) | null
  >(null);

  useEffect(() => {
    const checkFirstLogin = async () => {
      const response = await fetch("/api/info-user");
      const data = await response.json();
      console.log({
        data: !response.ok,
      });
      setInfoUser(data);
      setIsFirstVisit(data.firstLogin);
    };

    checkFirstLogin();
    if (reload) {
      checkFirstLogin();
      setReload(false);
    }
  }, [user?.id, user, reload]);

  if (!user || !infoUser) return <LoaderProfile />;

  if (isFirstVisit) {
    return (
      <StepConfigUserProvider>
        <HandlerSteps onReload={setReload} />
      </StepConfigUserProvider>
    );
  }
  console.log({ infoUser });
  return (
    <div className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-[70%_auto] gap-4">
        <div className="space-y-4">
          {/* Link Profile */}
          <LinkProfile />
          {/* Profile Info */}
          <div>
            <p>Profile Info</p>
          </div>

          <div className="mt-20 flex flex-col items-center">
            <div className="py-10 text-center flex justify-center flex-col items-center text-gray-400 font-semibold">
              <TreePalm
                className="size-20"
                strokeWidth={1}
              />
              <p>Show the world who you are</p>
              <p>Add a link to get started.</p>
            </div>
          </div>
        </div>

        {/* Profile Preview */}
        <div>
          <p>Profile preview</p>
        </div>
      </div>
    </div>
  );
}
