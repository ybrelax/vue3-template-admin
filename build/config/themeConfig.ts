import { generate } from '@ant-design/colors';

export const primaryColor = '#0960bd';

export const darkMode = 'light';

type GenerateTheme = 'default' | 'dark';

export function generateAntColors(color: string, theme: GenerateTheme = 'default') {
  return generate(color, {
    theme
  });
}
