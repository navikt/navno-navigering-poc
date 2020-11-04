import * as React from "react"

function PensjonIkon(props: any) {
  return (
    <svg viewBox="0 0 24 23" fill="none" {...props}>
      <path
        clipRule="evenodd"
        d="M21.5 5.56a5 5 0 11-10.001 0 5 5 0 0110.001 0v0z"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.5 4.56a.5.5 0 100 1 .5.5 0 000-1z"
        fill="#000"
      />
      <path
        d="M23.5 22.5v-16"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        clipRule="evenodd"
        d="M16.689 20.516a2.56 2.56 0 01-2.56-2.56c0-2.643-3.107-3.211-4.478-1.73-1.368-1.481-4.479-.913-4.479 1.73A2.559 2.559 0 01.5 19.396c1.92 4.314 7.297 3.515 9.151.665 1.853 2.85 7.23 3.649 9.154-.665a2.554 2.554 0 01-2.116 1.12v0z"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.5 5.56a3 3 0 01-3 3"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default PensjonIkon
