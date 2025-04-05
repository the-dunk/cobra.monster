// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import rehypeSlug from "rehype-slug";
import rehypePrettyCode from "rehype-pretty-code";
import tailwindcss from "@tailwindcss/vite";
import { transformerCopyButton } from "@rehype-pretty/transformers";
import deno from "@deno/astro-adapter";

// https://astro.build/config
export default defineConfig({
  output: "static",
  adapter: deno(),
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    mdx({
      syntaxHighlight: false,
      rehypePlugins: [
        rehypeSlug,
        [
          rehypePrettyCode,
          {
            theme: "catppuccin-macchiato",
            transformers: [
              transformerCopyButton({
                visibility: "always",
                feedbackDuration: 3_000,
              }),
            ],
          },
        ],
      ],
    }),
    react(),
  ],
});
