"use client";

import Link from "next/link";
import { FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function ResumeButton({ username }) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link href={`/portfolio/${username}/resume`} target="_blank">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-white/5 border-white/10 hover:bg-white/10"
            >
              <FileText className="w-5 h-5" />
            </Button>
          </Link>
        </TooltipTrigger>
        <TooltipContent>
          <p>Generate Resume</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
