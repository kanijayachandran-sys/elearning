import { useParams, useNavigate } from "react-router-dom";
import { useProgress } from "../context/ProgressContext";

export default function CourseDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { courses, incrementCourseProgress } = useProgress();

  const course = courses.find((c) => c.id === id);

  if (!course) {
    // same 404 block as earlier
  }

  const handleMarkLessonComplete = () => {
    // Increase progress by 10% per click
    incrementCourseProgress(course.id, 10);
  };

  return (
    <main className="min-h-screen bg-slate-950">
      <section className="max-w-5xl mx-auto px-4 py-8">
        {/* header info same as before */}
        {/* video same as before */}

        <div className="flex items-center justify-between mb-4">
          <span className="text-sm text-slate-300">
            Current progress: {course.progress}%
          </span>
          <button
            onClick={handleMarkLessonComplete}
            className="rounded-full bg-emerald-500 px-3 py-1.5 text-xs font-medium text-slate-950 hover:bg-emerald-400"
          >
            Mark lesson complete (+10%)
          </button>
        </div>

        {/* rest of detail content ... */}
      </section>
    </main>
  );
}
