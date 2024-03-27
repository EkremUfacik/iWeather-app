/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "blue-light": "#8FB2F5",
        gray: {
          100: "#FAFAFA",
          200: "#BFBFD4",
          300: "#ABABC4",
          400: "#7F7F98",
          500: "#3B3B54",
          600: "#22222F",
          700: "#1C1C27",
          800: "#16161F",
          900: "#13131A",
        },
        "input-gray": "#1E1E29",
      },

      fontSize: {
        xs: [
          "12px",
          {
            lineHeight: "140%",
          },
        ],
        "xs-bold": [
          "12px",
          {
            lineHeight: "140%",
            fontWeight: "700",
          },
        ],
        sm: [
          "14px",
          {
            lineHeight: "140%",
          },
        ],
        md: [
          "16px",
          {
            lineHeight: "140%",
          },
        ],
        lg: [
          "20px",
          {
            lineHeight: "140%",
          },
        ],
        "heading-xs": [
          "14px",
          {
            lineHeight: "140%",
            fontWeight: "700",
          },
        ],
        "heading-sm": [
          "16px",
          {
            lineHeight: "140%",
            fontWeight: "700",
          },
        ],
        "heading-md": [
          "20px",
          {
            lineHeight: "140%",
            fontWeight: "700",
          },
        ],
        "heading-lg": [
          "32px",
          {
            lineHeight: "140%",
            fontWeight: "700",
          },
        ],
        "heading-xl": [
          "48px",
          {
            lineHeight: "120%",
            fontWeight: "800",
          },
        ],
        "heading-hg": [
          "96px",
          {
            lineHeight: "100%",
            fontWeight: "800",
          },
        ],
      },
    },
  },
  plugins: [],
};
