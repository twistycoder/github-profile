const GITHUB_API_BASE = "https://api.github.com";

export async function fetchGitHubProfile(username) {
  try {
    const [userRes, reposRes] = await Promise.all([
      fetch(`${GITHUB_API_BASE}/users/${username}`),
      fetch(`${GITHUB_API_BASE}/users/${username}/repos?sort=updated&per_page=100`)
    ]);

    if (!userRes.ok) {
      if (userRes.status === 404) return null;
      throw new Error("Failed to fetch user");
    }

    const user = await userRes.json();
    const repos = await reposRes.json();

    // "AI" Analysis
    const stats = analyzeProfile(user, repos);

    return {
      user,
      repos: repos
        .filter(repo => !repo.fork) // Filter out forks for main portfolio
        .sort((a, b) => b.stargazers_count - a.stargazers_count) // Sort by stars
        .slice(0, 6), // Top 6 projects
      stats
    };
  } catch (error) {
    console.error("GitHub API Error:", error);
    return null;
  }
}

function analyzeProfile(user, repos) {
  // Calculate total stars and forks
  const totalStars = repos.reduce((acc, repo) => acc + repo.stargazers_count, 0);
  const totalForks = repos.reduce((acc, repo) => acc + repo.forks_count, 0);
  
  // Calculate language usage
  const languages = {};
  const topics = new Set();
  
  // Common tech keywords to look for
  const commonTech = [
    "react", "nextjs", "vue", "angular", "svelte", "node", "express", "nest", 
    "python", "django", "flask", "fastapi", "tensorflow", "pytorch", "pandas", "numpy",
    "java", "spring", "kotlin", "android", "swift", "ios", "flutter", "react native",
    "docker", "kubernetes", "aws", "azure", "gcp", "firebase", "supabase", "mongodb", "postgresql", "mysql", "redis",
    "graphql", "rest api", "typescript", "javascript", "html", "css", "tailwind", "sass",
    "git", "linux", "devops", "ci/cd", "machine learning", "ai", "blockchain", "web3"
  ];

  repos.forEach(repo => {
    if (repo.language) {
      languages[repo.language] = (languages[repo.language] || 0) + 1;
    }
    if (repo.topics && repo.topics.length > 0) {
      repo.topics.forEach(topic => topics.add(topic));
    } else {
      // Infer from name and description if no topics
      const text = `${repo.name} ${repo.description || ""}`.toLowerCase();
      commonTech.forEach(tech => {
        if (text.includes(tech)) {
          topics.add(tech);
        }
      });
    }
  });
  
  // Also check user bio for keywords
  if (user.bio) {
    const bioLower = user.bio.toLowerCase();
    commonTech.forEach(tech => {
      if (bioLower.includes(tech)) {
        topics.add(tech);
      }
    });
  }

  const topLanguages = Object.entries(languages)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 5)
    .map(([lang]) => lang);

  // Add top languages to topics if not present
  topLanguages.forEach(lang => topics.add(lang));

  // Get top 15 unique topics/skills
  const topTopics = Array.from(topics).slice(0, 20);

  // Calculate Achievements
  const achievements = [];
  if (totalStars >= 100) achievements.push({ id: "star-hunter", label: "Star Hunter", icon: "Star", description: "Earned 100+ stars across repositories" });
  if (totalStars >= 500) achievements.push({ id: "galaxy-brain", label: "Galaxy Brain", icon: "Sparkles", description: "Earned 500+ stars. Incredible!" });
  if (totalForks >= 50) achievements.push({ id: "open-sourcerer", label: "Open Sourcerer", icon: "GitFork", description: "Projects forked 50+ times" });
  if (user.followers >= 100) achievements.push({ id: "influencer", label: "Influencer", icon: "Users", description: "Built a following of 100+ developers" });
  if (topLanguages.length >= 5) achievements.push({ id: "polyglot", label: "Polyglot", icon: "Languages", description: "Proficient in 5+ programming languages" });
  const accountAge = new Date().getFullYear() - new Date(user.created_at).getFullYear();
  if (accountAge >= 5) achievements.push({ id: "veteran", label: "Veteran", icon: "Award", description: "Coding on GitHub for 5+ years" });
  if (repos.length >= 50) achievements.push({ id: "prolific", label: "Prolific", icon: "Zap", description: "Created 50+ public repositories" });

  // Generate Enhanced "AI" suggestions
  const suggestions = [];
  
  // Profile Completeness
  if (!user.bio) suggestions.push({ type: "urgent", text: "Add a bio to tell your story. Profiles with bios get 3x more views." });
  if (!user.blog) suggestions.push({ type: "important", text: "Link your personal website or LinkedIn to drive traffic." });
  if (!user.location) suggestions.push({ type: "tip", text: "Add your location to appear in local developer searches." });
  if (!user.twitter_username) suggestions.push({ type: "tip", text: "Connect your Twitter to cross-pollinate your audience." });

  // Activity & Engagement
  if (totalStars < 10) suggestions.push({ type: "strategy", text: "Share your projects on Reddit (r/webdev) or Hacker News to get your first 10 stars." });
  if (topTopics.length < 5) suggestions.push({ type: "optimization", text: "Tag your repos with topics (e.g., 'react', 'ai') to improve discoverability by 20%." });
  
  // Content
  const hasReadmes = repos.slice(0, 5).every(r => r.description && r.description.length > 20);
  if (!hasReadmes) suggestions.push({ type: "content", text: "Ensure your top repos have detailed descriptions. Good documentation is key to adoption." });

  // Smart Theme Selection
  let suggestedTheme = "cosmic";
  const primaryLang = topLanguages[0]?.toLowerCase();
  
  if (primaryLang) {
    if (["vue", "python", "java", "spring", "c#"].some(l => primaryLang.includes(l))) {
      suggestedTheme = "emerald";
    } else if (["react", "typescript", "go", "php", "dart"].some(l => primaryLang.includes(l))) {
      suggestedTheme = "ocean";
    } else if (["rust", "c++", "ruby", "swift", "html"].some(l => primaryLang.includes(l))) {
      suggestedTheme = "sunset";
    }
  }

  return {
    totalStars,
    totalForks,
    topLanguages,
    topTopics,
    achievements,
    suggestions,
    accountAge,
    suggestedTheme
  };
}
