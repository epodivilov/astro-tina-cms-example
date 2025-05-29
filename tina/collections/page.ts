import type { Collection, Template } from "tinacms";

const heroBlock: Template = {
  name: "hero",
  label: "Hero",
  fields: [
    {
      type: "string",
      label: "Tagline",
      name: "tagline",
    },
    {
      type: "string",
      label: "Headline",
      name: "headline",
    },
    {
      type: "string",
      label: "Text",
      name: "text",
      ui: {
        component: "textarea",
      },
    },
  ],
};

const featureBlock: Template = {
  name: "features",
  label: "Features",
  fields: [
    {
      type: "object",
      label: "Feature Items",
      name: "items",
      list: true,
      fields: [
        {
          type: "string",
          label: "Title",
          name: "title",
        },
        {
          type: "string",
          label: "Text",
          name: "text",
        },
      ],
    },
  ],
};

const contentBlock: Template = {
  name: "content",
  label: "Content",
  fields: [
    {
      type: "string",
      ui: {
        component: "textarea",
      },
      label: "Body",
      name: "body",
    },
  ],
};

export const PageCollection: Collection = {
  name: "page",
  label: "Pages",
  path: "src/content/page",
  format: "mdx",
  ui: {
    // @ts-ignore
    visualSelector: true,
    router: ({ document }) => {
      return `/${document._sys.filename}`;
    },
  },
  fields: [
    {
      name: "seoTitle",
      type: "string",
      required: true,
    },
    {
      name: "body",
      type: "rich-text",
      isBody: true,
      required: true,
    },
    {
      type: "object",
      list: true,
      name: "blocks",
      label: "Sections",
      templates: [heroBlock, featureBlock, contentBlock],
    },
  ],
};
