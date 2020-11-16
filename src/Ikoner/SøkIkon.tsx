import * as React from "react";

function SøkIkon(props: any) {
  return (
    <svg
      viewBox="-1 -1 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.844 14.136l9.01 9.01A.502.502 0 0123.5 24a.498.498 0 01-.353-.146l-9.01-9.01A8.45 8.45 0 018.5 17C3.813 17 0 13.187 0 8.5 0 3.813 3.813 0 8.5 0 13.187 0 17 3.813 17 8.5a8.446 8.446 0 01-2.156 5.636zM8.5 1C4.364 1 1 4.364 1 8.5S4.364 16 8.5 16 16 12.636 16 8.5 12.636 1 8.5 1z"
        fill="#3E3832"
      />
    </svg>
  );
}

export default SøkIkon;
