/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx,mdx}"],

  theme: {
    extend: {
      fontFamily: {
        sans: [
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          "sans-serif",
        ],
        mono: [
          '"JetBrains Mono"',
          '"SF Mono"',
          '"Fira Code"',
          "ui-monospace",
          "Consolas",
          "monospace",
        ],
      },
    },
  },
  plugins: [
    require("daisyui"),
    function ({ addComponents }) {
      addComponents({
        ".console-panel": {
          "@apply border border-base-300 bg-base-200/70 rounded-md text-base-content": {},
        },
      });
    },
  ],
  daisyui: {
    themes: [
      {
        /* Atom One Dark–style IDE palette */
        console: {
          primary: "#61afef",
          secondary: "#c678dd",
          accent: "#d19a66",
          neutral: "#5c6370",
          "base-100": "#282c34",
          "base-200": "#21252b",
          "base-300": "#3e4451",
          "base-content": "#abb2bf",
          info: "#56b6c2",
          success: "#98c379",
          warning: "#e5c07b",
          error: "#e06c75",
        },
      },
      {
        consoleHi: {
          primary: "#7ab8f0",
          secondary: "#d19ae6",
          accent: "#e0a878",
          neutral: "#6b7280",
          "base-100": "#1a1d24",
          "base-200": "#14161c",
          "base-300": "#4b5263",
          "base-content": "#e6e8ef",
          info: "#6bc4d0",
          success: "#a8d97a",
          warning: "#edd28a",
          error: "#f08898",
        },
      },
    ],
    darkTheme: "console",
  },
};
