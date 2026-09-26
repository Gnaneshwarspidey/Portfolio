/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ['class', "class"],
  theme: {
  	extend: {
  		colors: {
  			dark: {
  				'600': '#71717a',
  				'700': '#52525b',
  				'750': '#3f3f46',
  				'800': '#27272a',
  				'850': '#18181b',
  				'900': '#121215',
  				'950': '#09090b'
  			},
  			surface: {
  				base: '#09090b',
  				card: '#121215',
  				elevated: '#18181b',
  				border: 'rgba(255, 255, 255, 0.08)',
  				'border-hover': 'rgba(245, 158, 11, 0.25)'
  			},
  			brand: {
  				amber: '#f59e0b',
  				gold: '#fbbf24',
  				emerald: '#10b981',
  				violet: '#a855f7',
  				blue: '#3b82f6'
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: 'hsl(var(--destructive))',
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  		},
  		fontFamily: {
  			sans: [
  				'Inter',
  				'system-ui',
  				'-apple-system',
  				'BlinkMacSystemFont',
  				'Segoe UI',
  				'Roboto',
  				'sans-serif'
  			],
  			mono: [
  				'JetBrains Mono',
  				'Fira Code',
  				'monospace'
  			]
  		},
  		boxShadow: {
  			'card': '0 12px 30px -10px rgba(0, 0, 0, 0.6)',
  			'card-hover': '0 20px 40px -12px rgba(0, 0, 0, 0.75)',
  		},
  		animation: {
  			'fade-in': 'fadeIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards'
  		},
  		keyframes: {
  			fadeIn: {
  				'0%': {
  					opacity: '0',
  					transform: 'translateY(10px)'
  				},
  				'100%': {
  					opacity: '1',
  					transform: 'translateY(0)'
  				}
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}
