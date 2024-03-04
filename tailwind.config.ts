import type { Config } from "tailwindcss";

const { fontFamily } = require("tailwindcss/defaultTheme");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'regular': ['Barlow','sans-serif'],
        'vfont': ['var(--font-aclonica)', ...fontFamily.sans]
      },
      colors: {
        'darkpurple': 'rgb(56, 5, 56)',
        'vred': 'rgb(255, 17, 0)',
        'vpurple': 'rgb(102,16,102)',
        'vlightpurp': 'rgb(102, 31, 168)'
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
