module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  mode: "jit",
  darkMode: "class", // or 'media' or 'class'
  important: true,
  theme: {
    extend: {
      keyframes: {
        "fade-in": {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
      },
      animation: {
        "spin-slow": "spin 1.5s linear infinite",
        "fade-in-slow": "fade-in 0.8s ease",
      },
      inset: {
        "1/5": "20%",
        "1/6": "10%",
      },
      maxWidth: {
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
      },
      borderWidth: {
        3: "3px",
      },
      inset: {
        15: "3.75rem",
        18: "4.5rem",
        22: "5.5rem",
        26: "6.5rem",
        30: "7.5rem",
        31: "7.75rem",
        33: "8.25rem",
        34: "8.5rem",
        38: "9.5rem",
      },
      height: {
        15: "3.75rem",
        17: "4.25rem",
        18: "4.5rem",
        19: "4.75rem",
        26: "6.5rem",
        30: "7.5rem",
        42: "10.5rem",
      },
      width: {
        18: "4.5rem",
        15: "3.75rem",
        30: "7.5rem",
        "80vw": "80vw",
      },
      scale: {
        55: ".55",
        60: ".6",
        65: ".65",
        70: ".7",
        85: ".85",
        115: "1.15",
        120: "1.2",
      },
      rotate: {
        44: "68.4deg",
        12: "154.8deg",
        24: "226.8deg",
      },
      padding: {
        "1/2": "50%",
      },
      transitionProperty: {
        visibility: "visibility",
      },
      boxShadow: {
        round: "0 0px 30px -15px rgba(0, 0, 0, 0.25)",
        color: "0 0px 15px 0px rgba(250, 250, 250, 0.5)",
        color_blue: "0 0px 20px 0px rgba(96, 165, 250, 0.7)",
        color_pink: "0 0px 20px 0px rgba(236, 72, 153, 0.7)",
        color_pink_focus: "0 0px 20px 3px rgba(236, 72, 153, 1)",
        subtle: "1px 2px 10px 0px rgba(250, 250, 250, 0.15)",
        colorbottom: "0 0px 40px 0px rgba(250, 250, 250, 0.1)",
        button: "0 0px 8px 0px rgba(250, 250, 250, 0.4)",
        dark: "0 0px 40px 0px rgba(0, 0, 0, 0.1)",
        white: "rgba(250, 250, 250, 0.25) 10px 10px 50px",
      },
      fontFamily: {
        // 'sans': ['Quicksand', 'sans-serif'],
        // 'sans': ['Montserrat', 'sans-serif'],
        anton: ["anton", "sans-serif"],
        sans: ["Alterwave", "sans-serif"],
        prompt: ["Prompt", "sans-serif"],
        lighters: ["Lighters", "sans-serif"],
        inter: ["Inter",  "sans-serif"]
      },
      fontSize: {
        xxs: "0.5rem",
      },
      transitionDuration: {
        2000: "2000ms",
      },
      padding: {
        full: "100%",
      },
      colors: {
        grey: {
          darkest: "#101010",
          dark: "#3c4858",
          DEFAULT: "#c0ccda",
          light: "#e0e6ed",
          lightest: "#f9fafc",
        },
        "pink-reco": "#F958B1",
      },
    },
    screens: {
      xs: "400px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  variants: {
    extend: {
      borderWidth: ["hover"],
      backgroundImage: ["hover"],
      grayscale: ["hover"],
      zIndex: ["hover"],
      opactiy: ["last"],
      backgroundColor: ["checked"],
    },
  },
  plugins: [],
};
