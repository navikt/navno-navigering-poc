import * as React from "react";

function KontaktIkon(props: any) {
  return (
    <svg
      viewBox="0 0 24 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        clipRule="evenodd"
        d="M21 1.502c1.381.283 2.5 1.591 2.5 3v1.5c0 1.093-.907 2-2 2h-3c-1.092 0-2-.907-2-2v-1a46.029 46.029 0 00-9 0v1c0 1.093-.908 2-2 2h-3c-1.093 0-2-.907-2-2v-1.5c0-1.409 1.119-2.717 2.5-3a44.978 44.978 0 0118 0v0zM21.5 20.502h-19v-3c0-4.4 3.6-8 8-8h3c4.4 0 8 3.6 8 8v3z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.5 7.502v2M13.5 7.502v2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        clipRule="evenodd"
        d="M15.5 15.002c0 1.934-1.566 3.5-3.5 3.5a3.5 3.5 0 113.5-3.5v0z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default KontaktIkon;
