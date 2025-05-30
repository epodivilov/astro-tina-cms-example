/**
 * Content Block Component
 * Renders rich text content body
 * Used for text-heavy sections and articles
 */

import React from "react";
import type { PageBlocksContent } from "../../../../tina/__generated__/types";

interface ContentProps {
  data: PageBlocksContent;
}

export const Content = ({ data }: ContentProps) => {
  if (!data.body) {
    return null;
  }

  return (
    <section className="content-section py-12">
      <div className="container mx-auto px-4">
        <div className="prose prose-lg max-w-4xl mx-auto">
          <div
            dangerouslySetInnerHTML={{ __html: data.body }}
            className="text-gray-800 leading-relaxed"
          />
        </div>
      </div>
    </section>
  );
};