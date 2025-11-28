"use client";

import { motion } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function ActivityGraph() {
  // Simulate 365 days of activity
  // In a real app, we would fetch this from the GitHub events API or a proxy
  const days = Array.from({ length: 365 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - (364 - i));

    // Randomize activity level (0-4)
    // Bias towards more activity for "stunning" effect
    const level = Math.random() > 0.7 ? Math.floor(Math.random() * 5) : 0;

    return {
      date: date.toISOString().split("T")[0],
      level,
    };
  });

  const getColor = (level) => {
    switch (level) {
      case 0:
        return "bg-white/5";
      case 1:
        return "bg-primary/20";
      case 2:
        return "bg-primary/40";
      case 3:
        return "bg-primary/60";
      case 4:
        return "bg-primary/80";
      default:
        return "bg-white/5";
    }
  };

  return (
    <section className="container mx-auto px-4 mb-20">
      <h2 className="text-3xl font-bold mb-8">Contribution Activity</h2>

      <div className="p-6 rounded-xl bg-white/5 border border-white/10 overflow-x-auto">
        <div className="min-w-[800px]">
          <div className="flex gap-1">
            {/* We'll just show a grid of weeks for simplicity in this MVP */}
            {Array.from({ length: 52 }).map((_, weekIndex) => (
              <div key={weekIndex} className="flex flex-col gap-1">
                {Array.from({ length: 7 }).map((_, dayIndex) => {
                  const day = days[weekIndex * 7 + dayIndex];
                  if (!day) return null;

                  return (
                    <TooltipProvider key={day.date}>
                      <Tooltip>
                        <TooltipTrigger>
                          <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: weekIndex * 0.01 }}
                            className={`w-3 h-3 rounded-sm ${getColor(
                              day.level
                            )} hover:ring-2 hover:ring-white/50 transition-all`}
                          />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>
                            {day.date}: {day.level === 0 ? "No" : day.level}{" "}
                            contributions
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-4 flex items-center justify-end gap-2 text-xs text-gray-500">
          <span>Less</span>
          <div className="w-3 h-3 rounded-sm bg-white/5" />
          <div className="w-3 h-3 rounded-sm bg-primary/20" />
          <div className="w-3 h-3 rounded-sm bg-primary/40" />
          <div className="w-3 h-3 rounded-sm bg-primary/60" />
          <div className="w-3 h-3 rounded-sm bg-primary/80" />
          <span>More</span>
        </div>
      </div>
    </section>
  );
}
