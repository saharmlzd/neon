import plugin from 'tailwindcss/plugin';

export const customComponents = plugin(({ addComponents, theme }) => {
  addComponents({
    '.card': {
      borderRadius: theme('borderRadius.card'),
      borderWidth: '1px ',
      borderColor: theme('colors.gray.300'),
      backgroundColor: theme('colors.white'),
      boxShadow: theme('boxShadow.sm'),
      '.dark &': {
        borderColor: theme('colors.gray.600'),
        backgroundColor: theme('colors.gray.800'),
      },
    },
    '.card-interactive': {
      borderRadius: theme('borderRadius.card'),
      borderWidth: '1px',
      borderColor: theme('colors.gray.300'),
      backgroundColor: theme('colors.white'),
      boxShadow: theme('boxShadow.sm'),
      transitionProperty: 'all',
      transitionDuration: '300ms',
      transitionTimingFunction: theme('transitionTimingFunction.DEFAULT'),
      '&:hover': {
        transform: 'translateY(-4px)',
        borderColor: theme('colors.primary.500'),
        boxShadow: theme('boxShadow.lg'),
      },
      '.dark &': {
        borderColor: theme('colors.gray.600'),
        backgroundColor: theme('colors.gray.800'),
        '&:hover': {
          borderColor: theme('colors.primary.400'),
        },
      },
    },
    '.input-field': {
      '@apply w-full rounded-input border-[1px] border-gray-300 bg-white px-5 py-3 text-gray-900 shadow-sm transition-all placeholder:text-gray-400 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-500 dark:focus:border-primary-400':
        {},
    },
    '.btn': {
      '@apply rounded-button px-5 py-2.5 font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2':
        {},
    },
    '.btn-primary': {
      '@apply btn bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500':
        {},
    },
    '.text-primary': {
      '@apply text-gray-900 dark:text-white': {},
    },
    '.text-secondary': {
      '@apply text-gray-600 dark:text-gray-300': {},
    },
    '.text-muted': {
      '@apply text-gray-500 dark:text-gray-400': {},
    },
    '.bg-page': {
      '@apply bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950':
        {},
    },
    '.header-glass': {
      '@apply border-b-[1px] border-gray-200 bg-white/90 backdrop-blur-md dark:border-gray-700 dark:bg-gray-800/90':
        {},
    },
  });
});
