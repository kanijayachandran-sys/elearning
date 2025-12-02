import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <header className="bg-slate-950/80 border-b border-slate-800 sticky top-0 z-20 backdrop-blur">
      <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* brand ... */}

        <div className="hidden sm:flex items-center gap-6 text-sm font-medium">
          <button
            onClick={() => navigate("/dashboard")}
            className="text-slate-300 hover:text-emerald-400"
          >
            Dashboard
          </button>
          <button
            onClick={() => navigate("/courses")}
            className="text-slate-300 hover:text-emerald-400"
          >
            Courses
          </button>
          <button
            onClick={() => navigate("/progress")}
            className="text-slate-300 hover:text-emerald-400"
          >
            Progress
          </button>
        </div>

        <button
          onClick={() => navigate("/dashboard")}
          className="ml-4 rounded-full bg-emerald-500 px-4 py-1.5 text-xs sm:text-sm font-medium text-slate-950 hover:bg-emerald-400"
        >
          My Dashboard
        </button>
      </nav>
    </header>
  );
}
