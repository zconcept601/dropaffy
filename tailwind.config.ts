module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef6ff',
          100: '#dbeafe',
          500: '#123d8c',
          600: '#0f2d68',
          700: '#0b1f3a'
        },
        accent: {
          400: '#2cd4bf',
          500: '#18b7a5'
        },
        neutral: {
          50: '#f8fafc',
          100: '#eef2f7',
          200: '#dfe7f2',
          300: '#c9d3e2',
          500: '#64748b',
          700: '#334155',
          900: '#0f172a'
        }
      },
      boxShadow: {
        soft: '0 20px 45px -18px rgba(15, 31, 59, 0.24)'
      },
      borderRadius: {
        '4xl': '2rem'
      }
    }
  },
  plugins: []
};
