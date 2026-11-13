import { memo, useEffect, useState } from "react";

const SVG_PROPS = {
  viewBox: "0 0 160 100",
  preserveAspectRatio: "xMidYMid slice",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.2,
  "aria-hidden": "true",
  focusable: "false",
};

function TerasScene() {
  return (
    <svg {...SVG_PROPS}>
      <path d="M0 78H160" />
      <rect x="58" y="18" width="44" height="60" />
      <rect x="64" y="24" width="32" height="48" />
      <circle cx="94" cy="50" r="1.6" fill="currentColor" />
      <path d="M44 78L34 100M116 78L126 100" />
    </svg>
  );
}

function TokoScene() {
  return (
    <svg {...SVG_PROPS}>
      <path d="M14 22V86M146 22V86M14 22H146M14 46H146M14 70H146M14 86H146" />
      <rect x="22" y="28" width="16" height="18" />
      <rect x="46" y="32" width="12" height="14" />
      <rect x="86" y="26" width="20" height="20" />
      <rect x="26" y="52" width="24" height="18" />
      <rect x="104" y="54" width="16" height="16" />
    </svg>
  );
}

function KantorScene() {
  return (
    <svg {...SVG_PROPS}>
      <path d="M0 84H160" />
      <rect x="14" y="58" width="56" height="6" />
      <path d="M20 64V84M64 64V84" />
      <rect x="30" y="40" width="22" height="14" />
      <rect x="92" y="58" width="56" height="6" />
      <path d="M98 64V84M142 64V84" />
      <rect x="108" y="40" width="22" height="14" />
    </svg>
  );
}

function GudangScene() {
  return (
    <svg {...SVG_PROPS}>
      <path d="M18 14V88M142 14V88M18 38H142M18 62H142M18 88H142" />
      <rect x="26" y="20" width="22" height="18" />
      <rect x="58" y="26" width="18" height="12" />
      <rect x="88" y="18" width="28" height="20" />
      <rect x="30" y="44" width="30" height="18" />
      <rect x="96" y="46" width="24" height="16" />
      <rect x="40" y="70" width="36" height="18" />
    </svg>
  );
}

const FEEDS = [
  { id: "teras", label: "CAM 01 Teras", Scene: TerasScene },
  { id: "toko", label: "CAM 02 Toko", Scene: TokoScene },
  { id: "kantor", label: "CAM 03 Kantor", Scene: KantorScene },
  { id: "gudang", label: "CAM 04 Gudang", Scene: GudangScene },
];

const pad = (value) => String(value).padStart(2, "0");

// Jam hidup. State-nya ada di komponen kecil ini saja, jadi hanya teks jam
// yang dirender ulang tiap detik, bukan seluruh hero.
function Timecode() {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <span>
      {`${pad(now.getDate())}/${pad(now.getMonth() + 1)}/${now.getFullYear()}  ${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`}
    </span>
  );
}

function MonitorWall() {
  return (
    <figure className="wall-figure">
      <div
        className="wall"
        role="img"
        aria-label="Ilustrasi layar pemantauan dengan empat kamera: teras, toko, kantor, dan gudang"
      >
        <div className="wall-bar">
          <span className="rec">
            <span className="rec-dot" aria-hidden="true" />
            REC
          </span>
          <Timecode />
        </div>
        <div className="wall-grid">
          {FEEDS.map(({ id, label, Scene }, index) => (
            <div className="feed" key={id} style={{ "--i": index }}>
              <Scene />
              <span className="feed-label">{label}</span>
            </div>
          ))}
        </div>
      </div>
      <figcaption className="wall-caption">
        Terhubung dari mana saja. Pantau area Anda lewat ponsel, kapan pun dibutuhkan.
      </figcaption>
    </figure>
  );
}

export default memo(MonitorWall);
