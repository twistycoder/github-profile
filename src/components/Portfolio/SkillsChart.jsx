"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

export function Skills({ languages, topics }) {
  return (
    <section className="container mx-auto px-4 mb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Languages */}
        <div>
          <h2 className="text-3xl font-bold mb-8">Top Languages</h2>
          <div className="space-y-6">
            {languages.map((lang, index) => (
              <div key={lang} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium text-gray-200">{lang}</span>
                </div>
                <div className="h-3 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{
                      width: `${Math.max(30, 100 - index * 15)}%`,
                    }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Topics / Skills */}
        <div>
          <h2 className="text-3xl font-bold mb-8">Technologies & Skills</h2>
          <div className="flex flex-wrap gap-3">
            {topics.map((topic, index) => (
              <motion.div
                key={topic}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
              >
                <Badge
                  variant="secondary"
                  className="px-4 py-2 text-sm bg-white/5 hover:bg-white/10 text-gray-300 border-white/10 transition-colors cursor-default"
                >
                  {topic}
                </Badge>
              </motion.div>
            ))}
            {topics.length === 0 && (
              <p className="text-gray-500 italic">
                No topics found in repositories.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
