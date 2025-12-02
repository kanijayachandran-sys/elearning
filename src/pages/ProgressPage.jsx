// src/pages/ProgressPage.jsx
// Progress overview page using context

import { useProgress } from "../context/ProgressContext";

export default function ProgressPage() {
  const { courses } = useProgress();

  const overall =
    courses.length === 0
      ? 0
      : courses.reduce((sum, c) => sum + c.progress, 0) / courses.length;

  return (
    <main className="min-h-screen bg-slate-950">
      <section className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-50 mb-2">
          Your Progress
        </h1>
        <p className="text-sm text-slate-400 mb-6">
          Track your learning journey across all CodTech courses.
        </p>

        {/* Overall progress */}
        <div className="neon-card p-4 mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-slate-300">Overall completion</span>
            <span className="text-sm font-semibold text-emerald-300">
              {Math.round(overall)}%
            </span>
          </div>
          <div className="h-3 w-full rounded-full bg-slate-800 overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-sky-400"
              style={{ width: `${overall}%` }}
            />
          </div>
        </div>

        {/* Per-course progress */}
        <div className="space-y-4">
          {courses.map((course) => (
            <div
              key={course.id}
              className="flex flex-col gap-1 rounded-xl border border-slate-800 bg-slate-900/60 p-4"
            >
              <div className="flex items-center justify-between">
                <h2 className="text-sm font-semibold text-slate-50">
                  {course.title}
                </h2>
                <span className="text-xs text-emerald-300">
                  {course.progress}% complete
                </span>
              </div>
              <div className="h-2 w-full rounded-full bg-slate-800 overflow-hidden">
                <div
                  className="h-full rounded-full bg-emerald-400"
                  style={{ width: `${course.progress}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
