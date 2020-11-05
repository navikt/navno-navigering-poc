import * as React from "react";

function BarnIkon(props: any) {
  return (
    <svg viewBox="0 0 13 24" fill="none" {...props}>
      <path
        clipRule="evenodd"
        d="M6.5 7.5a3.5 3.5 0 100-7 3.5 3.5 0 000 7v0zM6.5 9C3.462 9 1 13.5 1 18.5h3.5v5h4v-5H12c0-5-2.463-9.5-5.5-9.5v0z"
        stroke="#000"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default BarnIkon;
