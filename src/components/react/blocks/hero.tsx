/**
 * Hero Block Component
 * Renders hero section with tagline, headline, and descriptive text
 * Used as a landing page banner component
 */

import React from "react";
import type { PageBlocksHero } from "../../../../tina/__generated__/types";

interface HeroProps {
  data: PageBlocksHero;
}

export const Hero = ({ data }: HeroProps) => {
  return (
    <section className="hero-section bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        {data.tagline && (
          <p className="text-lg md:text-xl mb-4 opacity-90">
            {data.tagline}
          </p>
        )}

        {data.headline && (
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {data.headline}
          </h1>
        )}

        {data.text && (
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            {data.text}
          </p>
        )}
      </div>
    </section>
  );
};