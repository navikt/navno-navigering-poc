import * as React from "react";

function NyhetsIkon(props: any) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M3.5 3.5h11"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        clipRule="evenodd"
        d="M8.5 12.5h-5v-6h5v6z"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.5 8.5h3M10.5 10.5h4M10.5 12.5h4M3.5 14.5h11M3.5 16.5h11M3.5 18.5h11M19.5 5.5h2v15a1 1 0 11-2 0V2h-2v2"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.5 23.5h-17a3 3 0 01-3-3V.5h17v20a3 3 0 006 0v-17h-4"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default NyhetsIkon;
