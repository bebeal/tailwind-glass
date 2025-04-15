// tailwind-glass.ts
import type { PluginAPI } from 'tailwindcss/types/config';

export default function GlassTailwindPlugin({ matchUtilities, theme }: PluginAPI) {
  matchUtilities(
    {
      'glass': (value) => ({
        'backdrop-filter': `blur(${value}) saturate(180%)`,
        '-webkit-backdrop-filter': `blur(${value}) saturate(180%)`,
        'box-shadow': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'background': 'rgba(17, 25, 40, 0.50)',
      }),
    },
    {
      values: theme('spacing'),
      supportsNegativeValues: false
    }
  );
}
