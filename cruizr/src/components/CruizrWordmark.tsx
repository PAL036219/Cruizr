import React from "react";

interface CruizrWordmarkProps {
  className?: string;
  isLight?: boolean;
}

export function CruizrWordmark({ className = "h-8 w-auto", isLight = false }: CruizrWordmarkProps) {
  // Main letter stroke & text color
  const strokeColor = isLight ? "#FFFFFF" : "#0F172A";
  const subtextColor = isLight ? "rgba(255,255,255,0.7)" : "#64748B";
  const amberAccent = "#E06D3B";
  const sageAccent = "#88A698";

  return (
    <svg
      viewBox="0 0 710 205"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="CRUIZR - NEVER CRUISE ALONE"
      role="img"
    >
      {/* ================= 1. THE WORDMARK (C R U I Z R) ================= */}
      
      {/* ── Letter 1: C (The Curve / The Route) ── */}
      <g transform="translate(10, 0)">
        <path
          d="M 85,25 C 32,25 -2,58 -2,108 C -2,158 32,190 85,190"
          stroke={strokeColor}
          strokeWidth="20"
          strokeLinecap="round"
        />
        <circle cx="85" cy="25" r="9" fill={amberAccent} />
      </g>

      {/* ── Letter 2: R (The Rider Forward Stride) ── */}
      <g transform="translate(135, 0)">
        <line x1="0" y1="25" x2="0" y2="190" stroke={strokeColor} strokeWidth="20" strokeLinecap="round" />
        <path
          d="M 0,25 C 65,25 80,56 62,92 C 44,116 0,110 0,110"
          stroke={strokeColor}
          strokeWidth="20"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <line x1="22" y1="106" x2="68" y2="190" stroke={amberAccent} strokeWidth="20" strokeLinecap="round" />
      </g>

      {/* ── Letter 3: U (Unity Duo-Channel Bridge) ── */}
      <g transform="translate(265, 0)">
        <path
          d="M 0,25 L 0,118 C 0,190 85,190 85,118 L 85,25"
          stroke={strokeColor}
          strokeWidth="20"
          strokeLinecap="round"
        />
        <line x1="0" y1="88" x2="85" y2="88" stroke={sageAccent} strokeWidth="8" strokeLinecap="round" />
      </g>

      {/* ── Letter 4: I (Bike Headlight & Fork) ── */}
      <g transform="translate(400, 0)">
        {/* Headlight Halo & Amber Bulb */}
        <circle cx="0" cy="8" r="16" fill="#181A1D" stroke={strokeColor} strokeWidth="4.5" />
        <circle cx="0" cy="8" r="10" fill={amberAccent} />
        <line x1="-5" y1="8" x2="5" y2="8" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />

        {/* Fork Stem */}
        <line x1="0" y1="36" x2="0" y2="190" stroke={strokeColor} strokeWidth="20" strokeLinecap="round" />
      </g>

      {/* ── Letter 5: Z (Mountain Switchback) ── */}
      <g transform="translate(485, 0)">
        <line x1="-8" y1="25" x2="68" y2="25" stroke={strokeColor} strokeWidth="20" strokeLinecap="round" />
        <line x1="62" y1="32" x2="-2" y2="183" stroke={amberAccent} strokeWidth="20" strokeLinecap="round" />
        <line x1="-8" y1="190" x2="68" y2="190" stroke={strokeColor} strokeWidth="20" strokeLinecap="round" />
      </g>

      {/* ── Letter 6: R (Open Horizon Leg) ── */}
      <g transform="translate(615, 0)">
        <line x1="0" y1="25" x2="0" y2="190" stroke={strokeColor} strokeWidth="20" strokeLinecap="round" />
        <path
          d="M 0,25 C 65,25 80,56 62,92 C 44,116 0,110 0,110"
          stroke={strokeColor}
          strokeWidth="20"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M 22,106 L 56,176 L 80,176"
          stroke={sageAccent}
          strokeWidth="20"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}
