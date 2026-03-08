import Link from "next/link";

export default function Home() {
  const versions = [
    {
      id: "v1",
      title: "Version 1: Ethereal",
      description: "The original concept featuring light, airy aesthetics and smooth, flowing animations.",
      href: "/v1",
      color: "from-blue-500/20 to-purple-500/20",
      accent: "group-hover:text-blue-400",
    },
    {
      id: "v2",
      title: "Version 2: Silk & Gold",
      description: "A luxurious visual experience with deep hues and elegant, premium interactions.",
      href: "/v2",
      color: "from-amber-500/20 to-orange-500/20",
      accent: "group-hover:text-amber-400",
    },
    {
      id: "v3",
      title: "Version 3: Obsidian",
      description: "A modern, highly immersive dark-themed interface built for performance.",
      href: "/v3",
      color: "from-zinc-800 to-black",
      accent: "group-hover:text-zinc-300",
    },
    {
      id: "v4",
      title: "Version 4: Lumina",
      description: "A vibrant, contemporary design focusing on accessibility and dynamic lighting.",
      href: "/v4",
      color: "from-emerald-500/20 to-teal-500/20",
      accent: "group-hover:text-emerald-400",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white selection:bg-white/30 font-sans p-8 md:p-24 flex items-center justify-center relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl w-full z-10 flex flex-col items-center">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-zinc-300 backdrop-blur-md mb-4">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 mr-2 animate-pulse"></span>
            System Gateway Active
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white/90">
            Nomadic Voice
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto">
            Select an environment iteration to explore. Each variant offers a unique auditory and visual experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {versions.map((version) => (
            <Link
              key={version.id}
              href={version.href}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 transition-all hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 duration-300"
            >
              {/* Subtle background gradient for each card */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${version.color} opacity-0 transition-opacity duration-500 group-hover:opacity-100 -z-10`}
              />

              <div>
                <h2 className="mb-2 text-2xl font-semibold tracking-tight text-white/90 flex items-center gap-2">
                  {version.title}
                </h2>
                <p className="text-zinc-400 leading-relaxed max-w-sm">
                  {version.description}
                </p>
              </div>

              <div className={`mt-8 flex items-center font-medium text-sm text-zinc-500 transition-colors duration-300 ${version.accent}`}>
                <span>Launch Environment</span>
                {/* Arrow doesn't use lucide-react to avoid missing dependencies, using SVG instead */}
                <svg
                  className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
