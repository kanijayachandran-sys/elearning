// Simple global store for course progress
import { createContext, useContext, useState } from "react";
import { courses as initialCourses } from "../data/courses";

const ProgressContext = createContext();

export function ProgressProvider({ children }) {
  // Keep courses (with progress) in state so they can update
  const [courses, setCourses] = useState(initialCourses);

  // Update progress for a specific course by id
  const updateCourseProgress = (id, value) => {
    setCourses((prev) =>
      prev.map((c) =>
        c.id === id ? { ...c, progress: Math.min(100, Math.max(0, value)) } : c
      )
    );
  };

  // Helper: increment progress by step (e.g. 10%)
  const incrementCourseProgress = (id, step = 10) => {
    setCourses((prev) =>
      prev.map((c) =>
        c.id === id ? { ...c, progress: Math.min(100, c.progress + step) } : c
      )
    );
  };

  return (
    <ProgressContext.Provider
      value={{ courses, updateCourseProgress, incrementCourseProgress }}
    >
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  return useContext(ProgressContext);
}
