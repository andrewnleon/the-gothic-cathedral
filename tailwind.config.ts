import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      utilities: {
        ".no-scroll": {
          overflow: "hidden",
          position: "fixed", // This helps especially on iOS devices
          width: "100%", // To prevent width changes when the scrollbar disappears
        },
      },
      fontFamily: {
        primary: ["Roboto", "sans-serif"], // Roboto as the primary, sans-serif as the fallback.
      },
      backgroundColor: {
        body: "#000", // Your body background color
      },
      colors: {
        primary: {
          DEFAULT: "#7B3B07",
        },
        secondary: {
          DEFAULT: "#d2ac87",
        },
        tertiary: {
          DEFAULT: "#454545",
        },
        accent: {
          DEFAULT: "#79A9C3",
        },
      },
      fontSize: {
        // Custom font sizes matching your base styles
        "7xl": "56px",
        "6xl": "48px",
        "5xl": "40px",
        "4xl": "32px",
        "3xl": "24px",
        "2xl": "20px",
      },
      lineHeight: {
        tight: "0.875", // Default is usually around 1.25
        normal: "1.5", // Default is usually 1.5
        relaxed: "1.75", // Default is usually around 1.625
      },
      fontWeight: {
        light: "300",
      },
      letterSpacing: {
        wide: "0.7px",
      },
      container: {
        center: true, // this centers the container horizontally
        screens: {
          sm: "100%",
          md: "100%",
          lg: "1024px",
          xl: "1280px",
        },
        // Here, we use padding to handle the responsive nature of the container
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
        },
      },
    },
  },
  plugins: [],
};
export default config;