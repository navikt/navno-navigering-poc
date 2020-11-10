import * as React from "react";

function KlageIkon(props: any) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M10 17.47c-1.041-.058-2.147-.21-3-.47l-5.5 2.5 2-4.5c-1.93-1.543-3-3.623-3-6C.5 4.306 5.164.5 10.918.5S21.5 4.306 21.5 9c0 .523-.059 1.034-.171 1.53"
        strokeLinejoin="round"
      />
      <path
        clipRule="evenodd"
        d="M23.5 23.5h-12l6-12 6 12v0z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.5 16.41v3.271"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.5 20.774a.544.544 0 10-.002 1.088.544.544 0 00.002-1.088z"
        fill="#000"
      />
    </svg>
  );
}

export default KlageIkon;
