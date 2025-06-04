/**
 * Features Block Component
 * Renders a grid of feature items with title, description, image, and tags
 * Used to showcase product features or services in a modern card layout
 */

import React from "react";
import type { PageBlocksFeatures } from "../../../../tina/__generated__/types";
import { TinaMarkdown } from "tinacms/dist/rich-text";

interface FeaturesProps {
  data: PageBlocksFeatures;
}

export const Features = ({ data }: FeaturesProps) => {
  if (!data.items || data.items.length === 0) {
    return null;
  }

  return (
    <section className="features-section py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.items.map((item, index) => {
            if (!item?.feature) return null;

            const { title, description, heroImage, tags } = item.feature;

            return (
              <div
                key={index}
                className="group feature-card bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-gray-200 transition-all duration-300 overflow-hidden"
              >
                {heroImage && (
                  <div className="aspect-video overflow-hidden bg-gray-100">
                    <img
                      src={heroImage}
                      alt={title || "Feature image"}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}

                <div className="p-6">
                  {tags && tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {tags.map(
                        (tag, tagIndex) =>
                          tag && (
                            <span
                              key={tagIndex}
                              className="inline-block px-3 py-1 text-xs font-medium bg-blue-50 text-blue-700 rounded-full border border-blue-100"
                            >
                              {tag}
                            </span>
                          )
                      )}
                    </div>
                  )}

                  {title && (
                    <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
                      {title}
                    </h3>
                  )}

                  {description && (
                    <div className="text-gray-600 leading-relaxed prose prose-sm max-w-none">
                      <TinaMarkdown content={description} />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
