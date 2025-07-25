import type { SVGProps } from "react";
const Cursor = (props: SVGProps<SVGSVGElement>) => (
  <div className="p-1.5 rounded-xl bg-[#242938]">
  <svg
    height={props.height}
    style={{
      flex: "none",
      lineHeight: 1,
    }}
    viewBox="0 0 24 24"
    width={props.width}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <title>{"Cursor"}</title>
    <path
      d="M11.925 24l10.425-6-10.425-6L1.5 18l10.425 6z"
      fill="url(#cursor_dark__lobe-icons-cursorundefined-fill-0)"
    />
    <path
      d="M22.35 18V6L11.925 0v12l10.425 6z"
      fill="url(#cursor_dark__lobe-icons-cursorundefined-fill-1)"
    />
    <path
      d="M11.925 0L1.5 6v12l10.425-6V0z"
      fill="url(#cursor_dark__lobe-icons-cursorundefined-fill-2)"
    />
    <path d="M22.35 6L11.925 24V12L22.35 6z" fill="#555" />
    <path d="M22.35 6l-10.425 6L1.5 6h20.85z" fill="#ffff" />
    <defs>
      <linearGradient
        gradientUnits="userSpaceOnUse"
        id="cursor_dark__lobe-icons-cursorundefined-fill-0"
        x1={11.925}
        x2={11.925}
        y1={12}
        y2={24}
      >
        <stop offset={0.16} stopColor="#ffff" stopOpacity={0.39} />
        <stop offset={0.658} stopColor="#ffff" stopOpacity={0.8} />
      </linearGradient>
      <linearGradient
        gradientUnits="userSpaceOnUse"
        id="cursor_dark__lobe-icons-cursorundefined-fill-1"
        x1={22.35}
        x2={11.925}
        y1={6.037}
        y2={12.15}
      >
        <stop offset={0.182} stopColor="#ffff" stopOpacity={0.31} />
        <stop offset={0.715} stopColor="#ffff" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        gradientUnits="userSpaceOnUse"
        id="cursor_dark__lobe-icons-cursorundefined-fill-2"
        x1={11.925}
        x2={1.5}
        y1={0}
        y2={18}
      >
        <stop stopColor="#ffff" stopOpacity={0.6} />
        <stop offset={0.667} stopColor="#ffff" stopOpacity={0.22} />
      </linearGradient>
    </defs>
  </svg>
  </div>
);
export default Cursor;
