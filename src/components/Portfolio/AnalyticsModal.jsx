"use client";

import { BarChart, Users, Globe, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function AnalyticsModal() {
  // Simulated data
  const stats = [
    { label: "Total Views", value: "1,234", change: "+12%", icon: Users },
    { label: "Unique Visitors", value: "856", change: "+8%", icon: Globe },
    {
      label: "Project Clicks",
      value: "432",
      change: "+24%",
      icon: ArrowUpRight,
    },
  ];

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full bg-white/5 border-white/10 hover:bg-white/10"
        >
          <BarChart className="w-5 h-5" />
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-black/90 border-white/10 backdrop-blur-xl text-white sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold flex items-center gap-2">
            <BarChart className="w-6 h-6 text-primary" />
            Visitor Insights
          </DialogTitle>
          <DialogDescription className="text-gray-400">
            Real-time analytics for your portfolio (Simulated).
          </DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="p-4 rounded-xl bg-white/5 border border-white/10"
            >
              <div className="flex items-center justify-between mb-2">
                <stat.icon className="w-5 h-5 text-gray-400" />
                <span className="text-xs font-bold text-green-400 bg-green-400/10 px-2 py-0.5 rounded-full">
                  {stat.change}
                </span>
              </div>
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="text-xs text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-lg mb-4">Top Referrers</h3>
            <div className="space-y-2">
              {[
                { name: "GitHub", percent: 45 },
                { name: "LinkedIn", percent: 30 },
                { name: "Twitter / X", percent: 15 },
                { name: "Direct", percent: 10 },
              ].map((source, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-24 text-sm text-gray-400">
                    {source.name}
                  </div>
                  <div className="flex-1 h-2 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full"
                      style={{ width: `${source.percent}%` }}
                    />
                  </div>
                  <div className="w-12 text-right text-sm font-mono">
                    {source.percent}%
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
              <ArrowUpRight className="w-5 h-5 text-purple-400" />
              Predictive Growth (AI Forecast)
            </h3>
            <div className="h-32 flex items-end gap-2 px-2 border-b border-l border-white/10 pb-2">
              {[30, 45, 55, 60, 75, 85, 95, 110, 130, 150].map((height, i) => (
                <div
                  key={i}
                  className="flex-1 flex flex-col justify-end group relative"
                >
                  <div
                    className={`w-full rounded-t-sm transition-all duration-500 ${
                      i > 6
                        ? "bg-purple-500/50 border-t border-purple-400 border-dashed"
                        : "bg-white/20"
                    }`}
                    style={{ height: `${height}%` }}
                  />
                  {i === 9 && (
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-purple-500 text-xs px-2 py-1 rounded text-white whitespace-nowrap">
                      +150%
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-between text-xs text-gray-500 mt-2">
              <span>Jan</span>
              <span>Now</span>
              <span>Dec (Proj)</span>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
