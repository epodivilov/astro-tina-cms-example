/**
 * Testimonial Block Component
 * Renders customer testimonials and reviews
 * Note: This is a placeholder component - testimonials not defined in current schema
 */

import React from "react";

interface TestimonialProps {
  data?: any; // Placeholder until proper testimonial type is defined
}

export const Testimonial = ({ data }: TestimonialProps) => {
  return (
    <section className="testimonial-section py-16 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-600">
          Testimonial component placeholder - not yet implemented in schema
        </p>
      </div>
    </section>
  );
};