import { useNavigate } from "react-router-dom";
import { useProgress } from "../../context/ProgressContext";

export default function CourseCard({ course }) {
  const navigate = useNavigate();
  const { incrementCourseProgress } = useProgress();

  const goToDetails = () => {
    navigate(`/courses/${course.id}`);
  };

  const quickContinue = () => {
    incrementCourseProgress(course.id, 10); // quick +10% from dashboard
  };

  return (
    <article className="neon-card flex flex-col">
      {/* ...title + description same as before... */}

      {/* progress bar same as before */}

      <div className="p-4 flex items-center justify-between border-t border-slate-800 mt-2">
        <button
          onClick={goToDetails}
          className="rounded-full bg-emerald-500 px-3 py-1.5 text-xs font-medium text-slate-950 hover:bg-emerald-400"
        >
          Continue course
        </button>
        <button
          onClick={quickContinue}
          className="text-xs font-medium text-emerald-300 hover:text-emerald-200"
        >
          +10% quick update
        </button>
      </div>
    </article>
  );
}
