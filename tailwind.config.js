/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./src/components/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        heading1: ["40px", { fontWeight: "800" }],
        heading2: ["32px", { fontWeight: "700" }],
        heading3: ["28px", { fontWeight: "700" }],
        heading4: ["26px", { fontWeight: "600" }],
        heading5: ["24px", { fontWeight: "600" }],
        heading6: ["18px", { fontWeight: "600" }],
        paragraph1: ["16px", { fontWeight: "800" }],
        paragraph2: ["16px", { fontWeight: "400" }],
        paragraph3: ["14px", { fontWeight: "800" }],
        paragraph4: ["14px", { fontWeight: "400" }],
        paragraph5: ["12px", { fontWeight: "800" }],
        paragraph6: ["12px", { fontWeight: "400" }],
      },
      colors: {
        primary: "#E7576E",
        secondary: "#F9AB60",
        text1: "#333333",
        text2: "#FFFFFF",
        text3: "#F2F2F2",
        text4: "#ADADAD",
        text5: "#6F6F6F",
        background1: "#FFFFFF",
        background2: "#630661",
        background3: "#220D50",
      },
      fontFamily: {
        nunito: "Nunito",
      },
      animation: {
        list1: "listAnimate 2500ms ease-in-out infinite 0.0s",
        list2: "listAnimate 2500ms ease-in-out infinite 0.1s",
        list3: "listAnimate 2500ms ease-in-out infinite 0.2s",
        list4: "listAnimate 2500ms ease-in-out infinite 0.3s",
        list5: "listAnimate 2500ms ease-in-out infinite 0.4s",
        list6: "listAnimate 2500ms ease-in-out infinite 0.5s",
        list7: "listAnimate 2500ms ease-in-out infinite 0.6s",
        weatherIcon: "weatherIcon 2500ms ease-in-out infinite",
      },
      keyframes: {
        listAnimate: {
          "0%, 100%": { transform: "translateY(0%)" },
          "50%": { transform: "translateY(-10%)" },
        },
        weatherIcon: {
          "0%, 100%": { transform: "translateX(0%)" },
          "50%": { transform: "translateX(10%)" },
        },
      },
    },
  },
  plugins: [],
};
