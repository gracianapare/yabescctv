import { memo } from "react";

function Logo() {
  return (
    <svg viewBox="0 0 32 32" width="32" height="32" aria-hidden="true" focusable="false">
      <rect width="32" height="32" rx="8" fill="#d21624" />
      <circle cx="16" cy="16" r="8" fill="none" stroke="#fff" strokeWidth="3" />
      <circle cx="16" cy="16" r="3" fill="#fff" />
    </svg>
  );
}

export default memo(Logo);
