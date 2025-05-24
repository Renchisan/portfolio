import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/styles/**/*.{css,scss}"
  ],
  theme: {
    extend: {
       animation: {
        blink: 'blink 1s step-start infinite',
        slidein: 'slidein 0.8s ease-out forwards',
        slideout: 'slideout 0.6s ease-out forwards',
        shine: 'shine 6s linear infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' }
        },
        slidein: {
          from: { transform: 'translateX(-30%)', opacity: '0' },
          to: { transform: 'translateX(0)', opacity: '1' }
        },
        slideout: {
          from: { transform: 'translateX(0)', opacity: '1' },
          to: { transform: 'translateX(-30%))', opacity: '1' }
        },
        shine: {
          '0%': {
            backgroundPosition: '200% center',
          },
          '30%': {
            backgroundPosition: '-100% center',
          },
          '100%': {
            backgroundPosition: '-100% center', // Hold the final state (pause)
          },

        },
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
} satisfies Config;
