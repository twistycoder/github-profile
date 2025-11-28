"use client";

import { motion } from "framer-motion";
import { Star, GitFork, Users, Calendar, FolderGit2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function Highlights({ stats, user }) {
  const items = [
    {
      label: "Total Stars",
      value: stats.totalStars,
      icon: Star,
      color: "text-yellow-500",
      bg: "bg-yellow-500/10",
    },
    {
      label: "Total Forks",
      value: stats.totalForks,
      icon: GitFork,
      color: "text-blue-500",
      bg: "bg-blue-500/10",
    },
    {
      label: "Followers",
      value: user.followers,
      icon: Users,
      color: "text-purple-500",
      bg: "bg-purple-500/10",
    },
    {
      label: "Public Repos",
      value: user.public_repos,
      icon: FolderGit2,
      color: "text-green-500",
      bg: "bg-green-500/10",
    },
  ];

  return (
    <section className="container mx-auto px-4 mb-20">
      <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400">
          At a Glance
        </span>
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {items.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors">
              <CardContent className="p-6 flex flex-col items-center text-center gap-4">
                <div className={`p-3 rounded-full ${item.bg} ${item.color}`}>
                  <item.icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">
                    {item.value}
                  </div>
                  <div className="text-sm text-gray-400">{item.label}</div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
