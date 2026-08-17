/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      colors: {
        teal: {
          DEFAULT: "#007a8a",
          600: "#006a79",
          700: "#005565",
          800: "#063b47",
          900: "#052b34",
        },
        lime: {
          DEFAULT: "#8fc220",
          600: "#7aa815",
          100: "#eef7d6",
        },
        ink: "#0f2a30",
        body: "#40565b",
        muted: "#6b8085",
        line: "#e3ebec",
      },
      fontFamily: {
        head: ["Poppins", "system-ui", "-apple-system", "Segoe UI", "sans-serif"],
        body: ["Inter", "system-ui", "-apple-system", "Segoe UI", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "14px",
        lg: "22px",
      },
      boxShadow: {
        sm: "0 1px 2px rgba(6, 59, 71, 0.05), 0 2px 8px rgba(6, 59, 71, 0.05)",
        DEFAULT: "0 4px 14px rgba(6, 59, 71, 0.06), 0 16px 40px rgba(6, 59, 71, 0.09)",
        lg: "0 10px 28px rgba(6, 59, 71, 0.08), 0 34px 68px rgba(6, 59, 71, 0.13)",
      },
      maxWidth: {
        container: "1180px",
      },
    },
  },
  plugins: [],
};
