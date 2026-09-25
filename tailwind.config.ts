import type { Config } from 'tailwindcss';
import { theme } from './src/config/theme';
export default { content:['./index.html','./src/**/*.{ts,tsx}'], theme:{extend:{colors:theme.colors,fontFamily:theme.fonts,boxShadow:theme.shadows,borderRadius:theme.radii,spacing:{18:'4.5rem'}}}, plugins:[] } satisfies Config;
