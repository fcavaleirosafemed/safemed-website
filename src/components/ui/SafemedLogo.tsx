interface SafemedLogoProps {
  className?: string
  color?: string
}

export function SafemedLogo({ className = 'h-9 w-auto', color = '#1a7fa8' }: SafemedLogoProps) {
  return (
    <svg
      viewBox="0 0 350 69"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Safemed"
    >
      {/* Geometric Heart */}
      <g stroke={color} strokeWidth="1.8" strokeLinejoin="round" fill="none">
        {/* Outer shape */}
        <path d="M34.5 62L6 34L12 12L28 6L34.5 14L41 6L57 12L63 34L34.5 62Z" />
        {/* Inner structure lines */}
        <path d="M28 6L20 22L34.5 14L49 22L41 6" />
        <path d="M12 12L20 22L6 34" />
        <path d="M57 12L49 22L63 34" />
        <path d="M20 22L26 38L34.5 14L43 38L49 22" />
        <path d="M6 34L26 38L34.5 62L43 38L63 34" />
        <path d="M26 38L34.5 48L43 38" />
        <path d="M20 22L34.5 28L49 22" />
        <path d="M34.5 28L26 38" />
        <path d="M34.5 28L43 38" />
        <path d="M34.5 48L34.5 62" />
      </g>

      {/* SAFEMED text */}
      <g fill={color}>
        {/* S */}
        <path d="M98 47.5c0 6.2-4.8 10.5-12.5 10.5-7.2 0-12.2-3.8-12.8-10h6.5c.5 3 3 4.8 6.3 4.8 3.6 0 6-1.8 6-4.8 0-3-2-4.5-6.5-5.5l-2.5-.6c-6-1.4-9.2-4.8-9.2-9.8 0-5.8 4.8-10 11.8-10 6.8 0 11.5 3.8 12 9.5h-6.3c-.5-2.6-2.8-4.3-5.8-4.3-3.2 0-5.5 1.8-5.5 4.5s2 4.2 6 5l2.5.6c6.5 1.5 10 4.8 10 9.6z" />
        {/* A */}
        <path d="M119.5 57.5h-6.8l-2.2-7h-12l-2.2 7h-6.5L102.5 23h7l10 34.5zM105 33l-4.2 13h8.4L105 33z" />
        {/* F */}
        <path d="M124 57.5V23h20v5.2h-13.8v9h12.5v5h-12.5v15.3H124z" />
        {/* E */}
        <path d="M148 57.5V23h20.5v5.2h-14.3v9h13v5h-13v10h14.8v5.3H148z" />
        {/* M */}
        <path d="M175 57.5V23h8.5l7 22.5L197.5 23h8.5v34.5h-6V33l-7.2 24.5h-5L181 33v24.5h-6z" />
        {/* E */}
        <path d="M212 57.5V23h20.5v5.2h-14.3v9h13v5h-13v10h14.8v5.3H212z" />
        {/* D */}
        <path d="M238 57.5V23h11.5c9.5 0 15.5 6.5 15.5 17.2S259 57.5 249.5 57.5H238zm6.2-5.2h5c6.2 0 9.5-4.5 9.5-12s-3.3-12-9.5-12h-5v24z" />
      </g>
    </svg>
  )
}
