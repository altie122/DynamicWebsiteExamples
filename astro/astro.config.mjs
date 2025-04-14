// @ts-check
import { defineConfig } from 'astro/config';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: 'https://dynamic-website-examples-vnml.vercel.app',
  output: 'server',
  adapter: vercel()
});