"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

export const LinkProfile = () => {
  const [isCopyLink, setIsCopyLink] = useState(false);

  const copyLink = () => {
    const url = `${window.location.origin}/tarredevTest`;
    navigator.clipboard.writeText(url);
    setIsCopyLink(true);
  };
  return (
    <div className="bg-indigo-100 rounded-3xl">
      <div className="flex flex-col justify-center text-center p-4 items-center gap-2 md:flex-row md:justify-between md:text-left">
        <span className="text-sm">
          <span>🔥 Your TreeClone is live:</span>
          {window.location.origin}/@tarredevTest
        </span>

        <Button
          onClick={copyLink}
          variant={"outline"}
          className="rounded-full px-4 font-semibold bg-white text-xs md:text-[16px]"
        >
          {isCopyLink ? "Copied" : "Copy your TarreTree URL"}
        </Button>
      </div>
    </div>
  );
};
