import CourseCard from "../components/course/CourseCard";
import { useProgress } from "../context/ProgressContext";

export default function CoursesPage() {
  const { courses } = useProgress();

  return (
    <main className="min-h-screen bg-slate-950">
      {/* same header as before */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        {/* header ... unchanged */}
        <div className="grid gap-6 md:grid-cols-2">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>
    </main>
  );
}
