import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: [
      "dark",
      {
        finaloop: {
          primary: "#D1581F",
          secondary: "#453830",
          "base-100": "#F8F6F5",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
export default config;
