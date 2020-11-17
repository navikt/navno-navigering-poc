import * as React from "react";

function TilOgFraIkon(props: any) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        clipRule="evenodd"
        d="M22.5 1.5a2.457 2.457 0 00-3.5 0l-3 3C4 4.5.5 4 .5 7 .5 9.772 4.201 8.529 11 9.5l-6 6H2.5a2 2 0 00-2 2c0 1.834 1.571 1.857 3.5 2.5.613 1.843.666 3.5 2.5 3.5a2 2 0 002-2V19l6-6c.973 6.818-.271 10.5 2.5 10.5 3.362 0 2.5-3.086 2.5-15.5l3-3a2.458 2.458 0 000-3.5v0z"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default TilOgFraIkon;
