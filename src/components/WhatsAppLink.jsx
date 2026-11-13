import { memo } from "react";
import { buildWhatsAppUrl } from "../lib/whatsapp.js";

// Tautan WhatsApp dengan pesan awal. Props berupa string, jadi memo efektif.
function WhatsAppLink({ message, className, srText = " (membuka WhatsApp di tab baru)", children }) {
  return (
    <a className={className} href={buildWhatsAppUrl(message)} target="_blank" rel="noopener noreferrer">
      {children}
      <span className="sr-only">{srText}</span>
    </a>
  );
}

export default memo(WhatsAppLink);
