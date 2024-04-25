export default {
  darkMode: "selector",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "open-sans": '"Open Sans", sans-serif',
      },
    },
  },
  plugins: [require("daisyui")],
};
