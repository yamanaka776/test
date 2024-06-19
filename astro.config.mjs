import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import playformCompress from "@playform/compress";

import playformInline from "@playform/inline";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), playformCompress(), playformInline()]
});