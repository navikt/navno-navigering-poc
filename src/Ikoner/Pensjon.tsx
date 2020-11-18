import * as React from "react";

function PensjonIkon(props: any) {
  return (
    <svg
      viewBox="0 0 25 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11.513 5.018a7.477 7.477 0 015 1.482M23.513 8.5a2 2 0 01-2 2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        clipRule="evenodd"
        d="M12.013 2.5c-.85 0-1.67.104-2.454.281a3.494 3.494 0 00-4.796-1.309 3.503 3.503 0 011.715 2.537C4.383 5.276 2.923 7.24 2.587 9.5H.513v4H3.21c1.41 2.931 4.818 5 8.803 5 5.247 0 9.5-3.581 9.5-8 0-4.417-4.253-8-9.5-8v0z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        clipRule="evenodd"
        d="M6.513 9a.5.5 0 11-1 0 .5.5 0 011 0v0z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.513 17.766V21M16.513 17.734V21"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default PensjonIkon;
