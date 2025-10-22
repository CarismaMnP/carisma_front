import { CSSProperties } from "react";

export const ArrowIcon = ({ stroke = 'black', style }: { stroke?: string, style?: CSSProperties }) => {
  return (
    <svg style={style} width="13" height="22" viewBox="0 0 13 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.4142 0.707153L1.41418 10.7072L11.4142 20.7072" stroke={stroke} strokeWidth="2" />
    </svg>
  );
};
