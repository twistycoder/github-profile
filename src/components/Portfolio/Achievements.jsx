"use client";

import { motion } from "framer-motion";
import {
  Star,
  GitFork,
  Users,
  Languages,
  Award,
  Zap,
  Sparkles,
  Lock,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const iconMap = {
  Star,
  GitFork,
  Users,
  Languages,
  Award,
  Zap,
  Sparkles,
};

export function Achievements({ achievements }) {
  // Define all possible achievements to show locked state for unearned ones
  const allAchievements = [
    {
      id: "star-hunter",
      label: "Star Hunter",
      icon: "Star",
      description: "Earned 100+ stars",
    },
    {
      id: "open-sourcerer",
      label: "Open Sourcerer",
      icon: "GitFork",
      description: "Projects forked 50+ times",
    },
    {
      id: "polyglot",
      label: "Polyglot",
      icon: "Languages",
      description: "Proficient in 5+ languages",
    },
    {
      id: "veteran",
      label: "Veteran",
      icon: "Award",
      description: "5+ years on GitHub",
    },
  ];

  return (
    <section className="container mx-auto px-4 mb-20">
      <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">
          Achievements
        </span>
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {allAchievements.map((badge, index) => {
          const earned = achievements.find((a) => a.id === badge.id);
          const Icon = iconMap[badge.icon];

          return (
            <TooltipProvider key={badge.id}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className={`relative p-6 rounded-xl border flex flex-col items-center text-center gap-3 transition-all ${
                      earned
                        ? "bg-gradient-to-br from-white/10 to-white/5 border-yellow-500/50 shadow-[0_0_15px_rgba(234,179,8,0.2)]"
                        : "bg-white/5 border-white/5 opacity-50 grayscale"
                    }`}
                  >
                    <div
                      className={`p-3 rounded-full ${
                        earned
                          ? "bg-yellow-500/20 text-yellow-400"
                          : "bg-white/10 text-gray-500"
                      }`}
                    >
                      {earned ? (
                        <Icon className="w-8 h-8" />
                      ) : (
                        <Lock className="w-8 h-8" />
                      )}
                    </div>
                    <div>
                      <h3
                        className={`font-bold ${
                          earned ? "text-white" : "text-gray-400"
                        }`}
                      >
                        {badge.label}
                      </h3>
                      <p className="text-xs text-gray-500 mt-1">
                        {badge.description}
                      </p>
                    </div>
                    {earned && (
                      <div className="absolute top-2 right-2">
                        <Sparkles className="w-4 h-4 text-yellow-500 animate-pulse" />
                      </div>
                    )}
                  </motion.div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>
                    {earned ? "Unlocked!" : "Locked - Keep coding to unlock"}
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          );
        })}
      </div>
    </section>
  );
}
