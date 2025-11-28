import { fetchGitHubProfile } from "@/lib/github";
import { notFound } from "next/navigation";
import { Mail, MapPin, Link as LinkIcon, Github, Calendar } from "lucide-react";

export default async function ResumePage({ params }) {
  const { username } = await params;
  const data = await fetchGitHubProfile(username);

  if (!data) {
    return notFound();
  }

  const { user, repos, stats } = data;

  return (
    <div className="min-h-screen bg-white text-black p-8 md:p-16 print:p-0">
      <div className="max-w-4xl mx-auto bg-white print:max-w-none">
        {/* Header */}
        <header className="border-b-2 border-gray-800 pb-8 mb-8">
          <h1 className="text-5xl font-bold uppercase tracking-tight mb-4">{user.name || user.login}</h1>
          <p className="text-xl text-gray-600 mb-6">{user.bio}</p>
          
          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
            {user.location && (
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                {user.location}
              </div>
            )}
            {user.blog && (
              <div className="flex items-center gap-1">
                <LinkIcon className="w-4 h-4" />
                <a href={user.blog} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  {user.blog.replace(/^https?:\/\//, '')}
                </a>
              </div>
            )}
            <div className="flex items-center gap-1">
              <Github className="w-4 h-4" />
              <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                github.com/{user.login}
              </a>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              Joined {new Date(user.created_at).getFullYear()}
            </div>
          </div>
        </header>

        {/* Skills */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold uppercase border-b border-gray-300 pb-2 mb-4">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {stats.topLanguages.map((lang) => (
              <span key={lang} className="px-3 py-1 bg-gray-100 rounded-md font-medium text-sm border border-gray-200">
                {lang}
              </span>
            ))}
            {stats.topTopics.slice(0, 10).map((topic) => (
              <span key={topic} className="px-3 py-1 bg-white border border-gray-300 rounded-md text-sm">
                {topic}
              </span>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold uppercase border-b border-gray-300 pb-2 mb-4">Key Projects</h2>
          <div className="grid gap-6">
            {repos.slice(0, 5).map((repo) => (
              <div key={repo.id}>
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="text-lg font-bold">
                    {repo.name}
                    <span className="ml-2 text-xs font-normal text-gray-500 border border-gray-300 px-1 rounded">
                      {repo.language}
                    </span>
                  </h3>
                  <div className="text-sm text-gray-500">
                    {repo.stargazers_count} ★ &middot; {repo.forks_count} Forks
                  </div>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-1">
                  {repo.description || "No description provided."}
                </p>
                <a href={repo.html_url} className="text-xs text-blue-600 hover:underline">
                  {repo.html_url}
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Stats */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold uppercase border-b border-gray-300 pb-2 mb-4">GitHub Stats</h2>
          <div className="grid grid-cols-4 gap-4 text-center">
            <div className="p-4 bg-gray-50 rounded">
              <div className="text-2xl font-bold">{stats.totalStars}</div>
              <div className="text-xs uppercase tracking-wider text-gray-500">Stars</div>
            </div>
            <div className="p-4 bg-gray-50 rounded">
              <div className="text-2xl font-bold">{stats.totalForks}</div>
              <div className="text-xs uppercase tracking-wider text-gray-500">Forks</div>
            </div>
            <div className="p-4 bg-gray-50 rounded">
              <div className="text-2xl font-bold">{user.followers}</div>
              <div className="text-xs uppercase tracking-wider text-gray-500">Followers</div>
            </div>
            <div className="p-4 bg-gray-50 rounded">
              <div className="text-2xl font-bold">{repos.length}</div>
              <div className="text-xs uppercase tracking-wider text-gray-500">Repos</div>
            </div>
          </div>
        </section>
        
        <div className="text-center text-xs text-gray-400 mt-16 print:hidden">
          <p>Generated by PortfolioAI. Press Ctrl+P to save as PDF.</p>
        </div>
      </div>
    </div>
  );
}
