import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "custom-green-0.2": "rgba(233, 241, 235, 0.2)",
        "custom-green-0.4": "rgba(233, 241, 235, 0.4)",
        "custom-green": "#008A27",
        "custom-black-0.1": "rgba(0, 0, 0, .1)",
      },
    },
  },
  plugins: [],
};
export default config;
