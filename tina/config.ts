import { defineConfig } from "tinacms";
import { BlogCollection } from "./collections/blog";
import { GlobalConfigCollection } from "./collections/global-config";
import { PageCollection } from "./collections/page";
import { FeaturesCollection } from "./collections/features";

export default defineConfig({
  branch: process.env.GITHUB_BRANCH || "main",

  // Get this from tina.io
  clientId: process.env.TINA_PUBLIC_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
    basePath: process.env.ASTRO_BASE,
  },
  media: {
    tina: {
      mediaRoot: "src/media",
      publicFolder: "",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      BlogCollection,
      PageCollection,
      GlobalConfigCollection,
      FeaturesCollection,
    ],
  },
});
