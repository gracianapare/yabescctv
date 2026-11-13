import { Suspense } from "react";
import { useInView } from "../hooks/useInView.js";

// Menunda render (dan unduhan chunk lazy di dalamnya) sampai wrapper mendekati layar.
// Sebelum itu, `fallback` (skeleton) menempati ruangnya agar halaman tidak melompat.
export default function LazyOnView({ id, fallback, rootMargin = "400px 0px", children }) {
  const [ref, inView] = useInView(rootMargin);

  return (
    <div id={id} ref={ref}>
      {inView ? <Suspense fallback={fallback}>{children}</Suspense> : fallback}
    </div>
  );
}
