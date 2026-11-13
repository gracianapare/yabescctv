import { memo, useEffect, useRef, useState } from "react";
import { unsplash } from "../lib/images.js";

// Gambar dengan loading="lazy", srcset responsif, kompresi dari server,
// dan skeleton yang tampil sampai gambar selesai dimuat.
function LazyImage({ photo, alt, widths, sizes, width = 1200, height = 900 }) {
  const imgRef = useRef(null);
  const [status, setStatus] = useState("loading");

  // Gambar yang sudah ada di cache browser bisa selesai sebelum onLoad terpasang.
  useEffect(() => {
    if (imgRef.current?.complete && imgRef.current.naturalWidth > 0) setStatus("loaded");
  }, []);

  const srcSet = widths.map((w) => `${unsplash(photo, w)} ${w}w`).join(", ");

  return (
    <span className={`lazy-img is-${status}`}>
      <img
        ref={imgRef}
        src={unsplash(photo, widths[Math.min(1, widths.length - 1)])}
        srcSet={srcSet}
        sizes={sizes}
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
        decoding="async"
        onLoad={() => setStatus("loaded")}
        onError={() => setStatus("error")}
      />
    </span>
  );
}

export default memo(LazyImage);
