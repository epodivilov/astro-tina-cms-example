import type { Collection } from "tinacms";

export const FeaturesCollection: Collection = {
  name: "feature",
  label: "Feature",
  path: "src/content/features",
  format: "mdx",
  fields: [
    {
      type: "string",
      name: "title",
      label: "Title",
      isTitle: true,
      required: true,
    },
    {
      name: "heroImage",
      label: "Hero Image",
      type: "image",
    },
    {
      name: "tags",
      label: "Tags",
      type: "string",
      list: true,
    },
    {
      name: "description",
      label: "Description",
      type: "rich-text",
    },
  ],
};
