"use client";

import { motion } from "framer-motion";
import { Star, GitFork, ExternalLink } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TiltCard } from "@/components/Portfolio/TiltCard";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 },
};

export function ProjectsGrid({ repos }) {
  return (
    <section className="container mx-auto px-4 mb-20">
      <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Featured Projects
        </span>
      </h2>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {repos.map((repo) => (
          <motion.div
            key={repo.id}
            variants={item}
            className="perspective-1000"
          >
            <TiltCard className="h-full">
              <Card className="h-full bg-white/5 border-white/10 hover:border-purple-500/50 transition-colors group flex flex-col backdrop-blur-sm">
                <CardHeader>
                  <div className="flex justify-between items-start gap-2">
                    <CardTitle className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors truncate">
                      {repo.name}
                    </CardTitle>
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-white transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                  <CardDescription className="line-clamp-2 min-h-[2.5rem]">
                    {repo.description || "No description available."}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="flex flex-wrap gap-2">
                    {repo.language && (
                      <Badge
                        variant="secondary"
                        className="bg-purple-500/10 text-purple-300 border-purple-500/20"
                      >
                        {repo.language}
                      </Badge>
                    )}
                  </div>
                </CardContent>
                <CardFooter className="text-sm text-gray-400 flex gap-4">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500" />
                    {repo.stargazers_count}
                  </div>
                  <div className="flex items-center gap-1">
                    <GitFork className="w-4 h-4" />
                    {repo.forks_count}
                  </div>
                </CardFooter>
              </Card>
            </TiltCard>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
