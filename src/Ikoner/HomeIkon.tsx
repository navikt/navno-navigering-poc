import * as React from "react";

function HomeIkon(props: any) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M3.5 13.5v10h6v-7h5v7h6V14m-20-1L12 1.5 23.5 13M16 2.5h3.5V6"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        fill="none"
      />
    </svg>
  );
}

export default HomeIkon;
