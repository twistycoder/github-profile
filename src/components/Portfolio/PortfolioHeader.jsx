"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Link as LinkIcon,
  Twitter,
  Github,
  Calendar,
} from "lucide-react";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";

export function PortfolioHeader({ user, stats }) {
  return (
    <div className="relative mb-16">
      {/* Cover Image (Generated Gradient) */}
      <div className="h-48 md:h-64 w-full bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 rounded-b-3xl opacity-80" />

      <div className="container mx-auto px-4">
        <div className="relative -mt-20 flex flex-col md:flex-row items-end md:items-center gap-6">
          <motion.img
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            src={user.avatar_url}
            alt={user.name}
            className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-black bg-black shadow-2xl"
          />

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="flex-1 pb-4"
          >
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">
              {user.name || user.login}
            </h1>
            <p className="text-xl text-gray-400 mb-4">@{user.login}</p>

            {user.bio && (
              <p className="text-gray-300 max-w-2xl text-lg mb-6 leading-relaxed">
                {user.bio}
              </p>
            )}

            <div className="flex flex-wrap gap-4 text-sm text-gray-400">
              {user.location && (
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {user.location}
                </div>
              )}
              {user.blog && (
                <a
                  href={
                    user.blog.startsWith("http")
                      ? user.blog
                      : `https://${user.blog}`
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-purple-400 transition-colors"
                >
                  <LinkIcon className="w-4 h-4" />
                  Website
                </a>
              )}
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                Joined {format(new Date(user.created_at), "MMMM yyyy")}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex gap-3 pb-4"
          >
            <a href={user.html_url} target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full bg-white/5 border-white/10 hover:bg-white/10"
              >
                <Github className="w-5 h-5" />
              </Button>
            </a>
            {user.twitter_username && (
              <a
                href={`https://twitter.com/${user.twitter_username}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full bg-white/5 border-white/10 hover:bg-white/10"
                >
                  <Twitter className="w-5 h-5" />
                </Button>
              </a>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
