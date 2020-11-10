import * as React from "react";

function NedsattFunksjonIkon(props: any) {
  return (
    <svg viewBox="0 0 22 15" fill="none" {...props}>
      <path
        d="M6.92 6.76l9.604-5.51a1.5 1.5 0 012.048.549"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.082 6.76L5.48 1.25a1.5 1.5 0 00-2.048.549"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        clipRule="evenodd"
        d="M9.502 10.5a4 4 0 11-8 0 4 4 0 018 0v0zM12.502 10.5a4 4 0 108 0 4 4 0 00-8 0v0z"
        strokeLinejoin="round"
      />
      <path d="M9.502 10.5a1.5 1.5 0 013 0" strokeLinejoin="round" />
      <path
        d="M1.501 10.714h-1M20.501 10.714h1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default NedsattFunksjonIkon;
