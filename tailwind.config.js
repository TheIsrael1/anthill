/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [ "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    screens: {
      xs: '475px',
      sm: '640px',
      md: '768px',
      xm: '900px',
      lg: '1024px',
      xl: '1280px',
    },
    fontFamily: {
      sans: [ 'Public Sans', 'sans-serif'],
      inter: ['Inter', 'sans-serif'],
      mukta: ['Mukta', 'sans-serif']
    },
    container: {
      center: true,
      screens: {
        xl: '1920px',
      }
    },
    extend: {
      padding: {
        'container-lg': '5rem',
        'container-base': '1.5rem'
      },
      margin: {
        'container-lg': '5rem',
        'container-base': '1.5rem'
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        white: '#ffffff',
        primary: {
          light: 'rgba(102, 108, 255, 0.12)',
          1: '#696CFF',
          2: '#8082FF',
          3: '#6062E8',
          4: '#5456CC',
          6: 'rgba(102, 108, 255, 0.05)',
          7: 'rgba(102, 108, 255, 0.5)',
          8: '#0B2653',
          9: '#32475C',
          10: '#E9E9FF',
          11: '#011029',
          12: ' #32475C',
          13: '#ECECFF',
          14: '#0C0C1D',
          15: '#F5F5F9',
          16: '#070712',
          17: 'rgba(125, 65, 225, 0.25)',
          18: '#7D41E1',
          19: '#0649AC',
          20: '#0E1330',
          21: '#F8F9FD',
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          light: 'rgba(109, 120, 141, 0.12)',
          1: '#8592A3',
          2: '#97A2B1',
          3: '#646E7A',
          4: '#596274',
          5: 'rgba(109, 120, 141, 0.05)',
          6: 'rgba(109, 120, 141, 0.5)',
          7: '#D9D9D9',
          8: '#B9BDC1',
          9: 'rgba(50, 71, 92, 0.68)',
          10: '#F9FAFD',
          11: '#161518',
          12: '#565560',
          13: 'rgba(50, 71, 92, 0.32)',
          14: '#263238',
          15: '#301104',
          16: '#272A2E',
          17: '#222121',
          18: '#333333',
          19: '#002333',
          20: '#555555',
          21: '#222222',
          22: '#999999;',
          23: '#FAFAFF;',
          24: '#A2A2A3',
          25: '#EEEEEE',
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        info: {
          light: 'rgba(38, 198, 249, 0.12)',
          1: '#03C3EC',
          2: '#40CDFA',
          4: '#21AEDB',
          5: '#0292B1',
          6: 'rgba(38, 198, 249, 0.05)',
          7: 'rgba(38, 198, 249, 0.5)',
          8: 'rgba(133, 16, 44, 0.1)',
          9: '#85102C',
          10: '#CCEFFF',
          11: '#00AEFF'
        },
        success: {
          light: 'rgba(114, 225, 40, 0.12)',
          1: '#71DD37',
          2: '#86E255',
          3: '#67C932',
          4: '#55A629',
          5: 'rgba(114, 225, 40, 0.05)',
          6: 'rgba(114, 225, 40, 0.5)',
          7: '#72E128'
        },
        warning: {
          light: 'rgba(253, 181, 40, 0.12)',
          1: '#FFAB00',
          2: '#FFB826',
          3: '#E89C00',
          4: '#BF8000',
          5: 'rgba(253, 181, 40, 0.05)',
          6: 'rgba(253, 181, 40, 0.5)'
        },
        error: {
          light: 'rgba(255, 77, 73, 0.12)',
          1: '#FF3E1D',
          2: '#FF5B3F',
          3: '#E8381A',
          4: '#BF2F16',
          5: 'rgba(255, 77, 73, 0.05)',
          6: 'rgba(255, 77, 73, 0.5)',
        },
        danger: {
          1: '#FF3E1D',
          2: 'rgba(206, 37, 37, 0.87)',
          3: '#FF4E4D'
        },
        'textColor': {
          primary: 'rgba(50, 71, 92, 0.87)',
          secondary: 'rgba(50, 71, 92, 0.6)',
          disabled: 'rgba(50, 71, 92, 0.38)',
        },
        action: {
          active: 'rgba(50, 71, 92, 0.54)',
          hover: 'rgba(50, 71, 92, 0.04)',
          selected: 'rgba(50, 71, 92, 0.08)',
          disabled: 'rgba(50, 71, 92, 0.26)',
          disabledBg: 'rgba(50, 71, 92, 0.12)',
          focus: 'rgba(76, 78, 100, 0.12)'
        },
        extraColor: {
          divider: 'rgba(50, 71, 92, 0.12)',
          outline: 'rgba(50, 71, 92, 0.22)',
          inputLine: 'rgba(50, 71, 92, 0.22)',
          overlay: 'rgba(50, 71, 92, 0.5)',
          snackBar: '#212121',
          menuActive: '#666CFF',
          borderBottom: {
            1: 'rgba(133, 146, 163, 0.1)',
            2: '#DCDBE0',
            3: '#D1D3FF',
            4: '#EAEAEA'
          }
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      boxShadow: {
        1: '0px 10px 27px 7px rgba(50, 71, 92, 0.06), 0px 22px 27px 3px rgba(50, 71, 92, 0.04), 0px 8px 24px 7px rgba(50, 71, 92, 0.02)',
        2: '0px 7px 19px 5px rgba(50, 71, 92, 0.06), 0px 15px 19px 2px rgba(50, 71, 92, 0.04), 0px 5px 16px 6px rgba(50, 71, 92, 0.02)',
        3: '0px 1px 6px 2px rgba(50, 71, 92, 0.06), 0px 2px 6px 1px rgba(50, 71, 92, 0.04), 0px 1px 4px 2px rgba(50, 71, 92, 0.02)',
        4: '0px 1px 3px 2px rgba(50, 71, 92, 0.06), 0px 2px 5px 1px rgba(50, 71, 92, 0.04), 0px 1px 3px 2px rgba(50, 71, 92, 0.02)',
        5: '0px 3px 11px 3px rgba(50, 71, 92, 0.06), 0px 6px 11px 1px rgba(50, 71, 92, 0.04), 0px 3px 8px 4px rgba(50, 71, 92, 0.02)',
        6: '0px 1px 1px 1px rgba(50, 71, 92, 0.06), 0px 1px 3px 2px rgba(50, 71, 92, 0.06)',
        7: '0px 2px 9px rgba(50, 71, 92, 0.06), 0px 4px 9px 1px rgba(50, 71, 92, 0.04), 0px 2px 6px 4px rgba(50, 71, 92, 0.02)',
        8: '0px 2px 4px rgba(105, 108, 255, 0.4)',
        9: '0px 0.694444px 4.16667px 1.38889px rgba(50, 71, 92, 0.06), 0px 1.38889px 4.16667px 0.694444px rgba(50, 71, 92, 0.04), 0px 0.694444px 2.77778px 1.38889px rgba(50, 71, 92, 0.02)',
      },
      backgroundImage: {
     
      },
      transitionProperty: {
        font: 'font-size, transform',
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      cursor: {
        'cardCursor': "url('/src/assets/svg/cardHoverCursor.svg'), pointer"
      }
    },
  },
  plugins: [require('@tailwindcss/forms'), require("tailwindcss-animate")],
};
