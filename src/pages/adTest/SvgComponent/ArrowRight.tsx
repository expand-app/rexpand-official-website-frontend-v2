import { Box } from "@mui/material";

interface ArrowRightProps {
  svgColor: string;
}

const ArrowRight: React.FC<ArrowRightProps> = ({ svgColor = "red" }) => {
  return (
    <Box sx={{ color: svgColor }}>
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_1348_4765)">
          <path
            d="M40 26.6667C40 26.2246 39.8244 25.8007 39.5118 25.4882C39.1993 25.1756 38.7754 25 38.3333 25H1.66667C1.44778 25 1.23102 25.0431 1.02878 25.1268C0.826546 25.2105 0.64278 25.3333 0.487991 25.4881C0.333199 25.6428 0.210411 25.8266 0.126637 26.0288C0.0428619 26.231 -0.000259399 26.4478 -0.000259399 26.6667C-0.000259399 26.8856 0.0428619 27.1023 0.126637 27.3045C0.210411 27.5068 0.333199 27.6905 0.487991 27.8453C0.64278 28 0.826546 28.1228 1.02878 28.2065C1.23102 28.2903 1.44778 28.3334 1.66667 28.3333H38.3333C38.7754 28.3333 39.1993 28.1577 39.5118 27.8452C39.8244 27.5326 40 27.1087 40 26.6667Z"
            fill="currentColor"
          />
          <path
            d="M39.5117 27.8449C39.8241 27.5323 39.9996 27.1085 39.9996 26.6665C39.9996 26.2246 39.8241 25.8007 39.5117 25.4882L26.1783 12.1549C25.864 11.8513 25.443 11.6833 25.006 11.6871C24.569 11.6909 24.151 11.8662 23.842 12.1752C23.5329 12.4842 23.3577 12.9022 23.3539 13.3392C23.3501 13.7762 23.5181 14.1972 23.8217 14.5115L37.155 27.8449C37.4675 28.1573 37.8914 28.3328 38.3333 28.3328C38.7753 28.3328 39.1991 28.1573 39.5117 27.8449Z"
            fill="currentColor"
          />
        </g>
        <defs>
          <clipPath id="clip0_1348_4765">
            <rect
              width="40"
              height="40"
              fill="white"
              transform="matrix(-1 0 0 1 40 0)"
            />
          </clipPath>
        </defs>
      </svg>
    </Box>
  );
};

export default ArrowRight;