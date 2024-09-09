import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: '#502a2a',
        'pastel-orange': '#FFA351', 
        'peach': '#FFBE7B',
        'custard': '#EED971',
      },
      perspective: {
        '1000': '1000px',
      },
      rotate: {
        'y-10': 'rotateY(10deg)',
        'x-10': 'rotateX(10deg)',
      },
      scale: {
        '105': '1.05',
      },
    },
  },
  plugins: [],
};

export default config;
