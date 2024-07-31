import React from "react";

const Icons = ({
  string,
  color = undefined,
  component = undefined,
  height = height,
  width = width,
}) => {
  if (string === "calender") {
    return (
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 24 24"
        height={height}
        width={width}
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Calendar">
          <path
            d="M18.438,4.954H16.5c0-0.346,0-0.691,0-1.036c0-0.124,0-0.248,0-0.372c0-0.262-0.23-0.512-0.5-0.5
            c-0.271,0.012-0.5,0.22-0.5,0.5c0,0.469,0,0.939,0,1.408h-7c0-0.346,0-0.691,0-1.036c0-0.124,0-0.248,0-0.372
            c0-0.262-0.23-0.512-0.5-0.5c-0.271,0.012-0.5,0.22-0.5,0.5c0,0.469,0,0.939,0,1.408H5.562c-1.378,0-2.5,1.122-2.5,2.5v11
            c0,1.379,1.122,2.5,2.5,2.5h12.875c1.379,0,2.5-1.121,2.5-2.5v-11C20.938,6.076,19.816,4.954,18.438,4.954z M5.562,5.954H7.5
            c0,0.073,0,0.147,0,0.22c0,0.124,0,0.248,0,0.372c0,0.262,0.23,0.512,0.5,0.5c0.271-0.012,0.5-0.22,0.5-0.5c0-0.197,0-0.394,0-0.592
            h7c0,0.073,0,0.147,0,0.22c0,0.124,0,0.248,0,0.372c0,0.262,0.23,0.512,0.5,0.5c0.271-0.012,0.5-0.22,0.5-0.5
            c0-0.197,0-0.394,0-0.592h1.937c0.827,0,1.5,0.673,1.5,1.5v1.584H4.062V7.454C4.062,6.627,4.735,5.954,5.562,5.954z M18.438,19.954
            H5.562c-0.827,0-1.5-0.673-1.5-1.5v-8.416h15.875v8.416C19.938,19.281,19.265,19.954,18.438,19.954z"
          ></path>
        </g>
      </svg>
    );
  } else if (string === "login") {
    return (
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 512 512"
        height="2em"
        width="2em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M256 48C148.5 48 60.1 129.5 49.2 234.1c-.8 7.2-1.2 14.5-1.2 21.9 0 7.4.4 14.7 1.2 21.9C60.1 382.5 148.5 464 256 464c114.9 0 208-93.1 208-208S370.9 48
           256 48zm135.8 326.1c-22.7-8.6-59.5-21.2-82.4-28-2.4-.7-2.7-.9-2.7-10.7 0-8.1 3.3-16.3 6.6-23.3 3.6-7.5 7.7-20.2 9.2-31.6 4.2-4.9 10-14.5 13.6-32.9 3.2-16.2
            1.7-22.1-.4-27.6-.2-.6-.5-1.2-.6-1.7-.8-3.8.3-23.5 3.1-38.8 1.9-10.5-.5-32.8-14.9-51.3-9.1-11.7-26.6-26-58.5-28h-17.5c-31.4 2-48.8 16.3-58 28-14.5 18.5-16.9 40.8-15
             51.3 2.8 15.3 3.9 35 3.1 38.8-.2.7-.4 1.2-.6 1.8-2.1 5.5-3.7 11.4-.4 27.6 3.7 18.4 9.4 28 13.6 32.9 1.5 11.4 5.7 24 9.2 31.6 2.6 5.5 3.8 13 3.8 23.6 0 9.9-.4 10-2.6 10.7-23.7
              7-58.9 19.4-80 27.8C91.6 341.4 76 299.9 76 256c0-48.1 18.7-93.3 52.7-127.3S207.9 76 256 76c48.1 0 93.3 18.7 127.3 52.7S436 207.9 436 256c0 43.9-15.6 85.4-44.2 118.1z"
        ></path>
      </svg>
    );
  }
};

export default Icons;
