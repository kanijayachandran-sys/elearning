
import { useProgress } from "../context/ProgressContext";
import { useNavigate } from "react-router-dom";

export default function DashboardPage() {
  const { courses } = useProgress();
  const totalCourses = courses.length;
  const navigate = useNavigate();
  const firstCourse = courses[0]; // show first course video
  const completedCourses = courses.filter((c) => c.progress === 100).length;
  const inProgressCourses = courses.filter(
    (c) => c.progress > 0 && c.progress < 100
  ).length;

  return (
    <main className="min-h-screen bg-slate-950">
      <section className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-50 mb-2">
          My Dashboard
        </h1>
        <p className="text-sm text-slate-400 mb-6">
          Overview of your CodTech learning activity and certificates.
        </p>

        {/* Summary cards */}
        <div className="grid gap-4 md:grid-cols-3 mb-8">
          <div className="neon-card p-4">
            <p className="text-xs text-slate-400">Total courses</p>
            <p className="text-2xl font-bold text-slate-50">{totalCourses}</p>
          </div>
          <div className="neon-card p-4">
            <p className="text-xs text-slate-400">In progress</p>
            <p className="text-2xl font-bold text-emerald-300">
              {inProgressCourses}
            </p>
          </div>
          <div className="neon-card p-4">
            <p className="text-xs text-slate-400">Completed</p>
            <p className="text-2xl font-bold text-sky-300">
              {completedCourses}
            </p>
          </div>
        </div>

              {/* Quick list */}
      <div className="neon-card p-4">
        <h2 className="text-lg font-semibold text-slate-50 mb-3">
          Recently active courses
        </h2>
        <ul className="space-y-2 text-sm text-slate-300">
          {courses.map((c) => (
            <li
              key={c.id}
              className="flex items-center justify-between border-b border-slate-800/60 last:border-none pb-2 last:pb-0"
            >
              <span>{c.title}</span>
              <span className="text-xs text-emerald-300">
                {c.progress}% complete
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Featured video from first course */}
      {firstCourse && (
        <div className="mt-8 neon-card overflow-hidden">
          <div className="p-4 flex items-center justify-between">
            <div>
              <p className="text-xs text-slate-400">Continue watching</p>
              <h2 className="text-lg font-semibold text-slate-50">
                {firstCourse.title}
              </h2>
            </div>
            <button
              onClick={() => navigate(`/courses/${firstCourse.id}`)}
              className="rounded-full bg-emerald-500 px-3 py-1.5 text-xs font-medium text-slate-950 hover:bg-emerald-400"
            >
              Go to course
            </button>
          </div>
          <div className="aspect-video w-full bg-black/40">
            <iframe
              className="h-full w-full border-0"
              src={firstCourse.videoUrl}
              title={firstCourse.title}
              allowFullScreen
            />
          </div>
        </div>
      )}
      </section>
    </main>
  );
}
