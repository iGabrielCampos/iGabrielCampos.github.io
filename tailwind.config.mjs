import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        surface: {
          light: '#f8fafc',
          DEFAULT: '#1c1c1a',
          dark: '#141413',
          subtle: {
            light: '#f1f5f9',
            dark: '#1a1a18',
          },
          card: {
            light: '#ffffff',
            dark: '#1c1c1a',
          },
          border: {
            light: '#e2e8f0',
            dark: '#2c2c28',
          },
        },
        accent: {
          light: '#0284c7', // Sky blue vibrante no modo claro
          DEFAULT: '#fb923c', // Ocre/tangerina técnica
          dark: '#fb923c',
        },
        // Strict project status badge palette
        status: {
          functional: {
            light: {
              bg: '#ecfdf5', // emerald-50
              text: '#065f46', // emerald-800
              border: '#6ee7b7', // emerald-300
              dot: '#059669', // emerald-600
            },
            dark: {
              bg: 'rgba(6, 78, 59, 0.35)', // emerald-900/35
              text: '#6ee7b7', // emerald-300
              border: '#047857', // emerald-700
              dot: '#34d399', // emerald-400
            },
          },
          development: {
            light: {
              bg: '#fffbeb', // amber-50
              text: '#92400e', // amber-800
              border: '#fcd34d', // amber-300
              dot: '#d97706', // amber-600
            },
            dark: {
              bg: 'rgba(120, 53, 15, 0.35)', // amber-900/35
              text: '#fcd34d', // amber-300
              border: '#b45309', // amber-700
              dot: '#fbbf24', // amber-400
            },
          },
          planning: {
            light: {
              bg: '#eef2ff', // indigo-50
              text: '#3730a3', // indigo-800
              border: '#a5b4fc', // indigo-300
              dot: '#4f46e5', // indigo-600
            },
            dark: {
              bg: 'rgba(49, 46, 129, 0.35)', // indigo-900/35
              text: '#a5b4fc', // indigo-300
              border: '#4338ca', // indigo-700
              dot: '#818cf8', // indigo-400
            },
          },
          exercise: {
            light: {
              bg: '#f1f5f9', // slate-100
              text: '#334155', // slate-700
              border: '#cbd5e1', // slate-300
              dot: '#64748b', // slate-500
            },
            dark: {
              bg: 'rgba(30, 41, 59, 0.45)', // slate-800/45
              text: '#cbd5e1', // slate-300
              border: '#475569', // slate-600
              dot: '#94a3b8', // slate-400
            },
          },
        },
      },
      fontFamily: {
        display: [
          '"Plus Jakarta Sans"',
          'system-ui',
          '-apple-system',
          'sans-serif',
        ],
        sans: [
          '"Plus Jakarta Sans"',
          'system-ui',
          '-apple-system',
          'sans-serif',
        ],
        mono: [
          '"JetBrains Mono"',
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          'monospace',
        ],
      },
      maxWidth: {
        prose: '50ch',
      },
    },
  },
  plugins: [typography],
};
