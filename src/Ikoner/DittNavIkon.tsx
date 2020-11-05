import * as React from "react";

function DittNavIkon(props: any) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        clipRule="evenodd"
        d="M6.5 17.5h-6v-9a3 3 0 016 0v9z"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.5 5.5h17a3 3 0 013 3v9h-17M13.5 17.5v6M2.5 15.5h2M4.5 5.5v-3"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        clipRule="evenodd"
        d="M7.5.5h-3v2h3v-2z"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default DittNavIkon;
