// @ts-check
import { defineConfig } from 'astro/config';

// Clean URLs without trailing slash (matches the URLs Google already indexed,
// e.g. https://barrelsauna.az/barrel-sauna). nginx serves <path>/index.html.
export default defineConfig({
  site: process.env.PUBLIC_SITE_URL || 'https://barrelsauna.az',
  trailingSlash: 'never',
  build: { format: 'directory', inlineStylesheets: 'always' },
  compressHTML: true,
  image: { responsiveStyles: false },
  prefetch: { prefetchAll: false, defaultStrategy: 'hover' },
});
