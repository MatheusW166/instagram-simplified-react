function Arrow() {
  return (
    <svg
      className="arrow"
      xmlns="http://www.w3.org/2000/svg"
      width="34"
      height="37"
      fill="none"
      viewBox="0 0 34 37"
    >
      <g filter="url(#filter0_d_11_35)">
        <path
          fill="#fff"
          d="M4 16c0 7.18 5.82 13 13 13s13-5.82 13-13S24.18 3 17 3 4 8.82 4 16zm16.086 0l-5.293-5.293a1 1 0 011.414-1.414l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L20.086 16z"
        ></path>
      </g>
      <defs>
        <filter
          id="filter0_d_11_35"
          width="40"
          height="40"
          x="-3"
          y="0"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dy="4"></feOffset>
          <feGaussianBlur stdDeviation="2"></feGaussianBlur>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_11_35"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_11_35"
            result="shape"
          ></feBlend>
        </filter>
      </defs>
    </svg>
  );
}

export default Arrow;
