"use client";

import { motion } from "framer-motion";
import { Sparkles, Lightbulb } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export function AICoach({ suggestions }) {
  if (!suggestions || suggestions.length === 0) return null;

  const getTypeStyles = (type) => {
    switch (type) {
      case "urgent":
        return "border-red-500/50 bg-red-500/10 text-red-200";
      case "important":
        return "border-orange-500/50 bg-orange-500/10 text-orange-200";
      case "strategy":
        return "border-blue-500/50 bg-blue-500/10 text-blue-200";
      case "optimization":
        return "border-green-500/50 bg-green-500/10 text-green-200";
      default:
        return "border-white/10 bg-white/5 text-gray-300";
    }
  };

  return (
    <section className="container mx-auto px-4 mb-20">
      <div className="relative p-[1px] rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        <div className="bg-black rounded-xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400">
              <Sparkles className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-white">
              AI Portfolio Coach
            </h2>
          </div>

          <div className="grid gap-4">
            {suggestions.map((suggestion, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`flex items-start gap-4 p-4 rounded-lg border ${getTypeStyles(
                  suggestion.type
                )}`}
              >
                <Lightbulb className="w-5 h-5 shrink-0 mt-1 opacity-80" />
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider opacity-70 mb-1 block">
                    {suggestion.type || "Tip"}
                  </span>
                  <p className="text-sm md:text-base">
                    {suggestion.text || suggestion}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
