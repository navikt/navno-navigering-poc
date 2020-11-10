import * as React from "react";

function FlereTemaIkon(props: any) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        clipRule="evenodd"
        d="M10.5 23.5h-6V.5h6v23zM16.5 23.5h-6v-15h6v15z"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.5 21.5h2M7.5 2.5v13"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        clipRule="evenodd"
        d="M8.5 21.5h-2v-4h2v4z"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.5 10.5v9M2.5 6.5v14"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        clipRule="evenodd"
        d="M.5 23.5h4v-20h-4v20zM23.404 22.75l-2.904.75-5-19.365 2.904-.75 5 19.365v0z"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default FlereTemaIkon;
