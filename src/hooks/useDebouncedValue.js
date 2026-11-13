import { useEffect, useState } from "react";

// Mengembalikan nilai terakhir setelah pengguna berhenti mengetik selama `delay` ms.
export function useDebouncedValue(value, delay = 250) {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debounced;
}
